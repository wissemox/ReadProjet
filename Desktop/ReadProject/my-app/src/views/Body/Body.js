import React,{useState} from 'react'
import Card from '../../components/Card/Card'
function Body() {
    const MapCard = [{Name:"Wissem"},{Name:"Wissem"} , {Name:"Wissem"}, {Name:"Wissem"} , {Name:"Wissem"}  , {Name:"Wissem"} , {Name:"Wissem"}]
  return (
    <div style={{backgroundColor:"#141522"}} className='Hoversq'>
    <div className='flex ChangeStyleScroll ' style={{  width:"100%"  ,overflowY:"scroll"  ,overflowY: "hidden" , maxWidth:"1500px" , marginLeft:"auto" , marginRight:"auto"}}>
        {MapCard.map((el)=>
          <div  className='p-4 '  style={{width:"200px" }}>
          <Card   Name="Wissm"/>
      </div>
      )}
      
        
     

    </div>
    </div>
  )
}

export default Body
