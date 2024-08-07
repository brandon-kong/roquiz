import type { Storybook } from "@rbxts/ui-labs";
import ReactRoblox from "@rbxts/react-roblox";
import React from "@rbxts/react";

declare const script: {
    Parent: Instance & {
        components: Folder & {
            ui: Folder & {
                stories: Folder;
            };
        };
    };
};

const storybook: Storybook = {
    name: "Client UI",
    storyRoots: [script.Parent.components.ui.stories],
    react: React,
    reactRoblox: ReactRoblox,
};

export = storybook;
