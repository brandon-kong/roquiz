import React from "@rbxts/react";
import ReactRoblox from "@rbxts/react-roblox";
import { InferProps } from "@rbxts/react/src/prop-types";
import { InferFusionProps } from "@rbxts/ui-labs";
import { QuestionAnswerCard, TextInput } from "@ui/input/textinput";

const controls = {};

function QuestionAnswerCardStory(props: InferProps<typeof controls>) {
    return <QuestionAnswerCard />;
}

const story = {
    react: React,
    reactRoblox: ReactRoblox,
    controls: controls,
    story: (props: InferFusionProps<typeof controls>) => {
        return <QuestionAnswerCardStory {...props.controls} />;
    },
};

export = story;
