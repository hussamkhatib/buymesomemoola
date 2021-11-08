import React, { useState } from 'react'
import Avatar from '../private/Avatar'
import PopUp from '../PopUp'
import Celo from '../icons/Celo'

function UserHead({ name }) {
    const [popUp, setPopUp] = useState(false)

    return (
        <div className='bg-neutral-focus'>
            <div className='flex max-w-6xl mx-auto w-full justify-between items-center'>
                <div className='flex py-6 px-2'>
                    <Avatar bg='bg-neutral' letter={name[0]} size={20}/>
                    <div className='pl-4'>
                        <h1 className='texl-2xl'>
                            {name} is building buymesomemoola using next.js and celo
                        </h1>
                        <p>
                            123 suporters
                        </p>
                    </div>
                </div>
                <div className='rounded'>
                    <button type='button' onClick={()=> setPopUp(true)} className="btn mx-2">Support</button>
                </div>
            </div>
            {popUp ? 
            <PopUp>
                <div className='py-10 px-4 text-neutral text-center'>
                    <p className='text-2xl'>
                        Buy <span className='font-semibold'>{name}</span> some m<span>
                            <Celo size={24}/>la
                            </span>
                    </p>
                    <div className='flex my-4 bg-gray-100 rounded'>
                        <div className='p-4 flex'>
                            <Celo size={48}/>
                            <span className='ml-3 items-center'>x</span>
                        </div>
                        
                        <div className="form-control p-4 w-full">
                        <input type="number" min={0.000001} max={5000}  className="input input-bordered"/>
                        </div>

                    </div>
                    <button type='button' className="btn w-full rounded-full mt-4">support</button> 
                </div>
            </PopUp>
            : null}
        </div>
    )
}

export default UserHead
