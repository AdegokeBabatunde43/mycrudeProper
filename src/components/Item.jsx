import React, {useContext} from 'react'
import { ReviewContext } from '../ReviewContext'

const Item = ({ item}) => {
     const{deleteReview}=useContext(ReviewContext)
  return (
    <div className="item">
        <h2>{item.title}</h2> 
        <h6>{item.body}</h6>
        <button onClick={() => deleteReview(item.id)}>Delete</button>

    </div>
  )
}

export default Item