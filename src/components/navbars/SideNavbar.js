import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Add from "@mui/icons-material/Add";
import ExitToApp from "@mui/icons-material/ExitToApp";

const drawerWidth = 240;

const SideNavbar = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
          <Typography>Username</Typography>
        </Toolbar>

        <Divider />
        <List>
          {["Page"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton disablePadding>
                <Add />
                <ListItemText sx={{ ml: 1 }} disablePadding primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <List sx={{ bottom: 0, position: "fixed" }}>
          <ListItem key={"logout"} disablePadding>
            <ListItemButton disablePadding>
              <ExitToApp />
              <ListItemText disablePadding sx={{ ml: 1 }} primary={"Logout"} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      ></Box>
    </Box>
  );
};

export default SideNavbar;
