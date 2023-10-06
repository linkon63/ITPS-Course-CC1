import { doc, setDoc } from "firebase/firestore";
import { useForm } from "react-hook-form";
import { db } from "../auth/firebase/Auth.config";

export default function Status() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log("status", data);
    try {
      var id = "id" + Math.random().toString(16).slice(2);
      const email = sessionStorage.getItem("email") || 'user1@gmail.com';
      setDoc(doc(db, "status", id), { ...data, email: email });
      // after submit the form -> form value should empty
      console.log("your status is successfully created", {
        ...data,
        email: email,
      });
    } catch (error) {
      console.log("error in firestore", error);
    }
  };
  return (
    <div className="container">
      <p className="text-center">Whats on your mind</p>
      <div className="d-flex justify-content-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("status")} />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
}
