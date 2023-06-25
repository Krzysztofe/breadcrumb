import TablePagination from "@mui/material/TablePagination";
import { useDispatch, useSelector } from "react-redux";
import useDatabaseValues from "../../../hooks/useDatabaseValues";
import { RootState } from "../../../redux/store";
import {
  handleChangeTablePage,
  handleChangeTableRowsPerPage,
} from "../../../redux/storeFeatures/tableBooksSlice";

interface ModelRowsParams {
  from: number;
  to: number;
  count: number;
}

const PaginationInTable = () => {
  const dispatch = useDispatch();
  const { booksToPrint } = useDatabaseValues();
  const { page, rowsPerPage } = useSelector(
    (state: RootState) => state.tableBooks
  );

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    dispatch(handleChangeTablePage(newPage));
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    dispatch(handleChangeTableRowsPerPage(parseInt(event.target.value)));
  };

  const defaultLabelDisplayedRows = ({ from, to, count }: ModelRowsParams) => {
    return `${from}–${to} z ${count !== -1 ? count : `more than ${to}`}`;
  };

  return (
    <TablePagination
      component="div"
      count={booksToPrint?.length ?? 0}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
      labelRowsPerPage={<span>Liczba wpisów na stronie</span>}
      labelDisplayedRows={defaultLabelDisplayedRows}
      rowsPerPageOptions={[5, 10]}
    />
  );
};

export default PaginationInTable;
