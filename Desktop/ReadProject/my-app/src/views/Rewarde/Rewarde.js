import React,{useState} from 'react'
import CartRewarded from '../../components/CardRewarded/CartRewarded'
function Rewarde() {
    const [Reward , setReward]=useState([{Name:"Cashout",Description:"Cashouts starting at $1-Cashout whenever you want"} , {Name:"Earn"  ,Description:"Complete unlimited surveys and offers"}, {Name:"Earn"  ,Description:"Complete unlimited surveys and offers"}])
  return (
    <div className='pt-14 pb-4 ' style={{backgroundColor:"#161B28"}}>
    <p  style={{  fontWeight:"700"}} className='text-center  FontSize60pxResponsive text-white'>Get Reaward <span style={{color:"#DD4B5E"}}>Easy!</span></p>
    <p className=' fontSizeResponsiveHowToGetStarted'  style={{color:"#e5e5e5"  ,textAlign:"center"}}>Earning money on Freecash has been made as simple as possible</p>
    <div style={{justifyContent:"center" , marginLeft:"auto" , marginRight:"auto"}} className='flex widthResponsive100PrReward'>
    {Reward.map((el)=>
    <div className='ml-4 mr-4  pt-7 pb-7' style={{width:"30%"}}>  
        
    <CartRewarded/>
    </div>)}
    </div>
    
 </div>
  )
}

export default Rewarde
