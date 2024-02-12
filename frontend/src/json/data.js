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
        "id": 1,
        "firstname": "Tony",
        "lastname": "Reichert",
        "department": "Management",
        "avatar": "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        "email": "tony.reichert@example.com",
        "sectors": [
            "TM"
        ]
    },
    {
        "id": 2,
        "firstname": "Zoey",
        "lastname": "Lang",
        "department": "Development",
        "avatar": "https://i.pravatar.cc/150?u=a042581f4e29026704d",
        "email": "zoey.lang@example.com",
        "sectors": [
            "Tech Lead"
        ]
    },
    {
        "id": 3,
        "firstname": "Jane",
        "lastname": "Fisher",
        "department": "Development",
        "avatar": "https://i.pravatar.cc/150?u=a04258114e29026702d",
        "email": "jane.fisher@example.com",
        "sectors": [
            "Computer Science",
            "Data Science"
        ]
    },
    {
        "id": 4,
        "firstname": "William",
        "lastname": "Howard",
        "department": "Marketing",
        "avatar": "https://i.pravatar.cc/150?u=a048581f4e29026701d",
        "email": "william.howard@example.com",
        "sectors": [
            "C.M."
        ]
    },
    {
        "id": 5,
        "firstname": "Kristen",
        "lastname": "Copper",
        "department": "Sales",
        "avatar": "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
        "email": "kristen.cooper@example.com",
        "sectors": [
            "TM"
        ]
    },
    {
        "id": 6,
        "firstname": "Brian",
        "lastname": "Kim",
        "department": "Management",
        "avatar": "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        "email": "brian.kim@example.com",
        "sectors": [
            "P. Manager"
        ]
    }
];


const columns = [
    { name: "ID", uid: "id", sortable: true },
    { name: "USERNAME", uid: "username", sortable: true },
    // { name: "AGE", uid: "age", sortable: true },
    // { name: "SECTOR", uid: "sector", sortable: true },
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
        "id": 1,
        "username": "j.doe",
        "email": "johndoe@example.com",
        "department": "Development",
        "sector": "Computer Science"
    },
    {
        "id": 2,
        "username": "j.smith",
        "email": "janesmith@example.com",
        "department": "Marketing",
        "sector": "TM"
    },
    {
        "id": 3,
        "username": "d.johnson",
        "email": "davidjohnson@example.com",
        "department": "Management",
        "sector": "ER"
    },
    {
        "id": 4,
        "username": "s.williams",
        "email": "sarahwilliams@example.com",
        "department": "Development",
        "sector": "Data Science"
    },
    {
        "id": 5,
        "username": "m.brown",
        "email": "michaelbrown@example.com",
        "department": "Management",
        "sector": "ER"
    },
    {
        "id": 6,
        "username": "e.davis",
        "email": "emilydavis@example.com",
        "department": "Development",
        "sector": "Computer Science"
    },
    {
        "id": 7,
        "username": "d.miller",
        "email": "danielmiller@example.com",
        "department": "Development",
        "sector": "Computer Science"
    },
    {
        "id": 8,
        "username": "o.wilson",
        "email": "oliviawilson@example.com",
        "department": "Marketing",
        "sector": "TM"
    },
    {
        "id": 9,
        "username": "a.taylor",
        "email": "andrewtaylor@example.com",
        "department": "Management",
        "sector": "ER"
    },
    {
        "id": 10,
        "username": "s.anderson",
        "email": "sophiaanderson@example.com",
        "department": "Development",
        "sector": "Data Science"
    }
];


const studentColumns = [
    { name: "ID", uid: "id", sortable: true },
    { name: "Username", uid: "username", sortable: true },
    { name: "Department", uid: "department", sortable: true },
    { name: "Sector", uid: "sector", sortable: true },
    { name: "Email", uid: "email" },
    { name: "Actions", uid: "actions" },
];


