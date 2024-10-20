import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import {FloatingNav} from "@/components/ui/FloatingNav";
import { navItems } from "@/lib/data";
import RecentProjects from "@/components/RecentProjects";
import { Clients } from "@/components/Clients";
import Experience from "@/components/Experience";
import {Approach} from "@/components/Approach";
import Footer from "@/components/Footer";
import { FrontendDesign } from "@/components/frontenddesign";



export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
<div className="max-w-7xl w-full text-white">
  <FloatingNav
  navItems={navItems}
  />
  <Hero/>
  <Grid/>
  <FrontendDesign/>
  <RecentProjects/>
  <Clients/>
  <Experience/>
  <Approach/>
  <Footer/>
</div>

    </main>
  );
}
