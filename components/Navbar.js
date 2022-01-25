import Image from "next/image";
import Link from "next/link";

export const NavBar = () => {
  return (
    <div className="pl-6 pr-6">
      <div className="flex flex-row justify-between items-center">
        <section>
          <div className="flex items-center">
            <div className="p-2">
              <Image
                src="/images/icon.svg"
                width={50}
                height={50}
                alt="Landscape picture"
              />
            </div>

            <strong className="robotoCondensed">Portafolio</strong>
          </div>
        </section>

        <section>
          <div className="flex flex-row items-center">
            <div className="p-5">
              <Link href="/skills">
                <a className="itemNav text-lg font-normal robotoCondensed">Skills</a>
              </Link>
            </div>
            <div className="p-5">
              <Link href="/projects">
                <a className="itemNav text-lg font-normal robotoCondensed">Proyectos</a>
              </Link>
            </div>
            <div className="p-5">
              <Link href="/projects">
                <a className="itemNav text-lg font-normal robotoCondensed">
                  Acerca de mí
                </a>
              </Link>
            </div>
            <div className="p-5">
              <Link href="/contact-us">
                <a className="text-lg font-normal robotoCondensed">
                  <div className="btnNav flex items-center justify-center">Contactame</div>
                </a>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
