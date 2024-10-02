import { About } from "./about";
import { ContactUs } from "./contactus";
import { Footer } from "./footer";
import { Header } from "./header";
import { Hero } from "./hero";
import "./index.css"
import { JoinUs } from "./joinus";
import { Mentions } from "./mentions";
import { Partners } from "./partners";
import { Slider } from "./slider";

export default function GravityTeam() {
    return (
        <main className="bg-primary text-white min-h-screen">
      <Header />
      <Hero />
      <Slider />
      <About/>
      <Partners/>
      <Mentions/>
      <JoinUs/>
      <ContactUs/>
      <Footer/>
    </main>
    );
}