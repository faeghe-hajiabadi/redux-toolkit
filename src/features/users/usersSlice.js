import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id:'0', name:'Anna abadi'},
    {id:'1', name:'Hassan Tabatabaie'},
    {id:'2', name:'Faeghe Haji Abadi'},
];

const userSlice = createSlice({
    name:'users',
    initialState,
    reducers:{}
});

export const selectAllUseres = (state)=>state.users;

export default userSlice.reducer;