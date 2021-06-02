import React from 'react'
import { useState } from 'react';

export default function TodoItem(props) {

   const [status, setStatus] = useState('Pending');

    return (
        <div>
            <h5 className='my-3'>{props.todo.title}</h5>
            <p>{props.todo.desc}</p>
            <p>Date: {props.todo.date}</p>
            <p>{status}</p>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="checkTodo" onChange={(e)=>{setStatus((e.target.checked)='Done')}} />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Check if you complete!
                    </label>
            </div>
            <button className="btn btn-sm btn-danger" onClick={() => { props.onDelete(props.todo) }}>Delete</button>
        </div>
    )
}
