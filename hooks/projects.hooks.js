import { useEffect, useState } from "react";
import { repositoriesServices } from "../services/repositories.service";

export const useProject = () => {
  const [loading, setLoading] = useState(false);
  const [repositories, setRepositories] = useState([]);

  const getRespositories = async () => {
    setLoading(true);
    const { data, error } = await repositoriesServices();
    if (!error) setRepositories(data);
    setLoading(false);
  };

  useEffect(() => {
    getRespositories();
  }, []);

  return {
    repositories,
    loading,
  };
};
