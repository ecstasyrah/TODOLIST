import React from "react";
import './des.css';

const TodoThings = ({ td, onDelete }) => {
    const toDelete = () => {
        onDelete(td.id);
    }

    return (
        <div className="toDoThings">
            <div className="textB">
            <span >{td.text}</span>
            </div>
            <button className="deleteB" onClick={toDelete}>
                DONE
            </button>
            
        </div>
    )
}

export default TodoThings;