import SectionDivider from "@/components/elements/section-devider";
import Intro from "../components/contents/Intro/intro";
import About from "../components/contents/About/About";
import Projects from "@/components/contents/Projects/Projects";
import Experiences from "@/components/contents/Expreriences/Experiences";
import Skills from "@/components/contents/Skills/Skills";
import Contact from "@/components/contents/contact/Contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Experiences />
      <Skills />
      <Contact />
    </main>
  )
}

