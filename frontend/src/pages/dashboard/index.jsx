import { useEffect, useState } from "react";
import AddBudget from "../../components/add_budget";
import AddTransaction from "../../components/add_transaction";
import NavBar from "../../components/nav_bar";
import NetWorth from "../../components/networth";
import Recent from "../../components/recent_transactions";
import SideBar from "../../components/side_bar";
import { Grid } from "@mui/material";
import { Navigate } from "react-router-dom";


export default function Dashboard() {
  const user = sessionStorage.getItem("userToken");


  if (!user) {
    return <Navigate to="/login" replace={true} />;
  }



  return (
    <section className="bg-gray-10 flex">
      <div className="hidden md:block ">
        <SideBar />
      </div>

      <div className="w-full h-100vh lg:ml-8 md:ml-8">
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

            <AddBudget />
          </Grid>
        </Grid>
      </div>
    </section>
  );
}
