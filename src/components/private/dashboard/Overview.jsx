import React from 'react'
import OverviewCard from './OverviewCard'

function Overview() {
    return (
        <div className='bg-neutral-focus p-6 mb-10'>
            <h3 className='py-2 text-xl'>
                Overview
            </h3>
            <div className='py-8 md:grid md:grid-cols-3'>
                <OverviewCard title='Followers' count='0' />
                <OverviewCard title='supporters' count='0' />
                <OverviewCard title='members' count='0' />
            </div>

        </div>
    )
}

export default Overview
