/* eslint-disable react/prop-types */
import { Input, Button, Spinner, Checkbox, Divider, Select, SelectItem } from '@nextui-org/react'
import useForm from '../../../hooks/useForm';
import remove from '../../../assets/icons/delete.svg'
import Alert from '../../../components/Alert';
import { getArrayById } from '../../../utils/utils';
import { STORE_QUIZ_API, UPDATE_QUIZ_API } from '../../../api/apis';
import { useSelector } from 'react-redux';

const QuizCreator = ({ id }) => {

    const user = JSON.parse(localStorage.getItem('user'));
    // ------------------------API-----------------------------------------
    const method = id ? "put" : "post";
    let apiKey = id ? `${UPDATE_QUIZ_API}/${user.id}/${id}` : `${STORE_QUIZ_API}/${user.id}`
    // ---------------------------------------------------------------------

    // -------------------------------DATA----------------------------------


    const quizzes = useSelector((state)=> state.professor.quizzes);

    const Quiz = getArrayById(quizzes, 'id', id)[0];

    console.log(id);

    const initialState = {
        quizName: id ? Quiz['quizName'] : '',
        sector: id ? Quiz['sector'] : '',
        questions: id ? Quiz['questions'] : [],
    };

    const { inputs, errors, message, isLoading, handleChange, handleSubmit } = useForm(initialState, apiKey, method, false, true);


    const handleAddQuestion = () => {
        handleChange('questions', [...inputs.questions, { question: '', answers: [] }]);
    };

    const handleAddAnswer = (questionIndex) => {
        const questions = [...inputs.questions];
        questions[questionIndex].answers.push({ answer: '', isCorrect: false });
        handleChange('questions', questions)
    }

    const handleQuestionChange = (e, questionIndex) => {
        const updateQuestions = [...inputs.questions];
        updateQuestions[questionIndex].question = e.target.value;

        handleChange('questions', updateQuestions)
    }

    const handleAnswerChange = (e, questionIndex, answerIndex) => {
        const updateQuestions = [...inputs.questions];
        updateQuestions[questionIndex].answers[answerIndex].answer = e.target.value;

        handleChange('questions', updateQuestions);
    }

    const handleCheckboxChange = (e, questionIndex, answerIndex) => {
        const updatedQuestions = [...inputs.questions];
        updatedQuestions[questionIndex].answers[answerIndex].isCorrect = e.target.checked;
        handleChange('questions', updatedQuestions);
    };

    const handleRemoveAnswer = (questionIndex, answerIndex) => {
        const updatedQuestions = [...inputs.questions];
        const updatedAnswers = [...inputs.questions[questionIndex].answers];

        updatedAnswers.splice(answerIndex, 1);
        updatedQuestions[questionIndex].answers = updatedAnswers;

        handleChange('questions', updatedQuestions);
    }

    return (
        <div className='my-3'>
            {message && <Alert color='success' message={message} />}
            <div className='flex justify-center'>
                <form onSubmit={handleSubmit} className='w-[90%] space-y-2'>
                    <Input
                        type='text'
                        variant='bordered'
                        label='Quiz Name'
                        value={inputs.quizName}
                        errorMessage={errors['quizName']}
                        onChange={(e) => handleChange('quizName', e.target.value)}
                    />
                    <Select
                    items={user.sectors}
                    label="Sector"
                    variant='bordered'
                    defaultSelectedKeys={inputs['sector'] !== "" ? [inputs['sector']] : undefined}
                    errorMessage={errors['sector']}
                    onChange={(e) => handleChange('sector', e.target.value)}
                >
                    {(user.sectors).map((sector) => (
                        <SelectItem key={sector} >{sector}</SelectItem>
                    ))}
                </Select>
                    <Divider />
                    {inputs.questions.map((q, questionIndex) => (
                        <div key={questionIndex} className='space-y-2'>
                            <Input
                                type='text'
                                variant='bordered'
                                label={`Question ${questionIndex + 1}`}
                                value={q.question}
                                onChange={(e) => handleQuestionChange(e, questionIndex)}
                            />
                            {q.answers.map((a, answerIndex) => (
                                <div key={answerIndex} className='ml-2 flex items-center relative'>
                                    <Checkbox
                                        color='default'
                                        size="lg"
                                        isSelected={a.isCorrect}
                                        
                                        onChange={(e) => handleCheckboxChange(e, questionIndex, answerIndex)}
                                    />
                                    <Input
                                        type='text'
                                        className=''
                                        variant='bordered'
                                        label={`Answer ${answerIndex + 1}`}
                                        value={a.answer}
                                        onChange={(e) => handleAnswerChange(e, questionIndex, answerIndex)}
                                    />
                                    <div
                                        className='absolute right-2 cursor-pointer hover:opacity-55 rounded-full'
                                        onClick={() => handleRemoveAnswer(questionIndex, answerIndex)}>
                                        <img src={remove} width={18} />
                                    </div>
                                </div>
                            ))}
                            <Button
                                className='bg-foreground text-background'
                                onClick={() => handleAddAnswer(questionIndex)}
                            >
                                Add Answer
                            </Button>
                        </div>
                    ))}
                    <div className='space-x-2 flex'>
                        <Button
                            onClick={handleAddQuestion}>Add Question</Button>
                        <Button
                            type='submit'
                            className='bg-foreground text-background'
                            onClick={handleSubmit} disabled={isLoading}>
                            {isLoading ? (<div className='flex items-center gap-1'><Spinner size='sm' color="default" /> {id ? 'updating ...' : 'creating ...'} </div>) :  id ? 'Update' : 'Submit' }
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default QuizCreator;
