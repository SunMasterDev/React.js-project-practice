const FoodComponent=({foodName,image_url})=>{ //JSX //pop อย่าลืมใส่ {}
    return(
        <div className="single-food"> 
            <h2>{foodName}</h2>
            <img src={image_url} alt={foodName}/>
        </div>
    )
}

export default FoodComponent