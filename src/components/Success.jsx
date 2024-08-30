// import React from 'react'

import icon_success from '../assets/images/icon-success.svg'





const Success = () => {
    return (
        <div className="box-border flex h-[100vh] lg:h-full m-auto mt-0 bg-white lg:m-auto lg:mt-24 w-fit rounded-xl">
            <div className="grid grid-rows-1 px-10 py-16 gap-7">
                <img src={icon_success} alt="" />
                <h1 className='max-w-xs text-4xl font-bold'>Thanks for subscribing!</h1>
                <p className='max-w-sm'>A confirmation email has been sent to <strong>ash@loremcompany.com.</strong> Please open it and click the button inside to confirm your subscribe.</p>
                <button className='p-3 pt-3 mt-4 font-bold hover:bg-orange-500 text-white bg-[#232742] border rounded-lg'>Dismiss message</button>
            </div>
        </div>
    )
}

export default Success
