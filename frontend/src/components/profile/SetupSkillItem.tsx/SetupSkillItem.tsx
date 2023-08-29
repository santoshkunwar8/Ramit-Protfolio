import { useEffect, useState } from "react"

type SetupSkillItemProps={
    skill:string,
    selectedSkill:string[],
    setSelectedSkill:React.Dispatch<React.SetStateAction<string[]>>,
}

const SetupSkillItem:React.FC<SetupSkillItemProps> = ({skill,selectedSkill,setSelectedSkill}) => {
    const [isSelected,setIsSelected] = useState(false)


    useEffect(()=>{
        setIsSelected(selectedSkill.some(sk=>sk===skill))
    },[selectedSkill])


    const handleClickSkill=()=>{
        setSelectedSkill((prev)=>{
            if(prev.find(skl=>skl===skill)){
                return prev.filter(sk=>sk !==skill)
            }else{
                return [...prev,skill]
            }
        })
    }



  return (
    <div   key={skill} className={`skillBox ${isSelected ? "selected":""}`} onClick={handleClickSkill}>
                <p>{skill}</p>
            </div>
  )
}

export default SetupSkillItem