
import { Box, Grid, Typography } from "@mui/material";
import Login from "../login";


const boxStyle = {
    background: '#4d928d',
    padding: '20px',
    textAlign: 'center',
    color: '#fff',
};

const imageStyle = {
    maxWidth: '100%',
    height: 'auto',
    marginTop: '20px',
};

export default function LandPage() {
    return (
        <Grid container spacing={0}>
            {/* landing image */}
            <Grid item xs={12} sm={6}>
                <Box style={boxStyle}>
                    <Typography variant="h4">
                        Welcome to Osikani
                    </Typography>
                    <Typography variant="subtitle1">
                        Your no 1 expense tracker app
                    </Typography>
                    <img
                        style={imageStyle}
                        src="https://example.com/your-image.jpg"
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