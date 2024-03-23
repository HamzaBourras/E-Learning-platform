
import { Divider } from '@nextui-org/react';
import ProgressComponent from '../../components/ProgressComponent';
import DoneHW from '../../assets/images/done.png'
import Assignment from '../../assets/images/assignment.png'
import WelcomeBanner from './../../components/WelcomeBanner';
import { categories } from '../../json/data';
import Card from './components/Card';
import courseImage from '../../assets/images/file.png'
import RadarChart from './../../components/RadarChart';
import CardImage from './../../components/CardImage';
import { useSelector } from 'react-redux';


const StudentDashboard = () => {
    const authUser = JSON.parse(localStorage.getItem('user'));
    const myProfessors = useSelector((state)=>state.student.myProfessors)
    const courses = useSelector((state)=>state.student.courses)

    const someCourses = courses.slice(0,3)
    const grades = [60, 95, 85, 91, 33, 78]
    

    return (
        <div>
            <WelcomeBanner user={authUser.firstName}>
                {/* <NotificationComponent notifications={someNotifications} /> */}
            </WelcomeBanner>
            <Divider />
            <div className='grid xs:sm:grid-cols-1 md:lg:grid-cols-12 py-1 gap-3'>
                <div className="col-span-9 space-y-3">
                    <h1 className='title'>Summary Report</h1>
                    <div className="grid xs:sm:grid-cols-2 md:lg:grid-cols-2 gap-4 h-fit">
                        <ProgressComponent name="Done Homeworks" image={DoneHW} number={12} maxNumber={40} />
                        <ProgressComponent name="Assignments" image={Assignment} number={6} maxNumber={40} color="warning" />
                    </div>
                    <div className='flex flex-col items-center'>
                        <h1 className='title self-start'>Grades Report</h1>
                        <RadarChart data={grades} tabs={categories}/>

                    </div>



                </div>

                <div className="h-svh col-span-3 xs:sm:hidden md:lg:flex border-l-1 px-3 flex flex-col space-y-3">

                    <h1 className='title'>My Professors</h1>
                    {
                        myProfessors.map(professor => (
                            <Card
                                key={professor.id}
                                title={`${professor.firstname} ${professor.lastname}`}
                                email={professor.email}
                            />
                        ))
                    }
                    <Divider />
                    <h1 className='title'>Latest courses</h1>
                    {
                        someCourses.map(course => (
                            <CardImage
                                key={course.id}
                                title={course.courseName}
                                image={courseImage}
                                size="10"
                            />
                        ))
                    }

                </div>
            </div>
        </div>
    )
}
export default StudentDashboard