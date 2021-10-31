/* eslint-disable react/prop-types */
import React from 'react'

function CheckListCard({icon,title,description,children}) {
    return (
        <div className='flex'>
                <div className='px-4 pt-2'>{icon}</div>
                <div className='flex-1'>

                <div className='font-bold text-2xl pb-2'>
                    {title}
                </div>
                <div className='font-light pb-2'>
                    {description}
                </div>
                {children}
            </div>
        </div>
    )
}

export default CheckListCard

