import React, { useState } from "react";

function HookFormState() {
  const [user, setUser] = useState({ name: "", age: 0 });
  return (
    <form>
      <input
        type="text"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      ></input>
      <input
        type="text"
        value={user.age}
        onChange={(e) => setUser({ ...user, age: e.target.value })}
      ></input>
      <h3>
        F-Name - {user.name} and age -{user.age}
      </h3>
    </form>
  );
}

export default HookFormState;
