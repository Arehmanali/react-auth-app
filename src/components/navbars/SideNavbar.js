import React, { useContext } from "react";
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
import AuthContext from "../../context/AuthContext";
import { Button } from "@mui/material";

const drawerWidth = 240;

const SideNavbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
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
          <Typography>{user.name}</Typography>
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
          <ListItem
            components={Button}
            onClick={logoutUser}
            key={"logout"}
            disablePadding
          >
            <ListItemButton disablePadding>
              <ExitToApp />
              <ListItemText disablePadding sx={{ ml: 1 }} primary={"Logout"} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};

export default SideNavbar;
