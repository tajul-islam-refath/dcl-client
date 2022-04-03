import { Outlet, NavLink } from "react-router-dom"

const Dashbord = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-2">
                    <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{ width: "280px", height: "100vh" }}>
                        <hr />
                        <ul className="nav nav-pills flex-column mb-auto">
                            <li>
                                <NavLink
                                    to="/admin/about"
                                    className={({ isActive }) => (isActive ? 'active nav-link text-white' : 'nav-link text-white')}
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/admin/service-list" className="nav-link text-white">
                                    Service List
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/admin/add-service" className="nav-link text-white">
                                    Add New Service
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/admin/add-admin" className="nav-link text-white">
                                    Add Admin
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-9">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Dashbord;
