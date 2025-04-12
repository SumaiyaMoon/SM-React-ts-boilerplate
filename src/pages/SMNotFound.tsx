import { Typography } from "@mui/material";
import SMButton from "../components/SMComponents/SMButton";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function NotFound() {
  const navigate = useNavigate();
  const goback = () => {
    window.history.back();
  };
  return (
    <div className="bg_img_home d-flex align-items-center justify-content-center">
      <div className="container row d-flex align-items-center justify-content-center">
        <div className="col-6 text-center text-white">
          <Typography className="py-2" variant="h2">
            404! Page Not Found.
          </Typography>
          <Typography className="py-2" variant="h4">
            The page you are trying to visit might not exist.
          </Typography>
          <div className="d-flex align-items-center justify-content-center gap-2 m-2 ">
            <SMButton
              onClick={() => {
                navigate("/");
              }}
              label="Back to Home"
              className="text-white rounded"
            />
            <SMButton
              onClick={() => {
                goback();
              }}
              label="Go back to previous Page"
              className="text-white rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
