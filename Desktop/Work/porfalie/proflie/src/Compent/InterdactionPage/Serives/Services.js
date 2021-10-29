import { height } from '@mui/system';
import React from 'react'
import { Parallax } from 'react-parallax';
const Services = () => {
    return (
        <div>
        <div className="flex" style={{maxWidth:"1500px",marginLeft:"auto",marginRight:"auto" , justifyContent:"center"  ,marginBottom:"100px"}}>
            <div  style={{width:"40%"}}>
              <img style={{width:"100%"}} src="Services.svg"/>
            </div>  

            {/* Service */}
            
        </div>
        <div style={{maxWidth:"1300px" , marginLeft:"auto",marginRight:"auto" , marginBottom:"50px"}} className="flex">
            <div className="HoverShadow" style={{border:"1px solid #EBEFF5" , padding:"40px" ,  paddingTop:"70px" , width:"30%"}}>
                <div>
                    <img style={{width:"15%"}} src={process.env.PUBLIC_URL+"/anchor-solid.svg"}/>
                </div>
                <div>
                    <p style={{fontWeight:"700" , fontSize:"18px" , marginTop:"30px"}}>Ui / Ux Design</p>
                    <div style={{width:"100%" , height:"80px" , marginTop:"10px" , color:"#777777"}}>
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, soluta.</p>
                    </div>
                </div>
            </div>


            <div className="mr-20 ml-20 HoverShadow" style={{border:"1px solid #EBEFF5" , padding:"40px" ,  paddingTop:"70px" , width:"30%"}}>
                <div>
                    <img style={{width:"15%"}} src={process.env.PUBLIC_URL+"/anchor-solid.svg"}/>
                </div>
                <div>
                    <p style={{fontWeight:"700" , fontSize:"18px" , marginTop:"30px"}}>Ui / Ux Design</p>
                    <div style={{width:"100%" , height:"80px" , marginTop:"10px" , color:"#777777"}}>
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, soluta.</p>
                    </div>
                </div>
            </div>


            <div className="HoverShadow" style={{border:"1px solid #EBEFF5" , padding:"40px" ,  paddingTop:"70px" , width:"30%"}}>
                <div>
                    <img style={{width:"15%"}} src={process.env.PUBLIC_URL+"/anchor-solid.svg"}/>
                </div>
                <div>
                    <p style={{fontWeight:"700" , fontSize:"18px" , marginTop:"30px"}}>Ui / Ux Design</p>
                    <div style={{width:"100%" , height:"80px" , marginTop:"10px" , color:"#777777"}}>
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, soluta.</p>
                    </div>
                </div>
            </div>
        </div>

        {/*  */}
        <Parallax         strength={600}        bgImage={process.env.PUBLIC_URL +`/Backgroundimage/counter.png`}   >
            <div className="flex"  style={{height:"320px" ,justifyContent:"center"}}>
               
                    <div  className="mt-20 mr-20" > 
                    <div style={{justifyContent:"center"}} className="flex"> 
                     
                        <img style={{width:"15%" }}   src={process.env.PUBLIC_URL+"/Heart.svg"}/>
                
                    </div>
                        <p style={{color:"white" , textAlign:"center" , fontWeight:"600" , fontSize:"45px" ,   paddingTop:"30px"}}>4</p>
                        <div className="flex pt-2" style={{justifyContent:"center"}}>
                        <p style={{  color:"white" , fontSize:"18px" , letterSpacing:"5px"}}>HAPPY CLIENTS</p>
                        </div>
                    </div>
                    <div  className="mt-20 mr-20" > 
                    <div style={{justifyContent:"center"}} className="flex"> 
                     
                        <img style={{width:"15%" }}   src={process.env.PUBLIC_URL+"/Heart.svg"}/>
                
                    </div>
                        <p style={{color:"white" , textAlign:"center" , fontWeight:"600" , fontSize:"45px" ,   paddingTop:"30px"}}>4</p>
                        <div className="flex pt-2" style={{justifyContent:"center"}}>
                        <p style={{  color:"white" , fontSize:"18px" , letterSpacing:"5px"}}>HAPPY CLIENTS</p>
                        </div>
                    </div>
                    <div className="mt-20 " > 
                    <div style={{justifyContent:"center"}} className="flex"> 
                     
                        <img style={{width:"15%" }}   src={process.env.PUBLIC_URL+"/Heart.svg"}/>
                
                    </div>
                        <p style={{color:"white" , textAlign:"center" , fontWeight:"600" , fontSize:"45px" ,   paddingTop:"30px"}}>4</p>
                        <div className="flex pt-2" style={{justifyContent:"center"}}>
                        <p style={{  color:"white" , fontSize:"18px" , letterSpacing:"5px"}}>HAPPY CLIENTS</p>
                        </div>
                    </div>
                    
            </div>
           
        </Parallax>
    </div>
    )
}

export default Services
