import React from "@rbxts/react";
import ReactRoblox from "@rbxts/react-roblox";
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