import { useEffect, useState } from "react";
import axios from "axios";

const AboutSection = () => {
  const [post, setPost] = useState({});

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`/about`);
        if (data.post) {
          setPost(data.post);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  return (
    <div className="container">
      <h1 className="text-center my-5" style={{ color: "#01cfbe" }}>
        About us
      </h1>
      <div className="row">
        {post.length != 0 ? (
          <>
            <div className="col-md-6 px-5">
              <img src={`${post.image}`} className="w-100" alt="" />
            </div>
            <div className="col-md-6">
              <h1>Who we are ?</h1>
              <p>{post.about}</p>
            </div>
          </>
        ) : (
          <h1 className="text-center">There is no content</h1>
        )}
      </div>
    </div>
  );
};

export default AboutSection;
