import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export const ContextHook3 = () => {
  const userName = useContext(UserContext);
  return <div>User Name : {userName}</div>;
};
