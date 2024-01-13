import { ProjectData } from "@/lib/types";
import { notFound } from "next/navigation";
import * as fs from "fs";
import ProjectInfo from "@/components/project-intro";
import PhoneGallery from "@/components/phone-gallery";
import LaptopGallery from "@/components/laptop-gallery";
import TechStack from "@/components/tech-stack";

export const dynamicParams = false;

async function getData(slug: string) {
  const dataRaw = fs.readFileSync("data.json", "utf8");
  const projects = JSON.parse(dataRaw) as ProjectData[];
  return projects.find((p) => p.slug === slug);
}

export function generateStaticParams() {
  let dataRaw = fs.readFileSync("data.json", "utf8");
  let projects = JSON.parse(dataRaw) as ProjectData[];
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = await getData(params.slug);

  if (data == undefined) {
    console.log("notFound")
    notFound();
  }

  return (
    <main>
      <ProjectInfo title={data.title} description={data.description} image={data.images[0]} sourceCode={data.source_code} latestOutput={data.latest_output} />
      { data.type === 'mobile' ? <PhoneGallery images={data.images}/> : <LaptopGallery images={data.images}/>}
      <TechStack technologies={data.technology} />
    </main>
  );
}
