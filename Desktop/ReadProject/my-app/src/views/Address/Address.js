import React from 'react'
 function Address() {
  return (
    <div className='pt-24 pb-24 BackgroundImageurl02' style={{backgroundColor:"#161B28"}}>
        <div style={{ justifyContent:"space-around" }} className='ml-auto mr-auto flex w-20prResponsiveAddress'>
      <img  className='widthResponsiveImgAddress' src={process.env.PUBLIC_URL+"/fav/Facebook.svg"}/>
      <img  className='widthResponsiveImgAddress'   src={process.env.PUBLIC_URL+"/fav/Twitter.svg"}/>
      <img  className='widthResponsiveImgAddress' src={process.env.PUBLIC_URL+"/fav/Linkedin.svg"}/>
      <img  className='widthResponsiveImgAddress' src={process.env.PUBLIC_URL+"/fav/Instagram.svg"}/>
      </div>
      <div style={{ justifyContent:"space-around" ,color:"white" ,fontWeight:"600"}} className='ml-auto mr-auto flex mt-6 w-40prResponsiveDescription FontSizeResponsiveAddress'>
        <p>Home</p>
        <p>Features</p>
        <p>About</p>
        <p>Faq</p>
        <p>User Agreement</p>
        <p>Privacy Policy</p>
      </div>
{/* Linkedin */}
      {/*  */}
    </div>
  )
}

export default Address
