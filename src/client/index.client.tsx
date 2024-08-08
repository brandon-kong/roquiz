import { Players } from "@rbxts/services";
import React, { StrictMode } from "@rbxts/react";
import { createRoot } from "@rbxts/react-roblox";
import Button from "./components/ui/button";
import App from "./components/ui/app";

const player = Players.LocalPlayer;

const root = createRoot(new Instance("Folder"));

root.render(
    <StrictMode>
        createPortal(
        <App />, player.WaitForChild("PlayerGui"))
    </StrictMode>,
);
