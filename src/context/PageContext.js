import React, { createContext, useEffect, useState } from "react";

const PageContext = createContext();
export default PageContext;

export const PageProvider = ({ children }) => {
  const [openPage, setOpenPage] = useState(false);
  const [untitledPage, setUntitledPage] = useState("Untitled");
  const [pages, setPages] = useState([{ name: "Page 1" }, { name: "Page 2" }]);

  useEffect(
    (prevState) => {
      debugger;
      if (
        pages[pages.length - 1].name === untitledPage ||
        pages[pages.length - 1].name === "Untitled"
      ) {
        debugger;
        pages.pop();
        setPages([...pages, { name: untitledPage }]);
      }
    },
    [untitledPage]
  );

  const handleTitleChange = (e) => {
    setUntitledPage(e.target.value);
  };

  const addNewPage = (e) => {
    e.preventDefault();
    setPages([...pages, { name: "Untitled" }]);
    setOpenPage(true);
  };

  const contextData = {
    openPage,
    setOpenPage,
    handleTitleChange,
    untitledPage,
    addNewPage,
    pages,
    setPages,
  };

  return (
    <PageContext.Provider value={contextData}>{children}</PageContext.Provider>
  );
};
