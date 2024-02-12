import { Divider } from '@nextui-org/react'
import { students, courses } from '../../json/data'
import { countData} from '../../utils/utils'
import StduentImage from '../../assets/images/student-logo.png'
import CourseImage from '../../assets/images/folder-Logo.png'
import BarChart from '../../components/BarChart'
import DoughnutChart from '../../components/DoughnutChart'
import { sortArray } from './../../utils/utils';
import ProgressComponent from './../../components/ProgressComponent';
const ProfessorDashboard = () => {
    const numberOfStudents = countData(students)
    const numberOfCourses = countData(courses)

    const studentsData = {
        student1: { assignments: 10, quizzes: 15, courses: 8 },
        student2: { assignments: 20, quizzes: 5, courses: 8 },
    }
    const colors = ['rgba(255,132,192,0.4)', 'rgba(255,109,92,0.4)', 'rgba(255,206,86,0.4)'];

    const sortedCourses = sortArray(courses, 'desc');
    const topCourses = sortedCourses.slice(0,3)

    const labels = topCourses.map(course => course.courseName);
    const downloads = topCourses.map(download => download.downloads);

    return (
        <div className="space-y-3">
            <div className=" rounded">
                <h1 className="h1">Welcome back, <span className="font-normal"> Tony !</span></h1>
            </div>
            <Divider />
            <div className="grid xs:sm:grid-cols-1 md:lg:grid-cols-2 gap-4 h-fit">

                <ProgressComponent name="Students" image={StduentImage} number={numberOfStudents} maxNumber={40}/>
                <ProgressComponent name="Courses" image={CourseImage} number={numberOfCourses} maxNumber={40} color="danger"/>

                <div className='boreder '>
                    <h1>Active Students</h1>
                    <BarChart data={studentsData} labels={['assignments', 'quizzes', 'courses']} colors={colors} />
                </div>

                <div className='boreder '>
                    <h1>Downloaded Courses</h1>
                    <DoughnutChart labels={labels} data={downloads} colors={colors} />
                </div>
                

            </div>
        </div>
    )
}

export default ProfessorDashboard