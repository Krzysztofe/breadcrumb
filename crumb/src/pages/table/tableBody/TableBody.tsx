import React, { useState, useEffect } from "react";
import useDatabaseValues from "../../../hooks/useDatabaseValues";

import { useLocation, Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { handleChangeRow } from "../../../redux/storeFeatures/tableBooksSlice";

interface ModelBook {
  title: string;
  authorName: string;
  pageCount: string;
  date: string;
}

const TableBody = () => {
  const { booksToPrint } = useDatabaseValues();
   const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isOpenRow } = useSelector((state: RootState) => state.tableBooks);

  const handleClick = (authorName: string) => {
    const authorNameUrl = authorName.replaceAll(" ", "_");
    dispatch(handleChangeRow(authorName === isOpenRow ? "" : authorName));
    // isOpenRow === null? navigate(`/`) : navigate(`/${authorNameUrl}`);
  };


  useEffect(() => {
    isOpenRow === null ? navigate(`/`) : navigate(`/${isOpenRow}`);
  }, [isOpenRow]);

  
//   console.log("cc", isOpenRow);

  return (
    <tbody>
      {booksToPrint?.map(
        ({ title, authorName, pageCount, date }: ModelBook, idx: number) => {
          const isOpen = location.pathname !== "/" ? isOpenRow === authorName : false;

          return (
            <>
              <tr
                key={crypto.randomUUID()}
                onClick={e => handleClick(authorName)}
              >
                <td>{idx + 1}</td>
                <td>{authorName} </td>
                <td>{title}</td>
                <td>{pageCount}</td>
              </tr>
              {isOpen && (
                <tr
                  key={crypto.randomUUID()}
                    onClick={e => handleClick(authorName)}
                >
                  <td></td>
                  <td>Data wydania: {date}</td>
                </tr>
              )}
            </>
          );
        }
      )}
    </tbody>
  );
};

export default TableBody;
