import { useEffect, useState } from "react";
import axios from "axios";

const Servicelist = () => {
  const [services, setServices] = useState([]);
  const [isDelete, setIsDelete] = useState(false);

  const deleteService = async (id) => {
    try {
      await axios.delete(`https://dcl-mern-app.herokuapp.com/service/${id}`);
      setIsDelete(true);
      alert("Delete Success !");
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(
          `https://dcl-mern-app.herokuapp.com/service`
        );
        if (data.services) {
          setServices(data.services);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getData();

    if (isDelete) {
      setIsDelete(false);
    }
  }, [isDelete]);
  console.log(services);

  return (
    <div className="container pt-5">
      <div className="col-md-8 offset-md-3">
        <div class="card">
          <div class="card-body">
            <table class="table table-dark">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Title</th>
                  <th scope="col">Image</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {services.map((s, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{s.title}</td>
                    <td>
                      <img
                        src={`https://dcl-mern-app.herokuapp.com${s.image}`}
                        className="w-25 h-25 d-inline"
                        alt="Service"
                      />
                    </td>
                    <td>
                      <button
                        type="button"
                        onClick={() => deleteService(s._id)}
                        className="btn btn-danger">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicelist;
