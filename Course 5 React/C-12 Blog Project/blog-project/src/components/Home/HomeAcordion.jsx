import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
              <div className="accordion-item" key={singleBlog.id}>
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed w-100"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    {singleBlog.title} - {singleBlog.id}
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">{singleBlog.content}</div>
                  <div className="d-flex justify-content-center">
                    {singleBlog.tags &&
                      singleBlog.tags.map((sbt) => (
                        <p key={sbt} className="border p-2">
                          # {sbt}
                        </p>
                      ))}
                  </div>
                  <div className="text-center p-2">
                    <Link
                      to={`/blogs/${singleBlog.id}`}
                      className="btn btn-primary text-center"
                    >
                      Read <span className="badge text-bg-secondary">More</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="d-flex justify-content-center">
              <div className="spinner-border text-center" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
          {/* <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed w-100"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                first item's accordion body.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                second item's accordion body. Let's imagine this being filled
                with some actual content.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                third item's accordion body. Nothing more exciting happening
                here in terms of content, but just filling up the space to make
                it look, at least at first glance, a bit more representative of
                how this would look in a real-world application.
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
