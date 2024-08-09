import React from "@rbxts/react";
import ReactRoblox from "@rbxts/react-roblox";
import { Storybook, ReactStory } from "@rbxts/ui-labs";
import Background from "@ui/background";

function BackgroundStory() {
    return <Background />;
}

const story = {
    react: React,
    reactRoblox: ReactRoblox,
    story: () => {
        return <BackgroundStory />;
    },
};

export = story;
