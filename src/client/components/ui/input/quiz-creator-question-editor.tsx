import React from "@rbxts/react";
import {
    Typography,
    UIList,
    Padding,
    UICorner,
    AspectRatio,
    SizeConstraint,
    UIGrid,
} from "../library";
import configs from "../configs";
import {
    QuestionAnswerCard,
    QuestionAnswerCardProps,
    TextInput,
} from "./textinput";
import { IconButton } from "./button";

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

interface QuizCreatorQuestionEditorProps {
    onQuestionChange: (question: string) => void;
    onImageChange?: (image: string) => void;
    onOptionChange?: (option: string, index: number) => void;
    onAnswerChange?: (answer: number[]) => void;
}

function QuizCreatorQuestionEditor(props: QuizCreatorQuestionEditorProps) {
    return (
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
                    onChange={props.onQuestionChange}
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
                <IconButton variant={"softGreen"} icon={configs.icons.plus} />
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

                {selectButtons.map((button, index) => (
                    <QuestionAnswerCard
                        key={index}
                        onAnswerSelectCorrect={() => {
                            props.onAnswerChange?.([index]);
                        }}
                        size={new UDim2(1, 0, 1, 0)}
                        {...button}
                    />
                ))}
            </frame>
        </frame>
    );
}

export = QuizCreatorQuestionEditor;
