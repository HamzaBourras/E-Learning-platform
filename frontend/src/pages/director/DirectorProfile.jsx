import ProfileComponent from "../../components/ProfileComponent/profileComponent"
import { director } from "../../json/data"

const DirectorProfile = () => {
    return (
        <div>
            <ProfileComponent data={director} />
        </div>
    )
}
export default DirectorProfile