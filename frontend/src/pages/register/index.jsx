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


export default function Register() {
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
                    marginTop: "70px",
                    marginBottom: "25px",
                    padding: "10px"
                }}>
                    <div>

                        <div className="flex flex-col font-bold text-2xl">
                            <img className='w-32 m-auto' src={login} alt="" />
                            <p className='text-center'>Register</p>
                        </div>
                        <div className='p-8'>
                            <FormControl style={{ marginBottom: "20px" }} fullWidth sx={{ m: 1, width: "full" }}>
                                <InputLabel htmlFor="standard-adornment-amount">E-mail</InputLabel>
                                <OutlinedInput
                                    id="standard-adornment-amount"
                                    label="E-mail"
                                />
                            </FormControl>
                            <FormControl style={{ marginBottom: "20px" }} fullWidth sx={{ m: 1, width: "full" }}>
                                <InputLabel htmlFor="standard-adornment-amount">Username</InputLabel>
                                <OutlinedInput
                                    id="standard-adornment-amount"
                                    label="Username"
                                />
                            </FormControl>
                            <FormControl style={{ marginBottom: "20px" }} fullWidth sx={{ m: 1, width: 'full' }} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
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
                                    style={{ color: "white", backgroundColor: "#4d928d", marginBottom: "10px" }}
                                    sx={{ width: "full" }}
                                    variant="contained">
                                    Register
                                </Button>
                            </div>
                        </div>
                    </div>
                </Box>
            </Grid>
        </Grid>

    );
}