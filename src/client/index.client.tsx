const PlayerGui = game
    .GetService("Players")
    .LocalPlayer.WaitForChild("PlayerGui");

import React, { StrictMode } from "@rbxts/react";
import { createRoot } from "@rbxts/react-roblox";
import Button from "./components/ui/input/button";
import App from "./components/ui/app";

const container = new Instance("ScreenGui");
container.ResetOnSpawn = false;
container.ZIndexBehavior = Enum.ZIndexBehavior.Sibling;
container.DisplayOrder = 0;
container.IgnoreGuiInset = true;
container.Parent = PlayerGui;

const root = createRoot(container);

root.render(
    <StrictMode>
        <App />
    </StrictMode>,
);
