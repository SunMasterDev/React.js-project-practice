import './App.css';
import PhotoComponent from './component/PhotoComponent';
import {useEffect, useState} from "react"

function App() {
  const apiKey=`zj4clrJ3p7GxOrLKXtfMk1IMXta5XRod2L427kl-koo` 
  
  const [photos,setPhotos]=useState([]) //ใช้เก็บรูป
  const [page,setPage]=useState(1) // จำนวนหน้าที่นำไปใช้การเลื่อนจอลง
  const [isLoading,setIsLoading]=useState(false)

  const fecthImage=async()=>{
    setIsLoading(true)
      try {
        const apiUrl=`https://api.unsplash.com/photos/?client_id=${apiKey}&page=${page}`
        const response=await fetch(apiUrl) //ดึงภาพ มาจาก api โดยใช้ async await รอก่อนทำงานจบก่อนค่อยเริ่มดึงรูป
        const data=await response.json() //แปลงให้เป็น json() เพื่อให้อ่านค่าได้ง่าย
        setPhotos([...photos,...data]) //เป็น 10 รูป ตามนักเรียน
        // setPhotos((oldData)=>{
        //   return [...oldData,...data]
        // }) //เก็บรูปไว้ใน state //เป็น 20รูป ตามครู
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false)
  }
  useEffect(() => { //แสดงผลเมื่อมีการเรนเดน app component
    fecthImage()
    // eslint-disable-next-line
  },[page])//เลื่อนลง ให้เรียกใช้ fetchImage

  useEffect(()=>{
    const event = window.addEventListener('scroll',()=>{
        if(window.innerHeight+window.scrollY>document.body.offsetHeight-500 && !isLoading){ //ตรวจสอบเงื่อนไขการเลือนหน้าจอ //ระยะ500 ไม่เลื่อนจนสุด
            setPage((oldPage)=>{
              return oldPage+1
            })
        }
    })
    return ()=>window.removeEventListener('scroll',event)
    // eslint-disable-next-line
  },[])
  
  return (
    <main>
      <h1>Infinnite Scroll Photo | Unsplash API</h1>
      <section className='photos'>
          <div className='display-photo'>
              {photos.map((data,index)=>{
                return <PhotoComponent key={index} {...data} />
              })}
          </div>
      </section>
    </main>
  );
}

export default App;
