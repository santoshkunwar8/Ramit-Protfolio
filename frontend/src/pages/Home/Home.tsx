import {useEffect,useState} from 'react'
import Footer from "../../Layouts/Footer/Footer"
import Navbar from "../../Layouts/Navbar/Navbar"
import WorkSlider from "../../Layouts/WorkSlider/WorkSlider"
import Clients from "../../components/home/Clients/Clients"
import Reviews from "../../components/home/Reviews/Reviews"
import { HomeWrapper } from "./Home.styles"
import Skills from "./Skills/Skills"
import { getAdminInfoApi } from '../../utils/api'
import { UserType } from '../../utils/Types'
import Hero from '../../components/home/Hero/Hero'



export type AdminInfoType={
  work:null|number,
  skill:null|number,
  client:null| number,
  info:null | UserType,
}
const Home = () => {

      const [AdminInfoData,setAdminInfoData] = useState<AdminInfoType>({
      work:null,
      skill:null, 
      client:null,
      info:null,
    })

 

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
                <Hero adminInfo={AdminInfoData}/>
                <WorkSlider/>
                <Skills/>
                <Clients/>
                <Reviews/> 
                <Footer/>
    </HomeWrapper>
  )
}

export default Home

