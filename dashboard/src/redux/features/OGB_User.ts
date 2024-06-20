
import { User } from "@/api/users/getUser";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type OGB_User_State = {

    user: User

}

type InitialState = {
    value: OGB_User_State
}

const initialState: InitialState = {

    value: {
        user: {
            id: "",
            username: "Unknown",
            createdAt: "",
            updatedAt: "",
            profilePictureUrl: null
        }
    }

}

export const OGB_User = createSlice({
    name: "OGB_User",
    initialState,
    reducers: {
        logOut: () => initialState,
        logIn: (state: any, action: PayloadAction<object | any>) => {
            return {
                value: {
                    user: action.payload['data']
                }
            }
        }
    }
})

export const {logIn, logOut } = OGB_User.actions;
export default OGB_User.reducer;
