import { categories, grades } from "../../json/data"
import gradeImage from '../../assets/images/grades.png'
import result from '../../assets/images/result.png'
import StudentLayoutForm from './components/StudentLayoutForm';
const StudentGrades = () => {
    return (
        <div>
            <StudentLayoutForm 
                title="grades" 
                imageLogo={gradeImage} 
                tabs={categories}
                data={grades}
                image={result}
                name="grade"
            />
        </div>
    )
}
export default StudentGrades