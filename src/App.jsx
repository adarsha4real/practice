import React, { useState } from 'react'


function App() {

  const [username, setUsername] = useState('hello')
  const submithandeler =(e)=>{
    e.preventDefault()
    console.log('form submitted')
    setUsername('')
  }
  
 
  return (
  <>
    <form onSubmit={(e)=>{
    submithandeler(e)
    }}>
    <input 
    value={username}
    onChange={(e)=>{
      setUsername(e.target.value)
      console.log(e.target.value)
    }}
    className='text-2xl font-bold m-5 px-4 py-4'
     type="text" 
     placeholder='enter name' 
     />
    <button className='px-4 py-3 m-5 text-2xl bg-emerald-500 rounded'>submit</button>
    </form>

  </>

  )
}

export default App