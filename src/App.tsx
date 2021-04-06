import React,{useState} from 'react';
import './App.css';


import {QuestionCard} from './Components/QuestionCard'
//This is fetching api from  api file
import {QuestionState,FetchApi} from './Api/Api'
//This is difficulty level which we made and import from Api
import {Difficulty} from './Api/Api'

function App() {


const TOTAL_QUESTIONS=10  

type Answers={
    question: string;
    answer: string;
    correct: boolean;
    correctAnswer: string;
}

const [loading,setLoading]=useState(false)
const [questions,setQuestions]=useState<QuestionState[]>([])
const[userAnswer,setUserAnswer]=useState<Answers[]>([])
const [number,setNumber]=useState(0);
const[score,setScore]=useState(0);
const [gameOver,setGameOver]=useState(true)

console.log(questions)

  const startTrivia= async() =>{
          setLoading(true);
          setGameOver(false);

      const newQuestions= await FetchApi(
        TOTAL_QUESTIONS,
        Difficulty.EASY,       
      )

setQuestions(newQuestions);
setScore(0);
setUserAnswer([]);
setNumber(0);
setLoading(false);

  }
  const checkAnswer=(e: React.MouseEvent<HTMLButtonElement>) =>{

      e.preventDefault()
      if(!gameOver){
        const answer=e.currentTarget.value

        const correct=questions[number].correct_answer === answer;
        if(correct)setScore(prev => prev +1)
        const answerObject={
          question: questions[number].question,
          answer:answer,
          correct,
          correctAnswer: questions[number].correct_answer,
        };
           setUserAnswer((prev) => [...prev,answerObject]);
           
           
      }

  } 

   const nextQuestion=() =>{

   }

  return (
    <div>
      <h1>React Quiz</h1>
{gameOver || userAnswer.length  === TOTAL_QUESTIONS ? (
     <button onClick={startTrivia}>
       Start
       </button> 
       ): null}
     {!gameOver ? <p>Score: {score}</p> : null}
   {loading && <p>Loading Qestions...</p>}

   {!gameOver && !loading && (
  
       <QuestionCard
       questionNr={number +1}
       totalQuestions={TOTAL_QUESTIONS}
       questions={questions[number].question}
       answers={questions[number].answers}
       userAnswer={userAnswer ? userAnswer[number] : undefined}
       callback={checkAnswer}
       />
           
   )}
  {!gameOver && !loading && userAnswer.length === number + 1 && number  !== TOTAL_QUESTIONS - 1 ?(            
     <button onClick={nextQuestion}>Next Question</button>  
  ): null}
    </div>
  );
}

export default App;
