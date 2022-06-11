import React, { useState } from 'react'

export function ChallengeComponent() {

  const [task,setTask] = useState("")
  const [todoList, setTodoList]= useState<string[]>([])
  const [inProgressList, setInProgressList]= useState<string[]>([])
  const [doneList, setDoneList]= useState<string[]>([])

  const createTask = (e:React.FormEvent<HTMLFormElement>)=>{
   e.preventDefault()
   console.log(task)
   setTodoList([...todoList, task])
   setTask("")
  }
  const goBack = (e:React.MouseEvent<HTMLButtonElement>)=>{
    console.log("go back")
    const currentTask = e.currentTarget.value;

    if (e.currentTarget.classList.contains("gb-dc")){
      setInProgressList([...inProgressList, currentTask]);
      const newList = doneList.filter(item => item !== currentTask)
      setDoneList(newList)
    }
    if (e.currentTarget.classList.contains("gb-ip")){
      setTodoList([...todoList, currentTask]);
      const newList = inProgressList.filter(item => item !== currentTask)
      setInProgressList(newList);
    } 
    if (e.currentTarget.classList.contains("gb-td")){
       console.log(e.target)
      e.currentTarget.style.backgroundColor="rgb(177, 91, 91)";
    }
  }
  //
  const goFoward = (e:React.MouseEvent<HTMLButtonElement>)=>{
    console.log("go foward")
    const currentTask = e.currentTarget.value;

    if (e.currentTarget.classList.contains("gf-td")){
      setInProgressList([...inProgressList, currentTask]);
      const newList = todoList.filter(item => item !== currentTask)
      setTodoList(newList)
    }
    if (e.currentTarget.classList.contains("gf-ip")){
      setDoneList([...doneList, currentTask]);
      const newList = inProgressList.filter(item => item !== currentTask);
      setInProgressList(newList);
    }
    if (e.currentTarget.classList.contains("gf-dc")){
      console.log(e.target)
     e.currentTarget.style.backgroundColor="rgb(114, 204, 102)";
   }
  }

  const listItem = todoList.map(task=>{
    return (
  <li>
    <div className='card'>
      <button className='go-back gb-td' value={task} onClick={goBack}>←</button>
      <h3 className='card-title'>{task}</h3>
      <button className='go-foward gf-td' value={task} onClick={goFoward}>→</button>
    </div>
  </li>
    )
  })

  const inProgresCards = inProgressList.map(task=>{
    return (
  <li>
    <div className='card'>
      <button className='go-back gb-ip' value={task} onClick={goBack}>←</button>
      <h3 className='card-title'>{task}</h3>
      <button className='go-foward gf-ip' value={task} onClick={goFoward}>→</button>
    </div>
  </li>
    )
  })

  const doneCards = doneList.map(task=>{
    return (
  <li>
    <div className='card'>
      <button className='go-back gb-dc' value={task} onClick={goBack}>←</button>
      <h3 className='card-title'>{task}</h3>
      <button className='go-foward gf-dc' value={task} onClick={goFoward}>→</button>
    </div>
  </li>
    )
  })

  return (
    <>
      {/* Delete this h2, and add your own code here. */}
      <div className='container'>
        <div className='column'>
          <h2>To Do</h2>
          <ul id='todo'>
            {listItem}
          </ul>
        </div>
        <div className='column'>
          <h2>In Progress</h2>
          <ul id='inProgress'>
            {inProgresCards}
          </ul>
        </div>
        <div className='column'>
          <h2>Done</h2>
          <ul id='done'>
            {doneCards}
          </ul>
        </div>
      </div>
      <form className='task-creator' onSubmit={createTask}>
        <input type='text' required value={task} onChange={(e)=>setTask(e.target.value)}/>
        <button>+</button>
      </form>
    </>
  )
}
