import './App.css';
import { useState , useEffect } from 'react'

function App() {
  // const data=[
  //   {id:1,name:"Thailand",region:"Asia",population:100},
  //   {id:2,name:"Japan",region:"Asia",population:50}
  // ]

  const[countries,setCountries]=useState([])
  const[word,setWord]=useState("")
  const[dataFilter]=useState(["name","capital"]) //เงื่อนไขในการค้นหา
  
  useEffect(()=>{
    fetch("https://restcountries.com/v2/all")
    .then(res=>res.json()) //ส่งผ่าน Json
    .then(data=>{
        setCountries(data)
    })
  },[])

  const formatNumber=(num)=>{
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

const searchCountries=(countries)=>{ //การค้นหา
  return countries.filter((item)=>{ // filter กรองไอเทม
     return dataFilter.some((filter)=>{ //some ตรงบางตัวหรือไม่
        if(item[filter]){
          return (item[filter]
            .toString()
            .toLowerCase()
            .indexOf(word.toLowerCase())>-1
            );
        } //>-1 ตรงกับช่องที่ค้นหาหรือไม่ //indexOf(word) return เลข index ของ array แรกที่เจอเหมือนกัน
     }) //ข้อมูลไอเทม //.toString()แปลงเป็น string .toLowerCase แปลงเป็ฯตัวพิมเล็กช่องค้นหา
  })
}
  return (
   <div className="container">
    <div className='search-container'>
      <label htmlFor="search-form">
        <input type="text" className="search-input" 
        placeholder='ค้นหาประเทศที่ต้องการ (เมืองหลวง,ชื่อประเทศ)'
        value={word}
        onChange={(e)=>setWord(e.target.value)} //ลืมใส่ e ทำให้ bug
        />
      </label>
    </div>
      <ul className='row'>
      {searchCountries(countries).map((item,index)=>{ //countries.map เก่า
        return (
            <li key={index}>
              <div className='card'>
                <div className='card-title'>
                  <img src={item.flag} alt={item.name} />
                </div>

                <div className='card-body'>
                  <div className='card-description'>
                    <h2>{item.name}</h2>
                    <ol className='card-list'>
                      <li>ประชากร : <span>{formatNumber(item.population)}</span> คน</li>
                      <li>ภูมิภาค : <span>{item.region}</span></li>
                      <li>เมืองหลวง : <span>{item.capital}</span></li>
                    </ol>
                  </div>
                </div>
              </div>
            </li>
        )
    })}
      </ul>
   </div>
  );
}

export default App;
