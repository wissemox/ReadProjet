import React from "react";

function Button(props) {
  return (
    <div style={{backgroundColor:props.backgroundColor}} className="h-full pt-2 pb-2 -600">
              <div     className='flex  '>
                <p style={{fontWeight:"600"}} className={props.className}>{props.Name}</p>
                <div className='flex' style={{width:"50%" ,justifyContent:"flex-end"}}>
                  <img className='ml-1 widthResponsiveImage' src={process.env.PUBLIC_URL+"/fav/Google.png"}/>
                  <img className='ml-1 mr-2 widthResponsiveImage'   src={process.env.PUBLIC_URL+"/fav/Facebook.svg"}/>
                </div> 
              </div> 
             <div style={{height:"50%"}} className="bg-slate-600 ">
                <div style={{marginTop:"auto" , marginBottom:"auto"}}>
              </div>

              </div> 
        
    </div>
  );
}

export default Button;
