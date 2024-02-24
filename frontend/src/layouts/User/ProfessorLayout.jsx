/* eslint-disable no-unused-vars */
import Sidebar from "../../components/sidebar/Sidebar";
import { Navigate, Outlet } from 'react-router-dom'
import ProfessorStructure from '../../components/sidebar/ProfessorStructure';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { PROFESSOR_COURSES_API, PROFESSOR_STUDENTS_API } from "../../api/apis";
import useFetch from "../../hooks/useFetch";
import LoadingPage from "../../components/LoadingPage";
import { saveCourses, saveMyStudents } from "../../state/features/Professor/professorSlice";
import { uncapitalize } from "../../utils/utils";
const ProfessorLayout = () => {
    
    const user = JSON.parse(localStorage.getItem('user'));
    
    const dispatch = useDispatch();
    const reRender = useSelector((state) => state.director.renderAction);

    const { data: studentsData, isLoading: studentsLoading, error: studentsError } = useFetch(`${PROFESSOR_STUDENTS_API}/${user.id}`, reRender);
    const { data: coursesData, isLoading: coursesLoading, error: coursesError } = useFetch(`${PROFESSOR_COURSES_API}/${user.id}`, reRender);
    // const { data: announcementssData, isLoading: announcementssLoading, error: announcementssError } = useFetch(`${PROFESS}`, reRender);
    // const { data: studentsData, isLoading: studentsLoading, error: studentsError } = useFetch(ALL_STUDENTS_API, reRender);

    
    useEffect(() => {
        if (studentsData) {
            dispatch(saveMyStudents(studentsData.data));
        }
        if (coursesData) {
            dispatch(saveCourses(coursesData.data));
        }

        // if (studentsData) {
        //     dispatch(saveStudents(studentsData.data));
        // }
        // if (sectorsData) {
        //     dispatch(saveSectors(sectorsData.data));
        // }
    }, [studentsData, reRender, coursesData, dispatch]);


    return (
        <div className='flex'>
            <div className='grow-0'>
                <Sidebar tabs={ProfessorStructure} user="professor" />
            </div>
            <div className='grow shrink xs:sm:ml-24 mr-3 md:lg:ml-56 py-3 overflow-hidden'>
                <div>
                    {(studentsLoading || coursesLoading) && <LoadingPage />}
                </div>
                <div className='md:lg:mx-40'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default ProfessorLayout;