import { ReactNode } from "react";

export interface Props {
  children: ReactNode;
}

const TableBooks = (props:Props) => {
 return (
   <table className="wrapper">{props.children}</table>
 );
};

export default TableBooks;
