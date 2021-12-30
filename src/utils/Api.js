import axios from "axios";

const api_url = "http://127.0.0.1:8000";

function apiSignIn(data) {
  const { username, password } = data;
  let config = {
    method: "get",
    url: `${api_url}/users/?name=${username}&password=${password}`,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };

  return axios(config);
}

function apiGetUserTodoList(data) {
  const { user_id } = data;
  let config = {
    method: "get",
    url: `${api_url}/todolist?user_id=${user_id}`,
    headers: {},
  };

  return axios(config);
}

export { apiSignIn, apiGetUserTodoList };
