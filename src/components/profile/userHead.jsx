import React, { useState } from 'react'
import Avatar from '../private/Avatar'
import PopUp from '../PopUp'
import Celo from '../icons/Celo'
import { useUser } from '../../stores/user.store'
import Cancel from '../icons/Cancel'

function UserHead({ name }) {
    const kit = useUser(state => state.kit)
    const [popUp, setPopUp] = useState(false)
    
    
    async function transferMoola() {
        const goldtoken = await kit.contracts.getGoldToken()

        const oneGold = kit.web3.utils.toWei('1', 'ether')
        const tx = await goldtoken.transfer('0xf0B346Ae28B4bfEf5F5e9f23D963Cd5916DC8532', oneGold).send({
        from: '0xA64FdABDfed367eaa3E138dBD87180914A08066A',  
        })
    
        const hash = await tx.getHash()
        const receipt = await tx.waitReceipt() 
        console.log({hash,receipt})
    } 

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
                <div className='flex justify-end py-2 px-4'>
                    <button className='text-neutral border-solid border-2 rounded-full'
                     type='button' onClick={() => setPopUp(false)}>
                         <Cancel />
                     </button>
                     </div>
                
                <div className='py-8 px-4 text-neutral text-center'>
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
                        <input type="number" min={0} max={5000}  className="input input-bordered"/>
                        </div>

                    </div>
                    <button onClick={() => transferMoola()} type='button' className="btn w-full rounded-full mt-4">support</button> 
                </div>
            </PopUp>
            : null}
        </div>
    )
}

export default UserHead
