import React from "react"
import { Link } from "react-router-dom"
import logo from "../src/logo.svg"

const Nav = () => {
    const naStyle  = {
        color:"black"
    }
     const signUp="true"
    return (
        <div className="nav">
            <Link to="/" className="nav_logo"><img src={logo} alt="text"/></Link>
            <ul className="nav_Link">
                <div className="nav_text">
                     <Link  to="/visualiser" style={naStyle} style={{textDecoration:"none",color:"black"}}><li>View</li></Link> 
                <Link to="/about" className="nav_text" style={naStyle} ><li>About</li></Link>
                </div>
              
                <div className="nav_sign">
                    <Link to="/signIn" style={{textDecoration:"none"}}>Sign in</Link>
                </div>     
            </ul>
        </div>
    )
}
export default Nav