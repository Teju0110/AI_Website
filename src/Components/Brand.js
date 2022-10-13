import React from 'react'
import brand1 from '../Images/brand1.png'
import brand2 from '../Images/brand2.png'
import brand3 from '../Images/brand3.png'
import brand4 from '../Images/brand4.png'
import brand5 from '../Images/brand5.png'
import './Brand.css'

const Brand = () => {
  return (
    <div className='brand '>
      <div>
        <img src={brand1}/>
      </div>
      <div>
        <img src={brand2}/>
      </div>
      <div>
        <img src={brand3}/>
      </div>
      <div>
        <img src={brand4}/>
      </div>
      <div>
        <img src={brand5}/>
      </div>

    </div>
  )
}

export default Brand