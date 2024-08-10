import React, { Children, useState } from "@rbxts/react";
import {
    AspectRatio,
    Padding,
    SizeConstraint,
    Stroke,
    TextSizeConstraint,
    Typography,
    UICorner,
    UIList,
} from "@ui/library";

import configs, { ColorToken } from "@ui/configs";
import { ToggleButton } from "../button";

interface TextInputProps {
    backgroundTransparency?: number;
    size?: UDim2;
    text?: string;
    placeholder?: string;
    onChange?: (text: string) => void;
    maxLength?: number;
    clearOnFocus?: boolean;
    numbersOnly?: boolean;
    position?: UDim2;
    disabled?: boolean;
    borderRadius?: number;
    textSize?: number;

    color?: Color3;

    horizontalAlignment?: Enum.TextXAlignment;
}

export function TextInput(props: TextInputProps) {
    const [focused, setFocused] = useState(false);
    const maxLength = props.maxLength ?? 100;

    return (
        <textbox
            TextXAlignment={
                props.horizontalAlignment ?? Enum.TextXAlignment.Center
            }
            ClearTextOnFocus={props.clearOnFocus}
            BackgroundTransparency={props.backgroundTransparency ?? 0}
            BackgroundColor3={configs.colors["white"].background}
            TextColor3={props.color ?? configs.colors["white"].foreground}
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
            <UICorner radius={props.borderRadius ?? configs.rounded.sm} />
            <TextSizeConstraint max={props.textSize ?? 16} />
        </textbox>
    );
}

export function CodeInput(props: Omit<TextInputProps, "numbersOnly">) {
    const [focused, setFocused] = useState(false);
    const maxLength = props.maxLength ?? 100;

    return (
        <canvasgroup
            BackgroundColor3={configs.colors["white"].background}
            BorderSizePixel={0}
            GroupTransparency={props.disabled ? 0.5 : 0}
            AnchorPoint={new Vector2(0, 0)}
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
            Position={new UDim2(0, 0, 0, 0)}
        >
            <SizeConstraint
                max={new Vector2(1000, 56)}
                min={new Vector2(100, 32)}
            />
            <UICorner radius={configs.rounded.sm} />
            <Stroke
                thickness={2}
                transparency={focused ? 0 : 0.9}
                color={Color3.fromRGB(0, 0, 0)}
            />

            <textbox
                ClearTextOnFocus={props.clearOnFocus ?? false}
                BackgroundTransparency={1}
                Text={props.text?.sub(0, maxLength) ?? ""}
                PlaceholderText={props.placeholder}
                Size={new UDim2(1, 0, 1, 0)}
                TextScaled={true}
                BorderSizePixel={0}
                FontFace={configs.fonts["Inter"].SemiBold}
                TextEditable={!props.disabled}
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
                <Padding left={8} right={8} top={4} bottom={4} />
                <TextSizeConstraint max={configs.textSize.lg} />
            </textbox>
        </canvasgroup>
    );
}

function stripText(text: string) {
    // Trim leading and trailing whitespace
    const newText = text.match("^%s*(.-)%s*$")[0] as string;
    // Remove all remaining whitespace characters
    return newText.gsub("%s", "")[0].gsub("%D", "");
}

function textIsValid(text: string) {
    return text.size() > 0 && stripText(text).size() > 0;
}

export interface QuestionAnswerCardProps {
    shape?: string;
    size?: UDim2;
    text?: string;
    setText?: (text: string) => void;
    color?: ColorToken;

    shapeScale?: number;

    onAnswerSelectCorrect?: () => void;
    onAnswerDeselectCorrect?: () => void;
}

export function QuestionAnswerCard(props: QuestionAnswerCardProps) {
    const [text, setText] = useState<string>(props.text ?? "");
    const [correct, setCorrect] = useState<boolean>(false);

    const validText = textIsValid(text);

    return (
        <canvasgroup
            BackgroundColor3={
                validText
                    ? props.color
                        ? configs.colors[props.color].background
                        : configs.colors["gameGreen"].background
                    : configs.colors["white"].background
            }
            Size={props.size ?? new UDim2(1, 0, 1, 0)}
        >
            <UICorner radius={configs.rounded.md} />
            <Padding left={4} right={4} top={4} bottom={4} />
            <frame
                BorderSizePixel={0}
                Transparency={1}
                Size={new UDim2(1, 0, 1, 0)}
            >
                <UIList
                    fillDirection={Enum.FillDirection.Horizontal}
                    horizontalAlignment={Enum.HorizontalAlignment.Left}
                />
                <frame
                    BorderSizePixel={0}
                    BackgroundColor3={
                        props.color
                            ? configs.colors[props.color].background
                            : configs.colors["gameGreen"].background
                    }
                    Size={new UDim2(0.2, 0, 1, 0)}
                >
                    <UICorner radius={configs.rounded.md} />
                    <imagelabel
                        Image={props.shape ?? configs.gameShapes.circle}
                        BackgroundTransparency={1}
                        Size={new UDim2(0.6, 0, 0.6, 0)}
                        Position={new UDim2(0.5, 0, 0.5, 0)}
                        AnchorPoint={new Vector2(0.5, 0.5)}
                    >
                        <uiscale Scale={props.shapeScale ?? 1} />
                        <AspectRatio ratio={1} />
                    </imagelabel>
                </frame>
                <TextInput
                    placeholder="Answer"
                    clearOnFocus={false}
                    color={
                        validText
                            ? props.color
                                ? configs.colors[props.color].foreground
                                : configs.colors["gameGreen"].foreground
                            : configs.colors["white"].foreground
                    }
                    horizontalAlignment={Enum.TextXAlignment.Left}
                    backgroundTransparency={1}
                    size={new UDim2(0.65, 0, 1, 0)}
                    textSize={configs.textSize.sm}
                    text={props.text}
                    onChange={(text) => {
                        setText(text);
                        if (props.setText) {
                            props.setText(text);
                        }

                        if (textIsValid(text) === false) {
                            setCorrect(false);
                        }
                    }}
                />

                <frame
                    BorderSizePixel={0}
                    BackgroundTransparency={1}
                    Size={new UDim2(0.15, 0, 1, 0)}
                >
                    <ToggleButton
                        color={props.color}
                        visible={validText}
                        active={correct}
                        onToggle={(active) => {
                            if (active) {
                                setCorrect(true);
                                if (props.onAnswerSelectCorrect) {
                                    props.onAnswerSelectCorrect();
                                }
                            } else {
                                setCorrect(false);
                                if (props.onAnswerDeselectCorrect) {
                                    props.onAnswerDeselectCorrect();
                                }
                            }
                        }}
                    />
                </frame>
            </frame>
        </canvasgroup>
    );
}
