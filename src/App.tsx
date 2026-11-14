import { SiteHeader } from "./components/layout/SiteHeader";
import { Contact } from "./sections/Contact/Contact";
import { Hero } from "./sections/Hero/Hero";
import { Projects } from "./sections/Projects/Projects";

export default function App() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
