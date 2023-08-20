// import React from 'react'
import { SkillItemWrapper } from './SkillItem.styles'


type SkillItemProp={
    skill:{
      _id?:string,
      createdAt?:string,
      updatedAt?:string,
        name:string,
        image:string,
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