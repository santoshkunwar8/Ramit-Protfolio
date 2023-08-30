import { useEffect, useState } from "react"
import { SetupSkillItemWrapper } from "./SetupSkillItem.styles"

type SetupSkillItemProps={
    skill:string,
    selectedSkill:string[],
    setSelectedSkill?:React.Dispatch<React.SetStateAction<string[]>>,
}

const SetupSkillItem:React.FC<SetupSkillItemProps> = ({skill,selectedSkill,setSelectedSkill}) => {
    const [isSelected,setIsSelected] = useState(false)


    useEffect(()=>{
        setIsSelected(selectedSkill.some(sk=>sk===skill))
    },[selectedSkill])


    const handleClickSkill=()=>{
        if(setSelectedSkill)
        setSelectedSkill((prev)=>{
            if(prev.find(skl=>skl===skill)){
                return prev.filter(sk=>sk !==skill)
            }else{
                return [...prev,skill]
            }
        })
    }



  return (
    <SetupSkillItemWrapper   key={skill} className={`skillBox ${isSelected ? "selected":""}`} onClick={handleClickSkill}>
                <p>{skill}</p>
            </SetupSkillItemWrapper>
  )
}

export default SetupSkillItem