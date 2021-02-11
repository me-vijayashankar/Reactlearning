import React, { useReducer, useState } from "react";
import DispToDo from "./DispToDo";

const reducer = (state, action) => {
  return [...state, { id: Date.now(), ToDo: action, completed: false }];
};
function UseReducerToDo() {
  const [state, dispatch] = useReducer(reducer, []);
  const [Todo, setTodo] = useState("");

  const addToTODO = (e) => {
    e.preventDefault();
    dispatch(Todo);
  };

  return (
    <div>
      <form onSubmit={addToTODO}>
        <input
          type="text"
          value={Todo}
          onChange={(e) => setTodo(e.target.value)}
        ></input>
      </form>
      {state.length > 0
        ? state.map((todo) => <DispToDo key={todo.id} todo={todo} />)
        : "no pending items"}
    </div>
  );
}

export default UseReducerToDo;
