import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    expandSidebar: true,
};

export const ExpandSlice = createSlice({
    name: "expandSidebar",
    initialState,
    reducers: {
        toggleSiderbar(state, action){
            state.expandSidebar = !state.expandSidebar;
        },
    },
});

export const {toggleSiderbar} = ExpandSlice.actions;
export default ExpandSlice.reducer;