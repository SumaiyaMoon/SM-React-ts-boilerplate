import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fbAuth } from "../../config/firebase/firebase-methods";
export default function Protected({ Screen }: any) {
  const [loader, setLoader] = useState(true);
  const navigate = useNavigate();
  let checkAuth = () => {
    //Checking Authentication
    setLoader(true);
    fbAuth()
      .then((res) => {
        setLoader(false);
        console.log(res);
      })
      .catch((err) => {
        setLoader(false);
        navigate("/login");
        console.error(err);
      });
  };
  useEffect(() => {
    checkAuth();
  }, []);

  return loader ? (
    <>
      <h1>Loading...</h1>
    </>
  ) : (
    <Screen />
  );
}
