import './App.css';
import {useEffect, useState} from 'react';

function App() {
  const name="Paris"
  const apiKey="af368f694925c7b3231c815fb81bcf8d"
  const [city,setCity]=useState({})
  const [isLoading,setIsLoading]=useState(false)

  useEffect(()=>{ 
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiKey}`
    fetch(url) //ส่ง request 
    .then(res=>res.json()) //แปลงเป็น JSON
    .then(data=>{ //ส่งไปที่ Data เก็บใน state city
      setCity(data)
      setIsLoading(true) //ตรวจสอบค่า api เปลี่ยนเป็น true เมื่อดึงข้อมูล
    })
  },[name]) //เปลี่ยนแปลงค่าเมื่อเปลี่ยนชื่อ state

  const conventTemp=(k)=>{
    return (k-273).toFixed() //tofix แปลงจำนวนเต็มหรือเลขทศนิยมกี่ตำแหน่ง
  }
  return ( //isLoading คือการตรวจว่าดึงข้อมูลมาครบหรือยัง//แก้ปัญหา api ไม่แสดงผล 
   (isLoading && <div className="App"> 
   <section>
     <div className="location">
         <h1 className="city">{city.name}</h1>
         <p className="state">{city.sys.country}</p>
     </div>
     <div className="card">
       <div className="weather">
         <h1>{conventTemp(city.main.temp)}&deg;C</h1>
         <small>max : {conventTemp(city.main.temp_max)}&deg;C , min : {conventTemp(city.main.temp_min)}&deg;C</small>
       </div>
       <div className="info">
           <div className="status">{city.weather[0].main}</div>
           <div className="humidity">ค่าความชื้น = {city.main.humidity}</div>
           <div className="wind">ความเร็มลม = {city.wind.speed}</div>
       </div>
     </div>
   </section>
 </div>)
  );
}

export default App;
