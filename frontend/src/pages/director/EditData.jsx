import { useLocation } from 'react-router-dom'
import ProfessorForm from './components/ProfessorForm';
import DepatmentForm from './components/DepatmentForm';
import StudentForm from './components/StudentForm';
import SectorForm from './components/SectotForm';


const EditData = () => {
    const location = useLocation();
    const { userId, user } = location.state || {};

    switch (user) {
        case "professor":
            return (
                <>
                    <ProfessorForm userId={userId}/>
                </>
            );
        case "department":
            return (
                <>
                    <DepatmentForm userId={userId}/>
                </>
            );
        case "sector":
            return (
                <>
                    <SectorForm userId={userId}/>
                </>
            );
        case "student":
            return (
                <>
                    <StudentForm userId={userId}/>
                </>
            );
        default:
            window.history.back()
        
    }
    
}

export default EditData
