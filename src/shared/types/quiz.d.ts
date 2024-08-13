export type QuestionType = "Multiple Choice" | "True or False" | "Short Answer";
export type TimeLimit =
    | "None"
    | "5 seconds"
    | "10 seconds"
    | "15 seconds"
    | "20 seconds"
    | "30 seconds"
    | "1 minute"
    | "2 minutes"
    | "3 minutes"
    | "5 minutes";
export type Points =
    | "Standard"
    | "Double Points"
    | "No Points"
    | "All or Nothing";
export type AnswerType = "Single" | "Multiple";

export type BaseQuestion = {
    question: string;
    points: Points;
    timeLimit: TimeLimit;
    coverImage?: string;
};

export type MultipleChoiceQuestion = BaseQuestion & {
    type: "Multiple Choice";
    answerType: AnswerType;
    options: string[];
    answer: {
        [key: number]: boolean;
    };
};

export type TrueFalseQuestion = BaseQuestion & {
    type: "True or False";
    answer: boolean;
};

export type ShortAnswerQuestion = BaseQuestion & {
    type: "Short Answer";
    answer: string;
};

export type Question =
    | MultipleChoiceQuestion
    | TrueFalseQuestion
    | ShortAnswerQuestion;

export type Quiz = {
    questions: Question[];
    name: string;
    dateCreated: string;
    dateModified: string;
    creator: string;
    creatorId: number;
    category: string;
};
