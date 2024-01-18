import React from "react"
import loginIcon1 from "../../assets/loginicon4.svg"
import loginIcon2 from "../../assets/loginicon2.svg"
import loginIcon3 from "../../assets/loginicon3.svg"
import loginIcon5 from "../../assets/loginicon5.svg"

function Footer() {
    return (
        <div className="position-absolute bottom-0 bg-light py-2 w-100">
            <div className="m-4 ">
                <img src={loginIcon1} className="mx-1" />
                <img src={loginIcon3} className="mx-1" />
                <img src={loginIcon2} className="mx-1" />

                <img src={loginIcon5} className="mx-1" />
            </div>
            <div>Example@gmail.com</div>
            <div>Copyright © 2020 Name. All rights reserved.</div>
        </div>
    )
}

export default Footer;