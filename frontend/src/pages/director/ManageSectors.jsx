import TableComponentWithFilter from '../../components/Table/TableComponentWithFilter';
import { sectors, sectorsColumns } from '../../json/data'
import SectorForm from "./components/SectorForm";


export default function ManageSectors() {
    return (
        <div className='space-y-4'>
            <div className="flex justify-between items-center">
                <div>
                    <h1 className='text-2xl font-bold'>Sectors</h1>
                    <p className='text-gray-600'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, alias.
                    </p>
                </div>
            </div>

            <div>
                <TableComponentWithFilter Component={SectorForm} data={sectors} columns={sectorsColumns} user="sector"/>
            </div>

        </div>
    )
}
