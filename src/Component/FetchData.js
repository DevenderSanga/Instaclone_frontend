import { json } from "react-router-dom";

 let url = "https://instabackend-fyrg.onrender.com";

function Data(){
return url;
}

function FeatchData(){
return fetch(`${Data()}/post`)
.then(res=>res.json())
}

function AddData(data){
    return fetch(`${Data()}/post`,{
        method:"POST",
        body:data
      
    })
    .then(res=>res.json())
    .catch(err=>{
        console.log(err)
    })
    
}



export {FeatchData, AddData}