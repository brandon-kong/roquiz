import React from "@rbxts/react";
import { Padding, Typography, UIList } from "../library";
import { DetailedOption, Dropdown } from "./textinput";
import configs from "../configs";
import Button from "./button";
import Separator from "../separator";

interface ControlDropdownProps {
    title: string;
    options: Array<string | DetailedOption>;
    selected?: string;
}

function ControlDropdown(props: ControlDropdownProps) {
    return (
        <frame
            BackgroundTransparency={1}
            AutomaticSize={Enum.AutomaticSize.Y}
            Size={new UDim2(1, 0, 0, 0)}
        >
            <UIList
                fillDirection={Enum.FillDirection.Vertical}
                verticalAlignment={Enum.VerticalAlignment.Center}
                padding={new UDim(0, 4)}
            />
            <Typography
                text={props.title}
                font={configs.fonts.Inter.SemiBold}
                textSize={configs.textSize.lg}
                color={configs.colors.white.foreground}
                horizontalAlignment={Enum.TextXAlignment.Left}
                size={new UDim2(1, 0, 0, 40)}
            />
            <Dropdown options={props.options} selected={props.selected} />
        </frame>
    );
}
function QuizControlFrame() {
    const controlsScrollRef = React.createRef<ScrollingFrame>();

    return (
        <scrollingframe
            ref={controlsScrollRef}
            BackgroundTransparency={1}
            BorderSizePixel={0}
            ScrollBarImageColor3={configs.colors.white.accent}
            ScrollBarThickness={4}
            Size={new UDim2(1, 0, 1, 0)}
        >
            <UIList
                fillDirection={Enum.FillDirection.Vertical}
                verticalAlignment={Enum.VerticalAlignment.Top}
                padding={new UDim(0, 8)}
                onContentSizeChange={(contentSize) => {
                    if (controlsScrollRef.current) {
                        controlsScrollRef.current.CanvasSize = new UDim2(
                            0,
                            0,
                            0,
                            contentSize.Y + 24,
                        );
                    }
                }}
            />
            <Padding
                left={new UDim(0.05, 0)}
                right={new UDim(0.05, 0)}
                top={8}
                bottom={8}
            />
            <Button
                variant={"destructive"}
                text={"Delete"}
                size={new UDim2(1, 0, 0, 40)}
            />
            <Button
                variant={"secondary"}
                text={"Duplicate"}
                size={new UDim2(1, 0, 0, 40)}
            />

            <frame BackgroundTransparency={1} Size={new UDim2(1, 0, 0, 8)} />
            <Separator color={configs.colors.secondary.background} />

            <frame BackgroundTransparency={1} Size={new UDim2(1, 0, 0, 8)} />
            <ControlDropdown
                title={"Question Type"}
                options={["Multiple Choice", "True or False", "Short Answer"]}
            />

            <ControlDropdown
                title={"Time Limit"}
                selected="5 seconds"
                options={[
                    "None",
                    "5 seconds",
                    "10 seconds",
                    "15 seconds",
                    "20 seconds",
                    "30 seconds",
                    "1 minute",
                    "2 minutes",
                    "3 minutes",
                    "5 minutes",
                ]}
            />

            <ControlDropdown
                title={"Points"}
                selected="Standard"
                options={[
                    "Standard",
                    "Double Points",
                    "No Points",
                    {
                        value: "All or Nothing",
                        description:
                            "Users will double their points for the correct answer, but lose everything if any are incorrect.",
                    },
                ]}
            />
        </scrollingframe>
    );
}

export = QuizControlFrame;
