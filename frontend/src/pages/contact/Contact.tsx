import Footer from '../../Layouts/Footer/Footer'
import Navbar from '../../Layouts/Navbar/Navbar'
import { ContactWrapper } from './Contact.styles'

const Contact = () => {
  return (
    <>
    <ContactWrapper>
    <Navbar/>

        <div className="intro_box">
            <img src="https://brainy-santosh.onrender.com/assets/images/user.jpg" alt="" />
            <h1 className='intro_text'> I am Freelancer     Fullstack Developer working globally </h1>
            <span className='secondary_text'>Contact me for collaboration </span>
            <button className='CvButton'>Download CV</button>
            
        </div>
        <div className="form_container">

            <div className="form_header">

                <h1 className='header_text'>Leave a message</h1>
            </div>

        <form className='form_box'>
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