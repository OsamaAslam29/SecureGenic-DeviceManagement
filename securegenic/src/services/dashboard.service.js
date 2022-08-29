import { http, setJWT } from "./http";
import { Promisable } from "./promisable.service";

const url = "/history-graph-data";

const dashboard = {
  getDashboardStats: async () => {
    setJWT();

    fetch("https://app.bel-energise.com/api/login", {
      body: "{\"email\":\"zara.shah@viiontech.com\", \"password\":{\"design_token1\":\"Hi\",\"design_token2\":\"Hello\",\"design_token3\":\"World\",\"subject_token1\":\"XYZ\"}, \"recipient\":\"james@sample.com\"}",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Token: "sfg999666t673t7t82"
      },
      method: "POST"
    })

    // const [success, error] = await Promisable.asPromise(
    //   http.get(`${url}?plant_id=161&time=Daily&date=2022-08-01&type=4`)
    // );
    // if (success) {
    //   console.log(success);
    // }

    // return [success, error];
  },
};

export default dashboard;
