/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import Sidebar from '../../components/sidebar/Sidebar'
import DirectorStructre from '../../components/sidebar/DirectorStructure';
import { Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import useFetch from '../../hooks/useFetch'

// -- --- APIs------------
import { ALL_PROFESSORS_API, ALL_DEPARTMENTS_API, ALL_SECTORS_API, ALL_STUDENTS_API } from '../../api/apis'
import { saveDepartments, saveProfessors, saveSectors, saveStudents } from '../../state/features/Director/directorSlice';
import LoadingPage from '../../components/LoadingPage';
// import Alert from './../../components/Alert';


const DirectorLayout = () => {

    const dispatch = useDispatch();
    const reRender = useSelector((state)=> state.director.renderAction);
    
    const { data: professorsData, isLoading: professorsLoading, error: professorsError } = useFetch(ALL_PROFESSORS_API, reRender);
    const { data: departmentsData, isLoading: departmentsLoading, error: departmentsError } = useFetch(ALL_DEPARTMENTS_API, reRender);
    const { data: studentsData, isLoading: studentsLoading, error: studentsError } = useFetch(ALL_STUDENTS_API, reRender);
    const { data: sectorsData, isLoading: sectorsLoading, error: sectorsError } = useFetch(ALL_SECTORS_API, reRender);

    useEffect(() => {
        if (professorsData) {
            dispatch(saveProfessors(professorsData.data));
        }
        if (departmentsData) {
            dispatch(saveDepartments(departmentsData.data));
        }
        if (studentsData) {
            dispatch(saveStudents(studentsData.data));
        }
        if (sectorsData) {
            dispatch(saveSectors(sectorsData.data));
        }
    }, [professorsData, departmentsData, studentsData, sectorsData, reRender , dispatch]);

    return (
        <div>
            <div className='flex'>
                <div className='grow-0'>
                    <Sidebar tabs={DirectorStructre} user="director" />
                </div>
                <div className='grow shrink xs:sm:ml-24 mr-3 md:lg:ml-56 py-3 overflow-hidden'>
                    <div className='md:lg:mx-40'>
                        <div>
                            {(professorsLoading || departmentsLoading || sectorsLoading || studentsLoading) && <LoadingPage/> }
                        </div>
                        <div>
                            {/* {(professorsError || departmentsError || sectorsError || studentsError) && <Alert color="danger" message={professorsError}/> } */}
                        </div>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DirectorLayout;
