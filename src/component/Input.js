import React from "react";

const Input = ({ setTodo, setTodoList, todo, todoList }) => {
  return (
    <div className="inputWrapper">
      <input
        type="text"
        // placeholder="enter your plan"
        className="inputField"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      ></input>
      <button
        className="inputButton"
        onClick={() => {
          setTodoList([...todoList, todo]);
          setTodo("");
        }}
      >
        ADD
      </button>
    </div>
  );
};

export default Input;
