import React, { useContext } from "react";
import { Box, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Container } from "./Container";
import Add from "@mui/icons-material/Add";
import HeaderTextField from "./HeaderTextField";
import PageContext from "../../context/PageContext";

const Page = () => {
  const classes = useStyles();
  const { EditExistingPage } = useContext(PageContext);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection={"column"}
      sx={{ mt: 10 }}
    >
      <form onSubmit={EditExistingPage}>
        <Box display="flex" justifylContent="space-around" alignItems="center">
          <HeaderTextField />
          <IconButton type="submit">
            <Add
              fontSize="large"
              sx={{
                ml: 1,
                color: "grey",
                "&:hover": {
                  color: "green",
                  cursor: "pointer",
                },
              }}
            />
          </IconButton>
        </Box>

        <hr />
        <div>
          <DndProvider backend={HTML5Backend}>
            <Container />
          </DndProvider>
        </div>
      </form>
    </Box>
  );
};

const useStyles = makeStyles({});

export default Page;
