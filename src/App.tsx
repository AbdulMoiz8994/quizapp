import React,{useState} from 'react';
import './App.css';


// import {QuestionCard} from './Components/QuestionCard'
//This is fetching api from  api file
import {FetchApi} from './Api/Api'
//This is difficulty level which we made and import from Api
import {Difficulty} from './Api/Api'

function App() {


const TOTAL_QUESTIONS=10  
const [loading,setLoading]=useState(false)
const [questions,setQuestions]=useState([])
const[userAnswer,setUserAnswer]=useState([])
const [number,setNumber]=useState(0);
const[score,setScore]=useState(0);
const [gameOver,setGameOver]=useState(true)

console.log(FetchApi(TOTAL_QUESTIONS,Difficulty.HARD))

  const startTrivia= async() =>{

  }
  const checkAnswer=(e: React.MouseEvent<HTMLButtonElement>) =>{
      e.preventDefault()
  } 

   const nextQuestion=() =>{

   }

  return (
    <div>
      <h1>React Quiz</h1>

     <button onClick={startTrivia}>
       Start
       </button> 
       <p>Score:</p>
       <p>Loading Qestions...</p>
       {/* <QuestionCard
       questionNr={number +1}
       totalQuestions={TOTAL_QUESTIONS}
       questions={questions[number].questions}
       answers={questions[number.answers]}
       userAnswer={userAnswer ? userAnswer[number] : undefined}
       callback={checkAnswer}
       />
       <button className="call" onClick={checkAnswer}>Next Question</button>
               
       */}
    </div>
  );
}

export default App;
