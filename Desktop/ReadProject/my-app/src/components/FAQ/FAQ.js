import React from 'react'

function FAQ(props) {
  return (
    <div style={{backgroundColor:"#1D2333" , borderRadius:"8px" }}>
      <p className='FontSizeResponsiveFAQ18PX' style={{color:"white" , paddingTop:"20px",paddingBottom:"20px" ,paddingLeft:"20px"  , fontWeight:"600"} }>{props.el.Question}</p>
    </div>
  ) 
}

export default FAQ
