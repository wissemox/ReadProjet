import React from 'react'

function Card(props) {
  return (
    <div style={{borderRadius:"5px"}} className='backgroundColorBlue flex pt-2 pb-2 pl-2 pr-2'>
     <div className='text-white' style={{width:"30px" , height:"30px",marginTop:"auto", marginBottom:"auto" , backgroundColor:"#5e4137"  ,  borderRadius:"5px"}}>
    
        <p  className='pt-1 text-center'>D</p>
    
     </div> 
     <div className='mr-2 ml-2'>
        <p style={{fontSize:"11px"}} className='text-slate-500'>{props.Name}</p>
        <p style={{fontSize:"13px"}} className='text-white'>{props.Name}</p>
      </div>
      <div className='pl-2 pr-2 pt-1 pb-1' style={{backgroundColor:"#26273d" , marginTop:"auto" , marginBottom:"auto" , marginLeft:"auto"}}>
          <p style={{color:"#dd4b5e" , fontSize:"12px"}}>1000</p>
      </div>
    </div>
  )
}

export default Card
