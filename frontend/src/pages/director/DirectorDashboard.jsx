/* eslint-disable no-unused-vars */
import { countData, getRecentlyAddedData } from "../../utils/utils";
import { teachers, students, departments, sectors } from '../../json/data'
import { useState } from "react";
import BarChart from '../../components/BarChart';


const DirectorDashboard = () => {
    const [teacherCounter, setTeacherCounter] = useState(countData(teachers));
    const [studentCounter, setStudentCounter] = useState(countData(students));
    const [departmentCounter, setDepartmentCounter] = useState(countData(departments));
    const [sectorCounter, setSectorCounter] = useState(countData(sectors));

    const recentStudents = getRecentlyAddedData(students, "id", 3);


    const professorData = {
        professor1: { assignments: 10, quizzes: 5, courses: 8 },
        professor2: { assignments: 5, quizzes: 12, courses: 6 },
        professor3: { assignments: 2, quizzes: 5, courses: 13 },
        professor4: { assignments: 2, quizzes: 5, courses: 4 },
        professor5: { assignments: 5, quizzes: 8, courses: 13 },
    };

    // --- -- - -- - - - - - - -- - -- - -- - - - - - - - - -- - - - -  -- - - - - - - - - - - - - -- - -- -  - -
    return (
        <div className="space-y-3">
            <div className="bg-purple-50 p-2 rounded">
                <h1 className="h1">Welcome back, <span className="font-normal"> Tony !</span></h1>
            </div>
            <div className="grid xs:sm:grid-cols-2 md:lg:grid-cols-4 gap-2">

                <div className="border border-purple-100 shadow-sm text-lg h-20 rounded-md flex justify-center items-center">
                    <h1 className="text-2xl">{teacherCounter} <span className="">Professors</span></h1>
                </div>

                <div className="border border-purple-100 shadow-sm text-lg h-20 rounded-md flex justify-center items-center">
                    <h1 className="text-2xl">{studentCounter} <span className="">Students</span></h1>
                </div>

                <div className="border border-purple-100 shadow-sm text-lg h-20 rounded-md flex justify-center items-center">
                    <h1 className="text-2xl">{departmentCounter} <span className="">Departments</span></h1>
                </div>

                <div className="border border-purple-100 shadow-sm text-lg h-20 rounded-md flex justify-center items-center">
                    <h1 className="text-2xl">{sectorCounter} <span className="">Sectors</span></h1>
                </div>

            </div>
            
            <div>
                <h1>Active Professors</h1>
                <BarChart data={professorData} />
            </div>
            {/* <div className="space-y-2">
                <h1>Recentaly added students</h1>
                <div>
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Firstname
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Lastname
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Sector
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Department
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                recentStudents.map(i => (
                                    <tr key={i.id} className="bg-white border-b hover:bg-gray-50">
                                        <td className="px-6 py-4">
                                            {i.firstname}
                                        </td>
                                        <td className="px-6 py-4">
                                            {i.lastname}
                                        </td>
                                        <td className="px-6 py-4">
                                            {i.sector}
                                        </td>
                                        <td className="px-6 py-4">
                                            {i.department}
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div> */}
        </div>
    );
}

export default DirectorDashboard;
