import { configureStore } from '@reduxjs/toolkit'
import { directorSlice } from './features/Director/directorSlice'

export const store = configureStore({
    reducer: {
        director: directorSlice.reducer
    },
})