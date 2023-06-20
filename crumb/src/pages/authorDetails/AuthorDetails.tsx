import React from "react";
import useDatabaseValues from "../../hooks/useDatabaseValues";
import { useLocation, Link, useNavigate, useParams } from "react-router-dom";

const AuthorDetails = () => {
  const { authorURL } = useParams();
  const { bookDetails } = useDatabaseValues(authorURL);

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

  const yy = location.pathname;

  const handleClick = () => {
    navigate(`${yy}/okladaka`);
  };

  return (
    <>
      <Link to={"/"}>Home</Link> {crumbs}
      <h2>Książka pod tytułem "{bookDetails?.[0]?.title}"</h2>
      {bookDetails?.[0]?.description ? (
        <p>{bookDetails?.[0]?.description}</p>
      ) : (
        <p>Brak opisu</p>
      )}
      <button onClick={handleClick}> Zobacz okładkę</button>
    </>
  );
};

export default AuthorDetails;
