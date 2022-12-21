import React from 'react'
import { NavLink } from 'react-router-dom'
import Dashboard from './Dashboard'
import Products from './Products'

export default function Sidebar() {
    return (
        <>
            <div className="mainContainer">
                <div className="sideBar">
                    <nav>
                        <NavLink className="navbar-brand fs-1 ms-2 mainBrand" href="">Comvita - 2.0</NavLink>
                        <ul className='fs-5 mt-4'>
                            <NavLink className="nav-link py-1"><i className="bi bi-speedometer me-2"></i>Dashboard</NavLink>
                            <NavLink className="nav-link py-1" ><i class="bi bi-collection me-2"></i>Manage Products</NavLink>
                            <NavLink className="nav-link py-1" ><i class="bi bi-rocket-takeoff me-2"></i>Manage Codes</NavLink>
                            <NavLink className="nav-link py-1"><i class="bi bi-search me-2"></i>Manage Code Search</NavLink>
                            <NavLink className="nav-link py-1"><i class="bi bi-archive me-2"></i>Disable Codes</NavLink>
                            <NavLink className="nav-link py-1"><i class="bi bi-tags me-2"></i>Manage Labels</NavLink>
                            <NavLink className="nav-link py-1"><i class="bi bi-briefcase me-2"></i>Manage Batches</NavLink>
                            <NavLink className="nav-link py-1"><i class="bi bi-people me-2"></i>Manage Users</NavLink>
                            <NavLink className="nav-link py-1"><i class="bi bi-list-ul me-2"></i>Manage Roles</NavLink>
                            <NavLink className="nav-link py-1"><i class="bi bi-diagram-3 me-2"></i>Manage Categories</NavLink>
                            <NavLink className="nav-link py-1"><i class="bi bi-person-vcard me-2"></i>Manage Beekeepers</NavLink>
                            <NavLink className="nav-link py-1"><i class="bi bi-map me-2"></i>Manage Regions</NavLink>
                            <NavLink className="nav-link py-1"><i class="bi bi-envelope-at me-2"></i>Manage Emails</NavLink>
                            <NavLink className="nav-link py-1"><i class="bi bi-envelope-x me-2"></i>Invalid Codes</NavLink>
                            <NavLink className="nav-link py-1"><i class="bi bi-file-earmark me-2"></i>Reports</NavLink>
                            <NavLink className="nav-link py-1"><i class="bi bi-sliders me-2"></i>Manage Site Settings</NavLink>
                            <NavLink className="nav-link py-1" ><i class="bi bi-door-open-fill me-2"></i>Logout</NavLink>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}