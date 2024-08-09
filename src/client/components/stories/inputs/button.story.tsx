import React from "@rbxts/react";
import ReactRoblox from "@rbxts/react-roblox";
import { InferProps } from "@rbxts/react/src/prop-types";
import { InferFusionProps } from "@rbxts/ui-labs";
import Button from "@src/client/components/ui/input/button";

const controls = {
    variant: "secondary",
    disabled: false,
};

function ButtonStory(props: InferProps<typeof controls>) {
    return (
        <Button
            variant={props.variant}
            onClick={() => print("Clicked!")}
            disabled={props.disabled}
        />
    );
}

const story = {
    react: React,
    reactRoblox: ReactRoblox,
    controls: controls,
    story: (props: InferFusionProps<typeof controls>) => {
        return <ButtonStory {...props.controls} />;
    },
};

export = story;
