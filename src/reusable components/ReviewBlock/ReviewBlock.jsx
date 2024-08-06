import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import WhiteCard from "../WhiteCard/WhiteCard";
import Academy from "../../assets/Academy.png";
import RatingBlock from "../RatingBlock/RatingBlock";
const ReviewBlock = () => (
  <div className="mt-5 bg-slate-50 py-4 px-5 rounded-lg">
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <img
          src={Academy}
          alt="Profile Photo"
          className="w-10 h-10 me-3 rounded-full"
        />
        <span className="font-bold">Abdelrahman Elshaer</span>
      </div>
      <FontAwesomeIcon icon={faBars} style={{ color: "#016BDD" }} />
    </div>
    <div className="flex">
      <RatingBlock rating={4.5} />
      <span className="ms-4 text-slate-400">Jun 23, 2020</span>
    </div>
    <p className="text-slate-600 mt-3">
      Very good introduction to basic programming. Very easy for beginners in
      python who have already some programming background - but still extremely
      useful to quickly and efficiently learn python basics.
    </p>
  </div>
);

export default ReviewBlock;
