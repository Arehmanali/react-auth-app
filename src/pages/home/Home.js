import { Box } from "@mui/material";
import React from "react";
<<<<<<< Updated upstream
import SideNavbar from "../../components/navbars/SideNavbar";

const Home = () => {
  return (
    <Box>
      <SideNavbar />
    </Box>
=======
import { Grid, Typography, Box } from "@mui/material";
import SideNavbar from "../../components/navbars/SideNavbar";
import Page from "../page/Page";

const Home = () => {
  return (
    <Grid direction="row" container>
      <Grid item md={2}>
        <SideNavbar />
      </Grid>
      <Grid item md={10} direction="column" spacing={2}>
        <Page />
      </Grid>
    </Grid>
>>>>>>> Stashed changes
  );
};

export default Home;
