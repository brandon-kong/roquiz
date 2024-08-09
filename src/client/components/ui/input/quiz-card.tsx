import React from "@rbxts/react";
import configs from "../configs";
import {
    AspectRatio,
    Padding,
    SizeConstraint,
    Stroke,
    Typography,
    UICorner,
    UIList,
} from "../library";

const DEFAULT_IMAGE = "rbxassetid://21061954";

interface QuizCardProps {
    size?: UDim2;
    image?: string;
    title?: string;
    onClick?: () => void;
    isDraft?: boolean;
}

function concat(text: string | undefined, maxLength: number) {
    if (text === undefined) return "";
    return text.size() > maxLength ? text.sub(0, maxLength) + "..." : text;
}

function QuizCard(props: QuizCardProps) {
    return (
        <canvasgroup
            BackgroundColor3={configs.colors.white.background}
            Size={props.size ?? new UDim2(1, 0, 1, 0)}
            Position={new UDim2(0, 0, 0, 0)}
            Visible={true}
        >
            <AspectRatio ratio={1} />
            <Stroke color={configs.colors.black.accent} thickness={2} />
            <UICorner radius={configs.rounded.md} />
            <SizeConstraint
                min={new Vector2(100, 100)}
                max={new Vector2(1000, 1000)}
            />
            <imagelabel
                BackgroundTransparency={0.5}
                Size={new UDim2(1, 0, 0.6, 0)}
                Position={new UDim2(0, 0, 0, 0)}
                Image={props.image ?? DEFAULT_IMAGE}
                ImageTransparency={0}
                ImageColor3={configs.colors.black.accent}
                ScaleType={Enum.ScaleType.Crop}
            >
                <Padding left={4} right={4} top={4} bottom={4} />
                {
                    <frame
                        BackgroundTransparency={0}
                        Size={new UDim2(0.35, 0, 0, 32)}
                        Position={new UDim2(0, 0, 0, 0)}
                        BackgroundColor3={configs.colors.primary.background}
                    >
                        <UICorner radius={configs.rounded.md} />
                        <Typography
                            text={"Draft"}
                            size={new UDim2(1, 0, 1, 0)}
                            font={configs.fonts.Inter.SemiBold}
                            color={configs.colors.white.background}
                            textSize={configs.textSize.md}
                            horizontalAlignment={Enum.TextXAlignment.Center}
                            verticalAlignment={Enum.TextYAlignment.Center}
                        />
                    </frame>
                }
            </imagelabel>

            <frame
                BackgroundTransparency={1}
                Size={new UDim2(1, 0, 0.4, 0)}
                Position={new UDim2(0, 0, 0.6, 0)}
            >
                <UIList fillDirection={Enum.FillDirection.Vertical} />
                <Padding left={12} right={12} top={12} bottom={12} />
                <Typography
                    text={
                        props.title !== undefined
                            ? concat(props.title, 42)
                            : concat(
                                  "Quiz Title that is super long, like really really long. Like, so long that it wraps around to the next line.",
                                  42,
                              )
                    }
                    size={new UDim2(1, 0, 0.5, 0)}
                    font={configs.fonts.Inter.SemiBold}
                    color={configs.colors.black.background}
                    textSize={configs.textSize.lg}
                    horizontalAlignment={Enum.TextXAlignment.Left}
                    truncate={true}
                />
                <Typography
                    text={"By: " + "Author"}
                    size={new UDim2(1, 0, 0.5, 0)}
                    font={configs.fonts.Inter.SemiBold}
                    color={configs.colors.black.accent}
                    textSize={configs.textSize.md}
                    horizontalAlignment={Enum.TextXAlignment.Left}
                    truncate={true}
                />
            </frame>
        </canvasgroup>
    );
}

export = QuizCard;
