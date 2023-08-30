import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../../Layouts/Navbar/Navbar"
import SetupSkillItem from "../../../components/profile/SetupSkillItem.tsx/SetupSkillItem";
import UploadCV from "../../../components/profile/uploadCV/UploadCV";
import { ProfileSetupWrapper, SkillSetupWraper } from "./ProfileSetup.styles"
import React, {useEffect, useState} from "react"
import { State } from "../../../redux/reducers";
import { updateUserApi } from "../../../utils/api";
import useAlert from "../../../hooks/useAlert";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../../redux";
import { MdOutlineAddModerator } from "react-icons/md";


const ProfileSetup = () => {
    
    const {user} = useSelector((state:State)=>state.user)
    const [tab,setTab]=useState(0);
    const {notify}= useAlert();
    const dispatch =useDispatch()
    const {AddUserAction}= bindActionCreators(actionCreators,dispatch )


    const queryParams = new URLSearchParams(window.location.search);
    const skillsOnly = queryParams.get('skills');
    const cvOnly = queryParams.get("cv")


    useEffect(()=>{
        if(cvOnly==="true"){
            setTab(1);
        }
    },[ cvOnly])
    const handleNext=(skillss:string[])=>{

        if(skillsOnly){
            addSkillsToDB(skillss)
            return;
        }
        if(tab===0){
            setTab(1)
        }
    }

    const addSkillsToDB=async(skillss:string[])=>{
    
        if(!user?._id)return;
        const updatePayload={
            skills:skillss
        }

        try {
          const {status,data} = await updateUserApi(user?._id,updatePayload) 
          if(status===200){
            AddUserAction(data.message)
            notify("Skills added successfully","success")
          }else{
            throw "something went wrong"
          }
        } catch (error) {
            console.log(error)
                notify("Something went wrong","error")
        }
    }

    const handleBack=()=>{
        setTab(0);
    }

    const tabMapping={
        "0":<SkillSetup handleNext={handleNext}/>,
        "1":<UploadCV handleBack={handleBack}/>
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



type SkillSetupPropsType={
    handleNext:(skills:string[])=>void;
}


const SkillSetup:React.FC<SkillSetupPropsType>=({handleNext})=>{
    const [selectedSkill,setSelectedSkill] =useState<string[]>([]);
    const queryParams = new URLSearchParams(window.location.search);
    const skillsOnly = queryParams.get('skills');
    const {user} =useSelector((state:State)=>state.user)





    useEffect(()=>{
    if(user){
        const allSkillsArr = user.skills;
        setSelectedSkill(allSkillsArr);
    }        
    },[user])
  





    return (    
        
        <>   
        <SkillSetupWraper>

    <div className="skillHeader">
         {/* <img width="34" height="34" src="https://img.icons8.com/3d-fluency/94/maintenance.png" alt="maintenance"/> */}
         <div className="headerLeft">

          <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/hard-working.png" alt="hard-working"/>
        <h1>Select  your skills</h1>
         </div>
    {/* <p className="infoTxt">select atleast 5 skills</p> */}
    </div>
    <div className="skillWrapper">
        {
            skillArr.map(skill=><SetupSkillItem skill={skill} setSelectedSkill={setSelectedSkill} selectedSkill={selectedSkill}/>)
        }  
     
    </div>
    <button className="nextButton" onClick={()=>handleNext(selectedSkill)}>
        {skillsOnly ? "Save":"Next"}
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