import SectionDivider from "@/components/elements/section-devider";
import Intro from "../components/contents/Intro/intro";
import About from "../components/contents/About/About";
import Projects from "@/components/contents/Projects/Projects";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
    </main>
  )
}

