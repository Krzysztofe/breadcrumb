import React from "react";
import useDatabaseValues from "../../../hooks/useDatabaseValues";

import { useLocation, Link, useNavigate, useParams } from "react-router-dom";

interface ModelBook {
  title: string;
  authorName: string;
  date: string;
}

const TableBody = () => {
  const { booksToPrint } = useDatabaseValues();
  const navigate = useNavigate();
  const location = useLocation();
  //   console.log("rr", booksToPrint);

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



  const handleClick = (author: string) => {
    const authorInUrl = author.replaceAll(" ", "_");
  
    navigate(`/${String(authorInUrl)}`);
  };

  return (
    <tbody>
      {booksToPrint?.map(({ title, authorName, date }: ModelBook, idx: number) => {
        return (
          <tr key={title}>
            <td>{idx + 1}</td>
            <td onClick={e => handleClick(authorName)}>{authorName} </td>
            <td>{title}</td>
            <td>{date}</td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
