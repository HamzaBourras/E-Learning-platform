import TableComponentWithFilter from '../../components/Table/TableComponentWithFilter';
import { teachers, columns } from '../../json/data'
import EditProfessor from "./components/ProfessorForm";

const ManageProfessors = () => {
    return (
        <div className='space-y-4'>
            <div className="flex justify-between items-center">
                <div>
                    <h1 className='text-2xl font-bold'>Professors</h1>
                    <p className='text-gray-600'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, alias.
                    </p>
                </div>
            </div>

            <div className="">
                <TableComponentWithFilter Component={EditProfessor} data={teachers} columns={columns} user="professor" />
            </div>

        </div>
    )
}

export default ManageProfessors
