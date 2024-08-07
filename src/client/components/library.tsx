import React from "@rbxts/react";

type Flex = Enum.UIFlexAlignment;

type UDimOrOffset = UDim | number;

interface PaddingProps {
    left: UDimOrOffset;
    right: UDimOrOffset;
    top: UDimOrOffset;
    bottom: UDimOrOffset;
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

export function Padding(props: PaddingProps) {
    return (
        <uipadding
            PaddingLeft={
                typeIs(props.left, "number")
                    ? new UDim(props.left, 0)
                    : props.left
            }
            PaddingRight={
                typeIs(props.right, "number")
                    ? new UDim(props.right, 0)
                    : props.right
            }
            PaddingTop={
                typeIs(props.top, "number") ? new UDim(props.top, 0) : props.top
            }
            PaddingBottom={
                typeIs(props.bottom, "number")
                    ? new UDim(props.bottom, 0)
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
