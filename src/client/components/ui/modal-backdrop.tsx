import React from "@rbxts/react";
import configs from "./configs";

interface ModalBackdropProps {
    visible?: boolean;
    onClick?: () => void;
}

function ModalBackdrop(props: ModalBackdropProps) {
    return (
        <imagebutton
            Visible={props.visible ?? false}
            Active={props.visible ?? false}
            AutoButtonColor={false}
            Image={undefined}
            BackgroundTransparency={props.visible ? 0.8 : 1}
            BorderSizePixel={0}
            BackgroundColor3={configs.colors.black.background}
            Size={new UDim2(1, 0, 1, 0)}
            Event={{
                Activated: () => {
                    if (props.onClick) {
                        props.onClick();
                    }
                },
            }}
        />
    );
}

export = ModalBackdrop;
