import { useState } from 'react';
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import InputBox from './components/InputBox'
function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('inr');
  const [to, setTo] = useState('usd');
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo = useCurrencyInfo(from);
  const dropDownList = Object.keys(currencyInfo);

  
  
  const swapInputs = () => {
    setTo(from)
    setFrom(to)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  const convertValuesFnc = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }
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
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convertValuesFnc();
          }}
        >
          {/* Main Box Section Start */}
          <div className='flex justify-center flex-col bg-slate-50 absolute m-auto left-0 right-0 top-1/4 mx-5 rounded-lg pt-5 pb-5 shadow-lg shadow-[#fa6768]'>
            {/* To inputBox Section Start */}
            <InputBox
              amount={amount}
              onAmountChange={(amount) => setAmount(amount)}
              currencyDropDown={dropDownList}
              onCurrencyChange={(currency) => (setFrom(currency))}
              selectedCurrency={from}
            />
            {/* To inputBox Section End */}
            {/* Swap Button Section Start */}
            <div className='flex justify-center'>
              <button type="button"
                onClick={swapInputs}
                className='bg-[#fa6768] text-md text-white text-right border-2 border-[#fa676725] rounded-lg py-3'>
                Swap
              </button>
            </div>
            {/* Swap Button Section End */}
            {/* To inputBox Section Start */}
            <InputBox
              amount={convertedAmount}
              onAmountChange={(convertedAmount) => (setConvertedAmount(convertedAmount))}
              currencyDropDown={dropDownList}
              selectedCurrency={to}
              onCurrencyChange={(currency) => (setTo(currency))}
            />
            {/* To inputBox Section End */}
            {/* Swap Button Section Start */}
            <div className='flex justify-center'>
              <button type="submit"
                className='bg-[#fa6768] font-bold text-md text-white text-right border-2 border-[#fa676725] rounded-lg py-3 hover:border-transparent hover:bg-[#de5858]'>
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </div>
            {/* Swap Button Section End */}
          </div>
          {/* Main Box Section End */}
        </form>
      </div>
    </>
  )
}
export default App
