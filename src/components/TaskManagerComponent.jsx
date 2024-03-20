import React, { useState } from "react";
import TaskComponent from "./TaskComponent";

export default function TaskManagerComponent() {
  const [tasks, setTasks] = useState([]);

  const [taskName, setTaskName] = useState("");

  const onDeleteTask = (task) => {
    const _tasks = [...tasks];
    const itemIndex = _tasks.indexOf(task);
    _tasks.splice(itemIndex, 1);
    setTasks(_tasks);
  };
  const addTask = () => {
    const _tasks = [...tasks];
    _tasks.push(taskName);
    setTasks(_tasks);
  };
  return (
    <>
      <div>
        <input type="text" onChange={(e) => setTaskName(e.target.value)} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div style={{ display: "flex", flexFlow: "row-wrap" }}>
        {tasks.map((task, index) => {
          return (
            <TaskComponent
              taskName={task}
              onDeleteTask={(t) => onDeleteTask(t)}
            ></TaskComponent>
          );
        })}
      </div>
    </>
  );
}
