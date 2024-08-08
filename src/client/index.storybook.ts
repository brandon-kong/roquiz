import type { Storybook } from "@rbxts/ui-labs";
import ReactRoblox from "@rbxts/react-roblox";
import React from "@rbxts/react";

declare const script: {
    Parent: Instance & {
        components: Folder & {
            stories: Folder;
        };
    };
};

const storybook: Storybook = {
    name: "Client UI",
    storyRoots: [script.Parent.components.stories],
    react: React,
    reactRoblox: ReactRoblox,
};

export = storybook;
