import { getAuth, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [userLogin, setUserLogin] = useState(false);

  useEffect(() => {
    const userEmail = sessionStorage.getItem("email");
    console.log("user session storage mail", userEmail);
    userEmail && setUserLogin(true);
  }, [userLogin]);

  const logout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        alert("Sign-out successful.");
        sessionStorage.removeItem("email");
        window.location.reload();
      })
      .catch((error) => {
        // An error happened.
        console.error(error);
      });
  };
  return (
    <nav
      className="navbar navbar-expand-lg bg-dark border-bottom border-bottom-dark "
      data-bs-theme="dark"
    >
      <div className="container-fluid ">
        <a className="navbar-brand" href="#">
          <h1>
            <span className="badge bg-secondary">Your blogs</span>
          </h1>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blogs">
                Blogs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item text-right">
              {userLogin ? (
                <Link className="nav-link" onClick={logout}>
                  Logout
                </Link>
              ) : (
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
