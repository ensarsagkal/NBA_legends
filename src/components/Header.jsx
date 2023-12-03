import React from 'react'
import nbaLogo from "../assests/nba-logo.png"

const Header = () => {
  return (
    <div>
       <div>
       <img src={nbaLogo} alt="" />
       </div>
       <div>
        <h1>NBA LEGENDS </h1>
       </div>
    </div>
  )
}

export default Header