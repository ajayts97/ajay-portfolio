import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Changelog from "@/components/Changelog";
import Stack from "@/components/Stack";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Changelog />
        <Stack />
        <About />
      </main>
      <Contact />
    </>
  );
}
