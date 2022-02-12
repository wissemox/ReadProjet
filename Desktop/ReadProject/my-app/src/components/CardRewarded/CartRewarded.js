import React from 'react'

function CartRewarded(props) {
  return (
    <div className=' paddingResponsiveCardRewarded HeightResponsive280px' style={{backgroundColor:"#1D2333" ,  borderRadius:"10px"}}>
       <img className='WidthResponsiveImageReward PaddingResponsiveCartRewarded' style={{  marginLeft:"auto" , marginRight:"auto"}} src={process.env.PUBLIC_URL+`/fav/tycoon-b.png`}/>
       <p style={{color:"white"   , fontWeight:"600"}} className='text-center mt-2 PaddingResponsiveTextCard FontSizeCard20pxResponsive'>Cashout</p>
       <div className='marginResponsiveCardReward' style={{width:"80%" , marginLeft:"auto", marginRight:"auto"}}>
           <p style={{color:"white", opacity:"0.4"}} className='text-center FontSizeResponsiveCardRewarded DisplayNoneResponsivCartRewardeed'>Cashouts statring at $1-Cashout wahenever you want</p>

       </div>
    </div>
  )
}

export default CartRewarded
