import useDatabaseValues from "../../hooks/useDatabaseValues";
import TableBooks from "./tableBooks/TableBooks";
import TableHead from "./tableHead/TableHead";
import TableBody from "./tableBody/TableBody";
import { useLocation, Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const IndexTable = () => {
  const { authorURL } = useParams();
  const { booksToPrint } = useDatabaseValues();
  const location = useLocation();
  const navigate = useNavigate();

  let curLink = "";

  const crumbs = location.pathname
    .split("/")
    .filter(crumb => crumb !== "")
    .map(crumb => {
      curLink += `/${crumb}`;
      return (
        <div key={crypto.randomUUID()} className="">
          <Link to={curLink}>{crumb}</Link>
        </div>
      );
    });


 const yy = location.pathname.split("/");
 console.log("", yy);

  //   useEffect(() => {
  //     navigate(`/${author}`);
  //   }, [author]);

  console.log("", location);

  return (
    <main className="">
      <div>{crumbs}</div>
      <TableBooks>
        <TableHead />
        <TableBody />
      </TableBooks>
    </main>
  );
};

export default IndexTable;
