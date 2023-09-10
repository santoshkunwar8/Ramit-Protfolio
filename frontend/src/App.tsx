import {Routes,Route,BrowserRouter} from "react-router-dom";
import Home from "./pages/Home/Home"
import { AppWrapper } from "./App.styles";
import Admin from "./pages/Admin/Admin";
import Upload from "./pages/Admin/Upload/Upload";
import Work from "./pages/Admin/Upload/Work/Work";
import Tools from "./pages/Admin/Upload/Tools/Tools";
import WorkDetail from "./pages/WorkDetail/WorkDetail";
import Reviews from "./pages/Reviews/Reviews";
import Works from "./pages/Works/Works";
import Signup from "./pages/auth/signup/Signup";
import Login from "./pages/auth/login/Login";

import Contact from "./pages/contact/Contact";
import useSetup from "./hooks/useSetup"
import Profile from "./pages/profile/Profile";
import {Toaster} from "react-hot-toast"
import ProfileSetup from "./pages/profile/profileSetup/ProfileSetup";
import { State } from "./redux/reducers";
import { useSelector } from "react-redux";
import ResetLink from "./pages/auth/ResetLink/ResetLink";
import ResetPassword from "./pages/auth/resetPassword/ResetPassword";
import Confirmation from "./pages/auth/confirmation/Confirmation";


function App() {

  const {user} = useSelector((state:State)=>state.user)
  console.log(user)

  





  useSetup();
  
 
  
  

  return (
    <>
    <Toaster/>
    <AppWrapper>
      

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/admin" element={<Admin/>}>
        <Route  path="upload"     element={<Upload/>}>

        <Route path="work" element={<Work/>}/>
        <Route path = "tool" element={<Tools/>} />

        </Route>
      </Route>
      <Route path="/work/:id" element={<WorkDetail/>}/>
      <Route  path="/reviews" element={<Reviews/>}/>
      <Route path="/works" element={<Works/>}/>
      <Route path="/login" element={<Login/>}/> 
      <Route path="/signup"  element={<Signup/>}/>
      <Route path="/contact" element={<Contact/>}/>

      <Route path="/account">
      <Route path="profile/:userId"  element={<Profile/>}/>
      <Route path="setup" element={<ProfileSetup/>}/>
      <Route path="sentResetLink" element={<ResetLink/>}/>
      <Route path="resetpassword" element={<ResetPassword/>} />
      <Route path="email-confirm"  element={<Confirmation/>}/>


      </Route>

    </Routes> 
    </BrowserRouter>
    </AppWrapper>

    </>
  )
}

export default App
