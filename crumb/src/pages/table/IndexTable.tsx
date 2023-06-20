import useDatabaseValues from "../../hooks/useDatabaseValues";
import TableBooks from "./tableBooks/TableBooks";
import TableHead from "./tableHead/TableHead";
import TableBody from "./tableBody/TableBody";
import { useLocation, Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

const IndexTable = () => {
  const { authorURL } = useParams();
  const { bookDetails } = useDatabaseValues(authorURL);

  const { isOpenRow } = useSelector((state: RootState) => state.tableBooks);

  const location = useLocation();

  let currentLink = "";

  const crumbs = location.pathname
    .split("/")
    .filter(crumb => crumb !== "")
    .map(crumb => {
      currentLink += `/${crumb}`;
      return (
        <div key={crypto.randomUUID()} className="">
          <Link to={currentLink}>{crumb}</Link>
        </div>
      );
    });

console.log("xx", location.pathname);



  return (
    <main className="">
      <Link to={"/"}>Home</Link> {isOpenRow && <div> {crumbs} </div>}
      <TableBooks>
        <TableHead />
        <TableBody />
      </TableBooks>
    </main>
  );
};

export default IndexTable;
