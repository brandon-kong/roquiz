import React from "@rbxts/react";
import ReactRoblox from "@rbxts/react-roblox";
import { Storybook, ReactStory } from "@rbxts/ui-labs";
import App from "@ui/app";

function AppStory() {
    return <App />;
}

const story = {
    react: React,
    reactRoblox: ReactRoblox,
    story: () => {
        return <AppStory />;
    },
};

export = story;
