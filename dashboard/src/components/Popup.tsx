
"use client";

import { createNote } from "@/api/notes/createNote";
import { useState } from "react";
import "../styles/container/Popup.css";

export default function NotePopup({ userId, popupFunc }: { userId: string, popupFunc: Function }) {

    const [title, setTitle] = useState("");
    const [tags, setTags] = useState("");
    const [description, setDescription] = useState("");

    return (<>
        
        <div className="popup">

            <div className="popup-header">
                <p className="title">Create Note</p>
            </div>

            <div className="popup-content">
                
                <div className="input">
                    <p>Title</p>
                    <input type="text" onChange={(e) => { setTitle(e.target.value) }}  placeholder="Note title goes here..."/>
                </div>

                <div className="input">
                    <p>Tags (separate with space)</p>
                    <input type="text" onChange={(e) => { setTags(e.target.value) }}  placeholder="Note tags goes here..."/>
                </div>

                <div className="input">
                    <p>Description</p>
                    <input type="text" onChange={(e) => { setDescription(e.target.value) }}  placeholder="Note description goes here..."/>
                </div>

            </div>

            <div className="popup-footer">
                <button onClick={ () => { popupFunc(false) } }>Cancel</button>
                <button onClick={ () => { 
                    createNote(
                        userId,
                        {
                            id: 0,
                            title: title,
                            tags: tags.split(" "),
                            description: description
                        }
                    );
                    popupFunc(false);
                 }}>Create Note</button>
            </div>

        </div>

    </>)

}
