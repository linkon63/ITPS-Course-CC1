import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
function App() {
  const [users, setUsers] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    fetch("http://localhost:8080/create-user", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log("res", data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetch("http://localhost:8080/users")
      .then((res) => res.json())
      .then((data) => {
        console.log("users", data);
        setTimeout(() => {
          setUsers(data);
        }, 2000);
      })
      .catch((err) => console.error("", err));
  }, []);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="border bg-info">
        <input {...register("name")} className="form m-2" placeholder="name" />{" "}
        <br />
        <input
          {...register("password")}
          className="form m-2"
          placeholder="password"
        />{" "}
        <br />
        <input type="submit" className="btn btn-success m-2" />
      </form>

      {users.length > 0 ? (
        <div>
          {users.map((user, i) => (
            <p key={i}>{user.name}</p>
          ))}
        </div>
      ) : (
        <div>
          <p>There is no users data </p>
        </div>
      )}
    </>
  );
}

export default App;
