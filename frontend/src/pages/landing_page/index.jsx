import img from '../../assets/expense.png'
import { Box, Grid, Typography } from "@mui/material";
import Login from "../login";


const boxStyle = {
    background: '#4d928d',
    padding: '25px',
    textAlign: 'center',
    color: '#fff',
};

const imageStyle = {
    maxWidth: '90%',
    height: 'auto',
    marginTop: '15px',
    // marginLeft:'30px'
};

export default function LandPage() {
    return (
        <Grid container spacing={0}>
            {/* landing image */}
            <Grid item xs={12} sm={6}>
                <Box style={boxStyle} sx={{height:"100vh", alignContent:"center"}}>
                    <Typography variant="h3">
                        Welcome to Osikani
                    </Typography>
                    <Typography variant="subtitle1">
                        Your no 1 expense tracker app
                    </Typography>
                    <img
                        style={imageStyle}
                        src={img}
                        alt="Welcome Image"
                    />
                </Box>
            </Grid>
            {/* login form */}
            <Grid item xs={12} sm={6}>
                <Login />
            </Grid>
        </Grid>
    );
}