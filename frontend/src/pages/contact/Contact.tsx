import { useSelector } from 'react-redux'
import Footer from '../../Layouts/Footer/Footer'
import Navbar from '../../Layouts/Navbar/Navbar'
import { ContactWrapper } from './Contact.styles'
import { State } from '../../redux/reducers'
import useAlert from '../../hooks/useAlert'

const Contact = () => {
  const {user} =useSelector((state:State)=>state.user);
  const {notify} =useAlert()


  const handleFormSubmit=(e:React.SyntheticEvent)=>{

  

    e.preventDefault()

    if(!user){
      return notify("You must be logged In !!","error")
    }


  }
  return (
    <>
    <ContactWrapper>
    <Navbar/>

        <div className="intro_box">
            <img src="/images/User.jpg" alt="userImage" />
            <h1 className='intro_text'> Driving Technology Towards Revolution Through <br /> Cornor Tech  </h1>
            <span className='secondary_text'>Contact me for collaboration </span>
            <a href="https://drive.google.com/file/d/1MEplgEv4k2ZA8PIQisSPbf5lHuDMc9-7/view?usp=sharing">
                 <button className='CvButton'>VIEW CV</button>
              </a> 
            
        </div>
        <div className="form_container">

            <div className="form_header">

                <h1 className='header_text'>Leave a message</h1>
            </div>

        <form className='form_box' onSubmit={handleFormSubmit}>
                <input type="email" name="email"   placeholder='youremail@gmail.com'/>
                <textarea name="message"  placeholder='write message....'></textarea>
                <button className='sendButton'> SEND MESSAGE</button>
        </form>
        </div>
    <Footer/>
    </ContactWrapper>
    </>
  )
}

export default Contact