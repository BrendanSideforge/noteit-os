
"use client";

import { deleteNote } from "@/api/notes/deleteNote";
import { UserNote } from "@/api/notes/getNotes";
import { useAppSelector } from "@/redux/store";

export default function Note({ note }: { note: UserNote }) {

    // Get the auth from ogb
    const OGB_Auth = useAppSelector((state) => { return state.OGB_User_Reducer.value });

    return (

        <>
            <div className="note">
                <div className="header">
                    <p className="title">{ note.title }</p>
                    <p className="id">ID: { note.id }</p>
                </div>

                <div className="tags">
                    { 
                        note.tags.map((tag) => {
                            return (
                                <div className="tag" key={ tag }>
                                    <p>{ tag }</p>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="description">
                    <p className="text">{ note.description }</p>
                </div>

                <div className="actions">
                    <button onClick={async () => { 
                        deleteNote(OGB_Auth.user.id, note.id); 
                    }}>Delete</button>
                </div>
            </div>
        </>
    )

}
