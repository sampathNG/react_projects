import { useState} from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("blue")
  return (
    <div className="w-full h-screen flex justify-center" style={{ backgroundColor:color}}>
    <div className="bg-black h-24 w-48 flex justify-center items-center self-end mb-20 rounded-2xl">
    <button className="bg-yellow-400 h-8 mr-4 rounded-md p-4 text-center flex items-center" onClick={()=>setColor("yellow")}>Yellow</button>
    <button className="bg-red-400 h-6 rounded-md p-4 flex items-center" onClick={()=>setColor("red")}>Red</button>
    </div>
    </div>
  )
}

export default App
