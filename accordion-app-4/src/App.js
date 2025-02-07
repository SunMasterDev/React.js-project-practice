import './App.css';
import SingleContent from './component/SingleContent';
import data from './data';
import {useState} from "react";

function App() {
  const[content,setContent]=useState(data)
  return (
    <main>
      <div className="container">
        <h3>เครื่องมือพัฒนาเว็บปี 2024</h3>
        <section>
          {content.map((data)=>{
            return <SingleContent key={data.id} {...data}/>
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
