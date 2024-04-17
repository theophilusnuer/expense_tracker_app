import List from '@mui/material/List';
import { ListItemText, ListItemButton } from '@mui/material';
import logo from '../../assets/osikani.png';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { Link } from 'react-router-dom';

export default function SideBar() {
  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <List className="w-48 rounded-br-xl rounded-tr-xl shadow-lg" style={{ backgroundColor: "#4D928D", flex: "1" }}>
        <div className='w-32 h-32 flex ml-9 items-center'> <img src={logo} alt="Osikani" /> </div>
          <Link to="/">
          <ListItemButton>
          <ListItemText primary="Overview" style={{ color: "#fff" }} />
          </ListItemButton>
          </Link>
        
          <Link to="/transactions">
          <ListItemButton>
          <ListItemText primary="Transactions" style={{ color: "#fff" }} />
          </ListItemButton>
          </Link>
        
        <Link to="/budgets">
        <ListItemButton>
          <ListItemText primary="Expense Budgets" style={{ color: "#fff" }} />
        </ListItemButton>
        </Link>
        
        <Link to="/reports">
        <ListItemButton>
          <ListItemText primary="Reports" style={{ color: "#fff" }} />
        </ListItemButton>
        </Link>
        <div className='flex ml-3 mb-3 mt-56'>
        <PowerSettingsNewIcon style={{ color: "#fff" }} />
        <p className='text-white font-semibold ml-1'>Log Out</p>
      </div>
      </List>
     
    </div>
  );
}
