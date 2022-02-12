import { width } from '@mui/system'
import React , {useState} from 'react'
import SponsorCard from '../../components/SponsorCard/SponsorCard'
function Sponsor() {
  const SponsorImg =[{Image:"BitLabsWhiteLogo.png" },{Image:"BitLabsWhiteLogo.png" },{Image:"BitLabsWhiteLogo.png" },{Image:"BitLabsWhiteLogo.png" },{Image:"BitLabsWhiteLogo.png" },{Image:"BitLabsWhiteLogo.png" }]
  return (
    <div className='pt-2' style={{backgroundColor:"#161B28"  , color:"white"}}>
        <p className='FontSizeResponsiveSponsor' style={{textAlign:"center"   , fontWeight:"600"}}>Our Partners</p>
        <p className='text-center pb-12 FontSizeResponsiveDescriptionSponsor' style={{width:"50%" , marginLeft:"auto" , marginRight:"auto"}}>is working with several offerwalls.
         You can choose from completing simple surveys, downloading apps, and much more.</p>
         <div style={{width:"80%"  , marginLeft:"auto" , marginRight:"auto"}}>
             <div  style={{flexWrap:"wrap"  ,  justifyContent:"center"}} className='flex FlexDiraction'>
              {SponsorImg.map((el)=><div  className='widthResponsive30prSponsor' style={{ marginRight:"10px",marginLeft:"20px" , marginTop:"20px" }}>
                  <SponsorCard Image={el}/>
                  </div>)}
             </div>
            
         </div>
    </div>
  )
}

export default Sponsor
