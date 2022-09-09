import React, {useContext} from 'react'
import { ReviewContext } from '../ReviewContext'

const Item = ({ item}) => {
     const{deleteReview}=useContext(ReviewContext)
  return (
    <div className="item">
        <h2>{item.name}</h2> 
        <h6>{item.price}</h6>
        <img src={item.ImageUrl1} alt="" />
        <img src={item.ImageUrl2} alt="" />
        <img src={item.ImageUrl3} alt="" />
        <img src={item.ImageUrl4} alt="" />
        <img src={item.ImageUrl5} alt="" />
        <button onClick={() => deleteReview(item.id)}>Delete</button>

    </div>
  )
}

export default Item