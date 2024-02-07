import { ALL_SECTORS_API } from '../../api/apis';
import LoadingPage from '../../components/LoadingPage';
import TableComponentWithFilter from '../../components/Table/TableComponentWithFilter';
import useFetch from '../../hooks/useFetch';
import { sectors, sectorsColumns } from '../../json/data'
import SectorForm from "./components/SectorForm";


export default function ManageSectors() {
    const apiKey = ALL_SECTORS_API
    const { data, isLoading, error } = useFetch(apiKey);
    return (
        <div>
            {isLoading && <LoadingPage />}
            {data &&
                <TableComponentWithFilter Component={SectorForm} data={(data.data)} columns={sectorsColumns} title="Sectors" user="sector" />
            }
        </div>
    )
}