const courses = [
    {
        id: 1,
        courseName: 'Laravel',
        description: 'Discover the power of Laravel, a PHP web application framework, and learn to build elegant and scalable web applications. Dive into features like Eloquent ORM, Blade templating, and more. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, provident dolorum. Atque expedita soluta temporibus, eveniet repellendus animi voluptate harum?',
        tags: ['web', 'laravel', 'backend'],
        sector: 'Computer Science',
        filePath: '',
        thumbnailImage: ''
    },
    {
        id: 2,
        courseName: 'React.js',
        description: 'A comprehensive guide to the fundamentals of React.js for building modern user interfaces.',
        tags: ['web', 'react', 'frontend'],
        sector: 'Computer Science',
        filePath: '',
        thumbnailImage: ''
    },
    {
        id: 3,
        courseName: 'Node.js Basics',
        description: 'Learn the basics of Node.js and server-side JavaScript programming.',
        tags: ['web', 'node', 'backend'],
        sector: 'Computer Science',
        filePath: '',
        thumbnailImage: ''
    },
    {
        id: 4,
        courseName: 'Python for Data Science',
        description: 'Explore Python programming for data science and analysis with real-world examples.',
        tags: ['python', 'data-science'],
        sector: 'Data Science',
        filePath: '',
        thumbnailImage: ''
    },
    {
        id: 5,
        courseName: 'Angular Framework',
        description: 'An in-depth tutorial on building web applications with the Angular framework.',
        tags: ['web', 'angular', 'frontend'],
        sector: 'Computer Science',
        filePath: '',
        thumbnailImage: ''
    },
    {
        id: 6,
        courseName: 'Databases and SQL',
        description: 'Master the concepts of databases and SQL for efficient data storage and retrieval.',
        tags: ['database', 'sql', 'backend'],
        sector: 'Data Science',
        filePath: '',
        thumbnailImage: ''
    },
    {
        id: 7,
        courseName: 'Mobile App Development with Flutter',
        description: 'Create cross-platform mobile applications with Flutter and Dart programming language.',
        tags: ['mobile', 'flutter', 'dart'],
        sector: 'Computer Science',
        filePath: '',
        thumbnailImage: ''
    },
    {
        id: 8,
        courseName: 'JavaScript Design Patterns',
        description: 'Understand common design patterns in JavaScript for writing scalable and maintainable code.',
        tags: ['javascript', 'design-patterns'],
        sector: 'Computer Science',
        filePath: '',
        thumbnailImage: ''
    },
    {
        id: 9,
        courseName: 'Cybersecurity Essentials',
        description: 'Learn the essential concepts and techniques in cybersecurity for securing digital systems.',
        tags: ['cybersecurity'],
        sector: 'Data Science',
        filePath: '',
        thumbnailImage: ''
    },
    {
        id: 10,
        courseName: 'GraphQL in Practice',
        description: 'Implement GraphQL for efficient data fetching and manipulation in modern web applications.',
        tags: ['web', 'graphql', 'backend'],
        sector: 'Data Science',
        filePath: '',
        thumbnailImage: ''
    }
];


