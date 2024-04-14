import AddTransaction from "../../components/add_transaction";
import NavBar from "../../components/nav_bar";
import NetWorth from "../../components/networth";
import SideBar from "../../components/side_bar";
import { Box, Grid } from '@mui/material';


export default function UserProfile() {
  return (
    <section className="bg-gray-10 flex">
      <div className="hidden md:block ">
        <SideBar />
      </div>

      <div className="w-full h-full lg:ml-8 md:ml-8">
        <NavBar />
        <Grid container spacing={3}>
         
          <Grid item xs={12} sm={4}>
            <NetWorth/>
            <AddTransaction/>

          </Grid>

          {/* Item 2 */}
          <Grid item xs={12} sm={8}>
            <Box
              my={3}
              mr={2}
              sx={{ height: 320, width: '96%', border: '1px solid #f3f4f6 ', borderRadius: '10px', boxShadow: "2px 5px 9px rgba(77, 146, 141, 1)" }}>
              <div style={{ color: '#4d928d' }}><p className="px-2 font-semibold">Recent Transactions</p></div>
            </Box>
            <Box
              mr={2}
              sx={{ height: 100, width: '96%', border: '1px solid #f3f4f6 ', borderRadius: '10px', boxShadow: "2px 5px 9px rgba(77, 146, 141, 1)" }}>
              Grid Item 4
            </Box>

          </Grid>


        </Grid>

      </div>
    </section>
  );
}