import './App.css';
import FoodComponent from './component/FoodComponent';
import { useEffect, useState } from 'react'
import MenuData from './data/MenuData';

function App() {
  const [foodData,setFoodData]=useState(MenuData)
  const [dataInPage,setDataInPage]=useState([]) //เก็บข้อมูลในแต่ละหน้า
  const [page,setPage]=useState(0)

  //ข้อมูลทั้งหมด 10 จำนวน
  //จำนวนข้อมูลแต่ละหน้า
  //จำนวนเลขหน้า = ข้อมูลทั้งหมด / จำนวนรายการแต่ละหน้า

  // 14 รายการ 14/3 = 5 หน้า
  //1= 1-3 , 2=4-6

  const pagination=()=>{
    const foodPerpage = 7 //รายการอาหารแต่ละหน้าต่อ 1 หน้า
    const pages =Math.ceil(MenuData.length / foodPerpage) //ดึงสมาชิกอาเรย์ //Math.ceil JavaScript คือ คำสั่ง หรือฟังก์ชันสำหรับปัดทศนิยมขึ้นให้เป็นเลขจำนวนเต็ม โดยให้มีค่าที่ใกล้เคียงที่สุดกับค่าเดิม

    const newFood=Array.from({length:pages},(data,index)=>{
      const start=index*foodPerpage //[0,] , หน้าที่ 2 [4,] หน้าใดถึงหน้าใด
      return MenuData.slice(start,start+foodPerpage) //slice นั้นเป็นการหั่นส่วนของ array ตาม index ที่เราต้องการ และ return ออกมาเป็น array ใหม่
    })
    return newFood //ลืม return newFood
  }

  const handlePage=(index)=>{ //จัดหน้าแต่ละหน้า
    setPage(index)
  }

  useEffect(()=>{
    const paginate=pagination() //สร้างหมายเลขหน้าพร้อมข้อมูลเรียกว่า paginate
    setDataInPage(paginate)//จำนวนปุ่มกดแต่ละหน้า
    setFoodData(paginate[page]) //มาจาก foodData.map เปลี่ยนให้เป็น paginate
     // eslint-disable-next-line
  },[page])//pages เรียกใช้งา่นด้านใน
  return (
      <div className='App'>
        <h1>FoodCard | Pagination</h1>
        <div className='container'>
          {foodData.map((data,index)=>{//สร้าง foodcomponent ตาม MenuData ที่มากจาก food data
          return <FoodComponent key={index} {...data}/>
        })}
        </div>
        <div className='pagination-container'>
          {dataInPage.map((data,index)=>{
            return (
              <button 
              key={index} 
              onClick={()=>handlePage(index)}
              className={`page-btn ${index === page ? "active-btn" : null}`} //เลขindexตรงกับเลขpage
              >{index+1}</button>
            )
          })}
        </div>
      </div>
    
  );
}

export default App;
