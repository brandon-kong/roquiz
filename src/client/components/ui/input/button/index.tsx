const ReplicatedStorage = game.GetService("ReplicatedStorage");

import React, { useBinding, useEffect, useState } from "@rbxts/react";
import {
    AspectRatio,
    Padding,
    SizeConstraint,
    Stroke,
    Typography,
    UICorner,
    UIList,
} from "@ui/library";
import configs, { ColorToken } from "@ui/configs";
import { useSpring } from "@src/client/components/hooks/useSpring";

import Roact from "@rbxts/roact";
import { number } from "@rbxts/react/src/prop-types";
import { Question } from "@src/shared/types/quiz";

type ButtonVariants = ColorToken;

interface ButtonProps {
    size?: UDim2;
    variant?: ButtonVariants;
    text?: string;
    onClick?: () => void;
    disabled?: boolean;
    position?: UDim2;
    anchorPoint?: Vector2;
}

export function Button({
    variant = "primary",
    onClick,
    text,
    size,
    disabled,
}: ButtonProps) {
    if (!configs.colors[variant]) {
        variant = "primary";
    }

    const [hovered, setHovered] = useState(false);

    const [color, setColor] = useBinding(configs.colors[variant].background);
    const [groupTransparency, setGroupTransparency] = useBinding(0);

    const groupTransparencyBinding = useSpring(
        groupTransparency,
        configs.spring.default,
    );

    const colorBinding = useSpring(color, configs.spring.default);

    useEffect(() => {
        if (disabled) {
            setGroupTransparency(0.5);
        } else {
            setGroupTransparency(0);
        }

        if (hovered) {
            setColor(configs.colors[variant].active);
        } else {
            setColor(configs.colors[variant].background);
        }
    }, [disabled, hovered]);

    return (
        <canvasgroup
            GroupTransparency={groupTransparencyBinding}
            AnchorPoint={new Vector2(0, 0)}
            Size={size ?? new UDim2(0, 100, 0, 50)}
            Position={new UDim2(0, 0, 0, 0)}
            BackgroundColor3={colorBinding}
        >
            <UICorner radius={configs.rounded.sm} />
            <SizeConstraint
                max={new Vector2(1000, 100)}
                min={new Vector2(56, 24)}
            />
            <textbutton
                AutoButtonColor={false}
                AnchorPoint={new Vector2(0, 0)}
                Size={new UDim2(1, 0, 1, 0)}
                Position={new UDim2(0, 0, 0, 0)}
                Event={{
                    Activated: () => {
                        if (disabled || !onClick) return;
                        onClick();
                    },
                    MouseEnter: () => {
                        setHovered(true);
                    },
                    MouseLeave: () => {
                        setHovered(false);
                    },
                }}
                Text=""
                TextTransparency={1}
                BackgroundTransparency={1}
            >
                <Padding left={8} right={8} top={4} bottom={4} />

                <Typography
                    size={new UDim2(1, 0, 1, 0)}
                    color={
                        configs.colors[variant].foreground ??
                        Color3.fromRGB(255, 255, 255)
                    }
                    textSize={configs.textSize.lg}
                    text={text ?? "Click me!"}
                    font={configs.fonts.Inter.SemiBold}
                />
            </textbutton>
        </canvasgroup>
    );
}

interface BackButtonProps {
    size?: UDim2;
    onClick?: () => void;
}

export function BackButton(props: BackButtonProps) {
    const [hovered, setHovered] = useState(false);
    return (
        <imagebutton
            Image={"rbxassetid://18867268824"}
            BackgroundTransparency={1}
            ImageColor3={configs.colors.black.background}
            Size={props.size ?? new UDim2(0, 50, 0, 50)}
            Event={{
                Activated: () => {
                    if (props.onClick) {
                        props.onClick();
                    }
                },
            }}
        >
            <AspectRatio ratio={1} />
        </imagebutton>
    );
}

