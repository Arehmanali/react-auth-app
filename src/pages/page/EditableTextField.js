import React, { useContext } from "react";
import { makeStyles } from "@mui/styles";
import PageContext from "../../context/PageContext";

const EditableTextField = ({ onKeyDown }) => {
  const { handleFieldChange, page } = useContext(PageContext);
  const classes = useStyles();

  return (
    <>
      {page.fields.map((field) => {
        return (
          <input
            className={classes.inputField}
            placeholder={"Add Field Text"}
            type="text"
            aria-label={"field"}
            name={"field"}
            value={field.name}
            onChange={handleFieldChange}
            onKeyDown={onKeyDown}
          />
        );
      })}
    </>
  );
};

const useStyles = makeStyles({
  inputField: {
    backgroundColor: "transparent",
    border: 0,
    fontSize: "18px",
    padding: "8px",
    "&:hover": {
      cursor: "pointer",
    },
  },
});
export default EditableTextField;
