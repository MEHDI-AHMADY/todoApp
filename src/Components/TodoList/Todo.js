import React from "react";
import { FaCheck } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

function Todo({id , title , completed , onEdit , onRemove}) {
    const editTodoHandler = (id) => {
        onEdit(id)
    }

    const removeTodoHandler = (id) => {
        onRemove(id)
    }
  return (
   <div>

     <div className={`flex items-center shadow-md mb-3 ${completed ? 'opacity-70 line-through' : ''}`}>
      <div className="w-[200px] bg-slate-500 text-white/90 p-2">{title}</div>
      <button className="p-3 bg-slate-200 cursor-pointer" onClick={() => editTodoHandler(id)}><FaCheck /></button>
      <button className="p-3 bg-slate-300 cursor-pointer" onClick={() => removeTodoHandler(id)}><FaTrash /></button>
    </div>

   </div>
  );
}

export default Todo;
