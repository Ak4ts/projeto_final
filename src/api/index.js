import { api } from "../utils";

export const login = async (email, password, navigate) => {
  let err
  await api.post("/login", {
      email,
      password,
    }).then((res) => {
      navigate("/cards")
      err = false
    })
    .catch((res) => {
      err = true;
    });
  return err
};

export const signin = async (
  username,
  email,
  password,
  password2,
  navigate
) => {
  if (password !== password2) {
    return true
  } else {
    api
      .post("/users", { username, email, password })
      .then((res) => {
        navigate("/cards")
        return false
      })
      .catch((res) => {
        return true
      });
  }
};
