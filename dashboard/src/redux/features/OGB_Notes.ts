
import { UserNote } from "@/api/notes/getNotes";
import { User } from "@/api/users/getUser";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type OGB_User_State = {

    notes: UserNote[]

}

type InitialState = {
    value: OGB_User_State
}

const initialState: InitialState = {

    value: {
        notes: []
    }

}

export const OGB_Notes = createSlice({
    name: "OGB_Notes",
    initialState,
    reducers: {
        setNotes: (state: any, action: PayloadAction<object | any>) => {
            return {
                value: {
                    notes: action.payload['data']
                }
            }
        }
    }
})

export const { setNotes } = OGB_Notes.actions;
export default OGB_Notes.reducer;
