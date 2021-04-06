import React from 'react'

type props={
    questions: string,
    answers: string[],
    callback: any,
    userAnswer: any,
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
                    // return(
                    <div>
                 <button disabled={userAnswer} onClick={callback}>
                     <span dangerouslySetInnerHTML={{__html: answer}}/>
                 </button>
                    </div>
                    // )
                })}
            </div>
        </div>
    )
}
