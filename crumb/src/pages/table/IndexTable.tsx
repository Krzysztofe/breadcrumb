
import useDatabaseValues from '../../hooks/useDatabaseValues';
import { useBooksQuery } from '../../services/ApiSlice';

const IndexTable = () => {

const { booksToPrint } = useDatabaseValues();


    return (
        <div className='oo'>
            tabela
        </div>
    );
};

export default IndexTable;