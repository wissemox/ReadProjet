import React from 'react'

const Map = ({el}) => {
    return (
        <div style={{display:"flex"  , marginTop:"15px" , justifyContent:"center"}}>
            <div style={{columnCount:"2" , columnGap:"10px" , margin:"auto" , height:"100%"  }}>
           <img src={el.Image}/>
           </div>
        </div>
    )
}

export default Map
