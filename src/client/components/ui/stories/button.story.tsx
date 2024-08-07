import React from "@rbxts/react";
import ReactRoblox from "@rbxts/react-roblox";
import { InferProps } from "@rbxts/react/src/prop-types";
import { InferFusionProps } from "@rbxts/ui-labs";
import Button from "@ui/button";

const controls = {
    initialCount: 0,
};

function ButtonStory(props: InferProps<typeof controls>) {
    print(props);
    return <Button initialCount={props.initialCount} />;
}

const story = {
    react: React,
    reactRoblox: ReactRoblox,
    controls: controls,
    story: (props: InferFusionProps<typeof controls>) => {
        print(props.controls.initialCount);
        return <ButtonStory initialCount={props.controls.initialCount} />;
    },
};

export = story;
