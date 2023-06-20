
import useDatabaseValues from '../../hooks/useDatabaseValues';
import TableBooks from './tableBooks/TableBooks';
import TableHead from './tableHead/TableHead';
import TableBody from './tableBody/TableBody';

const IndexTable = () => {

const { booksToPrint } = useDatabaseValues();


    return (
      <main className="">
        <TableBooks>
          <TableHead />
          <TableBody />
        </TableBooks>
      </main>
    );
};

export default IndexTable;