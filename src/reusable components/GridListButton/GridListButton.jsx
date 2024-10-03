import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTableCellsLarge, faList } from "@fortawesome/free-solid-svg-icons";

const GridListButton = ({ selected, setSelected }) => {
  const handleClick = (icon) => {
    setSelected(icon);
  };

  return (
    <>
      <div className="flex gap-2 border-2 rounded-lg p-0.5">
        <div
          className="cursor-pointer p-1.5 rounded-md"
          style={{
            backgroundColor: selected === "grid" ? "#F2F8FF" : "",
          }}
          onClick={() => handleClick("grid")}
        >
          <FontAwesomeIcon
            icon={faTableCellsLarge}
            size="md"
            style={{ color: selected === "grid" ? "#016BDD" : "#7e7e7e" }} // Change the icon color on click
          />
        </div>
        <div
          className="cursor-pointer p-1.5 rounded-md"
          style={{
            backgroundColor: selected === "list" ? "#F2F8FF" : "",
          }}
          onClick={() => handleClick("list")}
        >
          <FontAwesomeIcon
            icon={faList}
            size="md"
            style={{ color: selected === "list" ? "#016BDD" : "#7e7e7e" }} // Change the icon color on click
          />
        </div>
      </div>
    </>
  );
};

export default GridListButton;
