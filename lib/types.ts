import { linkTypes } from "./data";

export type SectionName = (typeof linkTypes)[number]["name"];

export type ProjectImage = {
  url: string;
  description?: string | null;
};

export type ProjectData = {
  title: string;
  slug: string;
  description: string;
  type: 'mobile' | 'desktop';
  technology: string[];
  source_code?: string | null;
  latest_output?: string | null;
  images: ProjectImage[];
};

export type Contact = {
  name: string;
  url: string;
  type: string;
};
