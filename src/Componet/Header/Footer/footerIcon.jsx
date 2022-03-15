import React from 'react'
import footerIconSrc from "../../../Temp/footerIcon.json"
const footerIcon = () => {
  return (
      <>
      {footerIconSrc.footerIcon.length > 0 && footerIconSrc.footerIcon.map(fIcon =>(
          <li key={fIcon.id}><a href={fIcon.link}><i className={fIcon.class}></i></a></li>

      ))}
      </>
  )
}

export default footerIcon