import { useState } from "react";
import "./App.css";
import UserComponent from "./components/user/UserComponent";
import TaskManagerComponent from "./components/TaskManagerComponent";

function App() {
  return (
    <>
      {/* <UserComponent></UserComponent> */}
      <TaskManagerComponent></TaskManagerComponent>
    </>
  );
}

export default App;
