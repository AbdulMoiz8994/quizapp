
import {SuffleArray} from '../Suffle/Suffle'
import axios from 'axios';

export type Question={
    category: string;
    corect_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    type: string;
    question: string
}

export type QuestionState= Question & {answers: string[]}

export enum Difficulty{
    EASY= 'easy',
    MEDIUM='medium',
    HARD='hard'
}



export const FetchApi= async(amount: number,difficulty: Difficulty) =>{

    // const endPoint= `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`
    //we can make await like this below in same line we fecth data of end point and convert this in json
    // const {results}=await (await fetch(endPoint)).json()
    const {data:{results}}= await axios.get(`https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`)
    // console.log(results);
    return results.map((question: Question) => (
        {
            ...question,
             answers: SuffleArray([...question.incorrect_answers, question.corect_answer])
        }
    ))
    
}