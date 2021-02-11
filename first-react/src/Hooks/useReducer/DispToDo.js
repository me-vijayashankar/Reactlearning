import React from "react";

function DispToDo({ todo }) {
  console.log("DispToDo", todo);
  return (
    <div>
      <p>
        {todo.ToDo + "->"} status {todo.completed ? "done" : "pending"}
      </p>
    </div>
  );
}
export default React.memo(DispToDo);
