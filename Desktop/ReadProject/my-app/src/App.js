import Footer from "./views/Footer/Footer";
import Navbar from "./views/Navbar/Navbar";
import Modal from './components/Modal/Animations'
import Body from "./views/Body/Body";
import MainPage from "./views/MainPage/MainPage";
import PaymentOffre from "./views/PaymentOffre/PaymentOffre";
import HowToGetStarted from "./views/HowToGetStarted/HowToGetStarted";
import Sponsor from "./views/Sponsor/Sponsor";
import Rewarde from './views/Rewarde/Rewarde'
import QuestionFAQ from "./views/QuestionFaq/QuestionFAQ";
import Address from "./views/Address/Address";
import Login from './views/Auth/Login'
import Register from './views/Auth/Register'
import Offer from './views/Offer/Offer'
import './Sass/Respnsive/NavbarRespnsive.scss'
import './Sass/width/width.scss'
import './Sass/FontSize/FontSize.scss'
import './Sass/Respnsive/Offer.scss'
import './Sass/Respnsive/MainTitle.scss'
import './Sass/Respnsive/Howtogetstarted.scss'
import './Sass/Respnsive/Sponsor.scss'
import './Sass/Respnsive/Rewarde.scss'
import './Sass/Respnsive/FAQ.scss'
import './Sass/Respnsive/Address.scss'
import './Sass/Respnsive/Auth.scss'
function App() {
  return (
    <div  >
       <Navbar/>
     <Body/> 
     <MainPage/>
     <PaymentOffre/>
     <HowToGetStarted/>
     <Sponsor/>
     <Rewarde/>
     <QuestionFAQ/>
     <Address/>
     <Footer/>    
     <Offer/>  
     {/* <Login/>   */}
    
     {/* <Register/> */}
    </div>
  );
}

export default App;
