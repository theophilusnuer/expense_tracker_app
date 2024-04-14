import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ListItemButton } from '@mui/material';
import logo from '../../assets/osikani.png';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  borderColor: "#4D928D",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#4D928D',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#4D928D',
  width: '100%',
  borderColor: '#4D928D',
  borderStyle: 'solid',
  borderWidth: '1px',
  borderRadius: '10px',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function NavBar() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer}

      >
        <List className="w-48 h-full" style={{ backgroundColor: "#4D928D" }}>

          <div className='w-32 h-32 flex ml-9 items-center'> <img src={logo} alt="Osikani" /> </div>
          <ListItemButton>
            <ListItemText primary="Overview" style={{ color: "#fff" }} />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Transactions" style={{ color: "#fff" }} />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Expense Budgets" style={{ color: "#fff" }} />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Reports" style={{ color: "#fff" }} />
          </ListItemButton>
          <div style={{ marginTop: '220px' }} className='flex ml-3'>
            <PowerSettingsNewIcon style={{ color: "#fff" }} />
            <p className='text-white font-semibold ml-1'>Log Out</p>
          </div>

        </List>
      </Drawer>
      <AppBar 
      style={{
        width: isSmallScreen ? '100%' : 'calc(100% - 25px)',
        marginRight: isSmallScreen ? '0' : '25px',
        marginTop: isSmallScreen ? '5px' : '15px',
        backgroundColor: "transparent",
        border: '1.5px solid #4D928D',
        borderRadius: '10px',
      }} 
      position="static"
      elevation={0}>
        <Toolbar>
          {isSmallScreen && (
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{ mr: 2, color: '#4d928d' }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography
            variant="h6"
            noWrap
            component="div"
            color="#4D928D"
            sx={{ flexGrow: 1, display: 'block' }}

          >
            Overview
          </Typography>
          {!isSmallScreen && (
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
