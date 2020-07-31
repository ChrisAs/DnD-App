import React, { useState } from "react";
import Note from './Note';



const handleSubmit = (e, notes, setNotes, taskName, setTaskName, dateTime, setdateTime) => {
  e.preventDefault()
  const id = (notes.length) ? notes[notes.length - 1].id + 1 : 1
  setNotes([...notes, { id: id, message: taskName, deadline: dateTime }])
  console.log("test", notes.length)
  setdateTime('')
  setTaskName('')
}
const TodoList = () => {
  const [taskName, setTaskName] = useState('')
  const [dateTime, setdateTime] = useState('')
  const [notes, setNotes] = useState([])

  return (
    <div className="App">
      <h1>Chris Akua Todo</h1>
      <form onSubmit={(e) => handleSubmit(e, notes, setNotes, taskName, setTaskName, dateTime, setdateTime)}>
        <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
        <input type="dateTime-local" onChange={(e) => setdateTime(e.target.value)} value={dateTime} />
        <button>Submit</button>
      </form>
      {
        notes.map(note => (
          <Note
            id={note.id} message={note.message} deadline={note.deadline} />
        ))
      }

    </div>
  )
}

export default TodoList;
