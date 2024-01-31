const director = {
    id: 1,
    firstname: "Ton",
    lastname: "Michel",
    role: "director",
    email: 'TonyMichel@gmail.com',
    bio: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor delectus odit numquam laborum necessitatibus. A fugiat excepturi quam,',
    image: 'https://i.pravatar.cc/150?u=a04258114e29026302d'
}

const teachers = [
    {
        id: 1,
        firstname: "Tony",
        lastname: "Reichert",
        sector: "CEO",
        department: "Management",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        email: "tony.reichert@example.com",
    },
    {
        id: 2,
        firstname: "Zoey",
        lastname: "Lang",
        sector: "Tech Lead",
        department: "Development",
        status: "paused",
        age: "25",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
        email: "zoey.lang@example.com",
    },
    {
        id: 3,
        firstname: "Jane",
        lastname: "Fisher",
        sector: "Computer Science",
        department: "Development",
        status: "active",
        age: "22",
        avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
        email: "jane.fisher@example.com",
    },
    {
        id: 4,
        firstname: "William",
        lastname: "Howard",
        sector: "C.M.",
        department: "Marketing",
        status: "vacation",
        age: "28",
        avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
        email: "william.howard@example.com",
    },
    {
        id: 5,
        firstname: "Kristen",
        lastname: "Copper",
        sector: "TM",
        department: "Sales",
        status: "active",
        age: "24",
        avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
        email: "kristen.cooper@example.com",
    },
    {
        id: 6,
        firstname: "Brian",
        lastname: "Kim",
        sector: "P. Manager",
        department: "Management",
        age: "29",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        email: "brian.kim@example.com",
        status: "Active",
    },
];


const columns = [
    { name: "ID", uid: "id", sortable: true },
    { name: "NAME", uid: "name", sortable: true },
    { name: "AGE", uid: "age", sortable: true },
    { name: "SECTOR", uid: "sector", sortable: true },
    { name: "EMAIL", uid: "email" },
    { name: "DEPARTMENT", uid: "department", sortable: true },
    { name: "ACTIONS", uid: "actions" },
];


const departments = [
    {
        id: 1,
        department: "Marketing"
    },
    {
        id: 2,
        department: "Management"
    },
    {
        id: 3,
        department: "Sales"
    },
    {
        id: 4,
        department: "Development"
    },
];

const depatmentsColumns = [

    { name: "ID", uid: "id", sortable: true },
    { name: "DEPARTMENT", uid: "department", sortable: true },
    { name: "ACTIONS", uid: "actions" },
]

const sectors = [
    {
        id: 1,
        department: 'Development',
        sector: "Computer Science"
    },
    {
        id: 2,
        department: 'Development',
        sector: "Data Science"
    },
    {
        id: 3,
        department: 'Marketing',
        sector: "TM"
    },
    {
        id: 4,
        department: 'Management',
        sector: "ER"
    },
];

const sectorsColumns = [

    { name: "ID", uid: "id", sortable: true },
    { name: "SECTOR", uid: "sector", sortable: true },
    { name: "DEPARTMENT", uid: "department", sortable: true },
    { name: "ACTIONS", uid: "actions" },
]


const students = [
    {
        id: 1,
        firstname: "John",
        lastname: "Doe",
        department: "Physics",
        sector: "Astrophysics",
        email: "johndoe@example.com"
    },
    {
        id: 2,
        firstname: "Jane",
        lastname: "Smith",
        department: "Chemistry",
        sector: "Organic Chemistry",
        email: "janesmith@example.com"
    },
    {
        id: 3,
        firstname: "David",
        lastname: "Johnson",
        department: "Biology",
        sector: "Genetics",
        email: "davidjohnson@example.com"
    },
    {
        id: 4,
        firstname: "Sarah",
        lastname: "Williams",
        department: "Computer Science",
        sector: "Artificial Intelligence",
        email: "sarahwilliams@example.com"
    },
    {
        id: 5,
        firstname: "Michael",
        lastname: "Brown",
        department: "Engineering",
        sector: "Mechanical Engineering",
        email: "michaelbrown@example.com"
    },
    {
        id: 6,
        firstname: "Emily",
        lastname: "Davis",
        department: "Mathematics",
        sector: "Statistics",
        email: "emilydavis@example.com"
    },
    {
        id: 7,
        firstname: "Daniel",
        lastname: "Miller",
        department: "Physics",
        sector: "Quantum Physics",
        email: "danielmiller@example.com"
    },
    {
        id: 8,
        firstname: "Olivia",
        lastname: "Wilson",
        department: "Chemistry",
        sector: "Inorganic Chemistry",
        email: "oliviawilson@example.com"
    },
    {
        id: 9,
        firstname: "Andrew",
        lastname: "Taylor",
        department: "Biology",
        sector: "Microbiology",
        email: "andrewtaylor@example.com"
    },
    {
        id: 10,
        firstname: "Sophia",
        lastname: "Anderson",
        department: "Computer Science",
        sector: "Cybersecurity",
        email: "sophiaanderson@example.com"
    }
];

