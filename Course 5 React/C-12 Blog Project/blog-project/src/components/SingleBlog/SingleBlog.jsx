import { useEffect, useState } from "react";
import Navbar from "../shared/Navbar";
import { Routes, Route, useParams } from "react-router-dom";
import Loader from "../shared/Loader";

export default function SingleBlog() {
  let { id } = useParams();
  const [blog, setBlog] = useState({});

  useEffect(() => {
    console.log("Get params and  get data from api");
    console.log("userId", id);

    fetch(`http://localhost:3000/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Data", data);
        setBlog(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Navbar />
      {blog.id ? (
        <div className="card text-center">
          <div className="card-header">{blog.author}</div>
          <div className="card-body">
            <h5 className="card-title">{blog.title}</h5>
            <p className="card-text">{blog.content}</p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
          <div className="card-footer text-body-secondary">2 days ago</div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}

// author
// :
// "Daniel Anderson"
// content
// :
// "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod nibh a mauris interdum, eu scelerisque ipsum iaculis. Sed efficitur enim quis turpis commodo, nec efficitur mauris maximus. Nullam vel mauris magna. Mauris dapibus eleifend velit, eu lacinia sapien cursus ut. Sed id purus vitae ipsum aliquam facilisis."
// date
// :
// "2023-06-05"
// id
// :
// 5
// tags
// :
// (3) ['time management', 'productivity', 'self-improvement']
// title
// :
// "Exploring the World of Artificial Intelligence"
