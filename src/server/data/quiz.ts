type QuestionType = "multiple" | "boolean" | "text" | "number";

type Question =
    | {
          type: QuestionType;
          question: string;
      }
    | {
          type: "multiple";
          question: string;
          options: string[];
          correct: string;
      }
    | {
          type: "boolean";
          question: string;
          correct: boolean;
      }
    | {
          type: "text";
          question: string;
          correct: string;
      }
    | {
          type: "number";
          question: string;
          correct: number;
      };

class Quiz {
    private _id: number;
    private _questions: Question[];

    constructor(id: number, questions: Question[]) {
        this._id = id;
        this._questions = questions;
    }
}
