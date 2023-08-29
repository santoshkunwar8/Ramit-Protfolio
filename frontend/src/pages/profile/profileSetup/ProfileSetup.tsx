import Navbar from "../../../Layouts/Navbar/Navbar"
import SetupSkillItem from "../../../components/profile/SetupSkillItem.tsx/SetupSkillItem";
import UploadCV from "../../../components/profile/uploadCV/UploadCV";
import { ProfileSetupWrapper, SkillSetupWraper } from "./ProfileSetup.styles"
import {useState} from "react"


const ProfileSetup = () => {

    const [tab,setTab]=useState(1);

    const tabMapping={
        "0":<SkillSetup/>,
        "1":<UploadCV/>
    }

  return (
    <ProfileSetupWrapper>
        <Navbar/>
        <div className="setupGround">

            {tabMapping[tab.toString()]}

        </div>
    </ProfileSetupWrapper>
  )
};


export default ProfileSetup;



const SkillSetup=()=>{


    const [selectedSkill,setSelectedSkill] =useState<string[]>(["Python"])

    return (    
        
        <>
        

        <SkillSetupWraper>

    <div className="skillHeader">
         {/* <img width="34" height="34" src="https://img.icons8.com/3d-fluency/94/maintenance.png" alt="maintenance"/> */}
        <h1>Select  your skills</h1>
    <p className="infoTxt">select atleast 5 skills</p>
    </div>
    <div className="skillWrapper">

        {
            skillArr.map(skill=><SetupSkillItem skill={skill} setSelectedSkill={setSelectedSkill} selectedSkill={selectedSkill}/>)
        }
      
    </div>
    <button className="nextButton">
        Next
    </button>

        </SkillSetupWraper>

        
        </>


    )
}

const skillArr=[
    "Javascript",
    "Python",
    "Typescript",
    "Cpp",
    "C",
    "C#",
    "Java",
    "ReactJs",
    "NextJs",
    "Machine Learning",
    "Figma",
    "UI/UX Design",
    "DevOps",
    "Database",
    "Mysql",
    "Sql",
    "MongoDb",
    "Graphql",
    "Blockchain",
    "Adobe photoshop",
    "Flutter",
    "Dart",
    "React Native",
    "Swift",
    "Data Science",
    "Kotlin",
    "Node",
    "Django",
    "Php",
    "Laravel",
    "Software Development",
    "Angular Js",
    "Veu Js",
    "Frontend",
    "Backend",
]