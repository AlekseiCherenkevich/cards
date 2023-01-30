import {createSlice} from "@reduxjs/toolkit";


export type TempState = {
    data: number[]
}

const initialState: TempState = {
    data: []
}

export const tempSlice = createSlice({
    name: 'temp',
    initialState,
    reducers: {
        add1: (state) => {
            state.data.push(1)
        }
    }
})

export const {add1} = tempSlice.actions
export const tempReducer = tempSlice.reducer