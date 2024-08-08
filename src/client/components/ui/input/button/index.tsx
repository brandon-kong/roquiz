import React, { Children, useState } from "@rbxts/react";
import ReactRoblox from "@rbxts/react-roblox";
import { Padding, SizeConstraint, Typography, UICorner } from "@ui/library";
import { useSpring } from "@rbxts/rbx-react-spring";
import motion from "@rbxts/react-motion";

import configs from "@ui/configs";

type ButtonVariants = "primary" | "secondary" | "destructive";

interface ButtonProps {
    size?: UDim2;
    variant?: ButtonVariants;
    text?: string;
    onClick?: () => void;
}

function Button({ variant = "primary", onClick, text, size }: ButtonProps) {
    if (!configs.colors[variant]) {
        variant = "primary";
    }

    const [hovered, setHovered] = useState<boolean>(false);

    return (
        <textbutton
            AutoButtonColor={false}
            AnchorPoint={new Vector2(0, 0)}
            Size={size ?? new UDim2(0, 100, 0, 50)}
            Position={new UDim2(0, 0, 0, 0)}
            Event={{
                Activated: onClick,
                MouseEnter: () => {
                    setHovered(true);
                },
                MouseLeave: () => {
                    setHovered(false);
                },
            }}
            Text=""
            TextTransparency={1}
            BackgroundColor3={
                hovered
                    ? configs.colors[variant].active
                    : (configs.colors[variant].background ??
                      Color3.fromRGB(0, 0, 0))
            }
        >
            <SizeConstraint
                max={new Vector2(1000, 56)}
                min={new Vector2(56, 16)}
            />
            <Padding left={8} right={8} top={4} bottom={4} />
            <UICorner radius={configs.rounded.sm} />

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
    );
}

export = Button;
