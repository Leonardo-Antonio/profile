import { NavBar } from "../components/Navbar";
import Head from "next/head";
import styles from "../styles/ContainerLayoutDefault.module.css";
import Link from "next/link";
import Image from "next/image";

export const ContainerLayoutDefault = ({ children, title }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>

      <div className="h-screen">
        <div>
          <div>
            <NavBar />
            <div>{children}</div>
            <div className={styles.itemFooterLeft}>
              <div>
                <div className={styles.containerNav}>
                  <div className={styles.containerIcons}>
                    <span>
                      <Link href="https://github.com/Leonardo-Antonio">
                        <a target="_blank">
                          <Image
                            src="/icons/github.svg"
                            alt="icon_github"
                            width={35}
                            height={35}
                          />
                        </a>
                      </Link>
                    </span>
                    <span>
                      <Link href="https://www.linkedin.com/in/leonardo-antonio-nolasco-leyva-033873223/">
                        <a target="_blank">
                          <Image
                            src="/icons/linkedin.svg"
                            alt="icon_linkedin"
                            width={35}
                            height={35}
                          />
                        </a>
                      </Link>
                    </span>
                    <span>
                      <Link href="https://wa.me/+51996501260">
                        <a target="_blank">
                          <Image
                            src="/icons/wsp.svg"
                            alt="icon_wsp"
                            width={35}
                            height={35}
                          />
                        </a>
                      </Link>
                    </span>
                  </div>
                  <div className={styles.line}></div>
                </div>
              </div>
            </div>

            <div className={styles.itemFooterRight}>
              <div>
                <div className={styles.containerNav}>
                  <div className={styles.containerIcons}>
                    <span>
                      <Link href="mailto:leo2001.nl08@gmail.com">
                        <a target="_blank">
                          <Image
                            src="/icons/mail.svg"
                            alt="icon_mail"
                            width={35}
                            height={35}
                          />
                        </a>
                      </Link>
                    </span>
                  </div>
                  <div className={styles.line}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
