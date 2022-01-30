import axios from "axios";

export const repositoriesServices = async () => {
  try {
    const { data } = await axios({
      method: "GET",
      url: "https://api.github.com/users/Leonardo-Antonio/repos",
    });

    return {
      data,
      error: false,
    };
  } catch (error) {
    return {
      data: [],
      error: true,
    };
  }
};
