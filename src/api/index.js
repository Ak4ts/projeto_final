import { api } from "../utils";

export const login = async (email, password, navigate) => {
  console.log("a")
  await api.post("/login", {
      email,
      password,
    }).then((res) => {
      navigate("/cards")
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
  password2,
  navigate
) => {
  if (password !== password2) {
    alert("passwords doesn't match!");
  } else {
    api
      .post("/users", { username, email, password })
      .then((res) => {
        navigate("/cards")
      })
      .catch((res) => {
        alert("Something went wrong :(");
      });
  }
};
