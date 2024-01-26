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

const depatmentsColumns = [

    { name: "ID", uid: "id", sortable: true },
    { name: "DEPARTMENT", uid: "department", sortable: true },
    { name: "ACTIONS", uid: "actions" },
]

export { departments, sectors, teachers, columns, depatmentsColumns };