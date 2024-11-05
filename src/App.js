import React,{useState} from 'react';
import './App.css';

function App() {
  const [tasks,setTasks]=useState([]);
  const [task,setTask]=useState('');

  const addTask=(e)=>{
    setTask(e.target.value)
  };

  const deleteTask=(index)=>{
    const newTasks=tasks.filter((_,i)=>i!==index);
    setTasks(newTasks);
  };

  const taskCompelted=(index)=>{
    const newTasks=tasks.map((task,i)=>
      i===index ? {...task,completed:!task.Compelted}:task);
    setTasks(newTasks);
  };


  return (
    <div className="App">
      <h1>To Do List</h1>
      <form onSubmit={addTask}>
      <div className='input-section'>
      <input type="text" placeholder='Add new  Task'/>
    <button >Add</button>
    
  </div>
  </form>
  <h2>{task}</h2>
  
    <ul className='task'>
      {Array.isArray(tasks) && tasks.map((task,index)=>
      (
        <li key={index} className={task.completed?'completed':''}>
          <span onClick={()=>taskCompelted(index)}>{task.text}</span>
          <button onClick={()=>deleteTask(index)}>Delete</button>
        </li>
      )
      )}
    </ul>
  
    </div>
  );

}

export default App;
