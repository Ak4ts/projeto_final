import { api } from "../utils";

export const login = async (email: string, password: string) => {
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
  username: string,
  email: string,
  password: string,
  password2: string
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
