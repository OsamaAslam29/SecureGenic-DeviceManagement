import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

let token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiOTU0NTMzZTc3NWZiZTMyNThlMDllOTY0ZDZiNDViMjJmNGQzYWViMWZhZjFlOWRlZmVhNzAwNmVlYjU0MTAwZTU4YjlhOGFmMzk5OTUyOGEiLCJpYXQiOjE2NjE4NTQ4MzIsIm5iZiI6MTY2MTg1NDgzMiwiZXhwIjoxNjkzMzkwODMyLCJzdWIiOiI4NiIsInNjb3BlcyI6W119.kL1RAkTLIOO1lsuzYHR8UOUQf57UTe6SYVqCw9mCvFuRQuaf-ug_pMxR-KXhir1BogwS7cbU1jr9C2QLnB_GtKw46Arf0FEKHX-nauA9F-rjCrgdv6J8_ZjP0gthPdubWW5UnZICTxsn6pAKW-9J2RamD5E11OIkbRwZWOMHJwH488vm2Dg-5ah8kgaRExYYNpqxMQfEA3Va5MNlhyibclzetZV0SsvXTdTWWjhvmVmA8ApR0lg2bSsQQY5cJnyoq87XxIyd9soWBz8aekH1gfOlGHxUoyJuyMebyHUfce1M_hlHvoYx2pv9HC1Q3V7PdzDOdf0PRiAMfXzhTUeqtVM41MLDjHDmzf2OhppUx5dEwk2lQruQLJKiuLKyeazqLfGSFC0XOw-XgUQP17y_z4mSH_j_QRL2idc4l2lyL-KIjsTCINk3WkfEfykoEGQh_PCV9uAqKlElBWb8pF-3wJHfCx0S8pu6xmYGyHG3riqBvCT-MiNHWBQtsJ8npYd8xeMrHP-gsDyBGy63edf2XhcRSSNcAXkliFAImkjJBbWz0-AxFWyCta-g9mSZIkEYvXe2PsgD-00H37Y11GzXoKr_q6foCZhNNBwCPuGdG0LpwDad2-zJys8caHrS15Dy25QLVJl7S0COS1bUmENYG5k3rtSxAnX_Wmj81v4blKQ"
  

const http = {
  get: axios.get,
  post: axios.post,
  delete: axios.delete,
  put: axios.put,
};
// axios.defaults.headers.common["Access-Control-Allow-Origin"] =   "*";
function setJWT() {
  axios.defaults.headers.common["Authorization"] =   localStorage.getItem("token");
}

export { http, setJWT };
