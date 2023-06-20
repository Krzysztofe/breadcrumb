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

  const yy = location.pathname

const handleClick = () => {
  navigate(`${yy}/okłdaka`);
};



  console.log("", yy);

  return (
    <>
      <><Link to ={"/"}>Home</Link> {crumbs} </>

      {bookDetails?.map(({ title, authorName }) => {
        return (
          <div key={crypto.randomUUID()} className="">
            {title}, imie: {authorName}
            <div onClick = {handleClick}>okładka</div>
          </div>
        );
      })}
    </>
  );
};

export default AuthorDetails;
