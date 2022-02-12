import React from 'react'

function PaymenSystem(props) {
  return (
    <div >
    <div style={{width:"100px"}}>
         <img style={{width:"100px"}} src={process.env.PUBLIC_URL + `/fav/${props.el.Image}`}/>
      </div>
    </div>
  )
}

export default PaymenSystem
