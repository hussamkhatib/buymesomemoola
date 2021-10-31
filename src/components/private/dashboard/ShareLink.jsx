import React from 'react'

function ShareLink() {
    return (
<div className="form-control py-2">
  <div className="relative">
    <input type="text" value='https://buymeacoffee.com/hussamkhatib' readOnly className="w-full pr-16 input input-bordered bg-neutral"/> 
    <button type='button' className="absolute top-0 right-0 rounded-l-none btn ">Copy</button>
  </div>
</div> 


    )
}

export default ShareLink
