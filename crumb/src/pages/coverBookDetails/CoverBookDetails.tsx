import React from "react";
import { useLocation, Link, useNavigate, useParams } from "react-router-dom";
import useDatabaseValues from "../../hooks/useDatabaseValues";

const CoverBookDetails = () => {
  const { authorURL } = useParams();
  const { bookDetails } = useDatabaseValues(authorURL);

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

console.log('xx',location.pathname)

  return (
    <div>
      <Link to={"/"}>Home</Link> <div>{crumbs}</div>
      <img src={bookDetails?.[0]?.bookCover} alt="Okładka książki" />
      {bookDetails?.[0]?.publisher ? (
        <div>Wydawca: {bookDetails?.[0]?.publisher}</div>
      ) : (
        <div>Brak informacji o wydawcy</div>
      )}
    </div>
  );
};

export default CoverBookDetails;
