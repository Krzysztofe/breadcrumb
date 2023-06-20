import React from 'react';
import { useColumnsQuery } from '../../services/ApiSlice';

const IndexTable = () => {
const { data, error } = useColumnsQuery(undefined);


console.log('',data)
    return (
        <div>
            tabela
        </div>
    );
};

export default IndexTable;