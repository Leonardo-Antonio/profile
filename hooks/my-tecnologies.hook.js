import { myTecnologiesService } from "../services/my-tecnologies.service";

export const useTecnologies = () => {
  const tecnologies = myTecnologiesService();

  return {
    tecnologies,
  };
};
