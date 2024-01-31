import Btn from "../../components/Button";
import { countData } from "../../utils/utils";
import { teachers, students } from '../../json/data'
import { useState } from "react";
const DirectorDashboard = () => {
    const [teacherCounter, setTeacherCounter] = useState(countData(teachers));
    const [studentCounter, setStudentCounter] = useState(countData(students));

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
                        <h1 className="text-2xl">{teacherCounter} <span className="">Professors</span></h1>
                </div>

                <div className="border border-purple-100 shadow-sm text-lg h-20 rounded-md flex justify-center items-center">
                        <h1 className="text-2xl">{studentCounter} <span className="">Students</span></h1>
                </div>

            </div>
            <div>
                <h1>Active Professors</h1>
            </div>
        </div>
    );
}

export default DirectorDashboard;
