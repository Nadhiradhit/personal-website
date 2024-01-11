import SectionDivider from "@/components/elements/section-devider";
import Intro from "./intro/intro";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro/>
      <SectionDivider/>
    </main>
  )
}

