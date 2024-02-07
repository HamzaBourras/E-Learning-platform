import FormLayoutWithGrid from './components/FormLayoutWithGrid'
import { quizzes } from '../../json/data'
import quizImage from '../../assets/images/quiz.png'
import quizLogo from '../../assets/images/quizLogo.png'
import QuizForm from './components/QuizForm';

const ManageQuizzes = () => {
    return (
        <>
            <FormLayoutWithGrid data={quizzes} imageLogo={quizLogo} image={quizImage} Component={QuizForm} name="Quiz" />
        </>
    )
}

export default ManageQuizzes