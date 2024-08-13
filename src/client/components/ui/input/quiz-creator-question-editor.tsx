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
import {
    MultipleChoiceQuestion,
    Question,
    TrueFalseQuestion,
} from "@src/shared/types/quiz";

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
    question: Question;
    onQuestionChange: (question: string) => void;
    onImageChange?: (image: string) => void;
    onOptionChange?: (option: string, index: number) => void;
    onAnswerChange?: (index: number, value: boolean) => void;

    onTrueFalseAnswerChange: (value: boolean) => void;
}

function MultipleChoiceQuestionEditor(props: QuizCreatorQuestionEditorProps) {
    return (
        <>
            <UIGrid
                fillDirection={Enum.FillDirection.Horizontal}
                cellSize={new UDim2(0.5, -8, 0.5, -8)}
                cellPadding={new UDim2(0, 8, 0, 8)}
            />

            {selectButtons.map((button, index) => (
                <QuestionAnswerCard
                    correct={
                        (props.question as MultipleChoiceQuestion).answer[
                            index
                        ] === true
                    }
                    text={
                        (props.question as MultipleChoiceQuestion).options[
                            index
                        ]
                    }
                    onAnswerChange={(value) => {
                        props.onAnswerChange?.(index, value);
                    }}
                    key={index}
                    onOptionChange={(option) => {
                        props.onOptionChange?.(option, index);
                    }}
                    size={new UDim2(1, 0, 1, 0)}
                    {...button}
                />
            ))}
        </>
    );
}

interface TrueFalseQuestionEditorProps {
    question: TrueFalseQuestion;
    onAnswerChange?: (value: boolean) => void;
}

function TrueFalseQuestionEditor(props: TrueFalseQuestionEditorProps) {
    return (
        <>
            <UIGrid
                fillDirection={Enum.FillDirection.Horizontal}
                cellSize={new UDim2(0.5, -8, 1, -8)}
                cellPadding={new UDim2(0, 8, 0, 8)}
            />

            {[1, 2].map((button, index) => (
                <QuestionAnswerCard
                    correct={
                        ((props.question as TrueFalseQuestion).answer ===
                            true &&
                            index === 0) ||
                        ((props.question as TrueFalseQuestion).answer ===
                            false &&
                            index === 1)
                    }
                    text={
                        index === 0 ? "True" : index === 1 ? "False" : "Unknown"
                    }
                    onAnswerChange={(value) => {
                        if (index === 0 && value === true) {
                            props.onAnswerChange?.(true);
                        }
                        if (index === 1 && value === true) {
                            props.onAnswerChange?.(false);
                        }
                    }}
                    textEditable={false}
                    key={index}
                    size={new UDim2(1, 0, 1, 0)}
                    color={index % 2 === 0 ? "gameRed" : "gameBlue"}
                    shape={
                        index % 2 === 0
                            ? configs.gameShapes.circle
                            : configs.gameShapes.diamond
                    }
                />
            ))}
        </>
    );
}

function ShortAnswerQuestionEditor(props: QuizCreatorQuestionEditorProps) {
    return (
        <>
            <TextInput
                text={(props.question as ShortAnswerQuestion).answer}
                placeholder={"Answer"}
                size={new UDim2(1, 0, 0.5, 0)}
                clearOnFocus={false}
                maxLength={100}
                borderRadius={configs.rounded.md}
                onChange={(value) => {
                    props.onAnswerChange?.(value);
                }}
            />
        </>
    );
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
                    text={props.question.question}
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
                Image={props.question.coverImage ?? "rbxassetid://6996356193"}
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
                {(props.question.type === "Multiple Choice" && (
                    <MultipleChoiceQuestionEditor {...props} />
                )) ||
                    (props.question.type === "True or False" && (
                        <TrueFalseQuestionEditor
                            question={props.question}
                            onAnswerChange={props.onTrueFalseAnswerChange}
                        />
                    ))}
            </frame>
        </frame>
    );
}

export = QuizCreatorQuestionEditor;
