import home from '../../assets/icons/home.svg';
import tasks from '../../assets/icons/tasks.svg';
// import teachers from '../../assets/icons/teachers.svg';
import books from '../../assets/icons/books.svg';
import meeting from '../../assets/icons/meeting.svg';
import submissions from '../../assets/icons/submissions.svg';

const Tabs = [
    {
        id: 1,
        name: "Home",
        icon: home,
        path: "/auth/student/dashboard"
    },
    {
        id: 4,
        name: "Tasks",
        icon: tasks,
        path: "/auth/student/tasks"
    },
    {
        id: 6,
        name: "Courses",
        icon: books,
        path: "/auth/student/courses"
    },
    {
        id: 6,
        name: "Submissions",
        icon: submissions,
        path: "/auth/student/submissions"
    },
    {
        id: 7,
        name: "Meetings",
        icon: meeting,
        path: "/auth/student/meetings"
    },


];

export default Tabs;
