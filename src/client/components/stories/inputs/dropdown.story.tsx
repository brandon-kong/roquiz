import React from "@rbxts/react";
import ReactRoblox from "@rbxts/react-roblox";
import { InferProps } from "@rbxts/react/src/prop-types";
import { InferFusionProps } from "@rbxts/ui-labs";
import { CodeInput, Dropdown, TextInput } from "@ui/input/textinput";

const controls = {
    text: "000000",
    maxLength: 6,
    clearOnFocus: false,
};

function DropdownStory(props: InferProps<typeof controls>) {
    return <Dropdown options={["Option 1", "Option 2"]} />;
}

const story = {
    react: React,
    reactRoblox: ReactRoblox,
    controls: controls,
    story: (props: InferFusionProps<typeof controls>) => {
        return <DropdownStory {...props.controls} />;
    },
};

export = story;
