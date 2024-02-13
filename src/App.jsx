import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-slate-100 h-screen w-screen relative'>

        <div className='bg-[#fa6768] rounded-b-3xl w-screen h-1/2 '>
          {/* Top Bar Section Start */}
          <div id="topBar" className="w-[95%] h-auto flex justify-between p-7 items-center">
            <p className='font-bold text-2xl'>&#9776;</p>
            <img src="./src/assets/img/userIcon.png" alt="UserIcon Image"
              className='w-7 h-7' />
          </div>
          {/* Top Bar Section End */}
        </div>

        {/* Main Box Section Start */}
        <div className='flex justify-center flex-col bg-slate-50 absolute m-auto left-0 right-0 top-1/4 mx-5 rounded-lg pt-5 pb-5 shadow-lg shadow-[#fa6768]'>

          {/* inputBox Section Start */}
          <div className='w-full flex justify-center px-3 py-5 bg-slate-50 rounded-lg'>
            <select className='bg-slate-50 text-[#fa6768] font-semibold text-xl cursor-pointer'>
              <option value="usd">usd</option>
              <option value="inr">inr</option>
            </select>
            <input type="text" className='bg-[#faeff3] text-xl text-[#fa6768] text-right border-2 border-[#fa676725] rounded-lg py-3' />
          </div>
          {/* inputBox Section End */}


          {/* Swap Button Section Start */}
          <div className='flex justify-center'>
            <button type="button" 
            className='bg-[#fa6768] text-md text-white text-right border-2 border-[#fa676725] rounded-lg py-3'>
              Swap
            </button>
          </div>
          {/* Swap Button Section End */}
          


          {/* inputBox Section Start */}
          <div className='w-full flex justify-center px-3 py-5 bg-slate-50 rounded-lg'>
            <select className='bg-slate-50 text-[#fa6768] font-semibold text-xl cursor-pointer'>
              <option value="usd">usd</option>
              <option value="inr">inr</option>
            </select>
            <input type="text" className='bg-[#faeff3] text-xl text-[#fa6768] text-right border-2 border-[#fa676725] rounded-lg py-3' />
          </div>
          {/* inputBox Section End */}


          {/* Swap Button Section Start */}
          <div className='flex justify-center'>
            <button type="button" 
            className='bg-[#fa6768] font-bold text-md text-white text-right border-2 border-[#fa676725] rounded-lg py-3 hover:border-transparent hover:bg-[#de5858]'>
              Convert INR to USD
            </button>
          </div>
          {/* Swap Button Section End */}


        </div>
        {/* Main Box Section End */}




      </div>



    </>
  )
}

export default App
