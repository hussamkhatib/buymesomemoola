import React from 'react'
import Image from 'next/image'
/* eslint-disable react/prop-types */

function CreatorsCard({name,description,supporters,picture}) {
    return (
        <div>
            <Image  layout='responsive' width={160}
                height={140} src={picture}
            />
            <div className='h-creatorCard flex flex-col  justify-between'>
                <p className='mt-1 pb-0.5 leading-5'><span className='font-semibold'>{name} </span>
                    <span>
                        {description}
                    </span>
                </p>
                <p className='mt-1'>
                    {supporters} Supporters
                </p>
            </div>
        </div>
    )
}

export default CreatorsCard

