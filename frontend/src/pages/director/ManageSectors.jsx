import TableComponentWithFilter from '../../components/Table/TableComponentWithFilter';
import { sectors, sectorsColumns } from '../../json/data'
import SectorForm from "./components/SectorForm";


export default function ManageSectors() {
    return (
        <div>
            <TableComponentWithFilter Component={SectorForm} data={sectors} columns={sectorsColumns} title="Sectors" user="sector" />
        </div>
    )
}
