import img from '../../assets/expense.png';
import { Box,  Typography } from "@mui/material";



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
};


export default function Welcome(){
    return(
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
    );
}