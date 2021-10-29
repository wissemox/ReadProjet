import React,{useState}  from 'react'
import { Parallax } from 'react-parallax';
import '../../../css/Navbar.scss'
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import MenuIcon from '@mui/icons-material/Menu';
 
const Navbar = () => {
    const [Scrool , setScroll]=useState(false)
    const [Homme , sethome]=useState(false)
    const [About , setAbout]=useState(false)
    const [Service , setService]=useState(false)
    const [Togled , setTogled]=useState(false)

    const changeBackground = () => {
        if (window.scrollY == 0) {
          setScroll(false);
        } else {
          setScroll(true);
        } 

        if(window.scrollY<=200 ){
            sethome(true)
        }else{
            sethome(false)
        }
        if(window.scrollY>200&&window.scrollY<=500){
            setAbout(true)
        }else(
           setAbout(false)
        )
        if(window.scrollY>500&&window.scrollY<=1000){
            setService(true)
        }else(
            setService(false)
        )
      };
      window.addEventListener("scroll", changeBackground);
// ImagetEST
    //   bgImage={process.env.PUBLIC_URL +`/Backgroundimage/wallpapersden.com_minimalist-landscape-painting_2880x1800.jpg`} 
    return (
        <Parallax         strength={150}        bgImage={process.env.PUBLIC_URL +`/Backgroundimage/1280x1024-pale-brown-solid-color-background.jpg`}   >
           <div  style={{height:"100vh"  }}  >
               {/* Navbar */}
                <AppBar className={`${Scrool&&"AnimationHoverNavbar"}`} style={{backgroundColor:Scrool? "white":"transparent", boxShadow:"none" }} >
                   
                       <div  style={{ maxWidth:"1300px" ,marginLeft:"auto",marginRight:"auto",width:"100%",fontSize:"14px"}} className="flex fontFamilySite colorwhite p-6    tracking-widest font-bold 	">
                       <div > 
                           {Scrool ?                              <img style={{width:"25%"}} src={process.env.PUBLIC_URL+'/Untitled-3.svg'}/> :                   <img style={{width:"25%"}} src={process.env.PUBLIC_URL+'/Untitled-2.svg'}/>  }
                            </div>
                            <div className="flex pb-2 pt-4 DisplayNone" style={{justifyContent:"flex-end" , width:"100%"}}>
                                <div>
                                <p style={{color:Homme && "#72daa8" || Scrool&&"black"  }} className="pr-8">Home</p>
                                </div>
                                <div> 
                                <p style={{color:About&&"#72daa8"|| Scrool&&"black"}} className="pr-8">About</p>
                                </div>
                                <p style={{color:Service && "#72daa8"|| Scrool&&"black"}} className="pr-8">Service</p>
                                <div>
                                <p style={{color: Scrool&&"black"}} className="pr-8">Portfoli</p>
                                </div>  
                            </div>
                            <div style={{justifyContent:"flex-end"  , width:"50%"}}  className="DisplayNonReposive pt-3"> 
                                <div>
                                <MenuIcon onClick={()=>setTogled(!Togled)}/>
                                </div>
                            </div>
                        </div>
                
                </AppBar>
                {Togled &&  <div className="animatio" > 
                        <AppBar className="animatio" style={{width:"100%" , height:"100vh" , backgroundColor:"white"}}>
                            <p>zad</p>
                            <MenuIcon style={{backgroundColor:"red"}} onClick={()=>setTogled(!Togled)}/>
                        
                        </AppBar>
                    </div>}
                  
                {/* Main */}
                <div className="Maxwith1500 ">
                    
                <div  className="tracking-widest marginLeftResposive  paddingTop200 FontFamily02">
                    <p className="fontFamilysite01" style={{color:"#72daa8",fontSize:"22px" , fontWeight:"300" , letterSpacing:"5"}}>HELLO I'M </p>
                    <p className="colorwhite letterspacing FontFamilty04 FonSizeReposives">Wissem Abid</p>
                    <p className="mt-2 colorwhite fontFamilysite01 f-28px ">DEVELOPER WEB FULL STACK JS</p>
                </div>
                <div style={{ textAlign:"center" }} className="marginLeftResposiveButton mt-16 pt-2 pb-2 w-15Pr opacity rounded-full">
                    <button className="p-1 letterspacing01 fontSizeReposive" style={{opacity:"60%" , color:"white"}}>Contact us</button>
                </div>
                </div>
           </div>
        </Parallax>
    )
}

export default Navbar
