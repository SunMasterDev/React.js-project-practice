import { useContext } from "react"
import { DataContext } from "../App"
import QuestionsData from "../data/QuestionsData" //จำนวนของคะแนน

const Score =()=>{
   const {score,setAppState,setScore}= useContext(DataContext) //ผลคะแนนที่นำมาแสดงผล

   const restartApp=()=>{
    setScore(0)
    setAppState("menu")
   }
    return(
        <div className="score">
            <h1>สรุปผลคะแนนสอบ</h1>
            <h2>{score} / {QuestionsData.length}</h2>
            <button onClick={restartApp}>ทำแบบทดสอบอีกครั้ง</button>
        </div>
    )
}

export default Score