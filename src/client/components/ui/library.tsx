import React from "@rbxts/react";
import configs, { FontWeight } from "@ui/configs";

type Flex = Enum.UIFlexAlignment;

type UDimOrOffset = UDim | number;

interface PaddingProps {
    left?: UDimOrOffset;
    right?: UDimOrOffset;
    top?: UDimOrOffset;
    bottom?: UDimOrOffset;
}

interface UIListProps {
    fillDirection?: Enum.FillDirection;
    sortOrder?: Enum.SortOrder;
    verticalAlignment?: Enum.VerticalAlignment;
    horizontalAlignment?: Enum.HorizontalAlignment;
    padding?: UDimOrOffset;

    horizontalFlex?: Flex;
    verticalFlex?: Flex;
    wraps?: boolean;
}

interface UICornerProps {
    radius: UDimOrOffset;
}

interface TypographyProps {
    font?: Font;
    weight?: FontWeight;
    size?: UDim2;
    textSize?: number;
    text?: string;
    color?: Color3;
}

interface StrokeProps {
    thickness?: number;
    color?: Color3;
    transparency?: number;
}

export function AspectRatio({ ratio }: { ratio: number }) {
    return <uiaspectratioconstraint AspectRatio={ratio} />;
}

export function Padding(props: PaddingProps) {
    return (
        <uipadding
            PaddingLeft={
                typeIs(props.left, "number")
                    ? new UDim(0, props.left)
                    : props.left
            }
            PaddingRight={
                typeIs(props.right, "number")
                    ? new UDim(0, props.right)
                    : props.right
            }
            PaddingTop={
                typeIs(props.top, "number") ? new UDim(0, props.top) : props.top
            }
            PaddingBottom={
                typeIs(props.bottom, "number")
                    ? new UDim(0, props.bottom)
                    : props.bottom
            }
        />
    );
}

export function Stroke(props: StrokeProps) {
    return (
        <uistroke
            ApplyStrokeMode={Enum.ApplyStrokeMode.Border}
            Color={props.color ?? Color3.fromRGB(0, 0, 0)}
            Transparency={props.transparency ?? 0}
            Thickness={props.thickness ?? 1}
        />
    );
}

export function UIList({
    fillDirection,
    sortOrder,
    verticalAlignment,
    verticalFlex,
    horizontalAlignment,
    horizontalFlex,
    padding,
}: UIListProps) {
    return (
        <uilistlayout
            FillDirection={fillDirection}
            SortOrder={sortOrder ?? Enum.SortOrder.LayoutOrder}
            VerticalAlignment={
                verticalAlignment ?? Enum.VerticalAlignment.Center
            }
            HorizontalAlignment={
                horizontalAlignment ?? Enum.HorizontalAlignment.Center
            }
            VerticalFlex={verticalFlex ?? Enum.UIFlexAlignment.None}
            HorizontalFlex={horizontalFlex ?? Enum.UIFlexAlignment.None}
            Padding={typeIs(padding, "number") ? new UDim(0, padding) : padding}
        />
    );
}

export function UICorner({ radius }: UICornerProps) {
    return (
        <uicorner
            CornerRadius={
                typeIs(radius, "number") ? new UDim(0, radius) : radius
            }
        />
    );
}

export function TextSizeConstraint({
    min,
    max,
}: {
    min?: number;
    max?: number;
}) {
    return <uitextsizeconstraint MinTextSize={min} MaxTextSize={max} />;
}

export function SizeConstraint({ min, max }: { min?: Vector2; max?: Vector2 }) {
    return <uisizeconstraint MinSize={min} MaxSize={max} />;
}

export function Typography({
    font,
    size,
    weight,
    text,
    color,
    textSize,
}: TypographyProps) {
    return (
        <textlabel
            FontFace={font ?? configs.fonts.Inter.Regular}
            TextScaled={true}
            Text={text ?? "Text"}
            TextColor3={color ?? Color3.fromRGB(0, 0, 0)}
            BackgroundTransparency={1}
            Size={size ?? new UDim2(1, 0, 1, 0)}
        >
            <TextSizeConstraint min={10} max={textSize} />
        </textlabel>
    );
}
