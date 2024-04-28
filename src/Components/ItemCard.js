import { AddRounded, Favorite, StarRounded } from '@mui/icons-material'
import React, { useState } from 'react';
 

function ItemCard({imgSrc, name, rating, price, itemId}) {
    const [isFavourite, setFavourite] = useState(false);
    const [curvalue, setCurvalue] = useState(Math.floor(rating));
    const handleClick=(value)=> {
        setCurvalue(value)
        console.log("val", curvalue)
    }
  return (
    <div className="itemCard" item={itemId}>
        <div className={isFavourite ? 'isfavourite active ' : 'isfavourite'}
        onClick = {()=>setFavourite(!isFavourite)}>
            
            <Favorite />
        </div>
        <div className="imgBox">
            <img src={imgSrc} alt='' className='itemImg'/>
        </div>
        <div className="itemContent">
            <h3 className='itemName'>{name}</h3>
            <div className="bottom">
                <div className="ratings">
                    {Array.apply(null,{length:5}).map((e,i)=>(
                        <i key={i} className={curvalue>i ? 'rating orange' : ' rating gray'}
                        onClick={()=>handleClick(i+1)}
                        >
                            <StarRounded />
                        </i>
                    ))}
                    <div className="price">
                        <span>$ </span>{price}
                    </div>
                </div>
                <i className="addtoCart">
                    <AddRounded />
                </i>
            </div>
        </div>
    </div>
  )
}

export default ItemCard