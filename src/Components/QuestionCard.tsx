import React from 'react'
import {AnswersObject} from '../Types/Types';
import {Wrapper} from './QuestionCard.style'
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
        <Wrapper>
            <p className="number">
            Question: {questionNr} /{totalQuestions}
            </p>
            <p  className='question' dangerouslySetInnerHTML={{__html: questions}}>
            </p>
            <div >
                {answers.map((answer) =>{
                    return(
                    <div key={answer} >
                 <button   className="options" disabled={userAnswer ? true : false} onClick={callback} value={answer}>
                     <span dangerouslySetInnerHTML={{__html: answer}}/>
                 </button>
                    </div>
                    )
                })}
            </div>
        </Wrapper>
    )
}
