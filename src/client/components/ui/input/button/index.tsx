import React, { useState } from "@rbxts/react";
import {
    AspectRatio,
    Padding,
    SizeConstraint,
    Typography,
    UICorner,
} from "@ui/library";
import configs from "@ui/configs";

type ButtonVariants = "primary" | "secondary" | "destructive" | "accent";

interface ButtonProps {
    size?: UDim2;
    variant?: ButtonVariants;
    text?: string;
    onClick?: () => void;
    disabled?: boolean;
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

    const [hovered, setHovered] = useState<boolean>(false);

    return (
        <canvasgroup
            GroupTransparency={disabled ? 0.5 : 0}
            AnchorPoint={new Vector2(0, 0)}
            Size={size ?? new UDim2(0, 100, 0, 50)}
            Position={new UDim2(0, 0, 0, 0)}
            BackgroundColor3={
                hovered
                    ? configs.colors[variant].active
                    : configs.colors[variant].background
            }
        >
            <UICorner radius={configs.rounded.sm} />
            <SizeConstraint
                max={new Vector2(1000, 56)}
                min={new Vector2(56, 32)}
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
export default Button;
