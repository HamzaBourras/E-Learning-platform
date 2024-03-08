import StudentLayoutForm from "./components/StudentLayoutForm"
import courseImage from '../../assets/images/file.png'
import { courses, categories } from "../../json/data"

const StudentCourses = () => {


    return (
        <div>
            <StudentLayoutForm
                title="Courses"
                imageLogo={courseImage}
                tabs={categories}
                data={courses}
                image={courseImage}
            />
        </div>
    )
}
export default StudentCourses