import React from "@rbxts/react";

type UDimOrOffset = UDim | number;

interface PaddingProps {
    left: UDimOrOffset;
    right: UDimOrOffset;
    top: UDimOrOffset;
    bottom: UDimOrOffset;
}

interface UIListProps {
    FillDirection: Enum.FillDirection;
}

export function Padding(props: PaddingProps) {
    return (
        <uipadding
            PaddingLeft={typeIs(props.left, "number") ? new UDim(props.left, 0) : props.left}
            PaddingRight={typeIs(props.right, "number") ? new UDim(props.right, 0) : props.right}
            PaddingTop={typeIs(props.top, "number") ? new UDim(props.top, 0) : props.top}
            PaddingBottom={typeIs(props.bottom, "number") ? new UDim(props.bottom, 0) : props.bottom}
        />
    );
}

export function UIList({ FillDirection }: UIListProps) {
    return (
        <uilistlayout
            FillDirection={FillDirection}
            SortOrder={Enum.SortOrder.LayoutOrder}
            VerticalAlignment={Enum.VerticalAlignment.Center}
            HorizontalAlignment={Enum.HorizontalAlignment.Center}
            Padding={new UDim(0.1, 0.1)}
        />
    );
}
