/* eslint-disable react/prop-types */
import React from 'react'

function OverviewCard({title,count}) {
    return (
        <div>
            <p className='text-sm pb-2'>{title}</p>
            <p className='text-3xl font-bold'>{count}</p>
        </div>
    )
}

export default OverviewCard
