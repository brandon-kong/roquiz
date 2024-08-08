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
    fillDirection: Enum.FillDirection;
    sortOrder?: Enum.SortOrder;
    verticalAlignment?: Enum.VerticalAlignment;
    horizontalAlignment?: Enum.HorizontalAlignment;
    padding?: UDim;

    horizontalFlex?: Flex;
    verticalFlex?: Flex;
    wraps?: boolean;
}

interface UICornerProps {
    radius: UDimOrOffset;
}

type TextSize = "xs" | "sm" | "md" | "lg" | "xl";

interface TypographyProps {
    weight?: FontWeight;
    size: UDim2;
    textSize?: TextSize;
    text?: string;
    color?: Color3;
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

export function UIList({
    fillDirection,
    sortOrder,
    verticalAlignment,
    verticalFlex,
    horizontalAlignment,
    horizontalFlex,
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
            Padding={new UDim(0, 0)}
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

export function Typography({
    size,
    weight,
    text,
    color,
    textSize,
}: TypographyProps) {
    return (
        <textlabel
            FontFace={configs.fonts.Inter[weight ?? "Regular"]}
            TextScaled={true}
            Text={text ?? "Text"}
            TextColor3={color ?? Color3.fromRGB(0, 0, 0)}
            BackgroundTransparency={1}
            Size={size}
        >
            {textSize === "xs" && <TextSizeConstraint min={10} max={12} />}
            {textSize === "sm" && <TextSizeConstraint min={14} max={16} />}
            {textSize === "md" && <TextSizeConstraint min={18} max={20} />}
            {textSize === "lg" && <TextSizeConstraint min={24} max={26} />}
            {textSize === "xl" && <TextSizeConstraint min={32} max={34} />}
        </textlabel>
    );
}
