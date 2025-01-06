import { useState } from "react"
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";


const SingleContent=({title,description})=>{
    const [showContent,setShowContent]=useState(false)
    return(
        <article className="content">
            <header>
                <h4>{title}</h4>
                <button className="btn" onClick={()=>setShowContent(!showContent)}>
                {showContent ? <AiOutlineMinus/>: <AiOutlinePlus/>}
                </button>
            </header>
            {showContent && <p>{description}</p>} 
        </article>
    )
}
export default SingleContent

//{showContent && <p>{description}</p>}  ซ่อนเนื้อหาไว้ก่อน //onClick={()=>setShowContent(!showContent) เมื่อทำการคลิกให้เปลี่ยน useState เป็น True
//{showContent ? <AiOutlineMinus/>: <AiOutlinePlus/>} แสดงรูปไอคอน - +