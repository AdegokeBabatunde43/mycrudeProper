import React, {useContext} from 'react'
import { ReviewContext } from '../ReviewContext'
import Item from './Item'

const List = () => {
const {review}=useContext(ReviewContext)


if(!review || review.length === 0){
    return 'loading'
}

  return (


    <div className='welcome'>
{review.map((item)=>(
    <Item key={item.id} item={item} />
))}
    </div>
  )
}

export default List