import React from 'react'
import {useState} from 'react';

export default function AddTodoForm(props) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert('Can not add blank value')
        }else{
            props.addTodo(title, desc);
            setTitle('');
            setDesc('');
        }
    }
    return (
        <div className='container my-3'>
            <h3>Add a ToDo</h3>
            <form onSubmit = {submit}>
            <div className="mb-3">
                <label to="exampleFormControlInput1" className="form-label">Todo Title</label>
                <input type="text" className="form-control" id="title" value = {title} onChange={(e)=>setTitle(e.target.value)} placeholder="Add title for ToDo"/>
            </div>
            <div className="mb-3">
                <label to="exampleFormControlTextarea1" className="form-label">Todo Description</label>
                <textarea className="form-control" id="desc" rows="2" value = {desc} onChange={(e)=>setDesc(e.target.value)} placeholder="Describe todo in brief..."></textarea>
            </div>
            <button type="submit" className="btn btn-success btn-sm">Add ToDo</button>
            </form>
        </div>
    )
}
