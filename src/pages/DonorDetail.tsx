import { Box, Typography, Paper } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fbGet, FbGetByID } from "../config/firebase/firebase-methods";

export default function DonorDetail() {
  const [donorDetail, setDonorDetail] = useState<any>({});
  const { id } = useParams();

  const getDonor = () => {
    FbGetByID("users", `${id}`)
      .then((res: any) => {
        console.log(res);

        setDonorDetail({ ...res });
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  };

  useEffect(() => {
    getDonor();
  }, []);

  return (
    <>
      <Box className="container">
        <Typography variant="h3" className="text-center p-2 m-2">
          Donor Detail
        </Typography>
        <Paper className="m-5 p-5">
          <div key={id}>
            <h1>Donor Name: {donorDetail.userName}</h1>
            <p>Donor Email: {donorDetail.email}</p>
            <p>Donor Id: {donorDetail.id}</p>
            <p>Donor Contact: {donorDetail.contact}</p>
            <p>
              Donor Status:{" "}
              {donorDetail === true
                ? "Active"
                : donorDetail === false
                ? "Not Active"
                : "N/A"}
            </p>
          </div>
        </Paper>
      </Box>
    </>
  );
}
