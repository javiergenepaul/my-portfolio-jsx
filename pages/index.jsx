import Head from "next/head";
import { Nav, Hero, About, Skills, Projects, Contacts } from "./components";

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col font-chakra transition-colors duration-500 ease-in bg-theme-light dark:bg-theme-dark">
            <Head>
                <title>Javi Portfolio</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="max-w-[1280px] w-full mx-auto py-16 h-screen">
                <Hero />
                {/* <Nav /> */}
                {/* <About />
                <Skills />
                <Projects />
                <Contacts /> */}
            </main>
        </div>
    );
}
