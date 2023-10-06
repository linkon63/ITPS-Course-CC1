import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../shared/Navbar";
import { useForm } from "react-hook-form";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithEmailLink,
} from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/Auth.config";
import { useState } from "react";
export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      console.log("Create account data new checking: ", data);
      // 1 : this email is already in database/fireStore or not
      const q = query(
        collection(db, "users"),
        where("email", "==", data.userName)
      );
      const querySnapshot = await getDocs(q);
      let flag = 0;
      querySnapshot.forEach((doc) => {
        flag = 1;
        console.log(doc.id, " => ", doc.data());
      });

      if (flag === 1) {
        // if exist in db/fireStore then login auth in firebase
        try {
          console.log("🔥🔥🔥🔥");
          const auth = getAuth();
          signInWithEmailAndPassword(auth, data.userName, data.password)
            .then((result) => {
              console.log("result", result);
              // alert("you are sign in");
              sessionStorage.setItem("email", data.userName);
              setLoading(false);
              navigate("/home");
            })
            .catch((error) => {
              alert("not sign in");
              console.log("error", error);
            });
          // }
        } catch (error) {
          console.error("error", error);
          setLoading(false);
        }
      } else {
        navigate("/registration");
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      {loading && (
        <div className="d-flex justify-content-center pt-2">
          <div className="spinner-border text-center" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h2 className="text-center text-dark mt-5">Login in your blog</h2>
            <div className="card my-5">
              <form
                className="card-body cardbody-color p-lg-5"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="text-center">
                  <img
                    src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png"
                    className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                    width="200px"
                    alt="profile"
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="UserName"
                    aria-describedby="emailHelp"
                    placeholder="User Name"
                    {...register("userName", { required: true })}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="password"
                    {...register("password", { required: true })}
                  />
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-success px-5 mb-5 w-100"
                  >
                    Login
                  </button>
                </div>
                <div
                  id="emailHelp"
                  className="form-text text-center mb-5 text-dark"
                >
                  Not Registered?{" "}
                  <Link to="/registration" className="text-dark fw-bold">
                    {" "}
                    Create an Account
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
