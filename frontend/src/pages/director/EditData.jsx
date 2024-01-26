import { useLocation } from 'react-router-dom'
import EditProfessor from './components/ProfessorForm';
import EditDepatment from './components/DepatmentForm';


const EditData = () => {
    const location = useLocation();
    const { userId, user } = location.state || {};

    switch (user) {
        case "professor":
            return (
                <>
                    <EditProfessor userId={userId}/>
                </>
            );
        case "department":
            return (
                <>
                    <EditDepatment userId={userId}/>
                </>
            );
        default:
            window.history.back()
        
    }
    
}

export default EditData
