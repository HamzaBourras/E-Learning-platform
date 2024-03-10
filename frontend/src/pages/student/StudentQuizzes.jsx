import StudentLayoutForm from "./components/StudentLayoutForm"
import quizLogo from '../../assets/images/quizLogo.png'
import quizImage from '../../assets/images/quiz.png'
import { categories, quizzes } from "../../json/data"

const StudentQuizzes = () => {
    return (
        <div>
            <StudentLayoutForm
                title="Quizzes"
                imageLogo={quizLogo}
                tabs={categories}
                data={quizzes}
                image={quizImage}
                name="quiz"
            />
        </div>
    )
}
export default StudentQuizzes