import { categories, grades } from "../../json/data"
import gradeImage from '../../assets/images/grades.png'
import result from '../../assets/images/quiz.png'
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
            />
        </div>
    )
}
export default StudentGrades