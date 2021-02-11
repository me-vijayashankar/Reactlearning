import React, { useState, useEffect } from "react";
import axios from "axios";

function FirstUseEffect() {
  const [count, setCount] = useState(0);
  const [Name, setName] = useState("");
  useEffect(() => {});
  useEffect(() => {
    document.title = `count : ${count}`;
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((data) => console.log(data))
      .catch((e) => console.log(e));
  }, [count]);
  return (
    <div>
      <input
        type="text"
        value={Name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <button onClick={() => setCount((prev) => prev + 1)}>
        counter : {count}
      </button>
    </div>
  );
}

export default FirstUseEffect;
