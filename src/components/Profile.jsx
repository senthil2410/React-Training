import React from "react"
import photo from "../assets/raina.jpeg";
import "../assets/styles/Profile.css"


const Profile=()=>
{
    return(
        <div className="container">
        <div className="image">
           <img src={photo} alt="Raina"  className="photo"/>
        </div>
        <div className="info">
           <h1 className="name">CSK</h1>
           <h3 className="team">Team :Chennai Super Kings </h3>
           <h3 className="role">Role :All-rounder</h3>
           <p className="aboutplayer">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt,
             id exercitationem. Facere, aperiam delectus nisi aliquid veritatis odio 
             ex cum adipisci assumenda. Nisi, temporibus veritatis. Ex omnis dolorum reiciendis accusantium?
             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt,
             id exercitationem. Facere, aperiam delectus nisi aliquid veritatis odio 
             ex cum adipisci assumenda. Nisi, temporibus veritatis. Ex omnis dolorum reiciendis accusantium?</p>
        </div>
        </div>
    )
}

export default Profile;