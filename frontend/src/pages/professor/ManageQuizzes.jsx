import FormLayoutWithGrid from './components/FormLayoutWithGrid'
import { quizzes } from '../../json/data'
import quizImage from '../../assets/images/quiz.png'
import QuizForm from './components/QuizForm';

const ManageQuizzes = () => {
    return (
        <>
            <FormLayoutWithGrid data={quizzes} image={quizImage} Component={QuizForm} name="Quiz" />
        </>
    )
}

export default ManageQuizzes