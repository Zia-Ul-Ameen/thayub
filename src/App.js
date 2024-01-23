import "./App.css";
import React, { useState } from "react";
import Input from "./component/Input";
import ListedTodo from "./component/ListedTodo";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState("");

  return (
    <div className="container">
      <div className="todoWrapper">
        <div className="title">Todo List</div>
        <Input
          setTodo={setTodo}
          setTodoList={setTodoList}
          todo={todo}
          todoList={todoList}
        />
        {todoList.length > 0 && <ListedTodo todoList={todoList} />}
      </div>
    </div>
  );
}
export default App;
