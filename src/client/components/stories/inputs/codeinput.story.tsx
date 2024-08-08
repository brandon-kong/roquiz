import React from "@rbxts/react";
import ReactRoblox from "@rbxts/react-roblox";
import { InferProps } from "@rbxts/react/src/prop-types";
import { InferFusionProps } from "@rbxts/ui-labs";
import { CodeInput, TextInput } from "@ui/input/textinput";

const controls = {
    text: "000000",
    maxLength: 6,
    clearOnFocus: false,
};

function CodeInputStory(props: InferProps<typeof controls>) {
    return <CodeInput {...props} />;
}

const story = {
    react: React,
    reactRoblox: ReactRoblox,
    controls: controls,
    story: (props: InferFusionProps<typeof controls>) => {
        return <CodeInputStory {...props.controls} />;
    },
};

export = story;
