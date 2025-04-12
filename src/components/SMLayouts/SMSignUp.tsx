import { Box, Typography, Paper, Grid, styled, Theme } from "@mui/material";
import SMInput from "../SMComponents/SMInput";
import SMButton from "../SMComponents/SMButton";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { fbSignUp } from "../../config/firebase/firebase-methods";
import SMSelect from "../SMComponents/SMSelect";
import Alert from "@mui/material/Alert";

const Item = styled(Paper)(({ theme }: { theme: Theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function SMSignUp() {
  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
  const [bloodGroup, setBloodGroup] = useState<string>(bloodGroups[0]);
  const [isSignedUp, setIsSignedUp] = useState(false);

  const handleChange = (newValue: any) => {
    setBloodGroup(newValue);
    console.log(newValue);
  };
  const genders = ["Male", "Female"];
  const [gender, setGender] = useState<string>(genders[0]);
  const handleGender = (newValue: any) => {
    setGender(newValue);
    console.log(newValue);
  };
  const [model, setModel] = useState<any>({});
  const fillModel = (key: string, val: string) => {
    model[key] = val;
    setModel({ ...model });
  };
  const ColorAlerts = () => {
    return (
      <Alert severity="success" color="info">
        This is a success alert — check it out!
      </Alert>
    );
  };
  const navigate = useNavigate();

  // let signUpUser = () => {
  //   console.log(model);
  //   fbSignUp(model)
  //     .then((res: any) => {
  //       console.log(res);
  //       setIsSignedUp(true); // Set the state to show the success message
  //       navigate("/profile");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });

  //   return (
  //     <div>
  //       {isSignedUp && (
  //         <Alert severity="success" color="info">
  //           Signed Up Successfully!
  //         </Alert>
  //       )}

  //       {/* Your other JSX content */}
  //     </div>
  //   );
  // };
  let signUpUser = () => {
    console.log(model);
    fbSignUp(model)
      .then((res) => {
        console.log(res);
        navigate("/profile");
        ColorAlerts();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Box
      className="bg_img_login"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Paper
        className="paperColor my-5"
        elevation={3}
        sx={{ p: 3, maxWidth: "90%" }}
      >
        <Typography variant="h6" className="fw-bold" gutterBottom>
          SignUp
        </Typography>
        <form>
          <Grid container spacing={1}>
            <Grid size={{xs:12}}>
              <Item>

              <SMInput
                value={model.userName}
                name="userName"
                label="Enter your full name"
                type="text"
                onChange={(e: any) => fillModel("userName", e.target.value)}
                className="py-2"
              />
              </Item>
            </Grid>
            <Grid size={{xs:6}}>
              <Item>

              <SMInput
                value={model.email}
                name="email"
                label="Email"
                type="text"
                onChange={(e: any) => fillModel("email", e.target.value)}
                className="py-2"
              />
              </Item>
            </Grid>

            <Grid size={{xs:6}}>
              <Item>

              <SMInput
                value={model.password}
                name="password"
                label="Password"
                type="password"
                onChange={(e: any) => fillModel("password", e.target.value)}
                className="py-2"
              />
              </Item>
            </Grid>

            <Grid size={{xs:6}}>
            <Item>
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
            </Item>
              
            </Grid>
            <Grid size={{xs:6}}>
            <Item>

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
            </Item>
            </Grid>
            <Grid size={{xs:6}}>
            <Item>
            <SMInput
                value={model.contact}
                name="contact"
                label="Phone Number"
                type="number"
                onChange={(e: any) => fillModel("contact", e.target.value)}
                className="py-2"
              />
            </Item>
              
            </Grid>
            <Grid size={{xs:6}}>
            <Item>
            <SMInput
                value={model.disease}
                name="disease"
                label="Do you have any disease? Else type 'None'"
                type="text"
                onChange={(e: any) => fillModel("disease", e.target.value)}
                className="py-2"
              />
            </Item>
              
            </Grid>
            <Grid size={{xs:12}}>
            <Item>

              <SMInput
                value={model.address}
                name="address"
                label="Address"
                type="text"
                onChange={(e: any) => fillModel("address", e.target.value)}
                className="py-2"
              />
            </Item>
            </Grid>

            <Grid size={{xs:12}}>
            <Item>
            <SMButton
                type="button"
                onClick={signUpUser}
                label="Sign Up"
                className="py-2"
              />
              <Typography className="py-2">
                Already Registered?
                <Link to="/login">Log In</Link>
              </Typography>
            </Item>
              
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
}
