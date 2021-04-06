
import {SuffleArray} from '../Suffle/Suffle'
// import axios from 'axios';
// import  React from 'react';
import {Question,QuestionData} from "../Types/Types";


export type QuestionState= Question & {answers: string[]}

export enum Difficulty{
    EASY= "easy",
    MEDIUM="medium",
    HARD="hard"
}



export const FetchApi= async(amount: number,difficulty: Difficulty) =>{

    
        const response= await fetch(`https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`)
        const {results}=await response.json();
        // console.log(results);
        const quizQuestion= results.map((question: Question) => (
            {
                ...question,
                 answers: SuffleArray([...question.incorrect_answers, question.correct_answer])
            }
        ))
 
    return quizQuestion
    
    
}