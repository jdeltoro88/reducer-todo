import React from 'react'

 const TodoForm = props => {

      return(
            <div>
              <form >
                <input type="text"
                value={props.taskInput}
                
                name="taskInput"
                onChange={props.inputChange}
                />
                {console.log('newtask',props)}
                <button onClick={event=> {props.taskSubmit(event)}}>Add </button>
                <button onClick={event=> {props.clearCompleted(event)}}>Clear Completed</button>
              </form>
            </div>

         )


 }

 export default TodoForm