import {
  Box,
  Typography,
  Paper,
  Grid,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import React, { useEffect, useState } from "react";
import SMSelect from "../components/SMComponents/SMSelect";
import { fbAdd, fbGet } from "../config/firebase/firebase-methods";
import { useNavigate, useParams } from "react-router-dom";
import SMForm from "../components/SMComponents/SMForm";
import SMInput from "../components/SMComponents/SMInput";
import SMButton from "../components/SMComponents/SMButton";

export default function Profile() {
  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
  const [bloodGroup, setBloodGroup] = useState<string>(bloodGroups[0]);

  const acceptorbloodGroups = [
    "A+",
    "A-",
    "B+",
    "B-",
    "AB+",
    "AB-",
    "O+",
    "O-",
  ];
  const [acceptorbloodGroup, setAcceptorBloodGroup] = useState<string>(
    bloodGroups[0]
  );

  const genders = ["Male", "Female"];
  const [gender, setGender] = useState<string>(genders[0]);

  const [DonorsList, setDonorsList] = useState<any[]>([]);
  const [model, setModel] = useState<any>({});

  const handleChange = (newValue: any) => {
    setBloodGroup(newValue);
    console.log(newValue);
  };
  const handleAcceptorBG = (newValue: any) => {
    setAcceptorBloodGroup(newValue);
    console.log(newValue);
  };
  const handleGender = (newValue: any) => {
    setGender(newValue);
    console.log(newValue);
  };

  const fillModel = (key: string, val: string) => {
    model[key] = val;
    setModel({ ...model });
  };

  const navigate = useNavigate();

  let AddDonor = () => {
    console.log(model);
    fbAdd("Donors", model)
      .then((res: any) => {
        console.log(res);
        // dispatch(add({...res}))
        alert("Donor added successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getDonors = () => {
    fbGet("users")
      .then((res: any) => {
        console.log(res);
        setDonorsList([...res]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getDonors();
  }, []);

  return (
    <>
      <Box>
        <Box className="container m-5">
          <Box>
            <Typography variant="h3" className="text-center p-2 m-2">
              Blood Bank Application
            </Typography>
          </Box>
          <div className="d-flex align-items-center justify-content-center row">
            <div className="col-12 position-relative">
              <Box className="p-2 m-2 mb-5">
                <Typography variant="h6" className="fw-bold m-2 p-2">
                  Find Donors
                </Typography>
                <SMSelect
                  label="Select Acceptor Blood Group"
                  value={acceptorbloodGroup}
                  options={acceptorbloodGroups}
                  onChange={(acceptorbloodGroup) => {
                    handleAcceptorBG(acceptorbloodGroup);
                  }}
                  className="py-2"
                />
              </Box>
              <Box className="row">
                <Box className="col-12">
                  <h5 className="p-2 m-2 fw-bold">
                    {` Donor Details who can donate their blood to you as per your Blood Group "${acceptorbloodGroup}" `}
                  </h5>
                </Box>
                <Box className="col-12">
                  {/* <React.Fragment>
                    {DonorsList ? (
                      DonorsList.filter(
                        (donor) => donor.bloodGroup === acceptorbloodGroup
                      ).length > 0 ? (
                        DonorsList.filter(
                          (donor) => donor.bloodGroup === acceptorbloodGroup
                        ).map((x: any, i: any) => (
                          <div key={x.id}>
                            <Paper className="bg-light p-2 m-2">
                              <CardContent key={i}>
                                <Typography
                                  sx={{ fontSize: 20 }}
                                  color="text.secondary"
                                  className="fw-bold"
                                  gutterBottom
                                >
                                  {x.userName}
                                </Typography>
                                <Typography variant="h5" component="div">
                                  {x.Email}
                                </Typography>
                                <Typography
                                  sx={{ mb: 1.5 }}
                                  color="text.secondary"
                                >
                                  {x.contact}
                                </Typography>
                                <Typography
                                  sx={{ mb: 1.5 }}
                                  color="text.secondary"
                                >
                                  {x.address}
                                </Typography>
                                <Typography variant="body2">
                                  <div key={x.id}>
                                    {x.gender === "male" ? (
                                      <p>
                                        <MaleIcon /> : "Male"
                                      </p>
                                    ) : x.gender === "female" ? (
                                      <p>
                                        <FemaleIcon /> : "Female"
                                      </p>
                                    ) : (
                                      <p>Gender: N/A</p>
                                    )}
                                  </div>
                                  <p>Blood Group: {x.bloodGroup}</p>
                                  <p>Disease: {x.disease}</p>
                                </Typography>
                              </CardContent>
                              <CardActions>
                                <Button
                                  size="small"
                                  onClick={() => {
                                    navigate(`${x.id}`);
                                  }}
                                >
                                  Contact Donor
                                </Button>
                              </CardActions>
                            </Paper>
                          </div>
                        ))
                      ) : (
                        <Box className="d-flex align-items-center justify-content-center">
                          <Paper className="text-center p-5 bg-light">
                            <Typography>
                              No Donors For your Blood Group
                            </Typography>
                          </Paper>
                        </Box>
                      )
                    ) : (
                      <p>Loading donors...</p>
                    )}
                  </React.Fragment> */}
                  <React.Fragment>
                    {DonorsList ? (
                      DonorsList.filter((donor) => {
                        // Check if the donor's blood group is compatible with the acceptor's blood group
                        const donorBloodGroup = donor.bloodGroup;
                        return (
                          (acceptorbloodGroup === "O+" &&
                            (donorBloodGroup === "O+" ||
                              donorBloodGroup === "O-")) ||
                          (acceptorbloodGroup === "O-" &&
                            donorBloodGroup === "O-") ||
                          (acceptorbloodGroup === "A+" &&
                            (donorBloodGroup === "A+" ||
                              donorBloodGroup === "A-" ||
                              donorBloodGroup === "O+" ||
                              donorBloodGroup === "O-")) ||
                          (acceptorbloodGroup === "A-" &&
                            (donorBloodGroup === "O-" ||
                              donorBloodGroup === "A-")) ||
                          (acceptorbloodGroup === "B+" &&
                            (donorBloodGroup === "B+" ||
                              donorBloodGroup === "B-" ||
                              donorBloodGroup === "O+" ||
                              donorBloodGroup === "O-")) ||
                          (acceptorbloodGroup === "B-" &&
                            (donorBloodGroup === "B-" ||
                              donorBloodGroup === "O-")) ||
                          (acceptorbloodGroup === "AB+" &&
                            (donorBloodGroup === "A+" ||
                              donorBloodGroup === "B+" ||
                              donorBloodGroup === "AB+" ||
                              donorBloodGroup === "O+" ||
                              donorBloodGroup === "A-" ||
                              donorBloodGroup === "B-" ||
                              donorBloodGroup === "AB-" ||
                              donorBloodGroup === "O-")) ||
                          (acceptorbloodGroup === "AB-" &&
                            (donorBloodGroup === "AB-" ||
                              donorBloodGroup === "B-" ||
                              donorBloodGroup === "O-" ||
                              donorBloodGroup === "A-"))
                        );
                      }).map((x: any, i: any) => (
                        <div key={x.id}>
                          <Paper className="bg-light p-2 m-2">
                            <CardContent key={i}>
                              <Typography
                                sx={{ fontSize: 20 }}
                                color="text.secondary"
                                className="fw-bold"
                                gutterBottom
                              >
                                {x.userName}
                              </Typography>
                              <Typography variant="h5" component="div">
                                {x.Email}
                              </Typography>
                              <Typography
                                sx={{ mb: 1.5 }}
                                color="text.secondary"
                              >
                                {x.contact}
                              </Typography>
                              <Typography
                                sx={{ mb: 1.5 }}
                                color="text.secondary"
                              >
                                {x.address}
                              </Typography>
                              <Typography variant="body2">
                                <div key={x.id}>
                                  {x.gender === "male" ? (
                                    <p>
                                      <MaleIcon /> : "Male"
                                    </p>
                                  ) : x.gender === "female" ? (
                                    <p>
                                      <FemaleIcon /> : "Female"
                                    </p>
                                  ) : (
                                    <p>Gender: N/A</p>
                                  )}
                                </div>
                                <p>Blood Group: {x.bloodGroup}</p>
                                <p>Disease: {x.disease}</p>
                              </Typography>
                            </CardContent>
                            <CardActions>
                              <Button
                                size="small"
                                onClick={() => {
                                  navigate(`${x.id}`);
                                }}
                              >
                                Contact Donor
                              </Button>
                            </CardActions>
                          </Paper>
                        </div>
                      ))
                    ) : (
                      <>
                        <Box className="d-flex align-items-center justify-content-center">
                          <Paper className="text-center p-5 bg-light">
                            <Typography>
                              No Donors For your Blood Group
                            </Typography>
                          </Paper>
                        </Box>
                      </>
                    )}
                  </React.Fragment>
                </Box>
              </Box>
            </div>
            <div className="col-12">
              {/* <Paper className="p-5 m-2">
                <Typography variant="h6" className="fw-bold text-center">
                  Register As Donor
                </Typography>
                <form>
                  <Grid container spacing={1}>
                    <Grid item xs={6}>
                      <SMInput
                        value={model.donorName}
                        name="donorName"
                        label="Donor Name"
                        type="text"
                        onChange={(e: any) =>
                          fillModel("donorName", e.target.value)
                        }
                        className="py-2"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <SMInput
                        value={model.donoremail}
                        name="donoremail"
                        label="Donor Email"
                        type="text"
                        onChange={(e: any) =>
                          fillModel("donoremail", e.target.value)
                        }
                        className="py-2"
                      />
                    </Grid>

                    <Grid item xs={6}>
                      <SMSelect
                        label="Select Gender"
                        value={gender}
                        options={genders}
                        onChange={(gender) => {
                          fillModel("gender", gender);
                          handleGender(gender);
                        }}
                        className="py-2"
                      />
                    </Grid>

                    <Grid item xs={6}>
                      <SMSelect
                        label="Select Blood Group"
                        value={bloodGroup}
                        options={bloodGroups}
                        onChange={(bloodGroup) => {
                          fillModel("bloodGroup", bloodGroup);
                          handleChange(bloodGroup);
                        }}
                        className="py-2"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <SMInput
                        value={model.contact}
                        name="contact"
                        label="Phone Number"
                        type="number"
                        onChange={(e: any) =>
                          fillModel("contact", e.target.value)
                        }
                        className="py-2"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <SMInput
                        value={model.disease}
                        name="disease"
                        label="Do you have any disease? Else type 'None'"
                        type="text"
                        onChange={(e: any) =>
                          fillModel("disease", e.target.value)
                        }
                        className="py-2"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <SMInput
                        value={model.address}
                        name="address"
                        label="Address"
                        type="text"
                        onChange={(e: any) =>
                          fillModel("address", e.target.value)
                        }
                        className="py-2"
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <SMButton
                        type="button"
                        onClick={AddDonor}
                        label="Register as Donor"
                        className="py-2"
                      />
                    </Grid>
                  </Grid>
                </form>
              </Paper> */}
            </div>
          </div>
        </Box>
      </Box>
    </>
  );
}
