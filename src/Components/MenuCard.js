import { ChevronRightRounded } from '@mui/icons-material'
import React from 'react'

function MenuCard({image, name, isActive}) {
  return (
    <div className='rowMenuCard' >
        <div className="imgBox">
            <img src={image} alt='' />
        </div>
        <h3>{name}</h3>
        <i className='loadMenu'>
            <ChevronRightRounded />
        </i>
    </div>
  )
}

export default MenuCard