import React from "@rbxts/react";
import ReactRoblox from "@rbxts/react-roblox";
import QuizCreator from "../../ui/quizcreator";

function QuizCreatorStory() {
    return <QuizCreator />;
}

const story = {
    react: React,
    reactRoblox: ReactRoblox,
    story: () => {
        return <QuizCreatorStory />;
    },
};

export = story;
