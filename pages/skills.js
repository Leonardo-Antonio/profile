import Image from "next/image";
import { SectionTitle } from "../components/SectionTitle";
import { ContainerLayoutDefault } from "../layouts/ContainerLayoutDefault";
import { getAllSkills } from "../services/skills.service";
import styles from "../styles/Skills.module.css";

export default function Skills() {
  const data = getAllSkills();

  return (
    <ContainerLayoutDefault title="Skills">
      <div className="container mx-auto">
        <div className="pt-6">
          <SectionTitle title="Skills" />
        </div>
        <div className="flex justify-center pt-24 pb-6">
          <div className=" flex flex-wrap">
            {data.map((skill) => (
              <div key={skill.name} className="p-8">
                <div>
                  <div className={styles.tooltip}>
                    <Image
                      src={skill.src}
                      alt={skill.name}
                      width={120}
                      height={120}
                    />
                    <span className={styles.tooltiptext}>{skill.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ContainerLayoutDefault>
  );
}
