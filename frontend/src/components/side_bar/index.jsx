import List from '@mui/material/List';
import { ListItemText, ListItemButton } from '@mui/material';
import logo from '../../assets/osikani.png';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';



export default function SideBar(){
    return(
        <div >
        <List className="w-48 h-full rounded-xl shadow-lg" style={{ backgroundColor: "#4D928D", }}>

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
          <div style={{ marginTop: '200px' }} className='flex ml-3'>
            <PowerSettingsNewIcon style={{ color: "#fff" }} />
            <p className='text-white font-semibold ml-1'>Log Out</p>
          </div>

        </List>
      </div>
    );
}