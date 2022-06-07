import React, { useState } from 'react'

export function ChallengeComponent() {

  const [task,setTask] = useState("")

  const createTask = (e:any)=>{
   e.preventDefault()
   console.log(task)
   setTodoList([...todoList, task])
  }

  const goBack = (e:any)=>{
    console.log("go back")
    const currentTask = e.target.nextElementSibling.innerHTML;
    const currentUL = e.target.parentElement.parentElement.parentElement;

    if (currentUL["id"] ==="done"){
      setInProgressList([...inProgressList, currentTask]);
      const newList = doneList.filter(item => item !== currentTask)
      setDoneList(newList)
    }
    if (currentUL["id"] ==="inProgress"){
      setTodoList([...todoList, currentTask]);
      const newList = inProgressList.filter(item => item !== currentTask)
      setInProgressList(newList)
    }
    
  }

  const goFoward = (e:any)=>{
    console.log("go foward")
    const currentTask = e.target.previousElementSibling.innerHTML;
    const currentUL = e.target.parentElement.parentElement.parentElement;
    if (currentUL["id"] ==="todo"){
      setInProgressList([...inProgressList, currentTask]);
      const newList = todoList.filter(item => item !== currentTask)
      setTodoList(newList)
    }
    if (currentUL["id"] ==="inProgress"){
      setDoneList([...doneList, currentTask]);
      const newList = inProgressList.filter(item => item !== currentTask)
      setInProgressList(newList)
    }
  }

  const [todoList, setTodoList]= useState<string[]>([])

  const [inProgressList, setInProgressList]= useState<string[]>([])

  const [doneList, setDoneList]= useState<string[]>([])


  const listItem = todoList.map(task=>{
    return (
  <li>
    <div className='card'>
      <button className='go-back' onClick={goBack}>←</button>
      <h3 className='card-title'>{task}</h3>
      <button className='go-foward' onClick={goFoward}>→</button>
    </div>
  </li>
    )
  })

  const inProgresCards = inProgressList.map(task=>{
    return (
  <li>
    <div className='card'>
      <button className='go-back' onClick={goBack}>←</button>
      <h3 className='card-title'>{task}</h3>
      <button className='go-foward' onClick={goFoward}>→</button>
    </div>
  </li>
    )
  })

  const doneCards = doneList.map(task=>{
    return (
  <li>
    <div className='card'>
      <button className='go-back' onClick={goBack}>←</button>
      <h3 className='card-title'>{task}</h3>
      <button className='go-foward' onClick={goFoward}>→</button>
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
        <input type='text' value={task} onChange={(e)=>setTask(e.target.value)}/>
        <button>+</button>
      </form>
    </>
  )
}
