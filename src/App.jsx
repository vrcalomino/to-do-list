import { useState } from 'react'
import { useId } from 'react'
import "./App.css"
import Task from "./components/Task.jsx"




function App() {
  const [newTaskName, setNewTaskName] = useState("")
  const date = new Date().toLocaleDateString().slice(0, 4).split("/").reverse().join("/")
  const [tasks, setTasks] = useState([])
  const id = useId()

  const addTask = (event) => {
    event.preventDefault()
    if(newTaskName.length !== 0) {
      const newTask = { id: id + tasks.length, name: newTaskName };
      setTasks([...tasks, newTask]);
      setNewTaskName("")
    } else {
      window.alert("Can't add an empty task")
    }
    
  };

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <>
      <div className='task-box'>
        <h1>Tasks for {date}</h1>
        <ul className='task-list'>
          {tasks.map(task => (
            <Task  id={task.id} key={task.id} name={task.name} removeTask={removeTask} />
          ))}
          <form className='task-add' onSubmit={(event) => addTask(event)}>
            <input value={newTaskName} onChange={(event) => setNewTaskName(event.target.value)} />
            <button type='submit'>+</button>
          </form>
        </ul>
      </div>
    </>
  )
}

export default App
