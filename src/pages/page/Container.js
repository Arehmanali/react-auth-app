import update from "immutability-helper";
import { useCallback, useContext, useState } from "react";
import PageContext from "../../context/PageContext.js";
import { Card } from "./Card.js";

const style = {
  width: 400,
};
export const Container = () => {
  const { fields, moveField, onKeyDownField, removeField } =
    useContext(PageContext);

  const { page } = useContext(PageContext);

  const renderCard = useCallback(
    (card, index) => {
      return (
        <Card
          key={card.id}
          index={index}
          id={card.id}
          text={card.text}
          moveCard={moveField}
          onKeyDown={onKeyDownField}
          removeField={removeField}
        />
      );
    },
    [fields]
  );
  return (
    <>
      <div style={style}>{fields.map((card, i) => renderCard(card, i))}</div>
    </>
  );
};
