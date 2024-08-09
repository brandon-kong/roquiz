import React from "@rbxts/react";
import Background from "./background";
import CodeSubmitForm from "./input/code-submit-form";
import UserQuizzes from "./userquizzes";

function App() {
    return (
        <Background>
            <UserQuizzes />
            {/*<CodeSubmitForm />*/}
        </Background>
    );
}

export = App;
