
"use client";

import { authEmailPasswordless } from "@/api/authentication/authEmailPasswordless";
import { useState } from "react";

import "../styles/container/Login.css";
import VerificationPanel from "./Verification";

export default function Login() {

    // Password and email
    const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    
    // If they have clicked it
    const [verificationId, setVerificationId] = useState("");

    const sendOutboundRequest = async () => {  
        const res = await authEmailPasswordless(email);

        setVerificationId(res.verification.id);
    }

    return (
        <>
            { verificationId ? <>

                <VerificationPanel verificationId={ verificationId } />
                
            </> 
            :
            <div className="login-container">

                <div className="branding">
                    <p className="brand">SnapNote</p>
                </div>

                <div className="inputs">
                    <div className="input">
                        <p className="help">Email</p>
                        <input type="email" placeholder="Enter email here" onChange={(e) => { setEmail(e.target.value) }}/>
                    </div>

                    {/* <div className="input">
                        <p className="help">Password</p>
                        <input type="password" placeholder="Enter password here" onChange={(e) => { setPassword(e.target.value) }}/>
                    </div> */}
                </div>

                <div className="action">
                    <button onClick={() => {
                        sendOutboundRequest();
                    }}>Login</button>
                </div>
            </div> 
            }
        </>
    )

}
