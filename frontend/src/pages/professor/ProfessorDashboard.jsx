import { Progress, Divider } from '@nextui-org/react'
import { students, courses } from '../../json/data'
import { countData } from '../../utils/utils'
import Stduent from '../../assets/images/student-logo.png'
import Course from '../../assets/images/folder-Logo.png'
import BarChart from '../../components/BarChart'
const ProfessorDashboard = () => {
    const numberOfStudents = countData(students)
    const numberOfCourses = countData(courses)

    const studentsData = {
        student1: { assignments: 10, quizzes: 15, courses: 8 },
        student2: { assignments: 20, quizzes: 5, courses: 8 },
    }
    const colors = ['rgba(255,132,192,0.4)', 'rgba(255,109,92,0.4)', 'rgba(255,206,86,0.4)'];

    return (
        <div className="space-y-3">
            <div className=" rounded">
                <h1 className="h1">Welcome back, <span className="font-normal"> Tony !</span></h1>
            </div>
            <Divider />
            <div className="grid grid-cols-2 gap-2 h-fit">

                <div className="border p-2 shadow-sm text-lg h-20 rounded-md flex flex-col justify-center space-y-1">
                    <div className='flex items-center space-x-1'>
                        <img src={Stduent} width={40} />
                        <h1 className="text"><span className="">{numberOfStudents} Students</span></h1>
                    </div>
                    <div className='flex items-center'>
                        <Progress
                            aria-label="Loading..."
                            maxValue={40}
                            value={numberOfStudents}
                            className="max-w-md"
                        />
                    </div>
                </div>

                <div className="border p-2 shadow-sm text-lg h-20 rounded-md flex flex-col justify-center space-y-1">
                    <div className='flex items-center space-x-1'>
                        <img src={Course} width={40} />
                        <h1 className=""><span className="">{numberOfCourses} Courses</span></h1>
                    </div>
                    <div className='flex items-center'>
                        <Progress
                            aria-label="Loading..."
                            color='warning'
                            value={numberOfCourses}
                            className="max-w-md"
                        />
                    </div>
                </div>

            </div>
                <div>
                    <h1>Active Professors</h1>
                    <BarChart data={studentsData} labels={['assignments', 'quizzes', 'courses']} colors={colors} />
                </div>
        </div>
    )
}

export default ProfessorDashboard