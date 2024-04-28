import { Grid, CircularProgress } from "@mui/material";
import Welcome from '../../components/welcome';
import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from "@mui/material/Button";
import { Link, useNavigate } from 'react-router-dom';
import login from '../../assets/login.png'
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false); 

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const navigate = useNavigate();

    const loginUser = async (values, { setSubmitting, resetForm }) => {
        try {
            setLoading(true);
            const response = await fetch(`${process.env.REACT_APP_OSIKANI_API_URL}/api/users/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            });

            if (response.ok) {
                // login successful
                toast.success('Logged In successfully');
                //parse response as json
                const data = await response.json();
                const token = data.accessToken
                //save token to session storage
                sessionStorage.setItem('userToken', token)
                // Reset form fields
                resetForm();
                // Navigate to dashboard page
               
               setTimeout(()=>{
                navigate('/');
               },1000);
            }
            else {
                // Login failed
                toast.error('Login failed, try again');
            }
        } catch (error) {
            console.error('Error registering user:', error);
        } finally {
            setLoading(false);
            setSubmitting(false);
        }
    };

    return (
        <Grid container spacing={0}>
            <Grid item xs={12} sm={6}>
                <Welcome />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: "center",
                    borderRadius: '10px',
                    boxShadow: "3",
                    width: "auto",
                    mx: "60px",
                    marginTop: "90px",
                    marginBottom: "25px",
                    padding: '20px',
                }}>
                    <div>
                        <div className="flex flex-col font-bold text-2xl">
                            <img className='w-32 m-auto' src={login} alt="" />
                            <p className='text-center'>Login</p>
                        </div>

                        <Formik
                            initialValues={{
                                email: '',
                                password: ''
                            }}
                            validationSchema={Yup.object().shape({
                                email: Yup.string().email('Invalid email').required('Email is required'),
                                password: Yup.string().required('Password is required')
                            })}
                            onSubmit={loginUser}
                        >
                            {({ isSubmitting }) => (
                                <Form>
                                    <div className='p-8'>
                                        <FormControl style={{ marginBottom: "50px" }} fullWidth sx={{ m: 1, width: "full" }}>
                                            <InputLabel htmlFor="email">E-mail</InputLabel>
                                            <Field
                                                id="email"
                                                name="email"
                                                as={Input}
                                            />
                                            <ErrorMessage
                                                name="email"
                                                component="div"
                                            />
                                        </FormControl>
                                        <FormControl style={{ marginBottom: "20px" }} fullWidth sx={{ m: 1, width: 'full' }} variant="standard">
                                            <InputLabel htmlFor="password">Password</InputLabel>
                                            <Field
                                                id="password"
                                                type={showPassword ? 'text' : 'password'}
                                                name="password"
                                                as={Input}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={handleClickShowPassword}
                                                            onMouseDown={handleMouseDownPassword}
                                                            edge="end"
                                                        >
                                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                            />
                                            <ErrorMessage name="password" component="div" />
                                        </FormControl>
                                        <ToastContainer/>
                                        <div className='flex justify-center'>
                                            <Button
                                                type='submit'
                                                disabled={isSubmitting}
                                                style={{ color: "white", backgroundColor: "#4d928d", marginBottom: "10px" }}
                                                sx={{ width: "full" }}
                                                variant="contained">
                                                {loading ? <CircularProgress size={18} color="inherit" /> : (isSubmitting ? 'Logging In' : 'Login')}
                                            </Button>
                                        </div>
                                        <div className='flex justify-center'>
                                            New User?
                                            <Link to="/register">
                                                <p style={{ marginLeft: "8px", color: "#4d928d", fontWeight: "bold" }}>Register Here</p>
                                            </Link>
                                        </div>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </Box>
            </Grid>
        </Grid>
    );
}