interface ToggleButtonProps {
    visible?: boolean;
    size?: UDim2;
    onClick?: () => void;
    toggled?: boolean;
    color?: ColorToken;

    active?: boolean;
    activeColor?: ColorToken;

    onToggle?: (toggled: boolean) => void;
}

export function ToggleButton(props: ToggleButtonProps) {
    const [hovered, setHovered] = useState(false);

    return (
        <imagebutton
            Visible={props.visible ?? false}
            AutoButtonColor={false}
            Image={configs.gameShapes.circle}
            BackgroundTransparency={1}
            Size={new UDim2(0.6, 0, 0.6, 0)}
            Position={new UDim2(0.5, 0, 0.5, 0)}
            AnchorPoint={new Vector2(0.5, 0.5)}
            Event={{
                MouseEnter: () => {
                    setHovered(true);
                },

                MouseLeave: () => {
                    setHovered(false);
                },

                Activated: () => {
                    if (props.onToggle) {
                        props.onToggle(!props.active);
                    }

                    if (props.onClick) {
                        props.onClick();
                    }
                },
            }}
        >
            <AspectRatio ratio={1} />
            <Padding
                left={new UDim(0.075, 0)}
                right={new UDim(0.075, 0)}
                top={new UDim(0.075, 0)}
                bottom={new UDim(0.075, 0)}
            />
            <imagelabel
                Image={configs.gameShapes.circle}
                BackgroundTransparency={1}
                Size={new UDim2(1, 0, 1, 0)}
                Position={new UDim2(0.5, 0, 0.5, 0)}
                AnchorPoint={new Vector2(0.5, 0.5)}
                ImageColor3={
                    props.active
                        ? props.activeColor
                            ? configs.colors[props.activeColor].background
                            : Color3.fromRGB(92, 182, 47)
                        : props.color
                          ? configs.colors[props.color].background
                          : configs.colors.white.background
                }
            >
                <imagelabel
                    Image={"rbxassetid://9267719574"}
                    BackgroundTransparency={1}
                    Size={new UDim2(0.7, 0, 0.7, 0)}
                    Position={new UDim2(0.5, 0, 0.5, 0)}
                    AnchorPoint={new Vector2(0.5, 0.5)}
                    ImageColor3={
                        props.color
                            ? configs.colors[props.color].foreground
                            : configs.colors.white.background
                    }
                    Visible={props.active || hovered}
                >
                    <AspectRatio ratio={1} />
                </imagelabel>
            </imagelabel>
        </imagebutton>
    );
}

interface IconButtonProps extends ButtonProps {
    icon?: string;
}

export function IconButton(props: IconButtonProps) {
    const [hovered, setHovered] = useState(false);

    const [scale, setScale] = useBinding(1);

    const scaleBinding = useSpring(scale, configs.spring.default);

    useEffect(() => {
        if (hovered) {
            setScale(1.1);
        } else {
            setScale(1);
        }
    }, [hovered]);

    return (
        <imagebutton
            Image={configs.gameShapes.circle}
            ImageColor3={configs.colors[props.variant ?? "primary"].background}
            BackgroundTransparency={1}
            Size={props.size ?? new UDim2(0, 50, 0, 50)}
            AnchorPoint={props.anchorPoint ?? new Vector2(0.5, 0.5)}
            Position={props.position ?? new UDim2(0.5, 0, 0.5, 0)}
            Event={{
                Activated: () => {
                    if (props.onClick) {
                        props.onClick();
                    }
                },

                MouseEnter: () => {
                    setHovered(true);
                },

                MouseLeave: () => {
                    setHovered(false);
                },
            }}
        >
            <uiscale Scale={scaleBinding} />
            <AspectRatio ratio={1} />
            <Padding left={8} right={8} top={8} bottom={8} />

            <imagelabel
                Image={props.icon ?? configs.gameShapes.square}
                BackgroundTransparency={1}
                Size={new UDim2(0.7, 0, 0.7, 0)}
                Position={new UDim2(0.5, 0, 0.5, 0)}
                AnchorPoint={new Vector2(0.5, 0.5)}
                ImageColor3={
                    configs.colors[props.variant ?? "primary"].foreground
                }
            >
                <AspectRatio ratio={1} />
            </imagelabel>
        </imagebutton>
    );
}

