import home from '../../assets/icons/home.svg';
import profile from '../../assets/icons/profile.svg';
import settings from '../../assets/icons/settings.svg';
import teachers from '../../assets/icons/teachers.svg';

const Tabs = [
    {
        id: 1,
        name: "Dashboard",
        icon: home,
        path: "/auth/director/dashboard"
    },
    {
        id: 5,
        name: "Teachers",
        icon: teachers,
        path: "/auth/director/teachers"
    },
    {
        id: 2,
        name: "Profile",
        icon: profile,
        path: "/auth/director/profile"
    },
    {
        id: 3,
        name: "Settings",
        icon: settings,
        path: "/auth/director/settings"
    },
    
    
    
];

export default Tabs;
