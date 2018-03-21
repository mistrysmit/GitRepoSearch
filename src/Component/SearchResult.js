import React, { Component } from 'react';


const SearchResult = ({ result }) =>
    <div className="container-fluid">
        <table className="table table-hover">
            <thead>
                <tr>
                    {
                        (result && result.length > 0)
                            ? Object.keys(result[0]).map((item,i) => <th key={i}>{item}</th>) : null
                    }
                </tr>
            </thead>
            <tbody>
                {
                    (result && result.length > 0)
                        ? (result).map(row => {
                            return (
                                <tr key={row.id}>
                                    {
                                        Object.values(row).map((col,i) => {
                                            return (
                                                <td key={i}>
                                                    {
                                                        ((typeof col) === 'object') ? JSON.stringify(col) : col
                                                    }
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                            )
                        })
                        : <tr><td>'No Data Found'</td></tr>
                }
            </tbody>
        </table>
    </div>


export default SearchResult;
