import AddBudget from "../../components/add_budget";
import AddTransaction from "../../components/add_transaction";
import NavBar from "../../components/nav_bar";
import NetWorth from "../../components/networth";
import Recent from "../../components/recent_transactions";
import SideBar from "../../components/side_bar";
import { Box, Grid } from "@mui/material";
import { Navigate } from "react-router-dom";

export default function Dashboard() {
  const user = sessionStorage.getItem("user");
  if (!user) {
    return <Navigate to="/login" replace={true} />;
  }

  return (
    <section className="bg-gray-10 flex">
      <div className="hidden md:block ">
        <SideBar />
      </div>

      <div className="w-full h-full lg:ml-8 md:ml-8">
        <NavBar />
        <Grid container spacing={3}>
          {/* left side */}
          <Grid item xs={12} sm={4}>
            <NetWorth />
            <AddTransaction />
          </Grid>

          {/* right side */}
          <Grid item xs={12} sm={8}>
            <Recent />
            <Box
              mr={2}
              sx={{
                justifyContent: "center",
                height: "auto",
                width: "auto",
                border: "1px solid #f3f4f6 ",
                borderRadius: "10px",
                boxShadow: "2px 5px 9px rgba(77, 146, 141, 1)",
              }}
            >
              <AddBudget />
            </Box>
          </Grid>
        </Grid>
      </div>
    </section>
  );
}
