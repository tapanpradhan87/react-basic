import React, { useEffect, useState } from "react";
import "./TaskComponent.css";

export default function TaskComponent({ taskName, onDeleteTask }) {
  const [completed, setCompleted] = useState(false);
  const handleDeleteTask = () => {
    onDeleteTask(taskName);
  };

  useEffect(() => {
    // this will run on evey time the component renders
    console.log("Task Component Mounted");
  }, []);

  useEffect(() => {
    console.log(
      taskName + completed ? " completed" : " not completed" + completed
    );
  }, [completed]);

  return (
    <div className="panel">
      <div className="panel-header">
        <h3>{taskName}</h3>
      </div>
      <div className="panel-body">
        <div>
          <input
            disabled={completed}
            type="checkbox"
            defaultChecked={completed}
            id={"checkbox-mark-completed-" + taskName}
            onChange={(e) => setCompleted(e.target.checked)}
          />
          <label htmlFor={"checkbox-mark-completed-" + taskName}>
            Complete
          </label>
        </div>
        <button onClick={handleDeleteTask}>Delete Task</button>
      </div>
    </div>
  );
}