const quizzes = [
    {
        id: 1,
        quizName: "JavaScript Basics Quiz",
        sector: "Computer Science",
        questions: [
            {
                question: "What does 'DOM' stand for?",
                answers: [
                    {
                        answer: "Document Object Model",
                        isCorrect: true,
                    },
                    {
                        answer: "Data Object Model",
                        isCorrect: false,
                    },
                    {
                        answer: "Document Oriented Model",
                        isCorrect: false,
                    },
                ],
            },
            {
                question: "Which of the following is a JavaScript data type?",
                answers: [
                    {
                        answer: "Boolean",
                        isCorrect: true,
                    },
                    {
                        answer: "Float",
                        isCorrect: false,
                    },
                    {
                        answer: "String",
                        isCorrect: true,
                    },
                ],
            },
        ],
    },
    {
        id: 2,
        quizName: "HTML Basics Quiz",
        sector: "Computer Science",
        questions: [
            {
                question: "What does 'HTML' stand for?",
                answers: [
                    {
                        answer: "Hypertext Markup Language",
                        isCorrect: true,
                    },
                    {
                        answer: "Hyper Transfer Markup Language",
                        isCorrect: false,
                    },
                    {
                        answer: "High-Level Text Markup Language",
                        isCorrect: false,
                    },
                ],
            },
            {
                question: "Which tag is used for creating hyperlinks in HTML?",
                answers: [
                    {
                        answer: "<a>",
                        isCorrect: true,
                    },
                    {
                        answer: "<link>",
                        isCorrect: false,
                    },
                    {
                        answer: "<href>",
                        isCorrect: false,
                    },
                ],
            },
        ],
    },
    {
        id: 3,
        quizName: "CSS Basics Quiz",
        sector: "Computer Science",
        questions: [
            {
                question: "What does 'CSS' stand for?",
                answers: [
                    {
                        answer: "Cascading Style Sheets",
                        isCorrect: true,
                    },
                    {
                        answer: "Computer Style Sheets",
                        isCorrect: false,
                    },
                    {
                        answer: "Creative Style Sheets",
                        isCorrect: false,
                    },
                ],
            },
            {
                question: "Which property is used to change the text color in CSS?",
                answers: [
                    {
                        answer: "color",
                        isCorrect: true,
                    },
                    {
                        answer: "text-color",
                        isCorrect: false,
                    },
                    {
                        answer: "font-color",
                        isCorrect: false,
                    },
                ],
            },
        ],
    },
    {
        id: 4,
        quizName: "General Knowledge Quiz",
        sector: "TM",
        questions: [
            {
                question: "What is the capital of France?",
                answers: [
                    {
                        answer: "Paris",
                        isCorrect: true,
                    },
                    {
                        answer: "Berlin",
                        isCorrect: false,
                    },
                    {
                        answer: "Madrid",
                        isCorrect: false,
                    },
                ],
            },
            {
                question: "Which planet is known as the 'Red Planet'?",
                answers: [
                    {
                        answer: "Mars",
                        isCorrect: true,
                    },
                    {
                        answer: "Jupiter",
                        isCorrect: false,
                    },
                    {
                        answer: "Venus",
                        isCorrect: false,
                    },
                ],
            },
        ],
    },
    {
        id: 5,
        quizName: "React Basics Quiz",
        sector: "Computer Science",
        questions: [
            {
                question: "What is React?",
                answers: [
                    {
                        answer: "A JavaScript library for building user interfaces",
                        isCorrect: true,
                    },
                    {
                        answer: "A new programming language",
                        isCorrect: false,
                    },
                    {
                        answer: "A database management system",
                        isCorrect: false,
                    },
                ],
            },
            {
                question: "What is JSX?",
                answers: [
                    {
                        answer: "JavaScript XML",
                        isCorrect: true,
                    },
                    {
                        answer: "JavaScript Extended",
                        isCorrect: false,
                    },
                    {
                        answer: "Java Standard Extension",
                        isCorrect: false,
                    },
                ],
            },
        ],
    },
    {
        id: 6,
        quizName: "Geography Quiz",
        sector: "TM",
        questions: [
            {
                question: "Which river is the longest in the world?",
                answers: [
                    {
                        answer: "Nile",
                        isCorrect: true,
                    },
                    {
                        answer: "Amazon",
                        isCorrect: false,
                    },
                    {
                        answer: "Yangtze",
                        isCorrect: false,
                    },
                ],
            },
            {
                question: "What is the highest mountain in the world?",
                answers: [
                    {
                        answer: "Mount Everest",
                        isCorrect: true,
                    },
                    {
                        answer: "K2",
                        isCorrect: false,
                    },
                    {
                        answer: "Kangchenjunga",
                        isCorrect: false,
                    },
                ],
            },
        ],
    },
    {
        id: 7,
        quizName: "Science Quiz",
        sector: "Computer Science",
        questions: [
            {
                question: "What is the chemical symbol for gold?",
                answers: [
                    {
                        answer: "Au",
                        isCorrect: true,
                    },
                    {
                        answer: "Ag",
                        isCorrect: false,
                    },
                    {
                        answer: "Fe",
                        isCorrect: false,
                    },
                ],
            },
            {
                question: "Which gas do plants absorb during photosynthesis?",
                answers: [
                    {
                        answer: "Carbon Dioxide",
                        isCorrect: true,
                    },
                    {
                        answer: "Oxygen",
                        isCorrect: false,
                    },
                    {
                        answer: "Nitrogen",
                        isCorrect: false,
                    },
                ],
            },
        ],
    },
    {
        id: 8,
        quizName: "History Quiz",
        sector: "ER",
        questions: [
            {
                question: "In which year did World War II end?",
                answers: [
                    {
                        answer: "1945",
                        isCorrect: true,
                    },
                    {
                        answer: "1939",
                        isCorrect: false,
                    },
                    {
                        answer: "1941",
                        isCorrect: false,
                    },
                ],
            },
            {
                question: "Who was the first President of the United States?",
                answers: [
                    {
                        answer: "George Washington",
                        isCorrect: true,
                    },
                    {
                        answer: "Abraham Lincoln",
                        isCorrect: false,
                    },
                    {
                        answer: "Thomas Jefferson",
                        isCorrect: false,
                    },
                ],
            },
        ],
    },
    {
        id: 9,
        quizName: "Mathematics Quiz",
        sector: "ER",
        questions: [
            {
                question: "What is the value of pi (π) to two decimal places?",
                answers: [
                    {
                        answer: "3.14",
                        isCorrect: true,
                    },
                    {
                        answer: "3.15",
                        isCorrect: false,
                    },
                    {
                        answer: "3.16",
                        isCorrect: false,
                    },
                ],
            },
            {
                question: "What is the square root of 64?",
                answers: [
                    {
                        answer: "8",
                        isCorrect: true,
                    },
                    {
                        answer: "6",
                        isCorrect: false,
                    },
                    {
                        answer: "10",
                        isCorrect: false,
                    },
                ],
            },
        ],
    },
    {
        id: 10,
        quizName: "Sports Quiz",
        sector: "TM",
        questions: [
            {
                question: "Which country won the FIFA World Cup in 2018?",
                answers: [
                    {
                        answer: "France",
                        isCorrect: true,
                    },
                    {
                        answer: "Germany",
                        isCorrect: false,
                    },
                    {
                        answer: "Brazil",
                        isCorrect: false,
                    },
                ],
            },
            {
                question: "In which sport would you perform a slam dunk?",
                answers: [
                    {
                        answer: "Basketball",
                        isCorrect: true,
                    },
                    {
                        answer: "Football",
                        isCorrect: false,
                    },
                    {
                        answer: "Tennis",
                        isCorrect: false,
                    },
                ],
            },
        ],
    },
];



const announcements = [
    {
        "id": 1,
        "announcementName": "New course on Quantum Computing starting next week!",
        "sector": "Computer Science",
        "status": true
    },
    {
        "id": 2,
        "announcementName": "Reminder: Marketing seminar on brand management tomorrow.",
        "sector": "TM",
        "status": true
    },
    {
        "id": 3,
        "announcementName": "Scheduled maintenance on the network this weekend.",
        "sector": "Data Science",
        "status": true
    },
    {
        "id": 4,
        "announcementName": "Welcome to our new students joining the Biology department!",
        "sector": "ER",
        "status": true
    },
    {
        "id": 5,
        "announcementName": "Leadership training workshop postponed to next month.",
        "sector": "Computer Science",
        "status": false
    }
];



export 
{ 
    director, 
    departments, 
    teachers, 
    columns, 
    depatmentsColumns, 
    students, 
    studentColumns, 
    sectors, 
    sectorsColumns, 
    courses, 
    quizzes,
    announcements
};