import React, { useContext, useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Button, Typography, Alert, Snackbar } from "@mui/material";
import { useNavigate } from "react-router";
import "./components.css";
import axios from "axios";
import { GlobalContext } from "../context/Context.jsx";
import Loader from "./Loader.jsx";

const Login = () => {
  let { state, dispatch } = useContext(GlobalContext);
  const [error, setError] = useState("");
  const [loading , setLoading] = useState(false)
  const [alertOpen, setAlertOpen] = useState(false);
  const alertClose = () => {
    setAlertOpen(false);
  };

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      userName: "emilys",
      password: "emilyspass",
    },
    validationSchema: Yup.object({
      userName: Yup.string("User Must Be String").required(
        "User Name is Required"
      ),
      password: Yup.string()
        .min(6, "Minimum 6 characters")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
        setLoading(true)
      axios
        .post("https://dummyjson.com/auth/login", {
          username: values.userName,
          password: values.password,
        })
        .then((response) => {
          console.log("Res : ", response.data);
          dispatch({ type: "USER_LOGIN", payload: response.data });
          setLoading(false)
          localStorage.setItem("userToken" , response?.data?.accessToken)
          navigate("/login");
        })
        .catch((error) => {
          console.log("Error", error);
          setError(error.response?.data?.message);
          setAlertOpen(true);
          setLoading(false)

        });
    },
  });
  useEffect(() => {
    document.title = "Login - E-commerce";
  }, []);
  if (loading)
    return (
      <Loader />
    );

  return (
    <div className="d-flex justify-content-center align-items-center h-90vh">
      <form className="auth-form tra" onSubmit={formik.handleSubmit}>
        <Typography variant="h5">Login</Typography>
        <TextField
          label="userName"
          name="userName"
          fullWidth
          margin="normal"
          value={formik.values.userName}
          onChange={formik.handleChange}
          error={formik.touched.userName && Boolean(formik.errors.userName)}
          helperText={formik.touched.userName && formik.errors.userName}
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          fullWidth
          margin="normal"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />

        <Button
          type="submit"
          variant="contained"
          className="auth-btn"
          fullWidth
        >
          Login
        </Button>
      </form>
      <Snackbar
        open={alertOpen}
        autoHideDuration={3000}
        onClose={alertClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Alert onClose={alertClose} severity="error" sx={{ width: "100%" }}>
          {error}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Login;
