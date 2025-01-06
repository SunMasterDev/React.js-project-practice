import { useContext, useEffect, useState } from "react" //ลืมimport
import QuestionsData from "../data/QuestionsData"
import { DataContext } from "../App"

const Quiz =()=>{ //เกิดbug เพราะ ClassName C ตัวใหญ่ //current+1 เพิ่มเลขindex ไปแสดงผล
    const [current,setCurrent]=useState(0) //อ้างอิงไปคำถามข้อแรก
    const [selectChoice,setSelectChoice]=useState("")
    const {score,setScore,setAppState}=useContext(DataContext)

    useEffect(()=>{ //ตรวจคำตอบ //ด้านล่าง comment แก้ปัญหา useEffect error
        checkAnswer()
        // eslint-disable-next-line 
    },[selectChoice])

    const checkAnswer=()=>{
        if(selectChoice!==""){
            if(selectChoice===QuestionsData[current].answer){
                setScore(score+1)
                nextQuestion()
            }else{
                console.log("ตอบผิดไม่ได้คะแนน");
                nextQuestion()
            }
        }
    }

    const nextQuestion=()=>{ //คำถามถัดไป
        setSelectChoice("")//ใช้ function
        if(current === QuestionsData.length-1){ //เหลือคำถาม 0-4 เลข index
            setAppState('score')
        }else{
            setCurrent(current+1) //ยังไม่จบคำถามให้เพิ่ม +1
        }
    }
    return( //buG ค่า abcd อยู่ใน sting ""
        <div className="quiz"> 
            <h1>{QuestionsData[current].question}</h1>
            <div className="choices">
                <button onClick={()=>setSelectChoice("A")}>{QuestionsData[current].A}</button>
                <button onClick={()=>setSelectChoice("B")}>{QuestionsData[current].B}</button>
                <button onClick={()=>setSelectChoice("C")}>{QuestionsData[current].C}</button>
                <button onClick={()=>setSelectChoice("D")}>{QuestionsData[current].D}</button>
            </div>
            <p>{`${current+1}/${QuestionsData.length}`}</p>
        </div>
    )
}
export default Quiz