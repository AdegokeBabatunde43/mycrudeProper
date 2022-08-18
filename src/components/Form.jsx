import React, {useState, useContext} from 'react'
import { ReviewContext } from '../ReviewContext'

const Form = () => {
   
    const [body, setBody]=useState('')
    const[title, setTitle]=useState('')
    // const[message, setMessage]=useState('')



    const {addReview}= useContext(ReviewContext)

    const handleSubmit = (e) => {
    e.preventDefault()
    const newReview = {body, title}
    // setMessage([body, title])
    setBody('')
    setTitle('')
    addReview(newReview)
    
    }
  return (
    <>
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter Title" required value={body} onChange={(e)=> setBody(e.target.value)} />
        <input type="text" placeholder='Enter Review' required value={title} onChange={(e)=> setTitle(e.target.value)} />
        <button>Submit</button>
    </form>
    {/* {message} */}
    
    
    </>
    
  )
}

export default Form
