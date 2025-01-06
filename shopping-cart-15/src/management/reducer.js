//กำหนดการกระทำใน app
const reducer=(state,action)=>{
    if(action.type === "REMOVE_ITEM"){
        return{ //ลบไอเทม
            ...state,
            cart:state.cart.filter((item)=>item.id !== action.payload)
        }
    }
    if(action.type === "TOGGLE_QUANTITY"){ //เพิ่มลดจำนวนสินค้า
       let newCart=state.cart.map((item)=>{ //newCart ค่าล่าสุดที่ได้มาจากเพิ่มลด
            if(item.id === action.payload.id){
                if(action.payload.type === "increment"){
                    return{
                        ...item,
                        quantity:item.quantity<5 ? item.quantity+1 : item.quantity
                    }
                }
                if(action.payload.type === "decrement"){
                    return{
                        ...item,
                        quantity:item.quantity-1
                    }
                }
            }
            return item
        }).filter((item)=>item.quantity !==0)
        return{
            ...state,cart:newCart //cart:newCart (update) สินค้าที่เพิ่มลด
        }
       } 

    if(action.type === "CALCULATE_TOTAL"){ //คำนวณค่ายอดรวม
       const {total,amount}=state.cart.reduce((cartTotal,item)=>{ //cartTotal เก็บค่าเริ่มต้น total amount //item เก็บ cart
            const {price,quantity} = item
            const itemTotal = price*quantity
            cartTotal.total += itemTotal
            cartTotal.amount += quantity
            return cartTotal
        },{
            total:0,
            amount:0
        })
        return{
            ...state,total,amount //const {total,amount} มาใส่ total amount
        }
    }
}
export default reducer