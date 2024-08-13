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
    Dropdown,
    QuestionAnswerCard,
    QuestionAnswerCardProps,
    TextInput,
} from "./input/textinput";
import Button, { IconButton, QuestionButton } from "./input/button";
import { useSpring } from "../hooks/useSpring";
import { controls } from "../stories/inputs/button.story";
import ModalBackdrop from "./modal-backdrop";
import Separator from "./separator";
import QuizControlFrame from "./input/quiz-control-frame";
import {
    Points,
    Question,
    QuestionType,
    TimeLimit,
} from "@src/shared/types/quiz";
import QuizCreatorQuestionEditor from "./input/quiz-creator-question-editor";

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

function blankQuestion(): Question {
    const question: Question = {
        question: "",
        type: "Multiple Choice",
        answer: [],
        points: "Standard",
        timeLimit: "5 seconds",
        answerType: "Single",
        options: [],
    };

    return question;
}

function QuizCreator() {
    const [controlsExpanded, setControlsExpanded] = useState(false);

    const [controlsPosition, setControlsPosition] = useBinding(
        new UDim2(1, 0, 0, 0),
    );
    const controlsExpandedBinding = useSpring(
        controlsPosition,
        configs.spring.default,
    );

    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const [questions, setQuestions] = useState<Question[]>([blankQuestion()]);

    useEffect(() => {
        if (controlsExpanded) {
            setControlsPosition(new UDim2(0.65, 0, 0, 0));
        } else {
            setControlsPosition(new UDim2(1, 0, 0, 0));
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
                >
                    <UIList
                        fillDirection={Enum.FillDirection.Vertical}
                        verticalAlignment={Enum.VerticalAlignment.Top}
                    />
                    <scrollingframe
                        ScrollBarThickness={4}
                        BorderSizePixel={0}
                        key={"quiz-creator-question-list"}
                        ScrollBarImageColor3={configs.colors.white.accent}
                        BackgroundColor3={configs.colors.white.background}
                        Size={new UDim2(1, 0, 0.8, 0)}
                        Position={new UDim2(0, 0, 0, 0)}
                    >
                        <UIList
                            fillDirection={Enum.FillDirection.Vertical}
                            verticalAlignment={Enum.VerticalAlignment.Top}
                        />
                        <Padding right={8} />

                        {questions.map((question, index) => (
                            <QuestionButton
                                active={currentQuestion === index}
                                index={index}
                                question={question}
                                onClick={() => {
                                    setCurrentQuestion(index);
                                }}
                            />
                        ))}
                    </scrollingframe>

                    <frame
                        BackgroundTransparency={1}
                        Size={new UDim2(1, 0, 0.2, 0)}
                    >
                        <UIList
                            fillDirection={Enum.FillDirection.Vertical}
                            verticalAlignment={Enum.VerticalAlignment.Top}
                            padding={new UDim(0.025, 0)}
                        />
                        <Padding left={8} right={8} />

                        <Button
                            onClick={() => {
                                setQuestions((prev) => {
                                    return [...prev, blankQuestion()];
                                });
                            }}
                            variant={"accent"}
                            text={"Add Question"}
                            size={new UDim2(1, 0, 0.45, 0)}
                        />
                        <Button
                            variant={"white"}
                            text={"Edit Quiz"}
                            size={new UDim2(1, 0, 0.45, 0)}
                        />
                    </frame>
                </frame>

                <QuizCreatorQuestionEditor
                    question={questions[currentQuestion ?? 0]}
                    onQuestionChange={(question) => {
                        setQuestions((prev) => {
                            prev[currentQuestion].question = question;
                            return [...prev];
                        });
                    }}
                />
            </frame>

            <ModalBackdrop
                visible={controlsExpanded}
                onClick={() => {
                    setControlsExpanded(false);
                }}
            />

            <frame BackgroundTransparency={1} Size={new UDim2(1, 0, 1, 0)}>
                <imagebutton
                    AutoButtonColor={false}
                    Active={controlsExpanded}
                    BorderSizePixel={0}
                    key={"quiz-creator-question-controls"}
                    BackgroundColor3={configs.colors.white.background}
                    Size={new UDim2(0.35, 0, 1, 0)}
                    Position={controlsExpandedBinding}
                    AnchorPoint={new Vector2(0, 0)}
                >
                    <QuizControlFrame
                        question={questions[currentQuestion ?? 0]}
                        onQuestionTypeChange={(questionType) => {
                            setQuestions((prev) => {
                                if (prev[currentQuestion] === undefined) {
                                    return prev;
                                }
                                prev[currentQuestion].type =
                                    questionType as QuestionType;
                                return [...prev];
                            });
                        }}
                        onPointsChange={(points) => {
                            setQuestions((prev) => {
                                if (prev[currentQuestion] === undefined) {
                                    return prev;
                                }
                                prev[currentQuestion].points = points as Points;
                                return [...prev];
                            });
                        }}
                        onTimeLimitChange={(timeLimit) => {
                            setQuestions((prev) => {
                                if (prev[currentQuestion] === undefined) {
                                    return prev;
                                }
                                prev[currentQuestion].timeLimit =
                                    timeLimit as TimeLimit;
                                return [...prev];
                            });
                        }}
                        onDelete={() => {
                            setQuestions((prev) => {
                                if (prev.size() === 1) {
                                    // Don't delete the only question
                                    return prev;
                                }
                                const newQuestions = [...prev];
                                newQuestions.remove(currentQuestion);

                                // Ensure currentQuestion is within bounds
                                setCurrentQuestion((prevCurrent) =>
                                    math.max(prevCurrent - 1, 0),
                                );

                                return newQuestions;
                            });
                        }}
                        onDuplicate={() => {
                            setQuestions((prev) => {
                                prev.insert(currentQuestion + 1, {
                                    ...prev[currentQuestion],
                                });
                                return [...prev];
                            });
                        }}
                    />

                    <imagebutton
                        AutoButtonColor={false}
                        BackgroundColor3={configs.colors.white.background}
                        AnchorPoint={new Vector2(0, 0.5)}
                        Size={new UDim2(0, 40, 0.15, 0)}
                        Position={new UDim2(0, -50, 0.4, 0)}
                        Event={{
                            Activated: () => {
                                setControlsExpanded(!controlsExpanded);
                            },
                        }}
                    >
                        <UICorner radius={configs.rounded.md} />

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
            </frame>
        </>
    );
}

export = QuizCreator;
