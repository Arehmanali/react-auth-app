import { Grid } from "@mui/material";
import React, { useContext } from "react";
import SideNavbar from "../../components/navbars/SideNavbar";
import PageContext from "../../context/PageContext";
import Page from "../page/Page";

const Home = () => {
  const { openPage } = useContext(PageContext);
  return (
    <Grid container>
      <Grid item md={2}>
        <SideNavbar />
      </Grid>
      <Grid item md={10}>
        {openPage ? <Page /> : ""}
      </Grid>
    </Grid>
  );
};

export default Home;
