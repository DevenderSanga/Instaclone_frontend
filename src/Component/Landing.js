import {Link} from "react-router-dom";
import "../style/Home.css"
function Landing(){
    return<>
    <div id="home">
    <img src="https://www.1ink.com/product_images/uploaded_images/aperture.jpg" id="img"/>

    <div id="title">
        <h1 id="nameHome">10X Team 04</h1>
        <Link to={"/instaclone/AllPost"}><button id="btnHome">Enter</button></Link>
    </div>
    </div>
      
       
    </>
}

export default Landing