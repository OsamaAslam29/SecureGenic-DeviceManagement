import { http, setJWT } from "./http";
import { Promisable } from "./promisable.service";

const url = "/history-graph-data";

const dashboard = {
  getDashboardStats: async () => {
    setJWT();

    const [success, error] = await Promisable.asPromise(
      http.get(`${url}?plant_id=161&time=Daily&date=2022-08-01&type=4`)
    );
    if (success) {
      console.log(success);
    }

    return [success, error];
  },
  login: async () => {
    let data = {
      email: "zara.shah@viiontech.com",
      password: "soft100",
      manufacturer: "asdsa",
      model: "asdsa",
      platform: "iOS",
      app_version: "1.80",
    };
    const [success, error] = await Promisable.asPromise(
      http.post(`/login`, data)
    );
    if (success) {
      localStorage.setItem("token",success.data?.result?.token);
      console.log(success.data.result.token);
    }

    return [success, error];
  },
};
export default dashboard;
