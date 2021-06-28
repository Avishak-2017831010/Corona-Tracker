import React from 'react'
import '../componentsstyle/footerSection.css'
import {FaGithub,FaLinkedin,FaFacebook} from 'react-icons/fa'

function FooterSection() {
    return (
        <div className="footerSection">
            <p id="footertitle">Corona Virus tracker</p>
            <p>Developed By Avishak</p>
            <a id="icon"><FaGithub size={30}/></a>
            <a id="icon"><FaLinkedin size={30}/></a>
            <a id="icon"><FaFacebook size={30}/></a>
            


        </div>
    )
}

export default FooterSection
