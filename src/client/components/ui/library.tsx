import React, { InstanceEvent } from "@rbxts/react";
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

    onContentSizeChange?: (contentSize: Vector2) => void;
}

interface UICornerProps {
    radius: UDimOrOffset;
}

interface TypographyProps {
    transparency?: number;
    font?: Font;
    weight?: FontWeight;
    size?: UDim2;
    textSize?: number;
    text?: string;
    color?: Color3;
    horizontalAlignment?: Enum.TextXAlignment;
    verticalAlignment?: Enum.TextYAlignment;
    truncate?: boolean;
    automaticSize?: Enum.AutomaticSize;
}

interface StrokeProps {
    thickness?: number;
    color?: Color3;
    transparency?: number | React.Binding<number>;
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

export const UIList = React.forwardRef<UIListLayout, UIListProps>(
    (
        {
            fillDirection,
            sortOrder,
            verticalAlignment,
            verticalFlex,
            horizontalAlignment,
            horizontalFlex,
            padding,
            wraps,
            onContentSizeChange,
        },
        ref,
    ) => (
        <uilistlayout
            ref={ref}
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
            Wraps={wraps ?? false}
            Change={{
                AbsoluteContentSize: (rbx) => {
                    if (onContentSizeChange) {
                        onContentSizeChange(rbx.AbsoluteContentSize);
                    }
                },
            }}
        />
    ),
);

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
    transparency,
    font,
    size,
    weight,
    text,
    color,
    textSize,
    horizontalAlignment,
    verticalAlignment,
    truncate,
    automaticSize,
}: TypographyProps) {
    return (
        <textlabel
            TextTransparency={transparency ?? 0}
            FontFace={font ?? configs.fonts.Inter.Regular}
            TextScaled={true}
            Text={text ?? "Text"}
            TextColor3={color ?? Color3.fromRGB(0, 0, 0)}
            BackgroundTransparency={1}
            Size={size ?? new UDim2(1, 0, 1, 0)}
            TextXAlignment={horizontalAlignment ?? Enum.TextXAlignment.Center}
            TextYAlignment={verticalAlignment ?? Enum.TextYAlignment.Center}
            TextTruncate={
                truncate ? Enum.TextTruncate.AtEnd : Enum.TextTruncate.None
            }
            AutomaticSize={automaticSize ?? Enum.AutomaticSize.None}
        >
            <TextSizeConstraint min={10} max={textSize} />
        </textlabel>
    );
}

interface UIGridProps {
    cellSize?: UDim2;
    cellPadding?: UDim2;
    fillDirection?: Enum.FillDirection;
    maxCells?: number;
    horizontalAlignment?: Enum.HorizontalAlignment;
    verticalAlignment?: Enum.VerticalAlignment;
}

export function UIGrid(props: UIGridProps) {
    return (
        <uigridlayout
            CellSize={props.cellSize}
            CellPadding={props.cellPadding ?? new UDim2(0, 0, 0, 0)}
            FillDirection={props.fillDirection ?? Enum.FillDirection.Vertical}
            FillDirectionMaxCells={props.maxCells ?? 4}
            HorizontalAlignment={
                props.horizontalAlignment ?? Enum.HorizontalAlignment.Left
            }
            VerticalAlignment={
                props.verticalAlignment ?? Enum.VerticalAlignment.Top
            }
        />
    );
}
