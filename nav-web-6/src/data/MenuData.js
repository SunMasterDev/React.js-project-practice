import {FaHouse } from "react-icons/fa6";
import { FaUser , FaShoppingCart  } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";

const MenuData=[
    {
        title:"หน้าแรก",
        path:"/",
        icon:<FaHouse/>
    },
    {
        title:"สมาชิก",
        path:"/Member",
        icon:<FaUser/>
    },
    {
        title:"สินค้า",
        path:"/Product",
        icon:<FaShoppingCart/>
    },
    {
        title:"ติดต่อสอบถาม",
        path:"/contact",
        icon:<MdContactPhone/>
    },
]

export default MenuData