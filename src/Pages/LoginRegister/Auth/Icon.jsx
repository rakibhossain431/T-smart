import React from 'react'
import { Link } from 'react-router-dom'
import IconSrc from "../../../Temp/socailIcon.json"
const Icon = () => {
  return (
      <>
        {IconSrc.socailIcon.length > 0 && IconSrc.socailIcon.map(icon => (
            <li key={icon.id}><a className={icon.class1} href={icon.Link}><i className={icon.class2}></i></a></li>
            
        ))}
     
      
      </>
  )
}

export default Icon