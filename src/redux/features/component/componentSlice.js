import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    processor:"",
    motherboard:"",
    ram:"",
    storageDevice:"",
    powerSupply:"",
    monitor:"",
}
const componentSlice = createSlice({
    name:"component",
    initialState,
    reducers:{
        addComponent:(state,action) => {
            const { key, value } = action.payload;
            state[key] = value;
        }
    }
});
export default componentSlice.reducer;
export const {addComponent} = componentSlice.actions;