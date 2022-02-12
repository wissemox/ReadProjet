import React,{useState} from 'react'
import FAQ from '../../components/FAQ/FAQ'
function QuestionFAQ() {
    const [Question , setQuestion]=useState([{Question:"How to make money ?"} , {Question:"How long does it take to cashout ?"} , {Question:"How to make money ?"}  , {Question:"How to make money ?"} ])
  return (
    <div style={{backgroundColor:"#161B28"}}>
        <div style={{  width:"80%" , marginLeft:"auto" , marginRight:"auto"}}>
        <p className='FontSizeResponsiveFAQ' style={{color:"white"  , fontWeight:"600"}}>FAQ</p>
        <p className='FontSizeResponsiveFAQDescription' style={{color:"white" , opacity:"60%"}}>Please take a look on our frequently asked questions if your answer
            is not here or you have additianal questions , feel free to contact
            us anytime we are here to help</p>
            {Question.map((el)=> 
            <div style={{paddingTop:"10px" ,  paddingBottom:"10px"}}> 
            <FAQ el={el}/>
            </div>)}
           
        </div>
    </div>
  )
}

export default QuestionFAQ
