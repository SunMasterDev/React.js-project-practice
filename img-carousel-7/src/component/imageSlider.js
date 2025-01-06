import { useState } from "react";
import ImageData from "./ImageData"
import { FaLongArrowAltLeft , FaLongArrowAltRight } from "react-icons/fa";


const ImageSlider=()=>{
    const [current,setCurrent]=useState(0)
    const length=ImageData.length

    const prevSlide=()=>{
       //เมื่อถึงรูปแรก ให้รีเซ็ตindex lenght-1
        current===0 ?setCurrent(length-1):setCurrent(current-1)
    }
    const nextSlide=()=>{
        //เมื่อถึงรูปสุดท่าย ให้รีเซ็ตindex 0
        current===length-1 ?setCurrent(0):setCurrent(current+1)
    }
    return(
        <section className="slider">
            <FaLongArrowAltLeft className="leftArrow"onClick={prevSlide}/>
            <FaLongArrowAltRight className="rightArrow" onClick={nextSlide}/>
            {ImageData.map((data,index)=>{
                return(
                    <div className={index === current ? "slide active": "slide"} key={index}>
                        {index === current && (
                            <div>
                                <img src={data.image} alt={data.title} className="image"/>
                                <p>{data.title}</p>
                            </div>
                        )}
                    </div>
                )
            })}
        </section>
    )
}

export default ImageSlider