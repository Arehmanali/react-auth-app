import React from "react";
import { Box, Typography, Tooltip } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Container } from "./Container";
import EditableTextField from "./EditableTextField";

const Page = () => {
  const classes = useStyles();

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection={"column"}
      sx={{ mt: 10 }}
    >
      <Tooltip title="Add" placement="left-start">
        <Typography
          variant="h3"
          sx={{
            fontWeight: 900,
            textDecoration: "none",
            color: "black",
          }}
          display="inline"
        >
          <EditableTextField />
        </Typography>
      </Tooltip>

      <hr />
      <div>
        <DndProvider backend={HTML5Backend}>
          <Container />
        </DndProvider>
      </div>
    </Box>
  );
};

const useStyles = makeStyles({});

export default Page;
