import React,{useState} from 'react'
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
const Aboutme = () => {
    const [Bollen02 , setBollen02]=useState(false)
    const changeBackground = () => {
       
        if(window.scrollY>200){
            setBollen02(true)
        }
      };
      window.addEventListener("scroll", changeBackground);
    return (
        <div style={{width:"100%" , maxWidth:"1300px" ,marginLeft:"auto",marginRight:"auto"}} className="mt-28 mb-24">
            <div className="flex " >
                    <div className="" style={{width:"50%"}}>
                        <div className="flex ">
                            <SupervisorAccountIcon style={{color:"#75dab4" , fontSize:"30px"}}/>
                            <p style={{paddingLeft:"14px" , fontSize:"15px" , marginTop:"4px"}}>About me</p>
                        </div>
                        <div className="mt-4 mb-4">
                          <p style={{fontSize:"40px" , fontWeight:"700"}}>My mission is design develop <br/>the best Websites around.</p>
                        </div> 
                        <div style={{fontSize:"17px" ,opacity:"70%"}}>
                        <p style={{color:"#777777" ,  lineHeight: 2 , width:"90%"}}>
                            Hello! I’m Aldrich Killian. Web designer from USA, California, San Francisco. I have rich experience in web site design and building, also I am good at wordpress. 
                            I love to talk with you about our unique.
                        </p>
                        </div> 
                        <div className="HoveTest">
                        <div  style={{position:"absolute" , marginTop:"8px" ,marginLeft:"10px"}}>
                        <a href={process.env.PUBLIC_URL +`/Wissems-Resume-1.pdf` } download> 
                                  
                                  <p style={{letterSpacing:"4px" , fontWeight:"300" , fontSize:"13px" , color:"#464B4E"}} className="FontFaimlyty05" >DWNLOAD C.V</p>
       
                              </a>
                              </div>    
                        <div className="mt-8 mb-8 ">
                            <p className="widhtTesTest" style={{backgroundColor:"#ededed"  , padding:"5px" , height:"40px"}}>
                                
                            </p>
                         
                        </div>
                        </div>
                    </div>
                    <div style={{width:"50%" , marginLeft:"50px"}}>
                    <div>
                    <div  className="flex mb-3 mt-8">
                          <p style={{fontSize:"13px" , paddingTop:"20px"}}>UI / UX DESIGN</p>
                          <div style={{marginLeft:"48%"}}  className={`flex ${Bollen02&&"justicontentFlexEnd"}`}>
                              <div>
                              <img style={{width:"80%"}} src="prestage.png"/>

                              </div>
                          </div>
                        </div>
                        <div style={{backgroundColor:"#ededed" , height:"8px"  ,width:"90%"}}>
                            <div className={`${Bollen02&&"TestWidht"}`} style={{height:"8px"   , backgroundColor:"#75dab4"}}>

                            </div>
                        </div>

                        <div  className="flex mb-3 mt-14">
                          <p style={{fontSize:"13px" , paddingTop:"20px"}}>UI / UX DESIGN</p>
                          <div style={{marginLeft:"48%"}}  className={`flex ${Bollen02&&"justicontentFlexEnd"}`}>
                              <div>
                              <img style={{width:"80%"}} src="prestage.png"/>

                              </div>
                          </div>
                        </div>
                        <div style={{backgroundColor:"#ededed" , height:"8px"  ,width:"90%"}}>
                        <div className={`${Bollen02&&"TestWidht"}`} style={{height:"8px"   , backgroundColor:"#75dab4"}}>

</div>
                        </div>

                        <div  className="flex mb-3 mt-14">
                          <p style={{fontSize:"13px" , paddingTop:"20px"}}>UI / UX DESIGN</p>
                          <div style={{marginLeft:"48%"}}  className={`flex ${Bollen02&&"justicontentFlexEnd"}`}>
                              <div>
                              <img style={{width:"80%"}} src="prestage.png"/>

                              </div>
                          </div>
                        </div>
                        <div style={{backgroundColor:"#ededed" , height:"8px"  ,width:"90%"}}>
                        <div className={`${Bollen02&&"TestWidht"}`} style={{height:"8px"   , backgroundColor:"#75dab4"}}>

</div>
                        </div>
                    </div>

                    
                    </div>
                
            </div>
        </div>
    )
}

export default Aboutme
