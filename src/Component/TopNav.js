import { Link } from "react-router-dom"
import Posts from "./Posts"
import instaLogo from '../images/instaLogo.png';
import cameraLogo from '../images/camera-logo.png';
import navigator from "navigator";
import { Context, createContext } from "react";

function TopNav(){
   

    return<>
     <nav id="top-nav">
        <img src={instaLogo} id='logo'></img>
         <h1 id='heading'>InstaClone</h1>
       
         <Link to="/instaclone/posts"> <img src={cameraLogo} id='logo-cam'></img></Link>
      
    </nav>
    </>
}

export default TopNav;