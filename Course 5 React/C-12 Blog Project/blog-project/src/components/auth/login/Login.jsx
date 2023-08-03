import { Link } from "react-router-dom";
import Navbar from "../../shared/Navbar";
import { useForm } from "react-hook-form";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithEmailLink,
} from "firebase/auth";
export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // react hook form / formik
  // state
  // inside function state update

  // validation easy here

  const onSubmit = (data) => {
    console.log("Create account data new checking: ", data);

    try {
      console.log("🔥🔥🔥🔥");
      const auth = getAuth();
      console.log("====================================");
      console.log("⭐⭐⭐⭐", auth);
      console.log("====================================");
      // if (isSignInWithEmailLink(auth, window.location.href)) {
      console.log("❌❌❌");
      // The client SDK will parse the code from the link for you.
      signInWithEmailAndPassword(auth, data.userName, data.password)
        .then((result) => {
          console.log("result", result);
          alert("you are sign in");
          // Clear email from storage.
          // window.localStorage.removeItem("emailForSignIn");
          // You can access the new user via result.user
          // Additional user info profile not available via:
          // result.additionalUserInfo.profile == null
          // You can check if the user is new or existing:
          // result.additionalUserInfo.isNewUser
        })
        .catch((error) => {
          alert("not sign in");
          console.log("error", error);
          // Some error occurred, you can inspect the code: error.code
          // Common errors could be invalid email and invalid or expired OTPs.
        });
      // }
    } catch (error) {
      console.log("====================================");
      console.log("🚨🚨", error);
      console.log("====================================");
    }
  };

  return (
    <>
      <Navbar />
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
