import React from 'react'
import TodoItem from './TodoItem';

export default function Todos(props) {
    
    return (
        <div className="container">
            <h4 className="text-center my-3">ToDos List</h4>
            {props.todoList.length === 0 ? <h4>No Todo list to showing..</h4> :
                props.todoList.map((todo) => {
                    return (
                        <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
                        )
                })
            }
        </div>
    )
}
