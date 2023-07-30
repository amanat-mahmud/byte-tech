import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    cpu:"",
    motherboard:"",
    ram:"",
    storage:"",
    power:"",
    monitor:"",
}
const componentSlice = createSlice({
    name:"component",
    initialState,
    reducers:{
        addComponent:(state,action) => {
            state.push(action.payload)
        }
    }
});
export default componentSlice.reducers;
export const {addComponent} = componentSlice.actions