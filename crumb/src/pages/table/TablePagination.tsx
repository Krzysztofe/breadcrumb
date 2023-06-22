import { TablePagination } from "@mui/material";

const PaginationInTable = (props: any) => {
  return (
    <TablePagination
      component="div"
      count={props.booksToPrint?.length ?? 0}
      page={props.page}
      onPageChange={props.handleChangePage}
      rowsPerPage={props.rowsPerPage}
      onRowsPerPageChange={props.handleChangeRowsPerPage}
      labelRowsPerPage={<span>Liczba wpisów na strone</span>}
      labelDisplayedRows={function defaultLabelDisplayedRows({
        from,
        to,
        count,
      }) {
        return `${from}–${to} z ${count !== -1 ? count : `more than ${to}`}`;
      }}
      rowsPerPageOptions={[5, 10]}
    />
  );
};

export default PaginationInTable;
