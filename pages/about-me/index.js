import Link from "next/link";
import { MyTecnologiesList } from "../../components/MyTecnologies";
import { SectionTitle } from "../../components/SectionTitle";
import { ContainerLayoutDefault } from "../../layouts/ContainerLayoutDefault";

export default function AboutMe() {
  return (
    <ContainerLayoutDefault title="Acerca de mi">
      <div className="container mx-auto">
        <div className="pt-6">
          <SectionTitle title="Acerca de mi" />
        </div>

        <div className="pt-24 pb-6">
          <div className="flex flex-row gap-10">
            <div className="w-1/2 z-10">
              <p>
                Hola!. Soy
                <span className="text-blue-500 font-semibold p-1">
                  Leonardo
                </span>
                ,
                <span className="font-semibold">
                  desarrollador de software - con experiencia en desarrollo de
                  ecommerce, software a medida y automatización de procesos de
                  software
                </span>
                , actualmente soy fullstack en proyectos independientes y
                desarrollador vtex en prodequa.
                <br />
                <br />
                Siéntase libre de echar un vistazo a mis últimos proyectos en mi
                <Link href="https://github.com/Leonardo-Antonio">
                  <a
                    target="_blank"
                    className="text-blue-500 font-semibold p-1"
                  >
                    github
                  </a>
                </Link>
                o la carta de la página, o puede ponerse en contacto conmigo
                para cualquier consulta o proyecto.
              </p>
            </div>
            <div className="w-1/2 z-10">
              <div>
                <h4>
                  <strong>
                    Actualmente he estado trabajando y/o utilizando las
                    siguientes tecnologias:
                  </strong>
                </h4>
              </div>

              <div>
                <div className="pt-6 pb-6">
                  <MyTecnologiesList />
                </div>
                <div>
                  <Link href="/skills">
                    <a>
                      <div className="underline font-medium text-blue-500">
                        Ver todos los skills
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContainerLayoutDefault>
  );
}
