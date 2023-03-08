import React, {
  createContext,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import update from "immutability-helper";
const PageContext = createContext();
export default PageContext;

export const PageProvider = ({ children }) => {
  const initialPages = [
    {
      id: 0,
      name: "Untitled",
      fields: [
        {
          id: 0,
          text: "",
        },
      ],
    },
  ];

  const [untitledPage, setUntitledPage] = useState("Untitled");
  const [pages, setPages] = useState(initialPages);
  const [page, setPage] = useState(initialPages[0]);
  const [fields, setFields] = useState(page.fields);

  const handleTitleChange = (e) => {
    setPage({ ...page, name: e.target.value });
  };
  //   const handleFieldChange = (e) => {
  //     setFields([...fields, { name: e.target.value }]);
  //   };

  const removePage = (e, id) => {
    e.preventDefault();
    if (pages.length > 1) {
      const copyPages = pages.filter((page) => page.id !== id);
      setPages(copyPages);
    } else {
      setPages(initialPages);
    }
  };

  const handleClick = (e, id) => {
    e.preventDefault();
    const page = pages.filter((page) => page.id === id)[0];
    setPage(page);
  };

  const addNewPage = (e) => {
    e.preventDefault();
    setPage(initialPages[0]);
    if (pages[pages.length - 1].name !== "Untitled") {
      setPages([
        ...pages,
        {
          id: pages.length,
          name: "Untitled",
          fields: [
            {
              id: 0,
              text: "",
            },
          ],
        },
      ]);
    }
  };
  const EditExistingPage = (e) => {
    e.preventDefault();
    pages.pop();

    setPages([...pages, { id: pages.length, name: page.name, fields: fields }]);
  };
  //==========================================================================================

  const removeField = (e, id) => {
    e.preventDefault();
    if (fields.length > 1) {
      const copiedCards = fields.filter((card) => card.id !== id);
      setFields(copiedCards);
    } else {
      setFields(page.fields);
    }
  };

  const onKeyDownField = (event) => {
    if (event.key === "Enter") {
      setFields([...fields, { id: fields.length, text: "" }]);
    }
  };

  const moveField = useCallback(
    (dragIndex, hoverIndex) => {
      setFields((prevCards) =>
        update(prevCards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, prevCards[dragIndex]],
          ],
        })
      );
    },
    [fields]
  );
  //==========================================================================================
  const contextData = {
    handleTitleChange,
    addNewPage,
    EditExistingPage,
    pages,
    setPages,
    removePage,
    handleClick,
    page,
    fields,
    removeField,
    onKeyDownField,
    moveField,
  };

  return (
    <PageContext.Provider value={contextData}>{children}</PageContext.Provider>
  );
};
