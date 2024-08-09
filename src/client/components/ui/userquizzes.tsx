import React from "@rbxts/react";
import { Padding, Typography, UICorner, UIGrid, UIList } from "./library";
import configs from "./configs";
import Button, { BackButton } from "./input/button";
import Background from "./background";
import QuizCard from "./input/quiz-card";

const quizzes = [{}, {}, {}];

function UserQuizzes() {
    return (
        <frame
            BackgroundColor3={configs.colors.white.background}
            Size={new UDim2(0.7, 0, 0.8, 0)}
            Position={new UDim2(0.5, 0, 0.5, 0)}
            AnchorPoint={new Vector2(0.5, 0.5)}
        >
            <UIList fillDirection={Enum.FillDirection.Vertical} />
            <UICorner radius={configs.rounded.md} />
            <Padding left={12} right={12} top={12} bottom={12} />

            <frame BackgroundTransparency={1} Size={new UDim2(1, 0, 0.125, 0)}>
                <UIList
                    fillDirection={Enum.FillDirection.Horizontal}
                    horizontalFlex={Enum.UIFlexAlignment.SpaceBetween}
                    horizontalAlignment={Enum.HorizontalAlignment.Left}
                />
                <BackButton size={new UDim2(1, 0, 1, 0)} />

                <Typography
                    text={"My Quizzes"}
                    size={new UDim2(0.3, 0, 1, 0)}
                    font={configs.fonts.Inter.SemiBold}
                    color={configs.colors.black.accent}
                    textSize={configs.textSize.xl}
                    horizontalAlignment={Enum.TextXAlignment.Left}
                />
                <Button
                    variant={"accent"}
                    text="Create Quiz"
                    size={new UDim2(0.3, 0, 1, 0)}
                />
            </frame>

            <frame BackgroundTransparency={1} Size={new UDim2(1, 0, 0.875, 0)}>
                <UIList
                    fillDirection={Enum.FillDirection.Vertical}
                    verticalFlex={Enum.UIFlexAlignment.Fill}
                    verticalAlignment={Enum.VerticalAlignment.Top}
                />
                <Padding top={12} />
                <Background
                    color={Color3.fromRGB(242, 242, 242)}
                    patternTransparency={0.98}
                >
                    <UICorner radius={configs.rounded.md} />

                    <scrollingframe
                        BorderSizePixel={0}
                        BackgroundTransparency={1}
                        Size={new UDim2(1, 0, 1, 0)}
                        ScrollBarThickness={4}
                        CanvasSize={new UDim2(0, 0, 0, 1000)}
                        ScrollBarImageColor3={configs.colors.black.background}
                    >
                        <UIList
                            fillDirection={Enum.FillDirection.Horizontal}
                            padding={16}
                            verticalAlignment={Enum.VerticalAlignment.Top}
                            horizontalFlex={Enum.UIFlexAlignment.SpaceEvenly}
                            horizontalAlignment={Enum.HorizontalAlignment.Left}
                            wraps={true}
                        />
                        <Padding left={12} right={12} top={12} bottom={12} />
                        {quizzes.map((quiz) => {
                            return (
                                <QuizCard
                                    title={"Quiz Title"}
                                    size={new UDim2(0.45, 0, 0, 500)}
                                />
                            );
                        })}
                    </scrollingframe>
                </Background>
            </frame>
        </frame>
    );
}

export = UserQuizzes;
