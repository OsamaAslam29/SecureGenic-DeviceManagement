import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import dashboard from "../../services/dashboard.service";
import DashCards from "./DashCards/DashCards";

const DashBoard = () => {
  const [stat, setStat] = useState();

  useEffect(() => {
    setStat(dashboard.getDashboardStats());
  }, []);

  console.log("our stats are", stat);

  return (
    <>
      <DashCards />
    </>
  );
};

export default DashBoard;
