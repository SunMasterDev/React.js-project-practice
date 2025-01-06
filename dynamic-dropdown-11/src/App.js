import './App.css';
import DropdownComponent from './component/DropdownComponent';
import FoodComponent from './component/FoodComponent';
import { useState } from "react"
import MenuData from './data/MenuData';

function App() {
  const [foods,setFoods]=useState(MenuData)

  const changeFoodData=(e)=>{ //เปลี่ยนโหมดหมู่อาหาร
      const category=e.target.value
      if (category === "เมนูทั้งหมด") {
          setFoods(MenuData)
      }else{
        const result=MenuData.filter((e)=>{
          return e.menu === category //menu มาจาก MenuData
        })
        setFoods(result) //แสดงจาก เงื่อนไข else
      }
  }
  return (
    <div className="container">
        <DropdownComponent changeFoodData={changeFoodData}/>
        <div className='content'>
            {foods.map((data,index)=>{
                return <FoodComponent key={index} {...data}/>
            })}
        </div>
    </div>
  );
}

export default App;
