import { useState, useEffect } from "react";
import axios from "axios";

const Aboutform = () => {
  const [about, setAbout] = useState("");
  const [img, setImage] = useState("");
  const [id, setId] = useState("");
  const [prevImage, setPrevImage] = useState("");
  const [isCreate, setIsCreate] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  const onImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("about", about);
    formdata.append("about-image", img);

    try {
      await axios.post(
        `https://dcl-mern-app.herokuapp.com/about/create`,
        formdata
      );
      setIsCreate(true);
      alert("Success !");
    } catch (e) {
      console.log(e);
    }
  };

  const deletePost = async () => {
    try {
      await axios.delete(`https://dcl-mern-app.herokuapp.com/about/${id}`);
      setIsDelete(true);
      setAbout("");
      setPrevImage("");
      setId("");
      alert("Delete Success !");
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(
          `https://dcl-mern-app.herokuapp.com/about`
        );
        if (data.post) {
          setAbout(data.post.about);
          setPrevImage(data.post.image);
          setId(data.post._id);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getData();

    if (isCreate) {
      setIsCreate(false);
    }

    if (isDelete) {
      setIsDelete(false);
    }
  }, [isCreate, isDelete]);

  return (
    <div className="container py-5">
      <div className="col-md-6  offset-md-3">
        <div className="card">
          <div className="card-body">
            <form onSubmit={onSubmit}>
              <div className="form-group my-2">
                <label htmlFor="exampleInput">Who we are ? </label>
                <textarea
                  className="form-control"
                  id="exampleInput"
                  value={about}
                  name="about"
                  onChange={(e) => setAbout(e.target.value)}
                  rows="8"></textarea>
              </div>
              <div className="custom-file my-2">
                <input
                  type="file"
                  className="custom-file-input"
                  name="about-image"
                  onChange={onImageChange}
                  id="exampleFile"
                />
                <label className="custom-file-label" htmlFor="exampleFile">
                  Image
                </label>
              </div>
              {prevImage && (
                <img
                  src={`https://dcl-mern-app.herokuapp.com${prevImage}`}
                  alt="About"
                  className="w-50 h-50 my-5 d-block"
                />
              )}
              {prevImage ? (
                <>
                  <button
                    type="submit"
                    className="btn btn-danger"
                    onClick={() => deletePost()}>
                    {" "}
                    Delete
                  </button>
                </>
              ) : (
                <button type="submit" className="btn btn-primary">
                  {" "}
                  Submit
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutform;
