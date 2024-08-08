import React from "@rbxts/react";
import ReactRoblox from "@rbxts/react-roblox";
import { InferProps } from "@rbxts/react/src/prop-types";
import { InferFusionProps } from "@rbxts/ui-labs";
import { CodeInput, TextInput } from "@ui/input/textinput";
import CodeSubmitForm from "../../ui/input/code-submit-form";

function CodeSubmitFormStory() {
    return <CodeSubmitForm />;
}

const story = {
    react: React,
    reactRoblox: ReactRoblox,
    story: () => {
        return <CodeSubmitFormStory />;
    },
};

export = story;
