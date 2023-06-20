import React from "react";
import useDatabaseValues from "../../../hooks/useDatabaseValues";

interface ModelBook {
  title: string;
  author: string;
  date: string;
}

const TableBody = () => {
  const { booksToPrint } = useDatabaseValues();

  console.log("rr", booksToPrint);

  return (
    <tbody>
      {booksToPrint?.map(({ title, author, date }: ModelBook, idx: number) => {
        return (
          <tr key={title}>
            <td>{idx + 1}</td>
            <td>{author}</td>
            <td>{title}</td>
            <td>{date}</td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
