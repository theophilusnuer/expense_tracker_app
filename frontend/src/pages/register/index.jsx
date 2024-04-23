import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from "@mui/material/Button";
import login from '../../assets/login.png'
import { Grid, OutlinedInput } from '@mui/material';
import Welcome from '../../components/welcome';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';

export default function Register() {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const navigate = useNavigate();
    const [error, setError] = useState('');

    const registerUser = async (values, { setSubmitting, resetForm }) => {
        try {
            const response = await fetch(`${process.env.REACT_APP_OSIKANI_API_URL}/api/users/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            });

            if (response.ok) {
                // Registration successful
                console.log('User registered successfully');
                // Reset form fields
                resetForm();
                // Navigate to login page
                navigate('/login');
            } else if (response.status === 409) {
                setError('User already exists.');
            }
             else {
                // Registration failed
                console.error('Registration failed');
            }
        } catch (error) {
            console.error('Error registering user:', error);
        }
        setSubmitting(false);
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
                    marginTop: "70px",
                    marginBottom: "25px",
                    padding: "10px"
                }}>
                    <div>
                        <div className="flex flex-col font-bold text-2xl">
                            <img className='w-32 m-auto' src={login} alt="" />
                            <p className='text-center'>Register</p>
                        </div>

                        <Formik
                            initialValues={{
                                email: '',
                                username: '',
                                password: ''
                            }}
                            validationSchema={Yup.object().shape({
                                email: Yup.string().email('Invalid email').required('Email is required'),
                                username: Yup.string().required('Username is required'),
                                password: Yup.string().required('Password is required')
                            })}
                            onSubmit={registerUser}
                        >
                            {({ isSubmitting }) => (
                                <Form>
                                    <div className='p-8'>
                                        <FormControl style={{ marginBottom: "20px" }} fullWidth sx={{ m: 1, width: "full" }}>
                                            <InputLabel htmlFor="standard-adornment-amount">E-mail</InputLabel>
                                            <Field
                                                id="standard-adornment-amount"
                                                name="email"
                                                as={OutlinedInput}
                                                label="E-mail"
                                            />
                                            <ErrorMessage name="email" component="div" />
                                        </FormControl>

                                        <FormControl style={{ marginBottom: "20px" }} fullWidth sx={{ m: 1, width: "full" }}>
                                            <InputLabel htmlFor="standard-adornment-amount">Fullname</InputLabel>
                                            <Field
                                                id="standard-adornment-amount"
                                                name="username"
                                                as={OutlinedInput}
                                                label="Fullname"
                                            />
                                            <ErrorMessage name="username" component="div" />
                                        </FormControl>

                                        <FormControl style={{ marginBottom: "20px" }} fullWidth sx={{ m: 1, width: 'full' }} variant="outlined">
                                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                            <Field
                                                id="outlined-adornment-password"
                                                type={showPassword ? 'text' : 'password'}
                                                name="password"
                                                as={OutlinedInput}
                                                label="Password"
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

                                        <div className='flex justify-center'>
                                            <Button
                                                type='submit'
                                                disabled={isSubmitting}
                                                style={{ color: "white", backgroundColor: "#4d928d", marginBottom: "10px" }}
                                                sx={{ width: "full" }}
                                                variant="contained">
                                                {isSubmitting ? 'Submitting' : 'Register'}
                                            </Button>
                                        </div>

                                        <div className='flex justify-center'>
                                            Already Registered?
                                            <Link to="/login">
                                                <p style={{ marginLeft: "8px", color: "#4d928d", fontWeight: "bold" }}>Login Here</p>
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
