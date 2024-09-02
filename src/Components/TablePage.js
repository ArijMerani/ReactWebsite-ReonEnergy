import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import {useTable} from "react-table";
import {utils,writeFile} from 'xlsx';

const TablePage = () =>{
    const {data} = useSelector((state) =>state.data)
    const columns = useMemo(
        () =>[
            {Header : 'Name' ,accessor : 'name'},
            {Header : 'Date' ,accessor : 'date'},
            {Header : 'Avg' ,accessor : 'avg'},
            {Header : 'Total' ,accessor : 'total'}
        ], []
    );

    // const tableInstance = useTable({columns,data});

    const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = useTable({columns,data});

    const handleDownload = () =>{
        const worksheet = utils.json_to_sheet(data);
        const dataworkbook = utils.book_new();
        utils.book_append_sheet(dataworkbook,worksheet,'Data');
        writeFile(dataworkbook, 'data.xlsx');
    };

    return(
        <div>
            <h1>Table Page</h1>
            <table {...getTableProps()} border="1">
                <thead>
                    {headerGroups.map((headerGroup)=>(
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map((column)=>(
                                    <th {...column.getHeaderProps()}> {column.render('Header')}</th>
                                ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        rows.map((row) =>{
                            prepareRow(row);
                            return(
                                <tr {...row.getRowProps()}>
                                    {row.cells.map((cell)=>(
                                        <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    ))}

                                </tr>
                            );
                        
                        })}
                </tbody>
            </table>
            <button onClick={handleDownload}>Download Data</button>
            
        </div>
    );

};

export default TablePage;

