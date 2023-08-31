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
            <img src="/images/user.jpg" alt="userImage" />
            <h1 className='intro_text'> I am Freelancer     Fullstack Developer working globally </h1>
            <span className='secondary_text'>Contact me for collaboration </span>
            <button className='CvButton'>VIEW CV</button>
            
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