import { Metadata } from "next";
import { HomePageContent } from "@/components/pages/home-page-content";

export const metadata: Metadata = {
  title: "Início",
  description:
    "Explore matérias, destaques e histórias que mostram como Curitiba abraçou a moda circular e o universo dos brechós.",
};

export default function Home() {
  return <HomePageContent />;
}
