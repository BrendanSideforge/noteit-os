
import { UserNote } from "@/api/notes/getNotes";
import { User } from "@/api/users/getUser";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type Passive_Transactions = {

    loading: boolean

}

type InitialState = {
    value: Passive_Transactions
}

const initialState: InitialState = {

    value: {
        loading: true
    }

}

export const OGB_Notes = createSlice({
    name: "OGB_Notes",
    initialState,
    reducers: {
        setLoading: (state: any, action: PayloadAction<object | any>) => {
            return {
                value: {
                    loading: action.payload['data']
                }
            }
        }
    }
})

export const { setLoading } = OGB_Notes.actions;
export default OGB_Notes.reducer;
