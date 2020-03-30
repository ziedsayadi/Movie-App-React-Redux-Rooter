import React from 'react'

function StarsR({count , setRate = ()=>{} } ) {
    let stars=[]
    for (let i=0;i<5;i++)
    {   
        if(i<count)
        stars.push(<span className='goldstar' onClick={()=> setRate(i)}  >★</span>)
        else
        stars.push(<span className='greystar' onClick={()=> setRate(i+1)}   >☆</span>)

    }
    return (
       
        <div>
        {stars}
        </div>
    )
}

export default StarsR
