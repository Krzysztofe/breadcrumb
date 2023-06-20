
import useDatabaseValues from '../../hooks/useDatabaseValues';
import { useBooksQuery } from '../../services/ApiSlice';

const IndexTable = () => {

const { data } = useBooksQuery(undefined)
const { booksToPrint } = useDatabaseValues();

// console.log('',data.items.map((item:any) => {
// return item.volumeInfo
// }))
    return (
        <div>
            tabela
        </div>
    );
};

export default IndexTable;