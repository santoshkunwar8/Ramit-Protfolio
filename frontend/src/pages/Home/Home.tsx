import {useEffect,useState} from 'react'
import Footer from "../../Layouts/Footer/Footer"
import Navbar from "../../Layouts/Navbar/Navbar"
import WorkSlider from "../../Layouts/WorkSlider/WorkSlider"
import About from "../../components/home/About/About"
import Clients from "../../components/home/Clients/Clients"
import HeroItems from "../../components/home/heroItems/HeroItems"
import Reviews from "../../components/home/Reviews/Reviews"
import UserInfo from "../../components/home/UserInfo/UserInfo"
// import WorkItem from "../../components/home/Works/Work"
import { HomeWrapper } from "./Home.styles"
import Skills from "./Skills/Skills"
import FileSaver from "file-saver";
import { getAdminInfoApi } from '../../utils/api'
import { UserType } from '../../utils/Types'



type itemCountType={
  work:null|number,
  skill:null|number,
  client:null| number,
  info:null | UserType,
}
const Home = () => {

      const [AdminInfoData,setAdminInfoData] = useState<itemCountType>({
      work:null,
      skill:null, 
      client:null,
      info:null,
    })

  const handleDownloadCV=()=>{

    const cvUrl = AdminInfoData.info?.cv;
    if(cvUrl){
      FileSaver.saveAs("https://res.cloudinary.com/onlinecoder/image/upload/v1693489974/pdr0nkhjrqr1uks3pdue.pdf",'codewithmamaCV.pdf')
    }
    


  }


    useEffect(() => {
      AdminInfo()
    }, [])
    
      const AdminInfo=async()=>{

      try {
          const {status,data} = await getAdminInfoApi()
          if(status===200){
            const {worksCount,skillsCount,clientsCount,info} = data;
            setAdminInfoData({
              work:worksCount,
              skill:skillsCount,
              client:clientsCount,
              info
            })
          }
      } catch (error) {
          console.log(error)
      }
    }

  return (
    <HomeWrapper >
      <Navbar/>
        <div className="hero_section">
          <div className="hero_section_left" >

          
              <div  className="main_info_box">
                <h1>Hey I am a Fullstack Devloper in Turing </h1>
                <button className="cv_button" onClick={handleDownloadCV}>
                  {/* <img width="24" height="24" src="https://img.icons8.com/emoji/48/vulcan-salute-emoji.png" alt="vulcan-salute-emoji"/> */}
                  <p>View CV</p></button>
              </div>
              <HeroItems adminData={AdminInfoData}/>
              <div className="hero_item_wrapper" >
             
              </div>
            </div>
            <div className="hero_section_right">
                    <UserInfo adminData={AdminInfoData.info}/>
                    <About adminData={AdminInfoData.info}/>
              </div> 
        </div>
                <WorkSlider/>
                <Skills/>
                <Clients/>
                <Reviews/> 
                <Footer/>
    </HomeWrapper>
  )
}

export default Home

