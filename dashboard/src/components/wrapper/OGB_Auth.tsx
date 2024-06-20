
"use client";

import { authEmailPasswordless } from "@/api/authentication/authEmailPasswordless";
import { verifyEmailPasswordless } from "@/api/authentication/verifyEmailPasswordless";
import { createNote } from "@/api/notes/createNote";
import { getNotes } from "@/api/notes/getNotes";
import { authenticateUser } from "@/api/users/authenticateToken";
import { getUser } from "@/api/users/getUser";
import { setNotes } from "@/redux/features/OGB_Notes";
import { logIn } from "@/redux/features/OGB_User";
import { setLoading } from "@/redux/features/Passive_State";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function OGB_Auth_Wrapper({ children }: { children: React.ReactNode }) {

    const dispatch = useDispatch();

    // Bypass async limits with useEffect
    useEffect(() => { ( async () => {

        
        // Get local storage user token if it exists
        const localStorage = window.localStorage;
        const userToken: string = localStorage['user-token'];

        if (!userToken) return dispatch(setLoading({ data: false }));; // No user token, don't set the auth state

        // Authenticate user token

        const localUserId = localStorage['user-id'];
        const res = localUserId ? JSON.parse(localUserId) : await authenticateUser(userToken);

        if (!res) return dispatch(setLoading({ data: false }));; // Error or nothing returned

        // Set local storage item each time userId is returned
        localStorage.setItem("user-id", JSON.stringify(res));
    
        // If there is a user id, we would just call a get User
        const possibleUser = await getUser([ res.userId ]);
        const userId: string = possibleUser.users[0].id;

        dispatch(logIn({ data: possibleUser.users[0] })); // Set the redux state

        // Now that we have all of the redux state management for user ids
        // We can get the notes from the ogb 
        const notes = await getNotes(userId);

        dispatch(setNotes({ data: notes.notes })); // Set the redux state
        dispatch(setLoading({ data: false }));

    })() }, [])

    return (<>

        { children }

    </>)

}
