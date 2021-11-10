import React from 'react'
import CreatorsCard from './CreatorsCard'
/* eslint-disable react/prop-types */

function CreatorsList({creators,title}) {
    return (
        <div>
            <h3 className='py-6 font-semibold text-3xl'>{title}</h3>
            <div  className='max-w-5xl grid md:grid-cols-2 lg:grid-cols-4 gap-x-12'>
                {creators.map((creator) => (
                    <CreatorsCard key={creator.name} name={creator.name} description={creator.description} picture={creator.picture} supporters={creator.supporters}/>
                ))}
            </div>
        </div>
    )
}

export default CreatorsList
