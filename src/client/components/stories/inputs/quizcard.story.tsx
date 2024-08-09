import React from "@rbxts/react";
import ReactRoblox from "@rbxts/react-roblox";
import CodeSubmitForm from "../../ui/input/code-submit-form";
import QuizCard from "../../ui/input/quiz-card";

function QuizCardStory() {
    return <QuizCard />;
}

const story = {
    react: React,
    reactRoblox: ReactRoblox,
    story: () => {
        return <QuizCardStory />;
    },
};

export = story;
