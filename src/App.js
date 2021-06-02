import './App.css';
import Header from './master/Header';
import AddTodoForm from './master/AddTodoForm';
import About from './master/About';
import Todos from "./master/Todos";
import Footer from './master/Footer';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  //Delete todo
  const onDelete = (todo) => {
    console.log('You clicked on delete', todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  // UseState
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  // Add new Todo
  const addTodo = (title, desc) => {
    console.log('Adding todo...', title, desc);

    //Add sno for passing uniqe key
    let sno;
    if (todos.length === 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    //Add date
    let d = new Date();
    let day = d.getDate();
    let month = d.getMonth();
    let year = d.getFullYear();

    let date = day+"/"+(month + 1)+"/"+year;
    console.log(date);

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
      date: date
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  return (
    <>
      <Router>
        <Header title='My ToDo List App' />
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <AddTodoForm addTodo={addTodo} />
                <Todos todoList={todos} onDelete={onDelete} />
              </>
            )
          }}>
          </Route>

          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>

  );
}

export default App;
