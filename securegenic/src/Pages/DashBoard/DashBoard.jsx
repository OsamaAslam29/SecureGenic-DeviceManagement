import React, { useEffect, useState } from "react";
import dashboard from "../../services/dashboard.service";
// import { useDispatch } from "react-redux";
import DashCards from "./DashCards/DashCards";

const DashBoard = () => {
  const [data, setData] = useState();
  useEffect(async() => {
   await (dashboard.login());
    setData(dashboard.getDashboardStats());
  }, []);

  console.log("graphData", data);

  return (
    <>
      <DashCards />
    </>
  );
};

export default DashBoard;
