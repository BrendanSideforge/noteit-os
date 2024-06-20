
import axios from "axios";
import { getAPIUrl } from "../api";

interface Response {
    notes: UserNote[]
}

export type UserNote = {
    id: number,
    userId?: string,
    title: string,
    tags: string[],
    description: string,
    createdAt?: Date
}

/**
 * Get notes from the notes module
 * 
 * @param userId string
 * @returns UserNote[]
 */
export async function getNotes(userId: string): Promise<Response> {

    // Request the OpenGB endpoint (should be localhost:8080)
    const { data } = await axios.post(
        `${getAPIUrl()}/modules/notes/scripts/get_notes/call`,
        {
            userId
        }
    );

    return data;

}
