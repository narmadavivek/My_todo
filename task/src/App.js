import './App.css';
import React,{useState,useEffect} from 'react';




function App() {
 const [allTodos,setTodos] = useState([]);
 const [newName ,setnewName] = useState("");
 const [newDescription ,setnewDescription] = useState("");

const handleAddTodo = () => {
  let newTodoItem = {
    todoName: newName,
    Description: newDescription,
  }

  let updateTodoArray = [...allTodos];
  updateTodoArray.push(newTodoItem);
  setTodos(updateTodoArray);
  localStorage.setItem('todocontainer',JSON.stringify(updateTodoArray))
};

const handleDeleteTodo = (index) =>{
  let reducedTodo =[...allTodos];
  reducedTodo.splice(index);

  localStorage.setItem('todocontainer', JSON.stringify(reducedTodo));
  setTodos(reducedTodo)
};

useEffect(() => {
  let savedTodo = JSON.parse(localStorage.getItem('todocontainer'))
if(savedTodo){
  setTodos(savedTodo);
}
},[])

   return (
    <div className="App">
<h1>My ToDo</h1>
      <div className="row-cols-1">
      <div className='todo-wrapper'>
      <div className='todo-input-item'>
           <label>todoName :</label>
            <input type="text" value={newName} onChange={(even) => setnewName(even.target.value)} placeholder="todoName" />
          </div>
          <div className='todo-input-item'>
          <label>todoDescription :</label>
            <input type="text" value={newDescription} onChange={(even) => setnewDescription(even.target.value)}  placeholder="Description" />
          
        </div>
          <div className='todo-input-item'>
          <button type="button" onClick={handleAddTodo} className="secondaryBtn">ADD todo</button>
          </div></div>
</div>
          <div className='todo-input-item'>
          <div>
            <h2>My Todos</h2>
          </div>

          <div className="btn-area">
          <label for="validationDefault04" className="form-label">Status Filter :</label>
          <select className="form-select form-select-sm" aria-label="Small select example">
  <option selected>All</option>
  <option value="1">completed</option>
  <option value="2">not completed</option>
  </select>
          </div>
<br/>
          <div className="todo-container">
          {allTodos.map((item,index) => {
            return(
            <div className='todo-container-items' key={index}>
           <div>
           <p>todoName:{item.todoName}</p>
           <p>Description:{item.Description}</p>
             </div>
             <label for="validationDefault04" className="form-label">Status Filter :</label>
          <select className="form-select form-select-sm" aria-label="Small select example">
  <option selected>All</option>
  <option value="1">completed</option>
  <option value="2">not completed</option>
  </select>
          <br/>
        
          <div><button type="button" className="primaryBtn" onClick={()=>handleDeleteTodo(index)}>Edit</button> 
          <button type="button" className= "dangerBtn" onClick={()=>handleDeleteTodo(index)}>Delete</button>
                    
          </div>
          </div>

     
            )
          },
          )
          };
          
          </div>
        </div>  
        </div>
          
  );
}

export default App;


