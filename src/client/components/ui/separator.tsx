import React from "@rbxts/react";
import { Stroke } from "./library";
import configs from "./configs";

interface SeparatorProps {
    color?: Color3;
    size?: UDim2;
}

function Separator(props: SeparatorProps) {
    return (
        <frame
            Size={props.size ?? new UDim2(1, 0, 0, 0)}
            BackgroundTransparency={1}
        >
            <Stroke color={props.color ?? configs.colors.white.accent} />
        </frame>
    );
}

export = Separator;
