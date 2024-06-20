
import axios from "axios";
import { getAPIUrl } from "../api";

interface Users {
    users: User[]
}

export interface User {
    id: string;
    username: string;
    createdAt: string;
    updatedAt: string;
    profilePictureUrl: null | string;
}

/**
 * Get user object from OpenGB endpoint
 * 
 * Doc ref: https://opengb.dev/modules/users/scripts/get_user
 * @param userIds string[]
 * @returns User[]
 */
export async function getUser(userIds: string[]): Promise<Users> {

    // Request the OpenGB endpoint (should be localhost:8080)
    const { data } = await axios.post(
        `${getAPIUrl()}/modules/users/scripts/get_user/call`,
        {
            userIds
        }
    );

    return data;

}
