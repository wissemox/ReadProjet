import logo from './logo.svg';
import './App.css';
import React,{useState , useEffect} from 'react'
import Navbar from './Compent/InterdactionPage/Navbar/Navbar'
import Map from './Map'
import Aboutme from './Compent/InterdactionPage/Aboutme/Aboutme'
import Service from './Compent/InterdactionPage/Serives/Services'
import './css/Reposive/MainPage.scss'
function App() {

    const Userrf =JSON.parse(localStorage.getItem('user'))
   

  const [tesrt , settesrt]=useState(Userrf ?JSON.parse(localStorage.getItem('user')) :[])
  const Array =[{Name:"wissem"},
  {Name:"wissem" , Image:"https://i.pinimg.com/236x/5a/29/f5/5a29f52e8731f1ff0e4ec44ba3a343df.jpg" },
  {Name:"wissem" , Image:"https://i.pinimg.com/236x/33/a2/50/33a2503f978d91bdae175dbe8a6780db.jpg"},
  {Name:"wissem" , Image:"https://i.pinimg.com/236x/85/b2/4b/85b24b94932ab4aeedd302b7238fdfab.jpg" },


  {Name:"wissem" , Image:"https://i.pinimg.com/236x/a5/a5/93/a5a593a98316705905f69549227a7b7b.jpg"},
  {Name:"wissem" , Image:"https://i.pinimg.com/236x/3d/40/17/3d4017ec37998b07df88cf5b033addbd.jpg"},
  {Name:"wissem" , Image:"https://i.pinimg.com/236x/33/a2/50/33a2503f978d91bdae175dbe8a6780db.jpg"},
  {Name:"wissem" , Image:"https://i.pinimg.com/236x/3d/40/17/3d4017ec37998b07df88cf5b033addbd.jpg" },
  {Name:"wissem" , Image:"https://i.pinimg.com/236x/33/a2/50/33a2503f978d91bdae175dbe8a6780db.jpg"},
  {Name:"wissem" , Image:"https://i.pinimg.com/236x/85/b2/4b/85b24b94932ab4aeedd302b7238fdfab.jpg" },
  {Name:"wissem" , Image:"https://i.pinimg.com/236x/3d/40/17/3d4017ec37998b07df88cf5b033addbd.jpg"},
  {Name:"wissem" , Image:"https://i.pinimg.com/236x/33/a2/50/33a2503f978d91bdae175dbe8a6780db.jpg"},
  {Name:"wissem" , Image:"https://i.pinimg.com/236x/3d/40/17/3d4017ec37998b07df88cf5b033addbd.jpg" },
  {Name:"wissem" , Image:"https://i.pinimg.com/236x/33/a2/50/33a2503f978d91bdae175dbe8a6780db.jpg"},
  {Name:"wissem" , Image:"https://i.pinimg.com/236x/85/b2/4b/85b24b94932ab4aeedd302b7238fdfab.jpg" },
  {Name:"wissem" , Image:"https://i.pinimg.com/236x/3d/40/17/3d4017ec37998b07df88cf5b033addbd.jpg"},
  {Name:"wissem" , Image:"https://i.pinimg.com/236x/33/a2/50/33a2503f978d91bdae175dbe8a6780db.jpg"},
  {Name:"wissem" , Image:"https://i.pinimg.com/236x/3d/40/17/3d4017ec37998b07df88cf5b033addbd.jpg" },
  {Name:"wissem" , Image:"https://i.pinimg.com/236x/33/a2/50/33a2503f978d91bdae175dbe8a6780db.jpg"},
  {Name:"wissem" , Image:"https://i.pinimg.com/236x/85/b2/4b/85b24b94932ab4aeedd302b7238fdfab.jpg" },
  {Name:"wissem" , Image:"https://i.pinimg.com/236x/3d/40/17/3d4017ec37998b07df88cf5b033addbd.jpg"},
  {Name:"wissem" , Image:"https://i.pinimg.com/236x/33/a2/50/33a2503f978d91bdae175dbe8a6780db.jpg"},
  {Name:"wissem" , Image:"https://i.pinimg.com/236x/3d/40/17/3d4017ec37998b07df88cf5b033addbd.jpg" },
  {Name:"wissem" , Image:"https://i.pinimg.com/236x/33/a2/50/33a2503f978d91bdae175dbe8a6780db.jpg"},
  {Name:"wissem" , Image:"https://i.pinimg.com/236x/85/b2/4b/85b24b94932ab4aeedd302b7238fdfab.jpg" },
  {Name:"wissem" , Image:"https://i.pinimg.com/236x/29/ee/c9/29eec97ec693aee70939058da110006c.jpg"},
  {Name:"wissem" , Image:"https://i.pinimg.com/236x/85/b2/4b/85b24b94932ab4aeedd302b7238fdfab.jpg" },
  {Name:"wissem" , Image:"https://i.pinimg.com/236x/3d/40/17/3d4017ec37998b07df88cf5b033addbd.jpg"},
  {Name:"wissem" , Image:"https://i.pinimg.com/236x/33/a2/50/33a2503f978d91bdae175dbe8a6780db.jpg"},
  {Name:"wissem" , Image:"https://i.pinimg.com/236x/3d/40/17/3d4017ec37998b07df88cf5b033addbd.jpg" },
  {Name:"wissem" , Image:"https://i.pinimg.com/236x/3d/40/17/3d4017ec37998b07df88cf5b033addbd.jpg"},
  {Name:"wissem" , Image:"https://i.pinimg.com/236x/33/a2/50/33a2503f978d91bdae175dbe8a6780db.jpg"},
  {Name:"wissem" , Image:"https://i.pinimg.com/236x/3d/40/17/3d4017ec37998b07df88cf5b033addbd.jpg" },{Name:"wissem" , Image:"https://i.pinimg.com/236x/3d/40/17/3d4017ec37998b07df88cf5b033addbd.jpg"},
  {Name:"wissem" , Image:"https://i.pinimg.com/236x/33/a2/50/33a2503f978d91bdae175dbe8a6780db.jpg"},
  {Name:"wissem" , Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ1KSmMpJePQxlSOenXE13MoO6HzhnTxHhW1D7xJiLBSXsS0WSeA56amqI0LKg0mVUvY8&usqp=CAU" },
  {Name:"wissem" , Image:"https://i.pinimg.com/236x/3d/40/17/3d4017ec37998b07df88cf5b033addbd.jpg" },

  ]
  
  const converbase64=(file)=>{
    return new Promise((resolve,reject)=>{
      const fileReder=new FileReader()
      fileReder.readAsDataURL(file)
      fileReder.onload=()=>{
        resolve(fileReder.result)
      }; 
      fileReder.onerror=(error)=>{
        reject(error)
      }
    });
    
  }
  const [TestArray , setTestArraay]=useState([])
  const [File , setFile]=useState()
  const [Objectt , setObject]=useState([{Name:"wissem"},{Name:"wissem"}])
  const[efef , setdazd]=useState()
  const Tefse=async()=>{
   
    for(let i = 0 ; i<File.length; i++){
      const base64=await converbase64(File[i])
      TestArray.push({Name:base64})
    }
  
  }
  console.log(Objectt[0].Name)
  const TesTest05 = async()=>{
    tesrt.push({Name:"wissem" , image:["nadadaz","addn"]})
    console.log(tesrt)
 
    localStorage.setItem("user", JSON.stringify(tesrt));
  
   

  }
  const speak = ()=>{
    const sp =new SpeechSynthesisUtterance("Hello user");
    [sp.voice]=speechSynthesis.getVoices();
    speechSynthesis.speak(sp)
  }

  return (
    
      <div>
        <Navbar/>
        <Aboutme/>
        <Service/>
        <input type="file" multiple    onChange={(e)=>setFile(e.target.files)}/>
      <button onClick={Tefse}>Click me</button>
      <button onClick={TesTest05}>LocalStorage  </button>

      <button onClick={speak}>Click Mesqdq</button>
      {console.log(TestArray)}
      <div className="SahowTest mb-" style={{height:"80px" ,width:"100%"}}>
      <p>wisse</p>
      </div>
     
      <div className="flex">
        <div style={{width:"50%",backgroundColor:"red"}}>
        {Array.map((el)=><div> 
          <img style={{width:"100%" , height:"350px"  }} src={el.Image} />
          </div>)}
        </div>
        <div  style={{width:"50%"   ,backgroundColor:"red"}}>
        {Array.map((el ,i)=>i%2&& <div style={{height:"250px"}}> 
          <img  style={{width:"100%" }} src={el.Image} />
          </div>)}
        </div>
        
      </div>
        {/* <p style={{height:"800px"}}>ad</p>
          <div  className="MainPage"  >
        {Array.map((el)=><div style={{margin:"0px"}}  className="PostBox"  > 
            <img src={el.Image}/>
            <h2>adazdad</h2>
        </div>)}
        </div>  */}

        {/* <div style={{display:"flex" ,maxWidth:"1600px",marginRight:"auto",marginLeft:"auto" , display:"flex",justifyContent:"space-between" , flexWrap:"wrap",  width:"90%"}}>
        {Array.map((el)=><div    > 
            <div style={{width:"100%"}}> 
            <img  src={el.Image} style={{height:"300px"}}/>
            <h2>adazdad</h2>
            </div>
        </div>)}
        </div>  */}
      </div>
  );
}

export default App;
