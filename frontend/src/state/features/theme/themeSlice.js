import { createSlice } from '@reduxjs/toolkit';

const loadThemeFromStorage = () => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme ? JSON.parse(storedTheme) : false;
};

export const themeSlice = createSlice({
    name: 'isDark',
    initialState: {
        value: loadThemeFromStorage(),
    },
    reducers: {
        toggleTheme: (state) => {
            state.value = !state.value;
            localStorage.setItem('theme', JSON.stringify(state.value));
        },
    },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;