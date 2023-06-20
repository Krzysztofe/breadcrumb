import React from 'react';

const TableHead = () => {
    return (
        <thead>
            <tr>
                {["Nr", "Autor", "Tytuł", "Data publikacji"].map((header) => {
                return <th key = {header}>{header}</th>
                })}
            </tr>
        </thead>
    );
};

export default TableHead;