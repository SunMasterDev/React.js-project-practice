import './App.css'
import Title from "./component/Title";
import Content from "./component/Content";
import { createContext, useState } from 'react'; //บอกสถานะ light dark ไปยังแต่ละ component

export const ThemeContext=createContext()

function App() {
  const [theme,setTheme] = useState("Light") //เก็บโหมด
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div>
        <Title />
        <Content />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
