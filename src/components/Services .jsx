import { useEffect, useState } from "react";
import axios from "axios";

const Services = () => {
  const [services, setServices] = useState([]);

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
  }, []);
  console.log(services);
  return (
    <div className="container">
      <h1 className="text-center my-5" style={{ color: "#01cfbe" }}>
        Services we provide
      </h1>
      <div className="row">
        {services.length > 0 ? (
          <>
            {services.map((s) => (
              <div className="col-md-4 text-center">
                <img
                  src={`https://dcl-mern-app.herokuapp.com${s.image}`}
                  alt="service"
                  className="w-50"
                />
                <p>{s.title}</p>
              </div>
            ))}
          </>
        ) : (
          <h4 className="text-center">There is no services</h4>
        )}
      </div>
    </div>
  );
};

export default Services;
