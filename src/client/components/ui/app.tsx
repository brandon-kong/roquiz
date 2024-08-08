import React from "@rbxts/react";
import Button from "@src/client/components/ui/input/button";

function App() {
    return (
        <frame
            BackgroundTransparency={1}
            Size={new UDim2(1, 0, 1, 0)}
            BackgroundColor3={Color3.fromRGB(255, 255, 255)}
        >
            <Button
                onClick={() => {
                    print("Clicked!");
                }}
                text="Click me!"
            />
        </frame>
    );
}

export = App;
