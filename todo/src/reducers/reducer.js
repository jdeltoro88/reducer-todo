export const initialList = {

    todo : [
       {
           chore: 'study',
           id: 1,
           completed: false
         },
         {
           chore: 'study',
           id: 2,
           finised: false
         },
         {
           chore: 'study',
           id: 3,
           finised: false
         },
         {
           chore: 'study',
           id: 4,
           finised: false
         },
         {
           chore: 'study',
           id: 5,
           finised: false
         }
     ]
   }
   export const reducer = (state, action) => {
       switch (action.type) {
           case 'ADD_TASK':
               console.log("action.payload", action)
               return {
                   ...state, 
                   todo: [...state.todo,
                   {
                       chore: action.payload,
                       id:Date.now(),
                       completed: false
                   }]
               }
               case 'CLEAR_ALL':
                   return{
                       ...state, 
                       todo: state.todo.filter(item => !item.completed)
                   }
               case 'TOGGLE_IT':
                   return{
                       ...state,
                       todo:state.todo.map(item => {
                           if(action.payload === item.id){
                               return{
                                   ...item, 
                                   completed: !item.completed
                               }
                           }
                           return{
                               ...item
                           }
                       })
                   }
   
                   default:
                       return state;
       }
   }