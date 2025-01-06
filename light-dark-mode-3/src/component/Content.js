import { useContext } from 'react'
import light from'../component/image/light.svg'
import dark from'../component/image/dark.svg'
import { ThemeContext } from '../App'

const Content=()=>{ //ลืมใส่ <img/> ไม่ใช่ <img> แท็กเดียวต้องมี/
      const {theme}=useContext(ThemeContext) //ไม่มี setTheme เพราะว่าไม่มีการสลับโหมด
    return(
      <main className={theme==="Dark"?"dark":"light"}>
           <div>
            <h1>SunMaster official</h1>
            <p>DarkMode WorkShop</p>
          </div>
        <img src={theme==="Dark"?dark:light} alt="Logo"/> 
      </main>
    )
}

export default Content