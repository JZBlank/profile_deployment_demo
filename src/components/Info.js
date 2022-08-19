import React from "react"

export default function Info(){
    return (
        <div>
            <div className="Info_Container">
            <img src="../profile.png" alt="Profile" className="profilePicture"/>
                <h3>Joyce Zhang</h3>
                <h5>Aspiring Software Engineer</h5>
                <a href ="mailto: joycezhang2065@gmail.com"><button className="email"> &#x2709; Email</button></a> 
                <a href="https://www.linkedin.com/in/joyce-zhang-a93637197/" target="_blank" rel="noreferrer"><button className="linkedIn"><i class="fa fa-linkedin-square"></i> LinkedIn</button></a>
            </div>
        </div>
    )
}