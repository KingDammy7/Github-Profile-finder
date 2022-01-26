import React from 'react'
import { TailSpin } from  'react-loader-spinner'

function spinner() {
    return (
        <div class='flex flex-col items-center justify-center'>
<TailSpin
    heigth="100"
    width="100"
    color='grey'
    arialLabel='loading'
  />
        </div>
    )
}

export default spinner
