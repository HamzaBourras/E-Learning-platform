import StudentLayoutForm from "./components/StudentLayoutForm"
import taskImage from '../../assets/images/to-do.png'
import taskIcon from '../../assets/images/to-do-list.png'
import { tasks } from "../../json/data"
import StudentTaskForm from "./components/StudentTaskForm"

const Tasks = () => {
    return (
        <div>
            <StudentLayoutForm 
                title="Tasks" 
                imageLogo={taskImage}
                data={tasks}
                image={taskIcon}
                name="task"
                Component={StudentTaskForm}
            />
        </div>
    )
}
export default Tasks