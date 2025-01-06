//แสดงรายการสินค้าแต่ละรายการ
import plus from "../image/plus.svg"
import minus from"../image/minus.svg"
import deleteIcon from "../image/delete-icn.svg"
import { MyCartContext } from "../management/context"

const CartItem=({id,name,image_url,price,quantity})=>{
    const {removeItem,toggleQuantity,formatNumber} = MyCartContext()
    return(
        <div className="item">
            <div className="product_image">
                <img src={image_url} alt={name}/>
            </div>

            <div className="description">
                <span>{name}</span>
                <span>ราคา {formatNumber(price)} บาท</span>
            </div>

            <div className="quantity">
                <button className="plus-btn" onClick={()=>toggleQuantity(id,"increment")}> 
                    <img src={plus} alt=""/>
                </button>

                <input type="text" name="" value={quantity} disabled/>
                
                <button className="minus-btn" onClick={()=>toggleQuantity(id,"decrement")}>
                    <img src={minus} alt=""/>
                </button>
            </div>

            <div className="total-price">
                {formatNumber(quantity*price)}
            </div>
            
            <div className="remove">
                <img src={deleteIcon} alt="cross" onClick={()=>removeItem(id)}/>
            </div>
        </div>
    )
}

export default CartItem

//increment คือการเพิ่ม parameter ตัวที่ 2 สถานะ