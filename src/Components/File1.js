

import React, { useState } from "react";
import "./File1.css";
import { IoMdDoneAll } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

const File1 = () => {
  const [input, setinput] = useState("");
  const [store, updatestore] = useState([]);
  const [editid,seteditid]=useState(0)

  const handlesubmit = (e) => {
    e.preventDefault();
  };

  const submit = () => {
    if(input !==''){
    updatestore([...store, {list:input,id:Date.now(),status:false}]);
    console.log(store);
    setinput('');
    console.log("the input value "+input);}
    
    if(editid){
      const edittodo=store.find((input)=>input.id===editid)
      const updatetodo=store.map((value)=>value.id===edittodo.id
      ?(value={id:value.id,list:input})
      :(value={id:value.id,list:value.list}))
      updatestore(updatetodo)
      seteditid(0)
      setinput('')
    }
  };

const onDelete=(id)=>{

updatestore(store.filter((value)=>value.id!==id)
)
}

const oncomplete=(id)=>{
let complete=store.map((list)=>{
  if(list.id===id){
    return({...list,status:!list.status})
  }
  return list
})
updatestore(complete)
}

const onedit=(id)=>{
const editodo=store.find((value)=>value.id===id)
setinput(editodo.list)
seteditid(editodo.id)
}
 

  return (
    
      <div className='container'>
        <h2 id="text">TO DO APP</h2>
        <form className='form-group' onSubmit={handlesubmit}>
          <input
            type="text"
            value={input}
            placeholder="enter your task"
      className="form-control"
            onChange={(event) => setinput(event.target.value)}
          />
          <button  onClick={submit}>
            {editid?'EDIT':'ADD'}
          </button>
        </form>
        <div className="list">
          <ul>
            {store.map((value) => (
              <li className="list-items">
              <div className="list-item-list"id={value.status? 'list-item':''}> {value.list}</div> 

                <span>
                  <IoMdDoneAll className="list-item-icons"id="complete"  title="complete"onClick={()=>oncomplete(value.id)} />
                  <FiEdit className="list-item-icons"  id="edit" title="edit"onClick={()=>onedit(value.id)} />
                  <MdDelete className="list-item-icons" id="delete" title="delete" onClick={()=>onDelete(value.id)} />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    
  );
};

export default File1;




