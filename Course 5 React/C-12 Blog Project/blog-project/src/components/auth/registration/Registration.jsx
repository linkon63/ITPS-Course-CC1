import { Link } from "react-router-dom";
import Navbar from "../../shared/Navbar";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
// import firebase from "firebase";
// import { firebaseConfig } from "../firebase/Auth.config";
// firebase.initializeApp(firebaseConfig);

import { getFunctions } from "firebase/functions";
import { app, db } from "../firebase/Auth.config";

export function functions() {
  return getFunctions(app());
}

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { useState } from "react";

export default function Registration() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const onSubmit = async (data) => {
    setLoading(true);
    console.log("Create account data new checking: ", data);

    // 1 : this email is already in database/fireStore or not
    const q = query(collection(db, "users"), where("email", "==", data.email));
    const querySnapshot = await getDocs(q);
    let flag = 0;
    querySnapshot.forEach((doc) => {
      flag = 1;
      console.log(doc.id, " => ", doc.data());
    });
    if (flag === 1) {
      // if exist in db/fireStore send error msg
      alert("you cant create account with this email, email already exist");
    } else {
      //else : create account  using firebase

      const auth = getAuth();
      // The client SDK will parse the code from the link for you.
      await createUserWithEmailAndPassword(auth, data.email, data.password)
        .then(async (result) => {
          console.log("🔥 result", result);
          await signInWithEmailAndPassword(data.email, data.password)
            .then((res) => {
              console.log("firebase account create", res);
              // then : store data in db/fireStore
            })
            .catch((error) => {
              // alert("firebase account create error");
              console.log(error.code);
              console.log(error.message);
            });

          createAccountInFirestore(data);
        })
        .catch((error) => {
          console.log("Error ❌❌❌", error);
          setLoading(false);
        });
    }

    setLoading(false);

  };

  const createAccountInFirestore = async (data) => {
    try {
      var id = "id" + Math.random().toString(16).slice(2);
      setDoc(doc(db, "users", id), data);

      alert("your account is successfully created");
      navigate("/login");
    } catch (error) {
      console.log("error in firestore", error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        {/* <button onClick={getUserData}>Get data</button> */}
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h2 className="text-center text-dark mt-5">
              Create an account in your blog
            </h2>
            <div className="card my-5">
              {loading && (
                <div className="d-flex justify-content-center pt-2">
                  <div className="spinner-border text-center" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              )}
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
                    placeholder="User Name"
                    // defaultValue="test"
                    {...register("userName", { required: true })}
                    // userName : type
                  />
                  {errors.userName && (
                    <span className="text-lowercase text-danger p-2">
                      This field is required Please give userName
                    </span>
                  )}
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    {...register("name", { required: true })}
                  />
                  {errors.name && (
                    <span className="text-lowercase text-danger p-2">
                      This field is required Please give name
                    </span>
                  )}
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className="text-lowercase text-danger p-2">
                      This field is required Please give email
                    </span>
                  )}
                </div>
                <div className="mb-3">
                  <input
                    type="phone"
                    className="form-control"
                    placeholder="Phone"
                    {...register("phone")}
                  />
                  {errors.email && (
                    <span className="text-lowercase text-danger p-2">
                      This field is required Please give phone
                    </span>
                  )}
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="password"
                    // pattern="(?=^.{8,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                    {...register("password", {
                      required: true,
                      minLength: 8,
                      //   pattern:/^((?=.*d)(?=.*W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$,
                    })}
                  />
                  {errors.password && (
                    <span className="text-lowercase text-danger p-2">
                      This field is required Please give password min 8 digit
                      Minimum eight characters, at least one letter and one
                      number:
                    </span>
                  )}
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-success px-5 mb-5 w-100"
                  >
                    Create account
                  </button>
                </div>
                <div
                  id="emailHelp"
                  className="form-text text-center mb-5 text-dark"
                >
                  Not Registered?{" "}
                  <Link to="/login" className="text-dark fw-bold">
                    {" "}
                    If you have account
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// const getUserData = async () => {
//   const docRef = doc(db, "users", "HPaRoQ6YHWyz6vvXEFfp");
//   // const docSnap = await getDoc(docRef);

//   const q = query(
//     collection(db, "users"),
//     where("email", "==", "m.alinkon@gmail.com")
//   );

//   const querySnapshot = await getDocs(q);

//   let flag = 0;
//   querySnapshot.forEach((doc) => {
//     flag = 1;
//     console.log(doc.id, " => ", doc.data());
//   });
//   if (flag === 1) {
//     // send error
//     alert("you cant create account with this email, email already exist");
//   } else {
//     // create account
//   }

//   console.log("Users data from firestore");
// };
// var id = "id" + Math.random().toString(16).slice(2);
// await setDoc(doc(db, "users", id), {
//   userName: data.userName,
//   name: data.name,
//   email: data.email,
//   phone: data.phone,
//   password: data.password,
// });
// alert("Your data stored in firestore");
// console.log("data send to the firestore");

// create account
// try {
//   // Confirm the link is a sign-in with email link.
//   const auth = getAuth();
//   // The client SDK will parse the code from the link for you.
//   console.log("====================================");
//   console.log("🚨🚨🚨🚨");
//   console.log("====================================");
//   await createUserWithEmailAndPassword(auth, data.email, data.password)
//     .then((result) => {
//       signInWithEmailAndPassword(data.email, data.password)
//         .then((res) => {
//           console.log("res", res);
//         })
//         .catch((error) => {
//           console.log(error.code);
//           console.log(error.message);
//         });
//       console.log("send data to the db and create account success", result);
//       alert("your account successfully created", result);
//       // Clear email from storage.
//       //   window.localStorage.removeItem("emailForSignIn");
//       // You can access the new user via result.user
//       // Additional user info profile not available via:
//       // result.additionalUserInfo.profile == null
//       // You can check if the user is new or existing:
//       // result.additionalUserInfo.isNewUser
//     })
//     .catch((error) => {
//       alert("error");
//       console.log("====================================");
//       console.log("Error ❌❌❌", error);
//       console.log("====================================");
//     });
// } catch (error) {
//   console.log("🚨🚨🚨🚨");
//   console.log("error in create account ");
// }
