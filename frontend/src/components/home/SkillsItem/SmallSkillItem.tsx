// import React from 'react'
import { SmallSkillItemWrapper } from './SmallSkillItem.styles'


type SkillItemProp={
    skill:{
        name:string,
        image:string,
    }
}

const SmallSkillItem:React.FC<SkillItemProp> = ({skill}) => {

  return (
    <SmallSkillItemWrapper>

        <img src={skill.image} alt="nodejs" />
        <p>{skill.name}</p>


    </SmallSkillItemWrapper>
  )
}

export default SmallSkillItem;