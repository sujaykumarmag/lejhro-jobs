import React from 'react';

function Login(){
    return(
        <div>
            <div className="side"><img className="logo"  src="./Images/Lejhro_logo.png" alt="Lejhro"/></div>
            <div style={alertt ? style1 : null}>{error}</div>
            <div className="box">
                <p className="head">Sign In to Lejhro-Jobs</p>
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
                }}>

                </input>
                </div>
        </div>
    )
}