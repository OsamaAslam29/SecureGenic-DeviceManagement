import React, { useEffect, useState } from "react";
import dashboard from "../../services/dashboard.service";
// import { useDispatch } from "react-redux";
import DashCards from "./DashCards/DashCards";
// ********* Login api calling ***********
const DashBoard = () => {
  const [data, setData] = useState();
  useEffect(() => {
   (dashboard.login());
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
