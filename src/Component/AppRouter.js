import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import InstaClone from './InstaClone';
import Landing from "./Landing";
// import Home from "./Landing";
// import InstaClone from "./InstaClone";
import Posts from "./Posts";
import UserPost from "./UserPost";



function AppRouter(){
   
    return<>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="instaclone" element={<InstaClone />} >
           <Route path="posts" element={<Posts/>}/>
           <Route path="AllPost" element={<UserPost/>}/>
        </Route>
        
    </Routes>
    </BrowserRouter>
  
    </>
}

export default AppRouter;