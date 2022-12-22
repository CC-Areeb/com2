import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Category() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className="fw-light">Manage Categories</h1>
                        <h2 className='fw-light'>View Categories</h2>
                        <hr />
                        <table className="table table-bordered borderColor mt-4 text-center">
                            <thead>
                                <tr>
                                    <th scope="col">Title</th>
                                    <th scope="col">Number of Products</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Comvita Kid</td>
                                    <td>1</td>
                                    <td>26/Jul/2022</td>
                                    <td>
                                        <NavLink to='edit' className="text-decoration-none">
                                            <button className='btn btn-outline-success mx-1'><i className="bi bi-pencil-square"></i>edit</button>
                                        </NavLink>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='text-end mt-4'>
                    <NavLink to='add' className="text-decoration-none">
                        <button className='btn btn-large fs-4 btn-outline-dark addProduct'>
                            Add Categories
                        </button>
                    </NavLink>
                </div>
            </div>
        </>
    )
}
