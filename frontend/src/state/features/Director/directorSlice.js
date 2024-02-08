import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    professors: [],
    departments: [],
    sectors: [],
    students: []
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
        }
    }
})

export const { saveProfessors, saveDepartments, saveSectors, saveStudents } = directorSlice.actions;

export default createSlice.reducer