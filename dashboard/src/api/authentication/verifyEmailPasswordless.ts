
import axios from "axios";
import { getAPIUrl } from "../api";

export interface Response {
    token: TokenWithSecret;
}

export interface TokenWithSecret {
    token: string;
    id: string;
    type: string;
    meta: any;
    createdAt: string;
    expireAt: null | string;
    revokedAt: null | string;
}

/**
 * Verify a user’s email address with a one-time verification code.
 * 
 * Doc ref: https://opengb.dev/modules/auth/scripts/verify_email_passwordless
 * @param verificationId string
 * @param code string
 * @returns Response
 */
export async function verifyEmailPasswordless(verificationId: string, code: string): Promise<Response | null> {

    console.log(`Verifying authentication code: ${code} (id: ${verificationId})`);

    try {
        // Request the OpenGB endpoint (should be localhost:8080)
        const { data } = await axios.post(
            `${getAPIUrl()}/modules/auth/scripts/verify_email_passwordless/call`,
            {
                verificationId,
                code
            }
        );
        console.log();

        return data;
    } catch(e: any) {
        console.log(e.message);

        return null;
    }

}
