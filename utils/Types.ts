export type NavItem = {
  label: string;
  href: string;
};

export type FeatureCard = {
  title: string;
  description: string;
  borderColor: string;
  iconBg: string;
};

export type ProgramCard = {
  title: string;
  image: string;
};

export type SpotlightCard = {
  name: string;
  image: string;
};

export type PatentCard = {
  title: string;
  patentNumber: string;
  image: string;
};

export type AwardCard = {
  image: string;
};

export type ResearchLab= {
  title: string;
  image: string;
};

export type Contact= {
  title:string;
  description:string;
  image:string;
};

export type mediaCenter= {
  title:string;
  description:string;
  image:string;
};


export type BlogCardType= {
  title: string;
  description: string;
  date: string;
  author: string;
  comments: number;
  image: string;
  slug:string;
};

export type RecentPostType = {
  id: number;
  title: string;
  date: string;
  image: string;
};

export type Logo={
  image:string;
};

export type Startup = {
  logo: string;
  title: string;
  description: string;
};

export type Research = {
  image: string;
  title: string;
};

export type Student = {
  image: string;
  name: string;
};

export interface Step  {
  step: string;
  title: string;
  description: string;
};