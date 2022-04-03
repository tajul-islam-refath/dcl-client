import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Addservice = () => {
  const [img, setImage] = useState("");
  const [title, setTitle] = useState("");

  const navigate = useNavigate();

  const onImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("title", title);
    formdata.append("service-image", img);

    try {
      await axios.post(`/service/add-service`, formdata);
      alert("Success !");
      navigate("/admin/service-list");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="container py-5">
      <div className="col-md-6  offset-md-3">
        <div className="card">
          <div className="card-body">
            <form onSubmit={onSubmit}>
              <div className="form-group my-2">
                <label htmlFor="exampleInput">About Services</label>
                <textarea
                  className="form-control"
                  id="exampleInput"
                  rows="3"
                  onChange={(e) => setTitle(e.target.value)}></textarea>
              </div>
              <div className="custom-file my-2">
                <input
                  type="file"
                  className="custom-file-input"
                  id="exampleFile"
                  onChange={onImageChange}
                />
                <label className="custom-file-label" htmlFor="exampleFile">
                  Service Image
                </label>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addservice;
