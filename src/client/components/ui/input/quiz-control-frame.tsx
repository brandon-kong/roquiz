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
    onSelect?: (selected: string) => void;
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
            <Dropdown
                options={props.options}
                selected={props.selected}
                onSelect={props.onSelect}
            />
        </frame>
    );
}

interface QuizControlFrameProps {
    onQuestionTypeChange?: (questionType: string) => void;
    onTimeLimitChange?: (timeLimit: string) => void;
    onPointsChange?: (points: string) => void;
    onAnswerTypeChange?: (answerType: string) => void;
}

function QuizControlFrame(props: QuizControlFrameProps) {
    const controlsScrollRef = React.createRef<ScrollingFrame>();

    const [questionType, setQuestionType] = React.useState("Multiple Choice");
    const [timeLimit, setTimeLimit] = React.useState("5 seconds");
    const [points, setPoints] = React.useState("Standard");

    print(questionType);

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
                selected={questionType}
                onSelect={(selected) => {
                    print(selected);
                    setQuestionType(selected);
                    props.onQuestionTypeChange?.(selected);
                }}
            />

            <ControlDropdown
                title={"Time Limit"}
                selected={timeLimit}
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
                onSelect={(selected) => {
                    setTimeLimit(selected);
                    props.onTimeLimitChange?.(selected);
                }}
            />

            <ControlDropdown
                onSelect={(selected) => {
                    setPoints(selected);
                    props.onPointsChange?.(selected);
                }}
                title={"Points"}
                selected={points}
                options={[
                    "Standard",
                    "Double Points",
                    "No Points",
                    {
                        value: "All or Nothing",
                        description:
                            "Players lose everything if they answer incorrectly",
                    },
                ]}
            />

            {questionType === "Multiple Choice" && (
                <ControlDropdown
                    title={"Answer Type"}
                    selected="Single Answer"
                    options={["Single Answer", "Multiple Answers"]}
                    onSelect={(selected) => {
                        props.onAnswerTypeChange?.(selected);
                    }}
                />
            )}
        </scrollingframe>
    );
}

export = QuizControlFrame;
