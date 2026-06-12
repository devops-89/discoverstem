import { StaticImageData } from "next/image";
export interface NavItem {
  label: string;
  href?: string;
  items?: NavItem[];
}

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

export interface AccordionSectionData {
  title: string;
  items: {
    question: string;
    answer: string[];
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



export interface AdvisoryMember {
  title: string;
  name: string;
  role: string;
  desc:string,
  description: string[];
  image: string | StaticImageData;
  reverse: boolean;
}

export interface IlmSuccessStoryData {
  title: string;
  description: string;
  points: string[];
  buttonText: string;
  buttonLink: string;
  image: string;
}

export interface ProgramDetailData {
  title: string;
  description: string;
}
export interface IlmLearningTracksData {
  title: string;
  tracks: {
    id: number;
    title: string;
    description: string;
    outcome: string;
    icon: string;
    color: string;
  }[];
}

export interface InfoCardItem {
  id: number;
  label: string;
  value: string;
  description: string;
  color: string;
}

export interface OtherProgramsData {
  eyebrow: string;
  title: string;
  programs: {
    id: number;
    shortName: string;
    title: string;
    description: string;
    buttonText: string;
    href: string;
  }[];
}

export interface DIPProgramDetailData {
  title: string;
  content: string[];
}

export interface CardsSectionData {
  eyebrow?: string;
  title: string;
  description?: string;
}

export interface ResearchModule {
  id: number;
  title: string;
  description: string;
  duration: string; 
  level: "Beginner" | "Intermediate" | "Advanced"; 
}

export interface ResearchModulesSectionData {
  title: string;
  buttonText: string;
  modules: ResearchModule[];
}

export interface FoundationCoursesData {
  eyebrow: string;
  title: string;
  description: string;

  cards: {
    id: number;
    icon:
      | "users"
      | "lightbulb"
      | "target"
      | "message"
      | "file"
      | "puzzle"
      | "clipboard"
      | "science";
    level: string;
    title: string;
    description: string;
    duration: string;
  }[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqCategory {
  id: string;
  label: string;
  faqs: FaqItem[];
}

export interface SimpleTextSectionData {
  paragraphs: string[];
}

export interface EntrepreneurshipFundingData {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  points: string[];
}
export interface ImageTextPartnerSectionData {
  title: string;
  description: string[];
  image: string;
  imageAlt: string;
}

export interface ImageContentSplitData {
  topSection: {
    description: string[];
    image: string;
  };
  bottomSection: {
    image: string;
    description: string[];
  };
}

export interface PatentCertificatesData {
  title: string;
  items: {
    id: number;
    label: string;
    image: string;
    videoUrl: string;
  }[];
}

export interface ImageTextHighlightSectionData {
  title: string;
  image: string;
  imageAlt: string;
  content: string;
}
export interface CategoryAwardsData {
  title: string;
  items: {
    question: string;
    answer?: string[];
  }[];
}
export interface ResearchMentorTextData {
  title: string;
  content: (
    | {
        type: "paragraph";
        text: string;
      }
    | {
        type: "heading";
        text: string;
      }
    | {
        type: "list";
        items: string[];
      }
  )[];
}

export interface NavItem {
  label: string;
  href?: string;
  items?: NavItem[];
}

export interface ImpactQuoteSectionData {
  tag: string;
  description: string;
  quote: string;
  footerText: string;
}
export interface OutcomesSectionData {
  eyebrow: string;
  title: string;
  description: string;
  items: {
    number: string;
    text: string;
  }[];
}

export interface ResearchModulesSectionData {
  title: string;
  buttonText: string;
  modules: {
    id: number;
    title: string;
    description: string;
    duration: string;
    level: "Beginner" | "Intermediate" | "Advanced";
  }[];
}

export interface SuccessStoryCard {
  id: number;
  name: string;
  designation: string;
  image: string;
  description: string;
}

export interface VideoData {
  youtubeUrl: string;
  title: string;
}