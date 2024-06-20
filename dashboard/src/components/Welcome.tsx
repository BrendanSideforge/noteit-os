
"use client";

import { useAppSelector } from "@/redux/store";
import Note from "./Note";

import "../styles/container/Notes.css";
import NotePopup from "./Popup";
import { useState } from "react";

export default function Welcome() {

    // Redux value
    const OGB_User = useAppSelector((state) => { return state.OGB_User_Reducer.value });
    const OGB_Notes = useAppSelector((state) => { return state.OGB_Notes_Reducer.value });

    // Popup state
    const [notePopup, setNotePopup] = useState(false);

    return (
        <>
            { notePopup ? <NotePopup userId={ OGB_User.user.id } popupFunc={ setNotePopup } /> : <></> }

            <div className="login-container">
                <div className="branding">
                    <p className="brand">Welcome, { OGB_User.user.username } </p>
                    <button onClick={() => { setNotePopup(true) }} style={{ marginLeft: "8px" }}>Create Note</button>
                </div>

                {/* <p>{ JSON.stringify(OGB_User.user) }</p> */}
                
                <div className="notes">
                    { OGB_Notes.notes.map((note) => {
                        return <Note note={ note } key={ note.id } />
                    }) }    
                </div>
            </div>

            <div className="bottom-metadata">
                <div className="niche">
                    <p className="id">User ID: </p>
                    <p className="value">{ OGB_User.user.id }</p>
                </div>
                <div className="niche">
                    <p className="id">Created At: </p>
                    <p className="value">{ OGB_User.user.createdAt }</p>
                </div>
            </div>
        </>
    )

}
