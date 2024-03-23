import StudentLayoutForm from "./components/StudentLayoutForm"
import quizLogo from '../../assets/images/quizLogo.png'
import quizImage from '../../assets/images/quiz.png'
import StudentQuizForm from "./components/StudentQuizForm"
import { useSelector } from "react-redux"

const StudentQuizzes = () => {

    // fetch data from redux store
    const quizzes = useSelector((state)=>state.student.quizzes)
    return (
        <div>
            <StudentLayoutForm
                title="Quizzes"
                imageLogo={quizLogo}
                data={quizzes}
                image={quizImage}
                name="quiz"
                Component={StudentQuizForm}
            />
        </div>
    )
}
export default StudentQuizzes