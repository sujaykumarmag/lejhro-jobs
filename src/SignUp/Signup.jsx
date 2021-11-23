import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "./signupstyles.css"

const arr = [];
function SignUp() {
    const [error, setError] = useState("");
    const [alertt, setAlert] = useState(false);
    const [captcha,setCaptcha] =useState(false);
   
    const style1 = {
        backgroundColor: "red",
        position: "absolute",
        left: "720px",
        top: "20px",
        borderRadius: "10px",
        color: "white",
        fontFamily: "Inter",
        padding: "24px 100px 30px 100px",
    }
    function handleClick() {
        if (arr.length !== 3) {
            alert("Please Fill All of the Given Input Fields")
        }
        else if (arr[0].slice(-4) !== ".com" || arr[0] === '') {
            console.log(arr[0].slice(-4));
            alert("Please Give the Correct Email Address")
        }
        else if (arr[1] !== arr[2]) {
            alert("Password and Confirm Password should be same")
        }
        else {
            alert("Request Sent")
        }

    }
    function handleChange(value) {
        console.log("Captcha value:", value);
        setCaptcha(true);
    }
    return (
        <div>
            <div className="side"><img className="logo"  src="./Images/Lejhro_logo.png" alt="Lejhro"/></div>
            <div style={alertt ? style1 : null}>{error}</div>
            <div className="box">
                <p className="head">Sign up to Lejhro-Jobs</p>
                <input className="email" type="email" placeholder="Email Address" onChange={(event) => {
                    console.log(event.target.value);
                    arr[0] = event.target.value;
                    if (arr[0].slice(-4) !== ".com") {
                        setAlert(true)
                        setError("Please Give the Correct Email")
                    }
                    else {
                        setAlert(false)
                    }
                }}></input>
                <span className="address">Email Address</span>
                <input className="password" type="password" placeholder="Password" onChange={(event) => {
                    console.log(event.target.value);
                    arr[1] = event.target.value;
                    if (arr[1].length <= "8") {
                        setAlert(true)
                        setError("Password Should be more than Six Characters")
                    }
                    else {
                        setAlert(false)
                    }
                }}></input>
                <span className="spanpass">Password </span>
                <input className="confirm" type="password" placeholder="Confirm Password" onChange={(event) => {
                    arr[2] = event.target.value;
                    if (arr[1] !== arr[2]) {
                        setAlert(true)
                        setError("Password and Confirm Password should be same")
                    }
                    else {
                        setAlert(false)
                    }
                }}></input>
                <span className="pass">Confirm Password </span>
                <div className="captcha">
                    <ReCAPTCHA
                        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                        onChange={handleChange}
                    />
                </div>
                <button className="btn" onClick={captcha?handleClick:null}>Sign Up</button>
            </div>
        </div>
    )
}

export default SignUp;
