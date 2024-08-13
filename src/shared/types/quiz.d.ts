export type QuestionType = "Multiple Choice" | "True/False" | "Short Answer";
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

export type Question = {
    coverImage?: string;
    question: string;
    type: QuestionType;
    points: Points;
    timeLimit: TimeLimit;
} & (
    | {
          type: "Multiple Choice";
          answerType: AnswerType;
          options: string[];
          answer: number[];
      }
    | {
          type: "True/False";
          answer: boolean;
      }
    | {
          type: "Short Answer";
          answer: string;
      }
);

export type Quiz = {
    questions: Question[];
    name: string;
    dateCreated: string;
    dateModified: string;
    creator: string;
    creatorId: number;
    category: string;
};
