import React, { Children, useState } from "@rbxts/react";
import ReactRoblox from "@rbxts/react-roblox";
import { Padding, Typography, UICorner } from "@ui/library";
import { useSpring } from "@rbxts/rbx-react-spring";
import motion from "@rbxts/react-motion";

import configs from "@ui/configs";

type ButtonVariants = "primary" | "secondary" | "destructive";

interface ButtonProps {
    variant?: ButtonVariants;
    text?: string;
    onClick?: () => void;
}

function Button({ variant = "primary", onClick, text }: ButtonProps) {
    const [hovered, setHovered] = useState<boolean>(false);

    const { backgroundColor } = useSpring(
        {
            config: {},
            backgroundColor: hovered
                ? configs.colors[variant].active
                : (configs.colors[variant].background ??
                  Color3.fromRGB(0, 0, 0)),
        },
        [hovered],
    );

    return (
        <textbutton
            AutoButtonColor={false}
            AnchorPoint={new Vector2(0, 0)}
            Size={new UDim2(0, 100, 0, 50)}
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
            BackgroundColor3={backgroundColor.getValue()}
        >
            <Padding left={8} right={8} top={4} bottom={4} />
            <UICorner radius={16} />

            <Typography
                size={new UDim2(1, 0, 1, 0)}
                color={
                    configs.colors[variant].foreground ??
                    Color3.fromRGB(255, 255, 255)
                }
                textSize="md"
                text={text ?? "Click me!"}
            />
        </textbutton>
    );
}

export = Button;
