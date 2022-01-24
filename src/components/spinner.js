import React from 'react'
import { TailSpin } from  'react-loader-spinner'

function spinner() {
    return (
        <div>
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
