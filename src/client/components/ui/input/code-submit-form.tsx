import React from "@rbxts/react";
import { CodeInput } from "@ui/input/textinput";
import Button from "@ui/input/button";
import {
    AspectRatio,
    Padding,
    SizeConstraint,
    Typography,
    UICorner,
    UIList,
} from "@ui/library";
import configs from "@ui/configs";

interface CodeSubmitFormProps {
    position?: UDim2;
    anchorPoint?: Vector2;
}
function CodeSubmitForm(props: CodeSubmitFormProps) {
    const [code, setCode] = React.useState("");

    return (
        <frame
            Position={props.position || new UDim2(0.5, 0, 0.5, 0)}
            AnchorPoint={props.anchorPoint || new Vector2(0.5, 0.5)}
            BackgroundColor3={new Color3(1, 1, 1)}
            Size={new UDim2(0.4, 0, 0, 0)}
            AutomaticSize={Enum.AutomaticSize.Y}
        >
            <UIList
                padding={8}
                verticalAlignment={Enum.VerticalAlignment.Top}
                verticalFlex={Enum.UIFlexAlignment.Fill}
            />
            <Padding left={12} right={12} top={12} bottom={12} />
            <UICorner radius={configs.rounded.md} />
            <CodeInput
                placeholder="Enter code"
                size={new UDim2(1, 0, 0.25, 0)}
                text={code}
                onChange={(text) => {
                    setCode(text);
                }}
                maxLength={6}
            />
            <Button size={new UDim2(1, 0, 0.25, 0)} text="Join game" />
            <Typography
                text="or"
                size={new UDim2(1, 0, 0, 24)}
                textSize={configs.textSize.md}
                font={configs.fonts.Inter.SemiBold}
            />
            <Button
                variant={"secondary"}
                size={new UDim2(1, 0, 0.25, 0)}
                text="Host a game"
            />
        </frame>
    );
}

export = CodeSubmitForm;
