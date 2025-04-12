import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { fbAuth, fbLogin } from "../../config/firebase/firebase-methods";
import { Typography, Box, Paper, Grid } from "@mui/material";
import SMInput from "../SMComponents/SMInput";
import SMButton from "../SMComponents/SMButton";
import "../../App.css";
// import {useDispatch} from 'react-redux'

export default function SMLogin() {
  const [model, setModel] = useState<any>({});
  //   const  dispatch = useDispatch();

  const fillModel = (key: string, val: any) => {
    model[key] = val;
    setModel({ ...model });
  };
  const navigate = useNavigate();
  let LoginUser = () => {
    console.log(model);
    fbLogin(model)
      .then((res: any) => {
        console.log(res);
        // dispatch(add({...res}))
        navigate("/profile");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fbAuth()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Box
      className="bg_img_login"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
      }}
    >
      <Paper className="paperColor" elevation={3} sx={{ p: 4, maxWidth: 400 }}>
        <Typography variant="h6" className="fw-bold" gutterBottom>
          Login
        </Typography>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <SMInput
                value={model.email}
                name="email"
                label="Email"
                type="email"
                onChange={(e: any) => fillModel("email", e.target.value)}
                className="py-2"
              />
            </Grid>
            <Grid item xs={12}>
              <SMInput
                value={model.password}
                name="password"
                label="Password"
                type="password"
                onChange={(e: any) => fillModel("password", e.target.value)}
                className="py-2"
              />
            </Grid>
            <Grid item xs={12}>
              <SMButton
                type="button"
                onClick={LoginUser}
                label="Login"
                className="py-2"
              />
              <Typography className="py-2">
                Don't have an account?
                <Link to="/SignUp">SingUp</Link>
              </Typography>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
}
