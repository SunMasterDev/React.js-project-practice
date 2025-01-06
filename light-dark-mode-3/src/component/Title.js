import { useContext } from "react"
import Switch from "react-switch"
import { ThemeContext } from "../App"
const Title=()=>{
    const {theme,setTheme}=useContext(ThemeContext) //สำหรับดักจับ switch //ประกาศตัวแปรรับค่า {}
    
    const toggleSwitch=(checked)=>{ //ลืมใส่ const
        setTheme(
            theme === "Light" ? "Dark" : "Light" //ternary opareter เหมาะใช้กับ boolane
        )
    }
        return(//เปลี่ยนชื่อคลาส 
            <header className={theme==="Dark"?"dark":"light"}>
                <span>Mode[{theme}]</span>
                <Switch
                    onChange={toggleSwitch}
                    checked={theme==="Dark"} //เปิดswtich เมื่อเป็น dark 
                    checkedIcon={false}
                    uncheckedIcon={false}
                    onColor={'#ffa500'}
                />
            </header>
        )
    

}

export default Title