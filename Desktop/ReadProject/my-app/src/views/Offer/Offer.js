import React,{useState} from 'react'
import CardOffer from '../../components/CardOffer/CardOffer'
function Offer() {
  const [RouterDesign , setRouterDesign] = useState(false)
  const OfferWallsMap = [{Name:"dazd",Price:10}, {Name:"dazd" , Price:20}  ,{Name:"dazd" , Price:20 },{Name:"dazd", Price:20},{Name:"cwdazd"  , Price:20},{Name:"add" , Price:50},{Name:"dazd" , Price:20}]
  return (
    <div style={{backgroundColor:"#161b28"}}>
    <div style={{maxWidth:"1500px" , marginLeft:"auto" , marginRight:"auto"}}>
      <div className='withResponsiveDesignWith' style={{display:"flex" , marginLeft:"auto" , marginRight:"auto"}}>
        <div onClick={()=>setRouterDesign(false)} style={{borderLeft:!RouterDesign&&"4px solid #dd4b5e" , paddingLeft:"6px" , paddingRight:"6px" , margin:"10px",opacity:RouterDesign && "60%"}}>
          <p style={{color:!RouterDesign?"#dd4b5e":"white" , fontSize:"20px" , fontWeight:"600"}}> Offer walls </p>
        </div>
        <div onClick={()=>setRouterDesign(true)} style={{borderLeft:RouterDesign&&"4px solid #dd4b5e" , paddingLeft:"6px" , paddingRight:"6px" , margin:"10px",opacity:!RouterDesign && "60%"}}>
          <p style={{color:RouterDesign?"#dd4b5e":"white" , fontSize:"20px" , fontWeight:"600"}}> Offer walls </p>
        </div>
      </div>
      <div   className='JustifyContentCenterResponsive' style={{ display:"flex", flexWrap:"wrap"  , width:"90%" , marginLeft:"auto" , marginRight:"auto"}}>
      {OfferWallsMap.map((el)=><CardOffer el={el}/>)}
      </div>
    </div>
    </div>
  )
}

export default Offer