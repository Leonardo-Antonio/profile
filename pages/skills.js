import Image from "next/image";
import { ContainerLayoutDefault } from "../layouts/ContainerLayoutDefault";
import { getAllSkills } from "../services/skills.service";
import styles from "../styles/Skills.module.css"

export default function Skills() {
  const data = getAllSkills();

  return (
    <ContainerLayoutDefault title="Skills">
      <div>
      <h1 className="text-center text-5xl font-semibold pt-6 pb-6">Mis Skills</h1>
        <div className="flex justify-center">
          <div className="w-9/12 flex flex-wrap">
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
