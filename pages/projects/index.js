import { SectionTitle } from "../../components/SectionTitle";
import { ContainerLayoutDefault } from "../../layouts/ContainerLayoutDefault";
import { MyProjects } from "../../components/MyProjects";

export default function Projects() {
  return (
    <ContainerLayoutDefault title="Projectos">
      <div className="container mx-auto">
        <div className="pt-6">
          <SectionTitle title="Projectos" />
        </div>

        <div className="pt-14 pb-6">
          <MyProjects />
        </div>
      </div>
    </ContainerLayoutDefault>
  );
}