interface QuestionButtonProps {
    index: number;
    onClick?: () => void;
    active?: boolean;
    question: Question;
}

function truncateText(text: string, length: number) {
    if (text.size() > length) {
        return text.sub(0, length) + "...";
    }

    return text;
}

export function QuestionButton(props: QuestionButtonProps) {
    const [hovered, setHovered] = useState(false);

    return (
        <textbutton
            AutoButtonColor={false}
            Text={""}
            TextTransparency={1}
            BorderSizePixel={0}
            BackgroundColor3={
                props.active
                    ? configs.colors.white.active
                    : configs.colors.white.background
            }
            Size={new UDim2(1, 0, 0, 120)}
            Event={{
                MouseEnter: () => {
                    setHovered(true);
                },

                MouseLeave: () => {
                    setHovered(false);
                },

                Activated: () => {
                    if (props.onClick) {
                        props.onClick();
                    }
                },
            }}
        >
            <UIList
                fillDirection={Enum.FillDirection.Vertical}
                verticalAlignment={Enum.VerticalAlignment.Top}
            />
            <Padding left={8} right={8} top={4} bottom={4} />

            <frame BackgroundTransparency={1} Size={new UDim2(1, 0, 0.3, 0)}>
                <UIList
                    fillDirection={Enum.FillDirection.Horizontal}
                    horizontalFlex={Enum.UIFlexAlignment.SpaceBetween}
                    horizontalAlignment={Enum.HorizontalAlignment.Left}
                />
                <Typography
                    text={`${props.index + 1}.`}
                    textSize={configs.textSize.md}
                    font={configs.fonts.Inter.Bold}
                    horizontalAlignment={Enum.TextXAlignment.Left}
                    verticalAlignment={Enum.TextYAlignment.Top}
                    size={new UDim2(0.2, 0, 1, 0)}
                />
                <Typography
                    text={props.question.type}
                    textSize={configs.textSize.md}
                    font={configs.fonts.Inter.Bold}
                    size={new UDim2(0.8, 0, 1, 0)}
                    verticalAlignment={Enum.TextYAlignment.Top}
                    horizontalAlignment={Enum.TextXAlignment.Right}
                />
            </frame>

            <canvasgroup
                BackgroundTransparency={1}
                Size={new UDim2(1, 0, 0.7, 0)}
            >
                <UICorner radius={configs.rounded.md} />
                <Stroke
                    color={configs.colors.black.background}
                    transparency={0.8}
                    thickness={3}
                />
                <frame
                    BorderSizePixel={0}
                    ZIndex={2}
                    BackgroundColor3={
                        props.active
                            ? configs.colors.white.active
                            : configs.colors.white.background
                    }
                    Size={new UDim2(1, 0, 0.4, 0)}
                >
                    <Padding left={8} right={8} top={4} bottom={4} />
                    <Typography
                        text={truncateText(
                            props.question.question.size() > 0
                                ? props.question.question
                                : "Unnamed question",
                            25,
                        )}
                        textSize={configs.textSize.md}
                        font={configs.fonts.Inter.Regular}
                        size={new UDim2(1, 0, 1, 0)}
                        verticalAlignment={Enum.TextYAlignment.Center}
                        horizontalAlignment={Enum.TextXAlignment.Center}
                        truncate={true}
                    />
                </frame>

                <imagelabel
                    BackgroundTransparency={1}
                    Size={new UDim2(1, 0, 1, 0)}
                    Image={props.question.coverImage}
                    ImageColor3={configs.colors.black.background}
                    ScaleType={Enum.ScaleType.Crop}
                />
            </canvasgroup>
        </textbutton>
    );
}

export default Button;
