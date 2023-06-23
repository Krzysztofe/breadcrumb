import { TablePagination } from "@mui/material";

interface Props {
  booksToPrint?: any[]; 
  page: number;
  handleChangePage: (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => void;
  rowsPerPage: number;
  handleChangeRowsPerPage: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

interface ModelRowsParams {
  from: number;
  to: number;
  count: number;
}


const PaginationInTable = (props: Props) => {

  const defaultLabelDisplayedRows = ({ from, to, count }: ModelRowsParams) => {
    return `${from}–${to} z ${count !== -1 ? count : `more than ${to}`}`;
  };

  return (
    <TablePagination
      component="div"
      count={props.booksToPrint?.length ?? 0}
      page={props.page}
      onPageChange={props.handleChangePage}
      rowsPerPage={props.rowsPerPage}
      onRowsPerPageChange={props.handleChangeRowsPerPage}
      labelRowsPerPage={<span>Liczba wpisów na stronie</span>}
      labelDisplayedRows={defaultLabelDisplayedRows}
      rowsPerPageOptions={[5, 10]}
    />
  );
};

export default PaginationInTable;
