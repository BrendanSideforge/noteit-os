
import axios from "axios";
import { getAPIUrl } from "../api";

export interface Response {
    userId: string;
}

/**
 * Get the user id from a token if it is valid
 * 
 * Doc ref: https://opengb.dev/modules/users/scripts/get_user
 * @param token string
 * @returns User[]
 */
export async function authenticateUser(token: string): Promise<Response | null> {

    try {
        // Request the OpenGB endpoint (should be localhost:8080)
        const { data } = await axios.post(
            `${getAPIUrl()}/modules/users/scripts/authenticate_user/call`,
            {
                userToken: token
            }
        );
        return data;
    } catch(e) {
        console.log(`[OGB] ERR: ${e}`)

        // 500 - interval error
        return null;
    }

}
