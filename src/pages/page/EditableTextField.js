import React, { useContext, useState } from "react";
import { makeStyles } from "@mui/styles";
import PageContext from "../../context/PageContext";

const EditableTextField = ({ type }) => {
  const { handleTitleChange } = useContext(PageContext);
  const classes = useStyles();
  const [value, setValue] = useState();
  const [editingValue, setEditingValue] = useState();

  const onChange = (event) => setEditingValue(event.target.value);

  const onKeyDown = (event) => {
    if (event.key === "Enter" || event.key === "Escape") {
      event.target.blur();
    }
  };

  const onBlur = (event) => {
    if (event.target.value.trim() === "") {
      setEditingValue(value);
    } else {
      setValue(event.target.value);
    }
  };
  return (
    <input
      className={type === "header" ? classes.inputHeader : classes.inputField}
      placeholder={type === "header" ? "Add Header Text" : "Add Field Text"}
      type="text"
      aria-label={type === "header" ? "header" : "field"}
      name={type === "header" ? "header" : "field"}
      value={editingValue}
      onChange={type === "header" ? handleTitleChange : onChange}
      onKeyDown={onKeyDown}
      onBlur={onBlur}
    />
  );
};

const useStyles = makeStyles({
  inputHeader: {
    backgroundColor: "transparent",
    border: 0,
    fontSize: "34px",
    fontWeight: 900,
    padding: "8px",
    "&:hover": {
      cursor: "pointer",
    },
  },
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
