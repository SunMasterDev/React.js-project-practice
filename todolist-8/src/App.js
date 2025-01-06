import './App.css';
import {useState}from "react"
import { v4 as uuidv4 } from 'uuid';
import List from './component/List';
import Alert from './component/Alert';

function App() {
  const [name,setName]=useState("")
  const [list,setList]=useState([])

  const [alert,setAlert]=useState({show:false,msg:'',type:''})
  const [checkEditItem,setCheckEditItem]=useState(false)
  const [editId,setEditId]=useState('') //ค่า null กันบัค

  const submitData=(e)=>{
    e.preventDefault() //คงค่าไว้
    if(!name){
      //แสดง Alert
      setAlert({show:true,msg:'กรุณาป้อนข้อมูลด้วย',type:'error'})
    }else if(checkEditItem&&name){ 
      //แก้ไขข้อมูล
     const result = list.map((item)=>{
        if(item.id === editId){
          return {...item,title:name}
        }
        return item
      })
      setList(result)
      setName("")
      setCheckEditItem(false) //ไม่ใช่ fucnction เพราะว่าไปใช้ checkEditItem ทำให้เกิดบัค
      setEditId('')
      setAlert({show:true,msg:"แก้ไขข้อมูลเรียบร้อย",type:"success"})
    }else{ //แสดงข้อมูล
      const newItem={
        id:uuidv4(),
        title : name
      }
      setList([...list,newItem])
      setName('') //ใส่รายการเสร็จ ให้เป็นช่องว่างที่ input
      setAlert({show:true,msg:'บันทึกข้อมูลเรียบร้อย',type:'success'})
    }
  }

  const removeItem=(id)=>{
  const result=list.filter((item)=>item.id !== id )
  setList(result)
  setAlert({show:true,msg:"ลบข้มูลเรียบร้อย!",type:"error"})
  }

  const editItem=(id)=>{ //ลืมใส่ id ใน parameter เกิด bug
    setCheckEditItem(true)
    setEditId(id)
    const searchItem=list.find((item)=>item.id === id) //เกิด bug เพราะ === item ต้องเป็น id
    setName(searchItem.title) //Title ไม่ใข่ name
  }

  return (
    <section className="container">
    <h1>TodoList App</h1>
    {alert.show && <Alert {...alert} setAlert={setAlert} list={list}/>}
    <form className="form-group" onSubmit={submitData}> 
      <div className="form-control">
        <input type="text" className="text-input" 
          onChange={(e)=>setName(e.target.value)}
          value={name}
          />
        <button type="submit" className="submit-btn">
          {checkEditItem ? "แก้ไขข้อมูล" : "เพิ่มข้อมูล"}
          </button>
      </div>
    </form>
    <section className="list-container">
        {list.map((data,index)=>{
          return <List key={index} {...data} removeItem={removeItem} editItem={editItem}/>
        })}
    </section>
  </section>
  );
}

export default App;
