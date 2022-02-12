import React ,{useState} from 'react'
import Card from '../Card/Card'
function HowToGetStarted() {
  const Guide=[{Name:"Choose a task"},{Name:"Choose a task"}, {Name:"Choose a task"}]
  return (
    <div style={{backgroundColor:"#161B28"}}>
       <p  style={{  fontWeight:"600"}} className='text-center pt-8 FontSize60pxResponsive text-white'>How to get started?</p>
       <p className='pb-6 fontSizeResponsiveHowToGetStarted'  style={{color:"#e5e5e5"  ,textAlign:"center"}}>Earning money on Freecash has been made as simple as possible</p>
       <div  className='widthResponsive80pr' style={{  marginLeft:"auto" ,  marginRight:"auto"}}>
        {/* <Card/> */}
         
        <div style={{justifyContent:"center" , maxWidth:"1000px" , marginLeft:"auto" , marginRight:"auto"}} className='FlexDirectionResponsive pb-14 '>
        {Guide.map((el)=>
        <div className='mr-4  mt-4 mb-4  widthResponsive30pr' > 
            <Card/>
        </div>  )}
        </div>
       </div>
    </div>
  )
}

export default HowToGetStarted
