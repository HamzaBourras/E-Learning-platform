import { Progress, Divider } from '@nextui-org/react'
import { students, courses } from '../../json/data'
import { countData } from '../../utils/utils'
import Stduent from '../../assets/images/student-logo.png'
import Course from '../../assets/images/folder-Logo.png'
const ProfessorDashboard = () => {
    const numberOfStudents = countData(students)
    const numberOfCourses = countData(courses)

    return (
        <div className="space-y-3">
            <div className=" rounded">
                <h1 className="h1">Welcome back, <span className="font-normal"> Tony !</span></h1>
            </div>
            <Divider />
            <div className="grid xs:sm:grid-cols-2 md:lg:grid-cols-4 gap-2 h-fit">

                <div className="border p-2 shadow-sm text-lg h-20 rounded-md flex flex-col justify-center space-y-1">
                    <div className='flex items-center space-x-1'>
                        <img src={Stduent} width={40}/>
                        <h1 className=""><span className="">Total students</span></h1>
                    </div>
                    <div className='flex items-center'>
                        <Progress
                            aria-label="Loading..."
                            value={numberOfStudents}
                            className="max-w-md"
                        />
                    </div>
                </div>

                <div className="border p-2 shadow-sm text-lg h-20 rounded-md flex flex-col justify-center space-y-1">
                    <div className='flex items-center space-x-1'>
                        <img src={Course} width={40}/>
                        <h1 className=""><span className="">Total Courses</span></h1>
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
        </div>
    )
}

export default ProfessorDashboard