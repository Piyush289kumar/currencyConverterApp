import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-slate-100 h-screen w-screen'>

    

    <div className='bg-[#fa6768] rounded-b-3xl w-screen h-2/4'>
      {/* Top Bar Section Start */}
      <div id="topBar" className="w-[95%] h-auto flex justify-between p-7 items-center">
        <p className='font-bold text-2xl'>&#9776;</p>
        <img src="./src/assets/img/userIcon.png" alt="UserIcon Image"
        className='w-7 h-7' />        
      </div>
      {/* Top Bar Section End */}    


    

    </div>


    </div>



    </>
  )
}

export default App
