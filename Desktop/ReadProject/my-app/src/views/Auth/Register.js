import React from 'react'
import Input from '../../components/Input/Input'
import ButtonAuth from '../../components/ButtonAuth/ButtonAuth'
import { color } from '@mui/system'
function Register() {
  return (
    <div  >
        
        <div  className='w-50pr HeightResponsiveAuth WidthResponsiveAuthPositionfixed BackgroundImageurl04 fixed bg-black'>
            <div className='' style={{display:"flex"}}>
                  <div style={{width:"20%"}}> 
                 <img style={{width:"40px" , height:"40px"  ,marginTop:"20px" ,   marginLeft:"20px" }} src={process.env.PUBLIC_URL+`/logo/logoWhite.svg`}/>
                 </div>
                 <div style={{width:"80%"  , display:"flex" , justifyContent:"flex-end"}}>
                     <p style={{marginTop:"20px",paddingBottom:"2px",cursor:"pointer" ,color:"white" , fontWeight:"600" , paddingRight:"20px",paddingLeft:"20px",borderRadius:"4px",backgroundColor:"#dd4b5e",marginBottom:"20px" }}>Register</p>
                  </div>
            </div>
        </div>
          <div className='MarginLeft51pr' style={{paddingTop:"120px" }}>
  
             <p style={{fontSize:"28px" , fontWeight:"600"}} className='text-center'>Register</p>
          
            <div style={{width:"80%"}} className='ml-auto mr-auto '>
            <div className='ml-auto mr-auto w-50pr WidthResponsiveAuth pt-2 pb-2'>
                  <div className='flex rounded-md' style={{width:"100%" ,backgroundColor:"#182849"  , paddingTop:"6px"  , paddingBottom:"6px" ,paddingLeft:"5px",marginLeft:"auto" , marginRight:"auto"}}>
                    <img   style={{width:"25px" , height:"25px" , marginLeft:"6px"}}  src={process.env.PUBLIC_URL+`/fav/Google.svg`}/>
                     <div style={{width:"80%"}} className='flex justify-center'>
                         <p style={{color:"white" ,fontSize:"14px" , marginTop:"auto" , marginBottom:"auto"}}>Register with google</p>
                    </div>
                 </div>
                 <div className='flex mt-2 mb-2 rounded-md' style={{width:"100%" ,backgroundColor:"#182849"  , paddingTop:"6px"  , paddingBottom:"6px" ,paddingLeft:"5px",marginLeft:"auto" , marginRight:"auto"}}>
                    <img   style={{width:"25px" , height:"25px" , marginLeft:"4px"}}  src={process.env.PUBLIC_URL+`/fav/Facebook.svg`}/>
                    <div style={{width:"80%"}} className='flex justify-center'>
                         <p style={{color:"white" ,fontSize:"14px" , marginTop:"auto" , marginBottom:"auto"}}>Register with Facebook</p>
                    </div>
                 </div>
                 <p style={{color:"#4F4F4F"}} className='pt-1 pb-1'> Username</p>
                 <Input  icon="userName.svg" placeholder="Entre your name"  className={"w-full pt-2 pl-9 pb-2 mr-auto ml-auto BorderInput f-14px"} />
                 <p style={{color:"#4F4F4F"}} className='pt-1 pb-1'> Email</p>
                 <Input icon="Mail.svg"   placeholder="Entre your Email"  className={"w-full pt-2 pl-9 pb-2 mr-auto ml-auto  BorderInput f-14px"} />
                 <p style={{color:"#4F4F4F"}} className='pt-1 pb-1'> Password</p>
                 <Input icon="PasswordIcon.svg"   placeholder="Entre your Password"  className={"w-full pt-2 pl-9 pb-2 mr-auto ml-auto  BorderInput f-14px"} />
                 <p style={{color:"#4F4F4F"}} className='pt-1 pb-1'> verification Password</p>
                 <Input icon="PasswordIcon.svg"   placeholder="Verify your Password"  className={"w-full pt-2 pl-9 pb-2 mr-auto ml-auto  BorderInput f-14px"} />
                 <div>
                     <div style={{width:"100%" , marginLeft:"auto",marginRight:"auto" , marginTop:"20px"}}>
                 <ButtonAuth text={"Register"} className="rounded-md font-semibold	 text-white text-center pt-1 pb-1"/>   
                 </div>
                 </div>
             </div>
            </div>
            
      </div>  
    </div>
  )
}

export default Register
