import { Grid, } from "@mui/material";
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





export default function Login() {

    const navigate = useNavigate();
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
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
                        <div className='p-8'>
                            <FormControl style={{ marginBottom: "50px" }} fullWidth sx={{ m: 1, width: "full" }}>
                                <InputLabel htmlFor="standard">E-mail</InputLabel>
                                <Input
                                    id="standard"
                                    label="Username"
                                />
                            </FormControl>
                            <FormControl style={{ marginBottom: "20px" }} fullWidth sx={{ m: 1, width: 'full' }} variant="standard">
                                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                <Input
                                    id="standard-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
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
                                    label="Password"
                                />
                            </FormControl>
                            <div className='flex justify-center'>
                                <Button
                                    onClick={() => {
                                        // Simulate login user
                                        sessionStorage.setItem('user', true)
                                        // Navigate to dashboard
                                        navigate('/');
                                    }}
                                    style={{ color: "white", backgroundColor: "#4d928d", marginBottom: "10px" }}
                                    sx={{ width: "full" }}
                                    variant="contained">
                                    Login
                                </Button>
                            </div>
                        </div>


                        <div className='flex justify-center'>
                            New User?
                            <Link to="/register">
                                <p style={{ marginLeft: "8px", color: "#4d928d", fontWeight: "bold" }}>Register Here</p>
                            </Link>
                        </div>
                    </div>

                </Box>
            </Grid>
        </Grid>
    );
}