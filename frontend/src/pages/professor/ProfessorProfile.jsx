import ProfileComponent from "../../components/ProfileComponent/profileComponent"
import { teachers as professors } from "../../json/data"

const ProfessorProfile = () => {
    return (
        <div>
            <ProfileComponent data={professors[4]} />
        </div>
    )
}
export default ProfessorProfile