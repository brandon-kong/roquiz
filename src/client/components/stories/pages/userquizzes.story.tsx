import React from "@rbxts/react";
import ReactRoblox from "@rbxts/react-roblox";
import UserQuizzes from "../../ui/userquizzes";

function UserQuizzesStory() {
    return <UserQuizzes />;
}

const story = {
    react: React,
    reactRoblox: ReactRoblox,
    story: () => {
        return <UserQuizzesStory />;
    },
};

export = story;
