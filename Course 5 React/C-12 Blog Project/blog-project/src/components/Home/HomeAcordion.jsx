import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HomeAcordionCard from "./HomeAcordionCard";
import Loader from "../shared/Loader";

export default function HomeAcordion() {
  // for blogs state manage
  const [blogs, setBlogs] = useState([]);
  // get data from backend
  useEffect(() => {
    fetch("http://localhost:3000/blogs")
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        setBlogs(data);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="w-100 row justify-content-center mt-5">
      <div className="d-flex w-75">
        <div
          className="accordion accordion-flush w-100"
          id="accordionFlushExample"
        >
          {blogs && blogs.length > 0 ? (
            blogs.map((singleBlog) => (
              <HomeAcordionCard singleBlog={singleBlog} key={singleBlog} />
            ))
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </div>
  );
}
