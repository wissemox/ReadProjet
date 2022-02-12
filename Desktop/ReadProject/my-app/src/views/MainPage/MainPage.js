import React from 'react'

function MainPage() {
  return (
    <div style={{overflow:"auto" ,backgroundColor:"#161B28"}} className='BackgroundImageurl01'>
        <div className='HeightResponsiveMainPage' > 
        <div  className='PaddingResponsiveMainTitle' >
        <p style={{width:"100%" ,  color:"#dd4b5e"  , fontWeight:"600"}} className='text-center  FontSizeResponsive50pxTitle'>Let’s earn money!</p>
        <p style={{width:"100%" ,  color:"white"  }} className='text-center mb-4 FontSizeResponsive25pxTitle'>Yesterday users cashed out</p>
        <div style={{borderRadius:"40px"}} className='flex justify-center'> 
            <button className='pt-3 pb-3 w-200pxResponsiveTitle' style={{backgroundColor:"#dd4b5e" ,borderRadius:"10px"  }}> <p style={{fontWeight:"600" }} className='text-white rounded-full'>Start erring</p></button>
        </div>
        </div>
        </div>
    </div>
  )
}

export default MainPage
