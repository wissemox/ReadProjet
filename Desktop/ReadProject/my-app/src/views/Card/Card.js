import React from 'react'
import Box from '@mui/material/Box';

function Card() {
  return (
    <Box boxShadow={4} className='pb-2 pt-2 '  style={{ height:"100%",backgroundColor:"#1D2333" , borderRadius:"10px"}}>
       <div className='flex '   style={{width:"95%",backgroundColor:"#1D2333" , borderRadius:"10px"  , height:"100%" , marginLeft:"auto" , marginRight:"auto" }}>
         <div  className='w-1/2 pl-4 pt-1 pb-3'>
        <p style={{color:"#dd4b5e" , fontSize:"20px" , fontWeight:"600"}}>Choose a task</p>
        <p style={{fontSize:"12px"}} className='text-white mt-1'>Take surveys</p>
        <p  style={{fontSize:"12px"}} className='text-white mt-1'>Take surveys</p>
        <p style={{fontSize:"12px"}} className='text-white mt-1'>Take surveys</p>
        <p style={{fontSize:"12px"}} className='text-white mt-1'>Take surveys</p>
        </div>
        <div className='w-1/2'> 
      <div style={{height:"50%"}} className='bg-black mt-2 ml-2 mr-2'>
           <p className='text-white text-center  pt-4'>IMG</p>
      </div>
        </div>
       </div>
    </Box>
  )
}

export default Card
