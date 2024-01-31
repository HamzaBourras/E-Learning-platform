import home from '../../assets/icons/home.svg';
import tasks from '../../assets/icons/tasks.svg';
import books from '../../assets/icons/books.svg';
import students from '../../assets/icons/student.svg';
import announcements from '../../assets/icons/announcements.svg';
import quizzes from '../../assets/icons/quizzes.svg';

const Tabs = [
    {
        id: 1,
        name: "Dashboard",
        icon: home,
        path: "/auth/professor/dashboard"
    },
    {
        id: 6,
        name: "Courses",
        icon: books,
        path: "/auth/professor/courses"
    },
    {
        id: 6,
        name: "My Students",
        icon: students,
        path: "/auth/professor/my-students"
    },
    {
        id: 7,
        name: "Announcments",
        icon: announcements,
        path: "/auth/professor/announcements"
    },
    {
        id: 8,
        name: "Quizzes",
        icon: quizzes,
        path: "/auth/professor/quizzes"
    },
    {
        id: 9,
        name: "Submissions",
        icon: tasks,
        path: "/auth/professor/submissions"
    },

    
];

export default Tabs;
