import React, { useState } from "react";

import "./App.css";

const TodoList = () => {
  const [taskName, setTaskName] = useState('')
  const [dateTime, setdateTime] = useState('')
  return (
    <div className="App">
      <h1>Chris Akua Todo</h1>
      <form>
        <input type="text" value={taskName} />
        <input type="dateTime-local" onChange={(e) => setdateTime(e.target.value)} value={dateTime} />
      </form>
    </div>
  );
}

export default TodoList;
