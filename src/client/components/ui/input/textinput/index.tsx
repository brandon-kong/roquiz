import React, { Children, useState } from "@rbxts/react";
import ReactRoblox from "@rbxts/react-roblox";
import { Padding, TextSizeConstraint, Typography, UICorner } from "@ui/library";
import { useSpring } from "@rbxts/rbx-react-spring";
import motion from "@rbxts/react-motion";

import configs from "@ui/configs";

interface TextInputProps {
    size?: UDim2;
    text?: string;
    placeholder?: string;
    onChange?: (text: string) => void;
    maxLength?: number;
    clearOnFocus?: boolean;
    numbersOnly?: boolean;
}

export function TextInput(props: TextInputProps) {
    const maxLength = props.maxLength ?? 100;

    return (
        <textbox
            ClearTextOnFocus={props.clearOnFocus}
            BackgroundColor3={configs.colors["white"].background}
            Text={props.text?.sub(0, maxLength) ?? ""}
            PlaceholderText={props.placeholder}
            Size={props.size ?? new UDim2(0, 100, 0, 50)}
            TextScaled={true}
            BorderSizePixel={0}
            Change={{
                Text: (rbx) => {
                    let newText = rbx.Text;
                    if (newText.size() > maxLength) {
                        newText = newText.sub(0, maxLength);
                        rbx.Text = newText;
                    }

                    if (props.numbersOnly) {
                        const [a, b] = newText.gsub("%D", "");
                        rbx.Text = a;
                    }

                    if (props.onChange) {
                        props.onChange(newText);
                    }
                },
            }}
        >
            <Padding left={8} right={8} top={4} bottom={4} />
            <UICorner radius={8} />
            <TextSizeConstraint max={16} />
        </textbox>
    );
}
