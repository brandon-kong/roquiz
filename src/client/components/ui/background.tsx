import React from "@rbxts/react";

const backgroundImageId = "rbxassetid://18863611459";

interface BackgroundProps {
    size?: UDim2;
    color?: Color3;
    children?: React.Element;
    patternTransparency?: number;
}

function Background(props: BackgroundProps) {
    return (
        <imagelabel
            BorderSizePixel={0}
            BackgroundColor3={props.color ?? Color3.fromRGB(76, 21, 167)}
            Size={props.size ?? new UDim2(1, 0, 1, 0)}
            Image={backgroundImageId}
            ImageColor3={new Color3(0, 0, 0)}
            ImageTransparency={props.patternTransparency ?? 0.9}
            ScaleType={Enum.ScaleType.Tile}
            TileSize={new UDim2(0, 300, 0, 300)}
        >
            {props.children}
        </imagelabel>
    );
}

export = Background;
