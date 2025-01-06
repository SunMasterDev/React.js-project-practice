//สร้าง context api=>ให้บริการขู้มูลแก่ component ใน app
import {createContext,useContext,useReducer,useEffect} from 'react'
import CartData from "../data/CartData"
import reducer from './reducer'

const initState={ //เก็บข้อมูล ไปใช้แต่ละ component
    cart:CartData,
    total:0,
    amount:0
}


const CartContext=createContext() //ก้อนข้อมูลที่ถูกส่งไปยังแต่ละ component

export const MyCartContext=()=>{ //สร้างมาเพื่อไม่ต้องใช้ import ทุกๆ component
    return useContext(CartContext)
}

const CartProvider=({children})=>{ //จัดการการกระทำข้อมูลใน initstate โดย reducer //provider บริการข้อมูล
    const [state,dispatch]=useReducer(reducer,initState) //state ข้อมูล dispatch ตัวควบคุม //child ตัวแทนแต่ละcomponent

    useEffect(()=>{
        dispatch({type:"CALCULATE_TOTAL"})
    },[state.cart])

    const removeItem=(id)=>{ //ทำการลบไอเทม x
        dispatch({type:"REMOVE_ITEM",payload:id}) //{"ชื่อรูปแบบ action",ค่าที่ส่งไปทำงาน}
    }
    const toggleQuantity=(id,type)=>{ //ลดเพิ่มจำนวนสินค้า
        dispatch({type:"TOGGLE_QUANTITY",payload:{id,type}}) //dispatch ตัวควบคุม //type ตัวลด หรือ เพิ่ม
    }
    
    const formatNumber=(num)=> { //ใส่ลูกน้ำคั่น
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
  
    return(
        <CartContext.Provider value={{...state,removeItem,toggleQuantity,formatNumber}}>
            {children} 
        </CartContext.Provider>
    )
}

export {CartContext,CartProvider}