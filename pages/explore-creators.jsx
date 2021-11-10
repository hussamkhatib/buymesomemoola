import React from 'react'
import CreatorsList from '../src/components/creators/CreatorsList'
import { videoCreators,artist } from '../src/data/creators'

export default function ExploreCreators() {
    return (
    <div className='px-4 py-16 mx-auto'>
        <CreatorsList creators={videoCreators} title='Video creators'/>
        <CreatorsList creators={artist} title='Artists'/>
    </div>
    )
}
