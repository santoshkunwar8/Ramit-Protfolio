// import React from 'react'
import { SkillItemWrapper } from './SkillItem.styles'


type SkillItemProp={
    skill:{
        name:String,
        image:String,
    }
}

const SkillItem:React.FC<SkillItemProp> = ({skill}) => {

  return (
    <SkillItemWrapper>

        <img src={skill.image} alt="nodejs" />
        <p>{skill.name}</p>


    </SkillItemWrapper>
  )
}

export default SkillItem