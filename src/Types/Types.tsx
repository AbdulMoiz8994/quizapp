
 

export type Question={
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    type: string;
    question: string
}

export type QuestionData={
    question: string
    answers: string
    options: string[]
}