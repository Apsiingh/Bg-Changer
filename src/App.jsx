import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setcolor] = useState("black");

  return (
   <div className='w-full h-screen duration-2000 rounded-xl'
    style={{backgroundColor:color}}
   >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>  
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-3 rounded-full'>
           <button
              onClick={()=>{
                setcolor("red")
              }}
           className='outline-none px-4 py-2 rounded-full text-white'
           style={{backgroundColor :"red"}} 
           >Red</button>
            <button
             onClick={()=>{
              setcolor("green")
            }}
            className='outline-none px-4 py-2 rounded-full text-white'
           style={{backgroundColor :"green"}} 
           >Green</button>
            <button
             onClick={()=>{
              setcolor("pink")
            }}
            className='outline-none px-4 py-2 rounded-full text-white'
           style={{backgroundColor :"pink"}} 
           >pink</button>
            <button
             onClick={()=>{
              setcolor("orange")
            }}
            className='outline-none px-4 py-2 rounded-full text-white'
           style={{backgroundColor :"orange"}} 
           >Orange</button>
            <button 
             onClick={()=>{
              setcolor("blue")
            }}
            className='outline-none px-4 py-2 rounded-full text-white'
           style={{backgroundColor :"blue"}} 
           >Blue</button>
          
        </div>
      </div>
   </div>
  )
}

export default App
