import React from 'react'
function CardOffer(props) {
  return (
     
    <div style={{backgroundColor:"#dd4b5e8d" , width:"250px" , marginLeft:"10px" ,marginRight:"10px" , marginTop:"10px" ,marginBottom:"10px"}}>
      {/* <Palette   src={process.env.PUBLIC_URL+"/fav/lootably-logo.png"}>
  {({ data, loading, error }) => (
    <div style={{ color: data.vibrant }}>
      Text with the vibrant color
    </div>
  )}
</Palette> */}

 
    <div className='bg-GradationBlue' style={{width:"100%" }}>
      <div style={{display:"flex"}}>
        <p style={{color:"white" , marginLeft:"10px",marginRight:"10px"}}>{props.el.Name}</p>
        <div style={{backgroundColor:"#dd4b5e" , color:"white",marginLeft:"auto" , paddingLeft:"20px",borderRadius:"10px" , paddingRight:"20px"}}>
          <p>{props.el.Price}dt</p>
        </div>
      </div>
       <img style={{width:"200px", height:"100%"  ,marginLeft:"auto", marginRight:"auto" , marginTop:"30px" ,marginBottom:"30px"}}  src={process.env.PUBLIC_URL+"/fav/lootably-logo.png"}/> 
      
      <div   style={{height:"6px",backgroundColor:"#1d2333" ,borderRadius:"20px", width:"90%" ,marginLeft:"auto" ,marginRight:"auto"}}>
      </div>
    </div>
    </div>
  )
}

export default CardOffer