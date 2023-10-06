import { useEffect, useState } from "react";
import Navbar from "../shared/Navbar";
import HomeAcordion from "./HomeAcordion";
import HomeCarousel from "./HomeCarousel";
import Status from "./Status";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../auth/firebase/Auth.config";

export default function Home() {
  const [status, setStatus] = useState([{}]);

  useEffect(() => {
    fetchStatus();
  }, []);

  const fetchStatus = async () => {
    // 1 : this email has status
    const email = sessionStorage.getItem("email");
    const q = query(collection(db, "status"), where("email", "==", email));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      setStatus([...status, doc.data()]);
    });
    console.log("All status 1", status);
  };
  console.log("All status 2", status);

  return (
    <>
      <Navbar />
      <Status />

      {status.length > 0 && (
        <div>
          {status.map((st) => (
            <div key={st}>
              <p>{st.status}</p>
            </div>
          ))}
        </div>
      )}

      {/* <HomeCarousel /> */}
      {/* <HomeAcordion /> */}
    </>
  );
}
