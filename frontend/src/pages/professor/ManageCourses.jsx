/* eslint-disable no-unused-vars */
import { courses } from '../../json/data'
import file from '../../assets/images/file.png'
import CourseForm from './components/CourseForm';
import FormLayoutWithGrid from './components/FormLayoutWithGrid';

const ManageCourses = () => {
    return (
        <>
            <FormLayoutWithGrid data={courses} image={file} Component={CourseForm} name="Course" />
        </>
    )
}

export default ManageCourses