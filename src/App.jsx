/* eslint-disable react/prop-types */
import { useState } from 'react'
import { useId } from 'react'

const Task = ({id, name, removeTask}) => {
  
  return (
  <li id={id}>
    {name}
    <button onClick={() => removeTask(id)}>-</button>
  </li>)
}


function App() {
  const [newTaskName, setNewTaskName] = useState("")
  const date = new Date().toLocaleDateString().slice(0, 4)
  const [tasks, setTasks] = useState([])
  const id = useId()

  

  const addTask = (event) => {
    event.preventDefault()
    const newTask = { id: id + tasks.length, name: newTaskName };
    setTasks([...tasks, newTask]);
  };

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <>
      <div className='task-box'>
        <h1>{date}</h1>
        <ul>
          {tasks.map(task => (
            <Task id={task.id} key={task.id} name={task.name} removeTask={removeTask} />
          ))}
          <form onSubmit={(event) => addTask(event)}>
            <input value={newTaskName} onChange={(event) => setNewTaskName(event.target.value)} />
            <button type='submit'>+</button>
          </form>
        </ul>
      </div>
    </>
  )
}

export default App
