import React from "react";

const ListedTodo = ({ todoList }) => {
  return (
    <div className="listWrap">
      {todoList.map((list, i) => (
        <div className="list" key={i}>
          {list}
        </div>
      ))}
    </div>
  );
};

export default ListedTodo;
