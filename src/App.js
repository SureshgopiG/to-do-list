import React,{useState} from 'react';
import './App.css';

function App() {
  const [tasks,setTasks]=useState([]);
  const [task,setTask]=useState('');

  const addTask=()=>{
    if(task){
      setTasks([...tasks,{text:task,completed:false}]);
      setTasks('');
    }
  };

  const deleteTask=(index)=>{
    const newTasks=tasks.filter((_,i)=>i!==index);
    setTasks(newTasks);
  };

  const taskCompelted=(index)=>{
    const newTasks=tasks.map((task,i)=>
      i===index ? {...task,completed:!taskCompelted}:task);
    setTasks(newTasks);
  };


  return (
    <div className="App">
      <h1>To Do List</h1>
      <div className='input'>
      <input type="text" value={task} onChange={(e)=>setTask(e.target.value)} placeholder='Add Task'/>
    <button onClick={addTask}>Add</button>
  </div>
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
