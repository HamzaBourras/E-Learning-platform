import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {},
    myStudents: [],
    courses: [],
    announcements:[],
    quizzes: [],
    renderAction: false

}

export const professorSlice = createSlice({
    name: 'professor',
    initialState,
    reducers: {
        saveProfessor: (state, action) => {
            state.user = action.payload
        },

        saveMyStudents: (state, action) => {
            state.myStudents = action.payload
        },

        saveCourses: (state, action) => {
            state.courses = action.payload
        },

        saveAnnouncements: (state, action) => {
            state.announcements = action.payload
        },

        saveQuizzes: (state, action) => {
            state.quizzes = action.payload
        },

        handleRenderAction: (state) => {
            state.renderAction = !state.renderAction
        }
    }
})

export const {saveProfessor, saveAnnouncements, saveCourses, saveQuizzes, saveMyStudents } = professorSlice.actions;

export default createSlice.reducer