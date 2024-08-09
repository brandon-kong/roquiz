import type { Storybook } from "@rbxts/ui-labs";
import ReactRoblox from "@rbxts/react-roblox";
import React from "@rbxts/react";
import Roact from "@rbxts/roact";

declare const script: {
    Parent: Instance & {
        components: Folder & {
            stories: Folder & {
                inputs: Folder;
            };
        };
    };
};

const storybook: Storybook = {
    name: "Client UI",
    storyRoots: [
        script.Parent.components.stories,
        script.Parent.components.stories.inputs,
    ],
    groupRoots: false,
    react: React,
    reactRoblox: ReactRoblox,
};

export = storybook;
