import {Link} from "react-router-dom"
import { FaBars } from "react-icons/fa6";
import { FaWindowClose } from "react-icons/fa";
import { useState } from "react";
import "./Navigation.css"
import MenuData from "../data/MenuData";

const Navigation=()=>{
    const [showMenu,setShowMenu]=useState(false)
    const toggleMenu=()=>setShowMenu(!showMenu) //เปลี่ยนเป็น True
    return(
        <aside>
            <div className="navbar">
                <div className="navbar-toggle">
                    <Link to="#" className="menu-bar">
                        <FaBars onClick={toggleMenu}/>
                    </Link>
                </div>
                <nav className={showMenu ? "nav-menu active" : "nav-menu"}>
                    <ul className="nav-menu-item" onClick={toggleMenu}>
                        <li className="navbar-toggle">
                            <Link to="#" className="menu-bar">
                                <FaWindowClose/>
                            </Link>
                        </li>
                
                        {/* <li className="menu-text"> 
                          <Link to="#"><FaHouse />
                          <span>หน้าแรก</span></Link>
                        </li>
                        <li className="menu-text">
                          <Link to="#"><FaHouse />
                          <span>หน้าแรก</span></Link>
                        </li>
                        <li className="menu-text">
                          <Link to="#"><FaHouse />
                          <span>หน้าแรก</span></Link>
                        </li> */}

                        {MenuData.map((menu,index)=>{ //วนลูปเมนูแต่ละตัวที่สร้างใน MenuData //ใส่keyตลอด
                            return(
                                <li className="menu-text" key={index}> 
                                    <Link to={menu.path}>{menu.icon}<span>{menu.title}</span></Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </div>
        </aside>
    )
}
export default Navigation