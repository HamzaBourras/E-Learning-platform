
import { Divider } from '@nextui-org/react';
import { NotificationComponent } from './../../components/NotificationComponent';
import ProgressComponent from '../../components/ProgressComponent';
import DoneHW from '../../assets/images/done.png'
import Assignment from '../../assets/images/assignment.png'
import WelcomeBanner from './../../components/WelcomeBanner';
import { announcements, categories, courses, teachers } from '../../json/data';
import Card from './components/Card';
import courseImage from '../../assets/images/file.png'
import RadarChart from './../../components/RadarChart';
import CardImage from './../../components/CardImage';


const StudentDashboard = () => {
    const authUser = JSON.parse(localStorage.getItem('user'));
    const someProfessors = teachers.slice(0, 5)
    const someNotifications = announcements.slice(0, 5)
    const someCourses = courses.slice(3, 6)

    const grades = [80, 85, 85, 61, 83, 78]
    

    return (
        <div>
            <WelcomeBanner user={authUser.firstName}>
                <NotificationComponent notifications={someNotifications} />
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
                        someProfessors.map(professor => (
                            <Card
                                key={professor.id}
                                title={`${professor.firstname}, ${professor.lastname}`}
                                image="https://i.pravatar.cc/150?u=a04258114e29026302d"
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