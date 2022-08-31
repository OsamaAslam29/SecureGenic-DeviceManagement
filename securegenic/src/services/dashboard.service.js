import { http, setJWT } from "./http";
import { Promisable } from "./promisable.service";

const url = "/history-graph-data";

const dashboard = {
  getDashboardStats: async () => {
    setJWT();

    fetch("https://app.bel-energise.com/api/login", {
      body: "{\"email\":\"zara.shah@viiontech.com\", \"password\"soft100\",\"manufacturer\"asdsa\",\"model\"asdsa,\"platform\"iOS,\"app_version\"1.80}",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Token: "sfg999666t673t7t82"
      },
      method: "Get"
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
