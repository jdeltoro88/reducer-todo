

import React,{useState,useReducer} from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
//import './App.css'
import {initialList, reducer} from './reducers/reducer'


 function App () {
  const [state, dispatch] = useReducer(reducer, initialList);
  
  console.log(initialList)
  console.log('useReducer=state',state)
  console.log('useReducer=dispatch', dispatch)
  const [taskInput, setTaskInput] = useState('')


   const inputChange = event =>{
  
    event.preventDefault();
    setTaskInput(event.target.value)
    console.log('taskinput', taskInput)

    console.log('input change', event.target.value)


}

   const taskSubmit = event =>{
    event.preventDefault();
    console.log('testsubmit', taskInput)
//check why task is undefined
    dispatch({type:"ADD_TASK", payload:taskInput})
}   

   const toggleItem = item => {
 
    dispatch({type:"TOGGLE_IT", payload:item})
  }

 const clearCompleted = event =>{
    event.preventDefault();
    dispatch({type:"CLEAR_ALL"})
}


   
    return (
      
      <div className="App">
       <div className="header">
         <h1>ToDo</h1>
         <TodoForm 
        
         taskSubmit={taskSubmit}
         clearCompleted={clearCompleted}
         inputChange={inputChange}
         />
         </div>
         <TodoList 
         info={state}
         toggleItem={toggleItem}
        
         />
         
          </div>
    )

     }

 export default App;



