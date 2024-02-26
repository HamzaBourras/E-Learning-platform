
import { Divider } from '@nextui-org/react';
import { NotificationComponent } from './../../components/NotificationComponent';
import ProgressComponent from '../../components/ProgressComponent';
import DoneHW from '../../assets/images/done.png'
import Assignment from '../../assets/images/assignment.png'
import CalendarComponent from './../../components/CalendarComponent';
import WelcomeBanner from './../../components/WelcomeBanner';

const StudentDashboard = () => {
    const authUser = JSON.parse(localStorage.getItem('user'));
    return (
        <div>
            <WelcomeBanner user={authUser.firstName}>
                <NotificationComponent />
            </WelcomeBanner>
            <Divider />
            <div className='grid xs:sm:grid-cols-1 md:lg:grid-cols-12 py-1 gap-3'>
                <div className="col-span-10 space-y-3">
                    <h1 className='title'>Summary Report</h1>
                    <div className="grid xs:sm:grid-cols-2 md:lg:grid-cols-2 gap-4 h-fit">
                        <ProgressComponent name="Done Homeworks" image={DoneHW} number={12} maxNumber={40} />
                        <ProgressComponent name="Assignments" image={Assignment} number={6} maxNumber={40} color="warning" />
                    </div>
                    <div>
                        <h1 className='title'>Scheduled Events </h1>
                        <CalendarComponent />
                    </div>
                </div>

                <div className="h-svh col-span-2 xs:sm:hidden md:lg:flex border-l-1 ">
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default StudentDashboard