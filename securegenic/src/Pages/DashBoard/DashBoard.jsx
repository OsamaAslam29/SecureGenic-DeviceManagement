import React, { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import dashboard from "../../services/dashboard.service";
import DashCards from "./DashCards/DashCards";

const DashBoard = () => {
  // const dispatch = useDispatch();
  // let [data, setData] = useState();
  // useEffect(() => {
  //   setData(dashboard.getDashboardStats(dispatch));
  // }, [dispatch]);

  // console.log("data", data);

  return (
    <>
      <DashCards />
    </>
  );
};

export default DashBoard;
