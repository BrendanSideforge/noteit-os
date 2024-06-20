
import axios from "axios";
import { getAPIUrl } from "../api";
import { UserNote } from "./getNotes";

interface Response {
    noteId: number
}

/**
 * Delete a note from the database
 * 
 * @param noteId number
 * @returns UserNote
 */
export async function deleteNote(userId: string, noteId: number): Promise<Response> {

    // Request the OpenGB endpoint (should be localhost:8080)
    const { data } = await axios.post(
        `${getAPIUrl()}/modules/notes/scripts/delete_note/call`,
        {   
            userId,
            noteId
        }
    );

    return data;

}
