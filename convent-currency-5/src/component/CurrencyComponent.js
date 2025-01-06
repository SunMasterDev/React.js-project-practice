import './CurrencyComponent.css'
const CurrencyComponent=(props)=>{
    const {currencyChoice,selectCurrency,changeCurrency,amount,onChangeAmount} = props //ตั้งชื่อ object ผิด currencyChoice //changeCurrency prop ไปยังตัวแม่
    return(
        <div className="currency">
            <select value={selectCurrency} onChange={changeCurrency}> 
               {currencyChoice.map((choice)=>
                <option key={choice}value={choice}>{choice}</option> //ใส่ value สำคัญkey
               )}
            </select> 
            <input type="number" 
            value={amount}
            onChange={onChangeAmount}
            /> 
        </div>
    );
}

export default CurrencyComponent
// value={selectCurrency} //ค่ำเริ่มต้นสกุล ดึงมาจาก prop
//changeCurrency onChange เมือมีการเปลี่ยนแปลงตัวเลือก
// value={amount} รับ prop จำนวนเงิน