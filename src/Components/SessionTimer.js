import React, { useEffect, useState } from 'react'

function SessionTimer() {
    const [counter, setCounter] = useState(0)
    useEffect(() => {
        const incrementer = setInterval(()=>{
            setCounter((prevCounter) => prevCounter + 1)
        }, 1000)
        return () => clearInterval(incrementer)
    },[])
  return (
    <div>{counter} sec </div>
  )
}

export default SessionTimer