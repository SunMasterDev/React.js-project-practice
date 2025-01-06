import CurrencyComponent from './component/CurrencyComponent';
import money from './img/money.png'
import {useEffect, useState} from "react"

function App() {
  const [currencyChoice,setCurrencyChoice]=useState([]) //เก็บสกุลเงิน array 

  const [fromCurrency,setFromCurrency]=useState("USD") //สกุลเงินต้นทาง
  const [toCurrency,setToCurrency]=useState("THB") // สกุลเงินปลายทาง

  const [amount,setAmount]=useState(1) //จำนวนเงืนเริ่มต้น
  const [exChangeRate,setExChangeRate]=useState(0) //อัตราการแลกเปลี่ยน

  const [checkFromCurrency,setCheckFromCurrency]=useState(true) //เก็บค่าสำหรับตรวจสอบเงื่อนไข ปลายทางหรือต้นทาง

  let fromAmount,toAmount //ตัวแปร เก็บเงินต้นทางและปลายทาง

  if(checkFromCurrency){ //ตรวจสอบช่อง input ใส่ต้นทางหรือปลายทาง
    fromAmount = amount
    toAmount = (amount*exChangeRate).toFixed(2) //แปลงไปปลาย
  }else{
    toAmount = amount
    fromAmount = (amount/exChangeRate).toFixed(2) //แปลงไปต้นทาง
  }

  useEffect(()=>{
    const url=`https://api.exchangerate-api.com/v4/latest/${fromCurrency}` //${fromCurrency}ดึงมาจากเงินต้นทาง
    fetch(url) //ดึงข้อมูล
    .then(res=>res.json()) //callback fucntion รอรับข้อมูลก่อน //res ตัวแปร const res = await fetch(URL)
    .then(data=>{
      setCurrencyChoice([...Object.keys(data.rates)])
      setExChangeRate(data.rates[toCurrency])
    })  //...object.keys ดึงมาเฉพาะ key จาก data.rate //... spread operator //มี {} เมื่อมี 2 function setCurrencyChoice setExChangeRate
  },[fromCurrency,toCurrency]) // ให้ดึงapiเมื่อการใช้ [fromCurrency,toCurrency] 

  const amountFronCurrency=(e)=>{ //e คือตัวเลขที่ป้อนใน input
    setAmount(e.target.value)
    setCheckFromCurrency(true)
  }

  const amountToCurrency=(e)=>{
    setAmount(e.target.value)
    setCheckFromCurrency(false)
  }
  return (
    <div>
      <img src={money} alt="logo" className="money-img"/>
      <h1>แอพแปลงสกุลเงิน (API)</h1>
      <div className="container">
        <CurrencyComponent 
        currencyChoice={currencyChoice} 
        selectCurrency={fromCurrency}
        changeCurrency={(e)=>setFromCurrency(e.target.value)}
        amount={fromAmount}
        onChangeAmount={amountFronCurrency}
        />
        <div className="equal">=</div>
        <CurrencyComponent 
        currencyChoice={currencyChoice} 
        selectCurrency={toCurrency}
        changeCurrency={(e)=>setToCurrency(e.target.value)}
        amount={toAmount}
        onChangeAmount={amountToCurrency} 
        />
      </div>
    </div>
  );
}

export default App;
//selectCurrency={toCurrency} คือprop เลือกแสดงจำนวนเงิน ต้นทางหรือปลาย
// changeCurrency={(e)=>setFromCurrency(e.target.value)} คือprop เปลี่ยนแปลงสกุลเงิน
// Line 17:5:  React Hook useEffect has a missing dependency: ให้เอา const url=`ไปเก็บใน useEffect
// useState คือ Hook โดยเราเรียกมันภายใน react function component เก็บข้อมูลไปใช้ในส่วนต่างๆ
//amount={toAmount} amount={fromAmount} prop ไปยัง currencyComponent