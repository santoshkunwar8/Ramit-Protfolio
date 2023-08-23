// import React from 'react'
import { ToolType } from '../../../utils/Types'
import { SmallSkillItemWrapper } from './SmallSkillItem.styles'


type SkillItemProp={
    skill:ToolType
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