import { ProjectData } from "@/lib/types";
import { notFound } from "next/navigation";
import * as fs from "fs";

export const dynamicParams = false;

async function getData(slug: string) {
  let dataRaw = fs.readFileSync("data.json", "utf8");
  let projects = JSON.parse(dataRaw) as ProjectData[];
  return projects.find((p) => p.slug === slug);
}

export function generateStaticParams() {
  let dataRaw = fs.readFileSync("data.json", "utf8");
  let projects = JSON.parse(dataRaw) as ProjectData[];
  return projects.map((p) => { slug: p.slug });
}

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = await getData(params.slug);

  if (data == undefined) {
    notFound();
  }

  return (
    <main>
      <h1>{data?.title}</h1>
    </main>
  );
}
