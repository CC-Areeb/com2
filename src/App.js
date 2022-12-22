import './App.css';
import { BrowserRouter, Routes, Route, Link, NavLink, } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import AddProduct from './pages/AddProduct';

function App() {
  return (
    <>
      <BrowserRouter>

        <header>
          <nav>
            <div className="mainContainer">
              <div className="sideBar">
                <nav>
                  <ul className='fs-5 mt-4'>
                    <NavLink to="/" className="nav-link py-1"><i className="bi bi-speedometer me-2"></i>Dashboard</NavLink>
                    <NavLink to="product" className="nav-link py-1" ><i className="bi bi-collection me-2"></i>Manage Products</NavLink>
                    <NavLink className="nav-link py-1" ><i className="bi bi-rocket-takeoff me-2"></i>Manage Codes</NavLink>
                    <NavLink className="nav-link py-1"><i className="bi bi-search me-2"></i>Manage Code Search</NavLink>
                    <NavLink className="nav-link py-1"><i className="bi bi-archive me-2"></i>Disable Codes</NavLink>
                    <NavLink className="nav-link py-1"><i className="bi bi-tags me-2"></i>Manage Labels</NavLink>
                    <NavLink className="nav-link py-1"><i className="bi bi-briefcase me-2"></i>Manage Batches</NavLink>
                    <NavLink className="nav-link py-1"><i className="bi bi-people me-2"></i>Manage Users</NavLink>
                    <NavLink className="nav-link py-1"><i className="bi bi-list-ul me-2"></i>Manage Roles</NavLink>
                    <NavLink className="nav-link py-1"><i className="bi bi-diagram-3 me-2"></i>Manage Categories</NavLink>
                    <NavLink className="nav-link py-1"><i className="bi bi-person-vcard me-2"></i>Manage Beekeepers</NavLink>
                    <NavLink className="nav-link py-1"><i className="bi bi-map me-2"></i>Manage Regions</NavLink>
                    <NavLink className="nav-link py-1"><i className="bi bi-envelope-at me-2"></i>Manage Emails</NavLink>
                    <NavLink className="nav-link py-1"><i className="bi bi-envelope-x me-2"></i>Invalid Codes</NavLink>
                    <NavLink className="nav-link py-1"><i className="bi bi-file-earmark me-2"></i>Reports</NavLink>
                    <NavLink className="nav-link py-1"><i className="bi bi-sliders me-2"></i>Manage Site Settings</NavLink>
                    <NavLink className="nav-link py-1" ><i className="bi bi-door-open-fill me-2"></i>Logout</NavLink>
                  </ul>
                </nav>
              </div>

              <div className='ms-4 mainComponents mt-4'>
                <div className="dashboard">
                  <main>
                    <Routes>
                      <Route path='/' element={<Dashboard />} />
                      
                      {/* Product routes */}                      
                      <Route path='product' element={<Products />} />
                      <Route path='product/add' element={<AddProduct />} />

                      
                    </Routes>
                  </main>
                </div>
              </div>

            </div>
          </nav>
        </header>
      </BrowserRouter>
    </>
  );
}

export default App;
