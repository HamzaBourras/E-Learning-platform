import Paper from '@mui/material/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
    Scheduler,
    WeekView,
    Appointments,
    AllDayPanel,
} from '@devexpress/dx-react-scheduler-material-ui';
import { appointments } from '../json/data';


const currentDate = '2018-06-27';

const CalendarComponent = () => (
    <div className='p-2 h-96 border rounded-md overflow-auto'>
        <Paper>
            <Scheduler
                data={appointments}
            >
                <ViewState
                    defaultCurrentDate={currentDate}
                />
                <WeekView
                    startDayHour={9}
                    endDayHour={18}
                />
                <Appointments />
                <AllDayPanel />
            </Scheduler>
        </Paper>
    </div>
);

export default CalendarComponent;