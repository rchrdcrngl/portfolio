import About from "@/components/about";
import Contact from "@/components/contact";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import { ProjectData } from "@/lib/types";
import * as fs from 'fs';

export const metadata = {
  title: "Richard Maru Caringal | Full stack developer",
  description: "Richard Maru is a Computer Science senior at the University of Santo Tomas.",
};

async function getData(){
  let profileRaw = fs.readFileSync('profile.json', 'utf8');
  let dataRaw = fs.readFileSync('data.json', 'utf8');
  let profile = JSON.parse(profileRaw);
  let projects = JSON.parse(dataRaw) as ProjectData[];
  return {profile, projects}
}

export default async function Home() {
  const { profile, projects } = await getData();

  return (
    <main className="snap-y snap-proximity">
      <Intro name={profile.short_name} description={profile.description} chips={profile.chips} linkedIn={profile.contacts.find((contact: { type: string; }) => contact.type === "linkedin").url} github={profile.contacts.find((contact: { type: string; }) => contact.type === "github").url}/>
      <Skills skills={profile.skills} />
      <Projects projects={projects as ProjectData[]}/>
      <About aboutBody={profile.about} profileImage={profile.profile_img}/>
      <Contact contacts={profile.contacts}/>
    </main>
  );
}