const studentColumns = [
    { name: "ID", uid: "id", sortable: true },
    { name: "First Name", uid: "firstname", sortable: true },
    { name: "Last Name", uid: "lastname", sortable: true },
    { name: "Department", uid: "department", sortable: true },
    { name: "Sector", uid: "sector", sortable: true },
    { name: "Email", uid: "email" },
    { name: "Actions", uid: "actions" },
];


const courses = [
    {
        id: 1,
        lessonName: 'Laravel',
        description: 'Discover the power of Laravel, a PHP web application framework, and learn to build elegant and scalable web applications. Dive into features like Eloquent ORM, Blade templating, and more. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, provident dolorum. Atque expedita soluta temporibus, eveniet repellendus animi voluptate harum?',
        tags: ['web', 'laravel', 'backend'],
        filePath: '',
        thumbnailImage: ''
    },
    {
        id: 2,
        lessonName: 'React.js Fundamentals',
        description: 'A comprehensive guide to the fundamentals of React.js for building modern user interfaces.',
        tags: ['web', 'react', 'frontend'],
        filePath: '',
        thumbnailImage: ''
    },
    {
        id: 3,
        lessonName: 'Node.js Basics',
        description: 'Learn the basics of Node.js and server-side JavaScript programming.',
        tags: ['web', 'node', 'backend'],
        filePath: '',
        thumbnailImage: ''
    },
    {
        id: 4,
        lessonName: 'Python for Data Science',
        description: 'Explore Python programming for data science and analysis with real-world examples.',
        tags: ['python', 'data-science'],
        filePath: '',
        thumbnailImage: ''
    },
    {
        id: 5,
        lessonName: 'Angular Framework',
        description: 'An in-depth tutorial on building web applications with the Angular framework.',
        tags: ['web', 'angular', 'frontend'],
        filePath: '',
        thumbnailImage: ''
    },
    {
        id: 6,
        lessonName: 'Databases and SQL',
        description: 'Master the concepts of databases and SQL for efficient data storage and retrieval.',
        tags: ['database', 'sql', 'backend'],
        filePath: '',
        thumbnailImage: ''
    },
    {
        id: 7,
        lessonName: 'Mobile App Development with Flutter',
        description: 'Create cross-platform mobile applications with Flutter and Dart programming language.',
        tags: ['mobile', 'flutter', 'dart'],
        filePath: '',
        thumbnailImage: ''
    },
    {
        id: 8,
        lessonName: 'JavaScript Design Patterns',
        description: 'Understand common design patterns in JavaScript for writing scalable and maintainable code.',
        tags: ['javascript', 'design-patterns'],
        filePath: '',
        thumbnailImage: ''
    },
    {
        id: 9,
        lessonName: 'Cybersecurity Essentials',
        description: 'Learn the essential concepts and techniques in cybersecurity for securing digital systems.',
        tags: ['cybersecurity'],
        filePath: '',
        thumbnailImage: ''
    },
    {
        id: 10,
        lessonName: 'GraphQL in Practice',
        description: 'Implement GraphQL for efficient data fetching and manipulation in modern web applications.',
        tags: ['web', 'graphql', 'backend'],
        filePath: '',
        thumbnailImage: ''
    }
];


export { director, departments, teachers, columns, depatmentsColumns, students, studentColumns, sectors, sectorsColumns, courses };