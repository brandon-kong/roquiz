import React, { Children, useState } from "@rbxts/react";
import ReactRoblox from "@rbxts/react-roblox";
import {
    Padding,
    SizeConstraint,
    Stroke,
    TextSizeConstraint,
    Typography,
    UICorner,
} from "@ui/library";
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
    position?: UDim2;
    disabled?: boolean;
}

export function TextInput(props: TextInputProps) {
    const [focused, setFocused] = useState(false);
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
            Event={{
                FocusLost: () => {
                    setFocused(false);
                },
                Focused: () => {
                    setFocused(true);
                },
            }}
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
            <UICorner radius={configs.rounded.sm} />
            <TextSizeConstraint max={16} />
        </textbox>
    );
}

export function CodeInput(props: Omit<TextInputProps, "numbersOnly">) {
    const [focused, setFocused] = useState(false);
    const maxLength = props.maxLength ?? 100;

    return (
        <textbox
            ClearTextOnFocus={props.clearOnFocus ?? false}
            BackgroundColor3={configs.colors["white"].background}
            Text={props.text?.sub(0, maxLength) ?? ""}
            PlaceholderText={props.placeholder}
            Size={
                props.size
                    ? new UDim2(
                          props.size.X.Scale,
                          props.size.X.Offset - configs.rounded.sm,
                          props.size.Y.Scale,
                          props.size.Y.Offset - configs.rounded.sm,
                      )
                    : new UDim2(0, 100, 0, 50)
            }
            TextScaled={true}
            BorderSizePixel={0}
            FontFace={configs.fonts["Inter"].SemiBold}
            Event={{
                FocusLost: () => {
                    setFocused(false);
                },
                Focused: () => {
                    setFocused(true);
                },
            }}
            Change={{
                Text: (rbx) => {
                    let newText = rbx.Text;
                    if (newText.size() > maxLength) {
                        newText = newText.sub(0, maxLength);
                        rbx.Text = newText;
                    }

                    const [a, b] = newText.gsub("%D", "");
                    rbx.Text = a;

                    if (props.onChange) {
                        props.onChange(newText);
                    }
                },
            }}
        >
            <SizeConstraint
                max={new Vector2(1000, 56)}
                min={new Vector2(100, 16)}
            />
            <Padding left={8} right={8} top={4} bottom={4} />
            <UICorner radius={configs.rounded.sm} />
            <TextSizeConstraint max={configs.textSize.lg} />
            <Stroke
                thickness={2}
                transparency={focused ? 0 : 0.9}
                color={Color3.fromRGB(0, 0, 0)}
            />
        </textbox>
    );
}
