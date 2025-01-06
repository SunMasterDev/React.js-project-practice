import { FaEdit,FaTrash } from "react-icons/fa";

const List=({id,title,removeItem,editItem})=>{
    return(
        <div className="list-item">
            <p className="title">{title}</p>
            <div className="button-container">
                <FaEdit onClick={()=>editItem(id)} className="btn"/>
                <FaTrash onClick={()=>removeItem(id)} className="btn"/>
            </div>
        </div>
    )
}

export default List