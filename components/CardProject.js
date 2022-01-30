import Image from "next/image";
import Link from "next/link";

export const CardProject = ({ repo }) => {
  return (
    <div className="w-80 h-80 z-20 p-6 hover:scale-105 ease-in hover:ease-in duration-300" style={{ backgroundColor: "#112240" }}>
      <div className="h-full w-full flex flex-col justify-between">
        <div>
          <div className="flex flex-row justify-between">
            <div>
              <Image src="/images/dir.svg" alt="" width={100} height={100} />
            </div>
            <div>
              <Link href={repo.html_url}>
                <a target="_blank">
                  <Image src="/images/link.svg" width={30} height={30} alt="" />
                </a>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white text-xl pt-2 pb-4">
              {repo.name}
            </h3>

            <div>
              <p style={{ color: "#8892B0" }}>{repo.description}</p>
            </div>
          </div>
        </div>

        <div>
          <span style={{ color: "#8892B0" }} className="font-light">
            {repo.language}
          </span>
        </div>
      </div>
    </div>
  );
};
