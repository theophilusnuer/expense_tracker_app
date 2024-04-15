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
import { Link } from 'react-router-dom';

export default function Login() {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: "center",
            borderRadius: '10px',
            boxShadow: "3",
            width: "auto",
            mx: "60px",
            marginTop: "100px",
            padding: '20px',
        }}>
            <div>

                <div className="flex justify-center font-bold text-2xl">
                    <p>Login</p>
                </div>
                <div className='p-10'>
                    <FormControl style={{ marginBottom: "50px" }} fullWidth sx={{ m: 1, width: "full" }}>
                        <InputLabel htmlFor="standard-adornment-amount">Username</InputLabel>
                        <Input
                            id="standard-adornment-amount"
                            label="Username"
                        />
                    </FormControl>
                    <FormControl style={{ marginBottom: "20px" }} fullWidth sx={{ m: 1, width: "full" }} variant="standard">
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
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <div className='flex justify-center'>
                        <Button
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
    );
}