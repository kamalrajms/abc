import React, { useEffect, useState } from 'react'

export default function Sec() {
    const[sec,setSec]=useState(0)
    useEffect(()=>{
        const interval=setInterval(() => {
            setSec((prev)=>prev+1)
        }, 1000);

        return ()=>{
            clearInterval(interval)
            
        }
    },[])

  return (
    <div>
      <h2>seconds:{sec}</h2>
    </div>
  )
}


// setTimeout== delay time + function. [only once]
// setInterval == delay time + function + delay time+ funtion.....  [execute again and again]
