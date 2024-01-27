const teachers = [
    {
        id: 1,
        name: "Tony Reichert",
        sector: "CEO",
        department: "Management",
        status: "active",
        age: "29",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        email: "tony.reichert@example.com",
    },
    {
        id: 2,
        name: "Zoey Lang",
        sector: "Tech Lead",
        department: "Development",
        status: "paused",
        age: "25",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
        email: "zoey.lang@example.com",
    },
    {
        id: 3,
        name: "Jane Fisher",
        sector: "Sr. Dev",
        department: "Development",
        status: "active",
        age: "22",
        avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
        email: "jane.fisher@example.com",
    },
    {
        id: 4,
        name: "William Howard",
        sector: "C.M.",
        department: "Marketing",
        status: "vacation",
        age: "28",
        avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
        email: "william.howard@example.com",
    },
    {
        id: 5,
        name: "Kristen Copper",
        sector: "S. Manager",
        department: "Sales",
        status: "active",
        age: "24",
        avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
        email: "kristen.cooper@example.com",
    },
    {
        id: 6,
        name: "Brian Kim",
        sector: "P. Manager",
        department: "Management",
        age: "29",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        email: "brian.kim@example.com",
        status: "Active",
    }
]

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
        department: "Math informatique"
    },
    {
        id: 2,
        department: "Envirment"
    },
    {
        id: 3,
        department: "Toristique"
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
        department_id: 1,
        sector: "Computer Science"
    },
    {
        id: 2,
        department_id: 1,
        sector: "Data Science"
    },
    {
        id: 3,
        department_id: 3,
        sector: "TM"
    },
    {
        id: 4,
        department_id: 2,
        sector: "ER"
    },
];


const students = [
    {
        id: 1,
        FirstName: "John",
        LastName: "Doe",
        department: "Physics",
        sector: "Astrophysics",
        email: "johndoe@example.com"
    },
    {
        id: 2,
        FirstName: "Jane",
        LastName: "Smith",
        department: "Chemistry",
        sector: "Organic Chemistry",
        email: "janesmith@example.com"
    },
    {
        id: 3,
        FirstName: "David",
        LastName: "Johnson",
        department: "Biology",
        sector: "Genetics",
        email: "davidjohnson@example.com"
    },
    {
        id: 4,
        FirstName: "Sarah",
        LastName: "Williams",
        department: "Computer Science",
        sector: "Artificial Intelligence",
        email: "sarahwilliams@example.com"
    },
    {
        id: 5,
        FirstName: "Michael",
        LastName: "Brown",
        department: "Engineering",
        sector: "Mechanical Engineering",
        email: "michaelbrown@example.com"
    },
    {
        id: 6,
        FirstName: "Emily",
        LastName: "Davis",
        department: "Mathematics",
        sector: "Statistics",
        email: "emilydavis@example.com"
    },
    {
        id: 7,
        FirstName: "Daniel",
        LastName: "Miller",
        department: "Physics",
        sector: "Quantum Physics",
        email: "danielmiller@example.com"
    },
    {
        id: 8,
        FirstName: "Olivia",
        LastName: "Wilson",
        department: "Chemistry",
        sector: "Inorganic Chemistry",
        email: "oliviawilson@example.com"
    },
    {
        id: 9,
        FirstName: "Andrew",
        LastName: "Taylor",
        department: "Biology",
        sector: "Microbiology",
        email: "andrewtaylor@example.com"
    },
    {
        id: 10,
        FirstName: "Sophia",
        LastName: "Anderson",
        department: "Computer Science",
        sector: "Cybersecurity",
        email: "sophiaanderson@example.com"
    }
];

const studentColumns = [
    { name: "ID", uid: "id", sortable: true },
    { name: "First Name", uid: "FirstName", sortable: true },
    { name: "Last Name", uid: "LastName", sortable: true },
    { name: "Department", uid: "department", sortable: true },
    { name: "Sector", uid: "sector", sortable: true },
    { name: "Email", uid: "email" },
    { name: "Actions", uid: "actions" },
];


export { departments, sectors, teachers, columns, depatmentsColumns, students, studentColumns };