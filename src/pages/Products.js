import React from 'react';
import { NavLink } from 'react-router-dom';
import images_1 from '../images/1.jpg';


export default function Products() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className="fw-light">Manage Products</h1>
                        <h2 className='fw-light'>View Products</h2>
                        <hr />
                        <div className="table-responsive">
                            <table className="table table-bordered borderColor mt-4 text-center">
                                <thead>
                                    <tr>
                                        <th scope="col">Image</th>
                                        <th scope="col">Title</th>
                                        <th scope="col">Category</th>
                                        <th scope="col">SKU</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <img src={images_1} className='table_imgs' alt="first_image" />
                                        </td>
                                        <td>Item 1</td>
                                        <td>Category 1</td>
                                        <td>SKU 1</td>
                                        <td>
                                            <NavLink to='edit' className="text-decoration-none">
                                                <button className='btn btn-outline-success mx-1'><i className="bi bi-pencil-square"></i>edit</button>
                                            </NavLink>
                                            <NavLink to='clip' className="text-decoration-none">
                                                <button className='btn btn-outline-warning mx-1'><i className="bi bi-paperclip"></i>clip</button>
                                            </NavLink>
                                            <NavLink to='archive' className="text-decoration-none">
                                                <button className='btn btn-outline-danger mx-1'><i className="bi bi-trash-fill"></i>archive</button>
                                            </NavLink>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className='text-end mt-4'>
                    <NavLink to='add' className="text-decoration-none">
                        <button className='btn btn-large fs-4 btn-outline-dark addProduct'>
                            Add Products
                        </button>
                    </NavLink>
                </div>
            </div>
        </>
    )
}
