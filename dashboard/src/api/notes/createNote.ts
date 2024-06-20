
import axios from "axios";
import { getAPIUrl } from "../api";
import { UserNote } from "./getNotes";

interface Response {
    note: UserNote
}

/**
 * Create a note for a user
 * 
 * @param userId string
 * @param note UserNote
 * @returns UserNote
 */
export async function createNote(userId: string, note: UserNote): Promise<Response> {

    // Request the OpenGB endpoint (should be localhost:8080)
    const { data } = await axios.post(
        `${getAPIUrl()}/modules/notes/scripts/create_note/call`,
        {
            userId,
            note
        }
    );

    return data;

}
