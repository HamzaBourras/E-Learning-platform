import { tasks } from "../../json/data"
import taskImage from '../../assets/images/to-do.png'
import FormLayoutWithGrid from "./components/FormLayoutWithGrid"
import TaskForm from "./components/TaskForm"

const ManageTasks = () => {
    return (
        <div>
            <FormLayoutWithGrid 
                data={tasks} 
                imageLogo={taskImage} 
                image={taskImage} 
                Component={TaskForm}
                name="Task" />
        </div>
    )
}

export default ManageTasks