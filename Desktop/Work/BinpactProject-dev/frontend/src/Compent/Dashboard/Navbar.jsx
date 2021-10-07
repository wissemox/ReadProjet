import React,{useState} from 'react'
import {Container , Box , Typography , IconButton , AppBar, Button  } from '@material-ui/core'
import PublicIcon from '@material-ui/icons/Public';
import PublishIcon from '@material-ui/icons/Publish';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import Connexin from './image/Connexin'
import Internet from './image/Internet'
import Impression from './image/Impression'
import Message from './image/Message'
import Notifacation from './image/Notifacation'
import Reserche from './image/Reserche'
import Rate0 from '../../Function/RateSet'
import Impress from './image/Impress'
const NavbarDashboard = ({setBollen,Bollent}) => {
    const [Number, setNumber] = useState(1)
    return (
        <>
        
        <Box boxShadow={2}  className={`flex    wp-100 bg-white Sticky`}>
            {/* Navbar */}
            <Box style={{backgroundColor:"#FAFAFA"}}   className="wp-20 HeadenNavbar  pb-4"  >
            <img className=" w-150  ml-8 mt-4   h-60 " src={process.env.PUBLIC_URL +"/Binpact.svg"}/>

            </Box>
         
            <Box  style={{  backgroundColor:"#FAFAFA"}} className=" wp-20 h-97 displayHidenNavbar01 flex flex-center">
              <Box className=""> 
                <img className="ml-7 mt-4 displayHidenNavbar w-250" src="binpact002.png"/>
                <img className=" mt-4 w-45 h-50 Animationlogo02" src="TESt05zd.png"/>
              </Box>
                
            </Box>
    
            <Box  className=" flex marginLeftResposive " >
                <Box className="widhtRedsposive  ResposiveHeaiden flex flex-left ml-8 mt-4">
                   <Box className="flex ">
                       <Box>
                      <img   src="Profiile.png"/>  
                      </Box>
                      <Box className="ml-5 mt-2">
                        <Typography className="font-semibold" variant="p">Abrilay Khatun</Typography>
                        <Box>
                        <Typography className="text-gray-400 f-14" variant="p">abrilakh@gmail.com</Typography>
                        </Box>
                     </Box>
                   </Box>

                    </Box>
                    <Box className="flex flex-left hidden Resposnivesw ">
                        <Box className="mt-4   ">
                            <IconButton onClick={()=>setBollen(!Bollent)}>
                            <MenuIcon  style={{fontSize:"40px"}} />
                        </IconButton>
                        </Box>
                    </Box>
                    <Box className="flex ml-10 flexnoneReposiveNavbar">
                      <img style={{width:"40px",color:"#316AAC"}}  src={process.env.PUBLIC_URL +"/Impress.svg"}/>
                        {/* Internet */}
                        <img style={{width:"30px",color:"#316AAC"}}   src={process.env.PUBLIC_URL +"/Internet.svg"}/>
                    </Box>
                        
                    <Box className="flex mt-2" >
                        <Box className=" ml-40  ResposiveSmartphone">
                        <img style={{width:"40px",color:"#316AAC"}}  src={process.env.PUBLIC_URL +"/Impress.svg"}/>
                        {/* Internet */}
                        <img style={{width:"30px",color:"#316AAC"}}   src={process.env.PUBLIC_URL +"/Internet.svg"}/>

                        </Box>
                        {/* Time */}
                            <Box className="ml-0 marginRight ResposivedisplaynoneImage" >
                                <Box className="tracking-widest text-right mt-3  ">
                                <Typography className="font-bold text-xl  " variant="p">22:03</Typography>
                                </Box>
                                <Box style={{width:"150px",paddingLeft:"50px"}} className="text-base "  >
                                <Typography className="text-gray-400  text-xs font-semibold	 	" variant="p">Sun,13 june 2021</Typography>
                                </Box>
                            </Box>
                        <Box  className="ml-8 mr-5 mt-3  h-4 font-semibold	ResposivedisplaynoneImage">
                        <Button className="shadow " style={{background:"#C01526" , color:"white" , width:"150px" , borderRadius:"30px" , height:"48px"}}> <Typography className="font-bold" variant="p"> Pending Tasks</Typography></Button>
                        </Box>
                        <Box className="flex marginTopResposive  marginLeftResposiveIcon">
                            <Box   className="bg-gray-50  rounded-full mt-3 pl-3 pt-3 ml-5 wh-60 	">
                                <img style={{width:"20px",color:"#316AAC"}}   src={process.env.PUBLIC_URL +"/Recherche.svg"}/>
                            </Box>
                            <Box  className="bg-gray-50	wh-60 rounded-full NotifactionResposiveNone mt-3 pl-3   ml-5 	">
                                <img style={{paddingTop:"10px",width:"25px",color:"#316AAC"}}   src={process.env.PUBLIC_URL +"/notfi.svg"}/>

                                {/* notfi */}
                            </Box>
                            {/* Message */}
                            <Box  className="bg-gray-50 wh-60	 rounded-full mt-3 pl-3  ml-5  ">
                                <img style={{paddingTop:"12px",width:"25px",color:"#316AAC"}}   src={process.env.PUBLIC_URL +"/Message.svg"}/>
                            </Box>
                        </Box>
                    </Box>
                    <Box className="flex ml-4 ResposiveSmartphoneiphone ">
                        <Box className="bg-gray-50 mt-8 mr-5 FlexNone300Repsoive rounded-full wh-60 ">
                            <Impression className="ml-1 mt-1 "  style={{fontSize:"30px",color:"#316AAC"}}/>
                        </Box>
                        <Box className="bg-gray-50 wh-60 mt-8   rounded-full">
                        <Connexin className="ml-1 mt-1"  style={{fontSize:"30px",color:"#316AAC"}}/>
                        </Box>
                        </Box>
                        
                    </Box>
            
        </Box>
            {/* Main */}

        </>
         
    )
}

export default NavbarDashboard
