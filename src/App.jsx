import { useState } from 'react'

import './App.css'

function App() {
  const [input, setInput] = useState("")
  const [data, setData] = useState([]);
  
const handleSubmit=(event)=>{
  event.preventDefault();
  if(input==""){
   return(
    alert("inter your task")
   )
  }
  else{
   const store=[...data,input]
   setData(store)
   setInput("")
  }
   
   
}
const handleChange=(event)=>{
   setInput(event.target.value);
}
const deleteItem=(index)=>{
   console.log(index)
   let filterdata=data.filter((curentitem,id)=>{
    return(
      id!=index
    )
   })
   setData(filterdata)
}
  return (
    <>
    <div className='main-container'>
        <form onSubmit={handleSubmit}>
        <h1>Todo List</h1>
        <input 
          type='text'
          name='todoname'
          value={input}
          placeholder='Enter your task'
          onChange={handleChange}
        />
        <button className='addbtn'>
          add
        </button>
      </form>
      
       {data.map((curentValue,index)=>{
        return(
          <>
          <div className='resultContainer'>
            <p className='para'>
            {curentValue}
            
          </p>
          <button className='deleteBtn' onClick={()=>deleteItem(index)}>Delete</button>
          </div>
          </>
        )
       })}
    </div>
      
    </>
  )
}

export default App
