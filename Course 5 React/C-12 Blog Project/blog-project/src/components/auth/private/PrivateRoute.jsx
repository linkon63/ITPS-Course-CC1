import Login from "../login/Login";

export default function PrivateRoute({ children }) {
  const userEmail = sessionStorage.getItem("email");
  if (userEmail) {
    return children;
  } else {
    return <Login />;
  }
}
