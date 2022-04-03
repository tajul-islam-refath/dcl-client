import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../App";

const Adminlogin = () => {
  const { setIsAdmin, setAdmin } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    const admin = {
      email,
      password,
    };

    // console.log(admin)
    try {
      const { data } = await axios.post(
        `https://dcl-mern-app.herokuapp.com/admin/login`,
        admin
      );
      console.log(data);
      setAdmin(data.admin);
      setIsAdmin(true);
      navigate("/admin");
    } catch (e) {
      console.log(e);
      alert("Password or email dosenot match");
    }
  };

  return (
    <div className="container my-5">
      <div className="col-md-6 offset-md-3">
        <div className="card">
          <div className="card-body">
            <form onSubmit={onSubmit}>
              <div className="form-group my-2">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  onChange={(e) => setEmail(e.target.value)}
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="form-group my-2">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  onChange={(e) => setPassword(e.target.value)}
                  id="exampleInputPassword1"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                LogIn
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adminlogin;
