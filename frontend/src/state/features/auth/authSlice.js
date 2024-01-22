import { createSlice } from '@reduxjs/toolkit'

const loadUser = () =>{
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
}

export const authSlice = createSlice({
    name: "user",
    initialState:{
        value: loadUser
    },

    reducers:{
        login: (state, action) =>{
            state.value = action.payload;
            localStorage.setItem('user', JSON.stringify(state.value));
        },

        logout: (state) =>{
            state.value = null
        }
    }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;