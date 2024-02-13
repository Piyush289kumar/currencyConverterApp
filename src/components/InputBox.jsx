import React, { useId } from 'react'

function InputBox(
    classNameEtc = '',
    amount = 0,
    onAmountChange,
    onCurrencyChange,
    currencyDropDown = [],
    selectedCurrency = 'inr',
    amountDisable = false,
    currencyDisable = false
) {

    /* useId Hook For Generate Random Keys */
    const keys = useId();

    return (
        /* inputBox Section Start */
        <div className='w-full flex justify-center px-3 py-5 bg-slate-50 rounded-lg'>
            <select
                disabled={currencyDisable}
                value={selectedCurrency}
                onChange={(e) => (onCurrencyChange && onCurrencyChange(e.target.value))}
                className='bg-slate-50 text-[#fa6768] font-semibold text-xl cursor-pointer'>
                {currencyDropDown.map((item) => {
                    <option key={keys} value={item}>{item}</option>
                })}
            </select>
            <input
            type="number"
            placeholder='Amount'
            className={`bg-[#faeff3] text-xl text-[#fa6768] text-right border-2 border-[#fa676725] rounded-lg py-3 ${classNameEtc}`}
            
            disabled={amountDisable}
            value={amount}
            onChange={(e)=>(onAmountChange && onAmountChange(Number(e.target.value)))}
            />
        </div>
        /* inputBox Section End */
    )
}
export default InputBox