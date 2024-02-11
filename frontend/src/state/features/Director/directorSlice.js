import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    professors: [],
    departments: [],
    sectors: [],
    students: [],
    renderAction: false
}

export const directorSlice = createSlice({
    name: 'director',
    initialState,
    reducers: {
        saveProfessors: (state, action) => {
            state.professors = action.payload
        },

        saveDepartments: (state, action) => {
            state.departments = action.payload
        },
        
        saveSectors: (state, action) => {
            state.sectors = action.payload
        },

        saveStudents: (state, action) => {
            state.students = action.payload
        },

        handleRenderAction: (state) => {
            state.renderAction = !state.renderAction
        }
    }
})

export const { saveProfessors, saveDepartments, saveSectors, saveStudents, handleRenderAction } = directorSlice.actions;

export default createSlice.reducer