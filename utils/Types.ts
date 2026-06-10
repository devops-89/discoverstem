
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
   alt?: string;
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

export interface PatentIntroData {
  title: string;
  description: string;
   
};
export type PatentType = "US" | "SA";

export type PatentFilterType = "All" | PatentType;

export interface PatentCardData {
  id: string;
  type: PatentType;
  title: string;
  image: string;
  inventors: string;
  inventorCount: number;
  googlePatentLink?: string;
  certificateLink?: string;
}
export interface StatItem {
  value: string;
  color: string;
  label?: string;
  flag?: string;
}



interface CollegeAcceptance {
  title: string;
  description?: string;
  image: string;
 
}

export interface CommonTextSectionData {
  title?: string;
  description?: string;
  points?: string[];
}

export type AdmissionBatchFilter =
  | "All Batches"
  | "Class of 2025"
  | "Previous Batches";

export type AdmissionProgramFilter =
  | "All"
  | "DIP"
  | "ILM"
  | "X-AILM"
  | "DIP & DEP";

export interface AdmissionStudent {
  id: number;
  name: string;
  initials: string;
  batch: AdmissionBatchFilter;
  program: Exclude<AdmissionProgramFilter, "All">;
  school: string;
  acceptedTo: string;
}
export interface CtaBannerData {
  title: string;
  highlight?: string;
  subtitle?: string;
  buttonText?: string;
}

export interface AwardImageItem {
  image: string;
  alt: string;
}

export type InnovationFilter = "All Statuses" | "Granted" | "Pending";

export interface InnovationCardItem {
  id: number;
  category: string;
  filterType: "Granted" | "Pending";
  statusIcon: string;
  image: string;
  title: string;
  awardIcon?: string;
  award: string;
  patentLink: string;
  certificateLink: string;
}
export interface SuccessStoryCard {
  id: number;
  name: string;
  designation: string;
  image: string;
  description: string;
  size: "large" | "small";
  position: "left" | "right";
}


export interface TeamMember {
  initials: string;
  name: string;
  role: string;
  color: string;
}

export interface StartupDetailData {
  title: string;
  subtitle: string;

  teamTitle: string;
  team: TeamMember[];

  problemTitle: string;
  problem: string;

  innovationTitle: string;
  innovation: string[];

  logo: string;
  startupImage: string;

  status: {
    title: string;
    value: string;
    description: string;
  };

  patent: {
    title: string;
    value: string;
    description: string;
  };

  website: {
    title: string;
    value: string;
    buttons: string[];
  };
}

export interface MediaSectionData {
  title: string;
  items: {
    id: number;
    tag: string;
    source: string;
    title: string;
    image: string;
    visitLink: string;
    pdfLink: string;
  }[];
}


export interface CenterDescriptionData {
  description: string;
}

export interface QuoteBannerData {
  quote: string;
  author: string;
}

export interface PatentFacesData {
  title: string;
  searchPlaceholder: string;
  students: {
    id: number;
    name: string;
    role: string;
    image: string;
    tag?: string;
  }[];
}

export interface AchievementStatItem {
  value: string;
  label: string;
  color: string;
}

export interface GallerySectionData {
  eyebrow: string;
  title: string;
  images: {
    id: number;
    image: string;
    alt: string;
    variant: "large" | "wide" | "small" | "last";
  }[];
}



export interface VideoSectionData {
  title: string;
  subtitle?: string;
  videoUrl: string;
}
export interface ContentSectionData {
  paragraphs: string[];
}

import { StaticImageData } from "next/image";

export interface AdvisoryMember {
  title: string;
  name: string;
  role: string;
  desc:string,
  description: string[];
  image: string | StaticImageData;
  reverse: boolean;
}