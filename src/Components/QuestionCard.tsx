import React from 'react'
import {AnswersObject} from '../Types/Types';
type props={
    questions: string,
    answers: string[],
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void,
    userAnswer: AnswersObject | undefined,
    questionNr: number,
    totalQuestions: number,
}
//we made functional comp and give the type of function then we makes like below
export const QuestionCard: React.FC<props> = ({questions,answers,callback,userAnswer,questionNr,totalQuestions}) => {
    return (
        <div>
            <p className="number">
            Question: {questionNr} /{totalQuestions}
            </p>
            <p dangerouslySetInnerHTML={{__html: questions}}>
            </p>
            <div>
                {answers.map((answer) =>{
                    return(
                    <div key={answer}>
                 <button disabled={userAnswer ? true : false} onClick={callback} value={answer}>
                     <span dangerouslySetInnerHTML={{__html: answer}}/>
                 </button>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}
