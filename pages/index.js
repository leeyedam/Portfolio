import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import OlrimpickProject from "../components/olrimpick/OlrimpickProjectMain";
import NavBar from "../components/NavBar";
import OlrimpickProjectMain from "../components/olrimpick/OlrimpickProjectMain";
import OlrimpickProjectSub from "../components/olrimpick/OlrimpickProjectSub";
import ModuProjectMain from "../components/modu/ModuProjectMain";
import ModuProjectSub from "../components/modu/ModuProjectSub";
import AboutMe from "../components/AboutMe";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Yedam</title>
        <meta
          name="description"
          content="프론트엔드 개발자 이예담의 포트폴리오 사이트입니다."
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Yedam" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <NavBar />
        <OlrimpickProjectMain />
        <OlrimpickProjectSub />
        <ModuProjectMain />
        <ModuProjectSub />
        <AboutMe />
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  );
}
