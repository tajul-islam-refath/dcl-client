import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../App";
import axios from "axios";

const Navbar = () => {
  const { isAdmin, setIsAdmin, setAdmin, admin } = useContext(AuthContext);
  console.log(admin);

  const logOut = async () => {
    try {
      await axios.get(`https://dcl-mern-app.herokuapp.com/admin/logout`);
      alert("Admin Logout  Success");
      setAdmin({});
      setIsAdmin(false);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          DCL
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/admin">
                Admin
              </Link>
            </li>
            {isAdmin && (
              <>
                <li className="nav-item">
                  <button className="btn btn-warning" onClick={() => logOut()}>
                    LogOut
                  </button>
                </li>
                <li className="nav-item mx-4">{admin.name}</li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
