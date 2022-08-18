import React, {createContext, useState, useEffect} from 'react'

// const url = 'https://jsonplaceholder.typicode.com/posts'
const url = 'http://localhost:8000/api/v1/alltodos'
export const ReviewContext= createContext()

const ReviewProvider = ({children}) => {
const [review, setReview]=useState([])

const getReview = async () => {
    const response = await fetch(url)
    const review = await response.json()
    console.log(review)
    setReview(review)
}

useEffect(()=>{
    getReview() 
},[])

const addReview = async(newReview)=> {
    const url= 'http://localhost:8000/api/v1/createtodo'
    const response = await fetch(url,{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newReview),
    })
    const data = await response.json()
    setReview([data, ...review])
}


const deleteReview = async (id) => {
    if (window.confirm('do you want to delete?')){
        await fetch(`http://localhost:8000/api/v1/deletetodo/${id}`,{
            method: 'DELETE',
        })
        setReview(review.filter((item)=> item.id !== id))
    }
}

  return (
    <ReviewContext.Provider value={{review, setReview, addReview, 
    deleteReview
    }}>
        {children}

    </ReviewContext.Provider>
  )
}

export default ReviewProvider