import axios from "axios";

type Auth = {
  username: string;
  password: string;
};

export default function useAuth() {
  const login = async ({username, password}: Auth) => {
    try {
      const response = await axios.post(
        "https://api-burgerli.iwebtecnology.com/api/token",
        {username, password},
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          withCredentials: true,
        },
      );

      if (response.status === 200) {
        return response;
      }
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error) && error.response) {
        if (error.response.status === 400) {
          console.error("Invalid username or password");
        } else {
          console.error("An error occurred during login");
        }
      } else {
        console.error("An unexpected error occurred");
      }
    }
  };
  const register = async ({username, password}: Auth) => {
    try {
      const response = await axios.post(
        "https://api-burgerli.iwebtecnology.com/api/register",
        {username, password},
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      console.log(response);
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error) && error.response) {
        if (error.response.status === 400) {
          console.error("Invalid username or password");
        } else {
          console.error("An error occurred during login");
        }
      } else {
        console.error("An unexpected error occurred");
      }
    }
  };

  return {login, register};
}