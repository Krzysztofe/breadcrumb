import TablePagination from "@mui/material/TablePagination";
import { useDispatch, useSelector } from "react-redux";
import useDatabaseValues from "../../../hooks/useDatabaseValues";
import { RootState } from "../../../redux/store";
import {
  handleChangeTablePage,
  handleChangeTableRowsPerPage,
} from "../../../redux/storeFeatures/tableBooksSlice";

import Typography from "@mui/material/Typography";

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
    return (
      <Typography>
        {from}–{to} z {count !== -1 ? count : to}
      </Typography>
    );
  };

  return (
    <TablePagination
      component="div"
      count={booksToPrint?.length ?? 0}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
      labelRowsPerPage={<Typography>Liczba wpisów na stronie</Typography>}
      labelDisplayedRows={defaultLabelDisplayedRows}
      rowsPerPageOptions={[5, 10]}
      sx={{
        "& .MuiSelect-select": {
          paddingLeft: "8px",
          paddingRight: "24px",
          border: "1px solid #ccc",
          backgroundColor: "#fff",
          fontSize: "1.4rem",
          display: "flex",
          alignItems: "center",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          "&:hover": {
            borderColor: "primary.main",
          },
        },
      }}
    />
  );
};

export default PaginationInTable;
