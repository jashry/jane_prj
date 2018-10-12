import React from 'react'

const Todos = ({todos,delFunc}) =>{
  const todoList = todos.length ?  (
    todos.map(todo=>{
      return (
      <li key = {todo.id}>
        <span>{todo.content}</span> <button onClick={()=>{delFunc(todo.id)}}>del</button>    
      </li> )
    })
  ):(<p>You have no todos lift , yo~</p>)
  return (
    <ul>{todoList}</ul>
  )
}

export default Todos