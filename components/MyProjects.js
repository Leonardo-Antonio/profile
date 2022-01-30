import { v4 as uuid } from "uuid";
import { useProject } from "../hooks/projects.hooks";
import { CardProject } from "./CardProject";

export const MyProjects = () => {
  const { repositories, loading } = useProject();
  return (
    <div>
      <div className="flex flex-wrap gap-5 justify-center">
        {repositories.map((repo) => (
          <CardProject repo={repo} key={uuid()} />
        ))}
      </div>
    </div>
  );
};
