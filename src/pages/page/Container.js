import { useCallback, useContext } from "react";
import PageContext from "../../context/PageContext.js";
import { Card } from "./Card.js";
import Add from "@mui/icons-material/Add";
import Box from "@mui/material/Box";

const style = {
  width: 400,
};
export const Container = () => {
  const { fields, moveField, onKeyDownField, removeField, addNewField } =
    useContext(PageContext);

  const renderCard = useCallback(
    (field, index) => {
      return (
        <Card
          key={field.Id}
          sort_order={field.sort_order}
          id={field.Id}
          text={field.name}
          moveCard={moveField}
          onKeyDown={(e) => onKeyDownField(e, field.Id)}
          removeField={removeField}
        />
      );
    },
    [fields]
  );
  return (
    <>
      <div style={style}>{fields.map((card, i) => renderCard(card, i))}</div>
      <Box display="flex" alignItems="center">
        <Add
          onClick={(e) => addNewField(e)}
          fontSize="medium"
          sx={{
            color: "grey",
            "&:hover": {
              color: "green",
              cursor: "pointer",
            },
          }}
        />
      </Box>
    </>
  );
};
