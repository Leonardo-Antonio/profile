import { useTecnologies } from "../hooks/my-tecnologies.hook";
import { v4 as uuid } from "uuid";

export const MyTecnologiesList = () => {
  const { tecnologies } = useTecnologies();
  return (
    <div>
      <ul>
        {tecnologies.map((item) => (
          <li key={uuid()}>
            <div className="flex flex-row items-center">
              <div className="bg-black p-1 w-1 h-1 mr-2"></div> {item}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
