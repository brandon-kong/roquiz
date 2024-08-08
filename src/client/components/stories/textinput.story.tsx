import React from "@rbxts/react";
import ReactRoblox from "@rbxts/react-roblox";
import { InferProps } from "@rbxts/react/src/prop-types";
import { InferFusionProps } from "@rbxts/ui-labs";
import { TextInput } from "@ui/input/textinput";

const controls = {
    text: "Text",
    maxLength: 10,
    clearOnFocus: false,
    numbersOnly: false,
};

function TextInputStory(props: InferProps<typeof controls>) {
    return <TextInput {...props} />;
}

const story = {
    react: React,
    reactRoblox: ReactRoblox,
    controls: controls,
    story: (props: InferFusionProps<typeof controls>) => {
        return <TextInputStory {...props.controls} />;
    },
};

export = story;
