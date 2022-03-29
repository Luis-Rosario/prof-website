import React from "react"
import CV from "../../assets/CV_2022_EN.pdf"

function ButCluster() {

    return(
    <div className="butCluster">
        <a href={CV} target="_blank" className="btn">Download CV</a>
        <a href="#contacts" className="btn btn-primary" >Talk to me</a>
    </div>
    )
}

export default ButCluster;