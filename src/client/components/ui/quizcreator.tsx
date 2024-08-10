import React, { useBinding, useEffect, useState } from "@rbxts/react";
import {
    AspectRatio,
    Padding,
    SizeConstraint,
    Typography,
    UICorner,
    UIGrid,
    UIList,
} from "./library";
import configs, { ColorToken } from "./configs";
import {
    QuestionAnswerCard,
    QuestionAnswerCardProps,
    TextInput,
} from "./input/textinput";
import Button, { IconButton } from "./input/button";
import { useSpring } from "../hooks/useSpring";
import { controls } from "../stories/inputs/button.story";

const selectButtons: QuestionAnswerCardProps[] = [
    {
        color: "gameRed",
        shape: configs.gameShapes.circle,
    },
    {
        color: "gameBlue",
        shape: configs.gameShapes.diamond,
    },
    {
        color: "gameYellow",
        shape: configs.gameShapes.triangle,
    },
    {
        color: "gameGreen",
        shape: configs.gameShapes.square,
        shapeScale: 0.8,
    },
];

function QuizCreator() {
    const [controlsExpanded, setControlsExpanded] = useState(false);

    const [mainSize, setMainSize] = useBinding(new UDim2(0.8, 0, 1, 0));
    const controlsExpandedBinding = useSpring(mainSize, configs.spring.default);

    useEffect(() => {
        if (controlsExpanded) {
            setMainSize(new UDim2(0.6, 0, 1, 0));
        } else {
            setMainSize(new UDim2(0.8, 0, 1, 0));
        }
    }, [controlsExpanded]);

    return (
        <>
            <frame
                BorderSizePixel={0}
                BackgroundTransparency={0}
                BackgroundColor3={configs.colors.primary.accent}
                Size={new UDim2(1, 0, 1, 0)}
                Position={new UDim2(0.5, 0, 0.5, 0)}
                AnchorPoint={new Vector2(0.5, 0.5)}
            >
                <UIList
                    fillDirection={Enum.FillDirection.Horizontal}
                    horizontalAlignment={Enum.HorizontalAlignment.Left}
                />
                <frame
                    BorderSizePixel={0}
                    key={"quiz-creator-question-list"}
                    BackgroundColor3={configs.colors.white.background}
                    Size={new UDim2(0.2, 0, 1, 0)}
                    Position={new UDim2(0, 0, 0, 0)}
                />
                <frame
                    key={"quiz-creator-question-editor"}
                    BackgroundTransparency={1}
                    Size={new UDim2(0.8, 0, 1, 0)}
                    Position={new UDim2(0, 0, 0, 0)}
                >
                    <UIList
                        fillDirection={Enum.FillDirection.Vertical}
                        verticalAlignment={Enum.VerticalAlignment.Center}
                        horizontalAlignment={Enum.HorizontalAlignment.Center}
                        padding={new UDim(0.025, 0)}
                    />
                    <frame
                        BorderSizePixel={0}
                        BackgroundColor3={configs.colors.black.accent}
                        Size={new UDim2(0.9, 0, 0.15, 0)}
                        Position={new UDim2(0, 0, 0, 0)}
                    >
                        <Padding bottom={4} />
                        <UICorner radius={configs.rounded.md} />

                        <TextInput
                            placeholder={"Question"}
                            size={new UDim2(1, 0, 1, 0)}
                            clearOnFocus={false}
                            maxLength={100}
                            borderRadius={configs.rounded.md}
                        />
                    </frame>

                    <imagelabel
                        BackgroundColor3={configs.colors.white.background}
                        Size={new UDim2(1, 0, 0.4, 0)}
                        Position={new UDim2(0, 0, 0.2, 0)}
                        Image={"rbxassetid://6996356193"}
                    >
                        <UICorner radius={configs.rounded.md} />
                        <AspectRatio ratio={1.7} />
                        <SizeConstraint
                            max={new Vector2(400, 400)}
                            min={new Vector2(100, 100)}
                        />
                        <UIList
                            fillDirection={Enum.FillDirection.Vertical}
                            verticalAlignment={Enum.VerticalAlignment.Center}
                            padding={new UDim(0.05, 0)}
                        />
                        <IconButton
                            variant={"softGreen"}
                            icon={configs.icons.plus}
                        />
                        <Typography
                            size={new UDim2(1, 0, 0.2, 0)}
                            text={"Add Image"}
                            font={configs.fonts.Inter.Bold}
                            textSize={configs.textSize.lg}
                            color={configs.colors.black.accent}
                            horizontalAlignment={Enum.TextXAlignment.Center}
                            verticalAlignment={Enum.TextYAlignment.Top}
                        />
                    </imagelabel>

                    <frame
                        BackgroundTransparency={1}
                        Size={new UDim2(0.9, 0, 0.35, 0)}
                        Position={new UDim2(0, 0, 0, 0)}
                    >
                        <UIGrid
                            fillDirection={Enum.FillDirection.Horizontal}
                            cellSize={new UDim2(0.5, -8, 0.5, -8)}
                            cellPadding={new UDim2(0, 8, 0, 8)}
                        />

                        {selectButtons.map((button) => (
                            <QuestionAnswerCard
                                size={new UDim2(1, 0, 1, 0)}
                                {...button}
                            />
                        ))}
                    </frame>
                </frame>
            </frame>
            <imagebutton
                Active={controlsExpanded}
                AutoButtonColor={false}
                Image={undefined}
                BackgroundTransparency={controlsExpanded ? 0.8 : 1}
                BorderSizePixel={0}
                BackgroundColor3={configs.colors.black.background}
                Size={new UDim2(1, 0, 1, 0)}
                Event={{
                    Activated: () => {
                        setControlsExpanded(!controlsExpanded);
                    },
                }}
            >
                <imagebutton
                    AutoButtonColor={false}
                    Active={controlsExpanded}
                    BorderSizePixel={0}
                    key={"quiz-creator-question-controls"}
                    BackgroundColor3={configs.colors.white.background}
                    Size={new UDim2(0.25, 0, 1, 0)}
                    Position={
                        controlsExpanded
                            ? new UDim2(0.75, 0, 0, 0)
                            : new UDim2(1, 0, 0, 0)
                    }
                    AnchorPoint={new Vector2(0, 0)}
                >
                    <frame
                        BackgroundTransparency={1}
                        Size={new UDim2(1, 0, 1, 0)}
                    ></frame>
                    <imagebutton
                        AutoButtonColor={false}
                        BackgroundColor3={configs.colors.white.background}
                        AnchorPoint={new Vector2(0, 0.5)}
                        Size={new UDim2(0, 50, 0.15, 0)}
                        Position={new UDim2(0, -50, 0.4, 0)}
                        Event={{
                            Activated: () => {
                                setControlsExpanded(!controlsExpanded);
                            },
                        }}
                    >
                        <UICorner radius={configs.rounded.md} />
                        <frame
                            BorderSizePixel={0}
                            BackgroundColor3={configs.colors.white.background}
                            Size={new UDim2(0.5, 0, 1, 0)}
                            Position={new UDim2(0.5, 0, 0, 0)}
                        />
                        <imagelabel
                            BackgroundTransparency={1}
                            Size={new UDim2(0.5, 0, 1, 0)}
                            AnchorPoint={new Vector2(0.5, 0.5)}
                            Position={new UDim2(0.5, 0, 0.5, 0)}
                            Image={configs.icons.chevronRight}
                            ImageColor3={configs.colors.white.foreground}
                            Rotation={controlsExpanded ? 0 : 180}
                        >
                            <AspectRatio ratio={1} />
                        </imagelabel>
                    </imagebutton>
                </imagebutton>
            </imagebutton>
        </>
    );
}

export = QuizCreator;
