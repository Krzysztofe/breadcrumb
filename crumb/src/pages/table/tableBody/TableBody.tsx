import React, { useState, useEffect } from "react";
import useDatabaseValues from "../../../hooks/useDatabaseValues";

import { useLocation, Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { handleChangeRow } from "../../../redux/storeFeatures/tableBooksSlice";

interface ModelBook {
  title: string;
  authorName: string;
}

const TableBody = () => {
  const { booksToPrint } = useDatabaseValues();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isOpenRow } = useSelector((state: RootState) => state.tableBooks);

  const handleClick = (authorName: string) => {
    const authorInUrl = authorName.replaceAll(" ", "_");
    navigate(`/${String(authorInUrl)}`);
  };

  return (
    <tbody>
      {booksToPrint?.map(({ title, authorName }: ModelBook, idx: number) => {
        return (
          <>
            <tr
              key={crypto.randomUUID()}
              onClick={e => handleClick(authorName)}
            >
              <td>{idx + 1}</td>
              <td>{authorName} </td>
              <td>{title}</td>
            </tr>
          </>
        );
      })}
    </tbody>
  );
};

export default TableBody;
