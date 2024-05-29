/* eslint-disable react/prop-types */
const Task = ({id, name, removeTask}) => {
  
    return (
    <li className="task" id={id}>
      <span className='task-name'>{name}</span>
      <button className='task-remove' onClick={() => removeTask(id)}>-</button>
    </li>)
  }

export default Task;