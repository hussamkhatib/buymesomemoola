import React from 'react'
import Avatar from '../private/Avatar'

function UserHead({ name }) {
    return (
        <div className='bg-neutral-focus'>
            <div className='flex max-w-6xl mx-auto w-full justify-between items-center'>
                <div className='flex py-6 px-2'>
                    <Avatar bg='bg-neutral' letter={name[0]} size={24}/>
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
                    <button type='button' className="btn mx-2">Follow</button>
                    <button type='button' className="btn mx-2">Support</button>
                </div>
            </div>
        </div>
    )
}

export default UserHead
