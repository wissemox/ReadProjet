import React , {useState} from 'react'
import Button from '../../components/Button/Button'
function Navbar() {
  const NavbarRouter=[{Name:"Price" , Image:"earn-icon.svg"},{Name:"Price" , Image:"money.svg"}]
  return (
    <div style={{backgroundColor:"#161B28"}}>
    <div  style={{marginLeft:"auto" , marginRight:"auto" , maxWidth:"1500px"}} className='pt-3 pb-3 flex ' >
    
        <div className='flex  ml-4   widthResponsiveNavbar ' >
        <img style={{width:"50px" ,height:"50px"}}  src={process.env.PUBLIC_URL + "/logo/logoWhite.svg"}/>
        <div className='DiplayNoneAppbarDatied flex'>
        {NavbarRouter.map((el)=> <>
            <div className='ml-16' style={{marginTop:"auto" , marginBottom:"auto"}}>
               <div className='flex'>
                  <img style={{width:"30px" , height:"30px"}} src={process.env.PUBLIC_URL+`/fav/${el.Image}`}/>
                  <div className='ml-4' style={{marginTop:"auto" , marginBottom:"auto"}}>
                   <p style={{fontSize:"14px"}} className='mt-1 text-white'>{el.Name}</p>
                  </div>
                </div>
                
            </div>
            
         </>)
         
       }
           </div>
            
        </div>

        <div  className=' mr-4 flex justify-end  widthResponsiveNavbar2'> 

           
              <div className='mt-auto mb-auto mr-4 w-2/4' >
                  <Button className="text-white pl-4 pr-4 FontSizeResponsiveAppBar" backgroundColor="#28303f" Name="Register"/>
              </div>
          
            <div className='mt-auto mb-auto w-2/5' > 
            <Button className="text-white pl-4 pr-4 FontSizeResponsiveAppBar" backgroundColor="#dd4b5e" Name="login"/>
            </div>
        </div>
      
    </div>
    </div>
  )
}

export default Navbar
