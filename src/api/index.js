import { api } from "../utils";

export const login = async (email, password) => {
  api
    .post("/login", {
      email,
      password,
    })
    .then((res) => {
      return true;
    })
    .catch((res) => {
      alert(res.response.data.error);
      return false;
    });
};

export const signin = async (
  username,
  email,
  password,
  password2
) => {
  if (password !== password2) {
    alert("passwords doesn't match!");
  } else {
    api
      .post("/user", { username, email, password })
      .then((res) => {
        return true;
      })
      .catch((res) => {
        alert("Something went wrong :(");
        return false;
      });
  }
};
