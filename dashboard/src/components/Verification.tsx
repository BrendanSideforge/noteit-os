
"use client";

import { verifyEmailPasswordless } from "@/api/authentication/verifyEmailPasswordless";
import { getUser } from "@/api/users/getUser";
import { logIn } from "@/redux/features/OGB_User";
import Router, { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function VerificationPanel({ verificationId }: { verificationId: string }) {

    // Redux dispatch
    const dispatch = useDispatch();

    // The verification code state
    const [code, setCode] = useState("");

    // Verify the user and set the user
    const verifyWithCode = async () => {

        // Verify the email with the code
        const res = await verifyEmailPasswordless(verificationId, code);

        // If there was a problem
        if (!res) return alert("Invalid verification");

        // Authenticate the user
        const token: string = res.token.token;
        const userId: string = res.token.id;

        // Set the window localStorage token
        window.localStorage.setItem("user-token", token);

        window.location.reload(); // Reload the page 

        // // Get the user from the userId
        // setTimeout(async () => {
        //     console.log(token, userId);
        //     const possibleUsers = await getUser([ userId ]);
        //     const firstUser = possibleUsers.users[0];

        //     console.log(firstUser, possibleUsers);
        //     // Dispatch login
        //     dispatch(logIn({ data: firstUser }));
        // }, 1000);

    }


    return (
        <div className="login-container">
            <div className="branding">
                <p className="brand">Verification Code</p>
            </div>

            <div className="inputs">
                <div className="input">
                    <div className="help">Please paste verification code given</div>
                    <input type="text" placeholder="Verification Code sent to email" onChange={(e) => { setCode(e.target.value) }}/>
                </div>
            </div>

            <div className="action">
                <button onClick={ () => { verifyWithCode() } }>Verify</button>
            </div>
        </div>
    )

}
