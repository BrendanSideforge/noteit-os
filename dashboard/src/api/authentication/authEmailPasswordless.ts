
import axios from "axios";
import { getAPIUrl } from "../api";

export interface Response {
    verification: Verification;
}

export interface Verification {
    id: string;
}

/**
 * Send a one-time verification code to a user’s email address to authenticate them.
 * 
 * Doc ref: https://opengb.dev/modules/auth/scripts/auth_email_passwordless
 * @param email string
 * @param userToken? string
 * @returns Response
 */
export async function authEmailPasswordless(email: string, userToken?: string): Promise<Response> {

    // Request the OpenGB endpoint (should be localhost:8080)
    const { data } = await axios.post(
        `${getAPIUrl()}/modules/auth/scripts/auth_email_passwordless/call`,
        {
            email,
            userToken
        }
    )

    return data;

}
