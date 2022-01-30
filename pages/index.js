import Image from "next/image";
import Link from "next/link";
import { ContainerLayoutDefault } from "../layouts/ContainerLayoutDefault";

const Index = () => {
  return (
    <ContainerLayoutDefault title="Portafolio">
      <div className="flex justify-center items-center z-50">
        <Link href="/about-me">
          <a>
            <Image
              src="/images/banner.svg"
              alt="Banner"
              width={1100}
              height={800}
            />
          </a>
        </Link>
      </div>
    </ContainerLayoutDefault>
  );
};

export default Index;
