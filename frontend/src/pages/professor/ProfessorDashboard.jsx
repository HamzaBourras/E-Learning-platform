// import { students, courses } from '../../json/data'
import { countData } from '../../utils/utils'
import StduentImage from '../../assets/images/student-logo.png'
import CourseImage from '../../assets/images/folder-Logo.png'
import BarChart from '../../components/BarChart'
import DoughnutChart from '../../components/DoughnutChart'
import { sortArray } from './../../utils/utils';
import ProgressComponent from './../../components/ProgressComponent';
import { COLORS } from './../../../constants/COLORS';
import WelcomeBanner from './../../components/WelcomeBanner';
import { useSelector } from 'react-redux';

const ProfessorDashboard = () => {
    // ------------------Data-------------------------------
    const authUser = JSON.parse(localStorage.getItem('user'));
    const students = useSelector((state) => state.professor.myStudents)
    const courses = useSelector((state) => state.professor.courses)

    const numberOfStudents = countData(students)
    const numberOfCourses = countData(courses)

    const studentsData = {
        student1: { assignments: 10, quizzes: 15, courses: 8 },
        student2: { assignments: 20, quizzes: 5, courses: 12 },
        student3: { assignments: 4, quizzes: 5, courses: 5 },
        student4: { assignments: 2, quizzes: 4, courses: 4 },
        student5: { assignments: 8, quizzes: 5, courses: 8 },
    }

    const sortedCourses = sortArray(courses, 'desc');
    const topCourses = sortedCourses.slice(0, 3)

    const labels = topCourses.map(course => course.courseName);
    const downloads = topCourses.map(download => download.downloads);

    console.log(downloads);



    return (
        <div className="space-y-3">
            <WelcomeBanner user={authUser.firstName} />

            <div className="grid xs:sm:grid-cols-2 md:lg:grid-cols-2 gap-4 h-fit">
                <ProgressComponent name="Students" image={StduentImage} number={numberOfStudents} maxNumber={40} />
                <ProgressComponent name="Courses" image={CourseImage} number={numberOfCourses} maxNumber={numberOfCourses} color="danger" />
            </div>

            <div className='flex flex-col items-center'>

                <div className='boreder w-full space-y-2'>
                    <h1 className='font-medium text-gray-500'>Active Students</h1>
                    <BarChart data={studentsData} labels={['assignments', 'quizzes', 'courses']} colors={COLORS} />
                </div>

                <div className='boreder w-full space-y-2 flex flex-col items-center'>
                    <h1 className='font-medium text-gray-500 self-start'>Downloaded Courses</h1>
                    {downloads.length > 0 ?

                        (<DoughnutChart labels={labels} data={downloads} colors={COLORS} />) :
                        <h1 className="w-full col-span-2 mx-4 text-gray-600">No data was found</h1>
                    }
                </div>
            </div>
        </div>
    )
}

export default ProfessorDashboard