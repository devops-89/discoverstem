import abdul from "@/public/Images/AboutUs/Advisory/abdulbaker.jpg";
import charles from "@/public/Images/AboutUs/Advisory/charlesrodenberger.jpg";
import richard from "@/public/Images/AboutUs/Advisory/richard.jpg";
import sameer from "@/public/Images/AboutUs/Advisory/sameerahmed.jpg";
import { default as sanjay, default as sanju } from "@/public/Images/AboutUs/Advisory/sanjaysoni.jpg";
import aamir from "@/public/Images/AboutUs/PanelExperts/Aamir-Mirza.jpg";
import anthony from "@/public/Images/AboutUs/PanelExperts/Anthony.jpg";
import asim from "@/public/Images/AboutUs/PanelExperts/Asim.jpg";
import babar from "@/public/Images/AboutUs/PanelExperts/Babar.jpg";
import baron from "@/public/Images/AboutUs/PanelExperts/baron.jpg";
import basho from "@/public/Images/AboutUs/PanelExperts/bashoo.jpg";
import darshan from "@/public/Images/AboutUs/PanelExperts/Darshan.jpg";
import hari from "@/public/Images/AboutUs/PanelExperts/Hari.jpg";
import jyoti from "@/public/Images/AboutUs/PanelExperts/Jyoti.png";
import mani from "@/public/Images/AboutUs/PanelExperts/Mani.jpg";
import nadeem from "@/public/Images/AboutUs/PanelExperts/nadeem.jpg";
import omar from "@/public/Images/AboutUs/PanelExperts/omar.jpg";
import peter from "@/public/Images/AboutUs/PanelExperts/peter.jpeg";
import saket from "@/public/Images/AboutUs/PanelExperts/saket.jpg";
import shahin from "@/public/Images/AboutUs/PanelExperts/shahin.jpg";
import shefali from "@/public/Images/AboutUs/PanelExperts/Shefali.jpg";
import shreyas from "@/public/Images/AboutUs/PanelExperts/shreyas.png";
import sudhir from "@/public/Images/AboutUs/PanelExperts/sudhir.jpg";
import usman from "@/public/Images/AboutUs/PanelExperts/usman.jpg";
import venkat from "@/public/Images/AboutUs/PanelExperts/venkat.jpg";
import zizis from "@/public/Images/AboutUs/PanelExperts/Zizis-Kozlakidis.jpg";
import patent from "@/public/Images/AboutUs/StemFoundation/filePatent.png";
import cpa from "@/public/Images/AboutUs/StemFoundation/freeCpa.png";
import mentoring from "@/public/Images/AboutUs/StemFoundation/freeMentoring.png";
import infra from "@/public/Images/AboutUs/StemFoundation/infrastructure.png";
import support from "@/public/Images/AboutUs/StemFoundation/legalSupport.png";
import funding from "@/public/Images/AboutUs/StemFoundation/seedFunding.png";
import stem from "@/public/Images/AboutUs/StemFoundation/StemFoundation.png";

import type {
  AccordionSectionData,
  AchievementStatItem,
  AdmissionStudent,
  AwardCard,
  AwardImageItem,
  BlogCardType,
  CardsSectionData,
  CenterDescriptionData,
  CommonTextSectionData,
  Contact,
  ContentSectionData,
  CtaBannerData,
  DIPProgramDetailData,
  EntrepreneurshipFundingData,
  FaqCategory,
  FeatureCard,
  FoundationCoursesData,
  GallerySectionData,

  IlmLearningTracksData,
  IlmSuccessStoryData,
  ImageContentSplitData,
  ImageTextHighlightSectionData,
  ImageTextPartnerSectionData,
  ImpactQuoteSectionData,
  InfoCardItem,
  InnovationCardItem,
  InnovationFilter,
  
  Logo,
  mediaCenter,
  MediaSectionData,
  NavItem,
  OtherProgramsData,
  OutcomesSectionData,
  PatentCard,
  PatentCardData,
  PatentCertificatesData,
  PatentFacesData,
  ProgramCard,
  ProgramDetailData,

  QuoteBannerData,
  RecentPostType,
  Research,
  ResearchLab,
  ResearchMentorTextData,
  ResearchModulesSectionData,
  SimpleTextSectionData,
  SpotlightCard,
  Startup,
  StartupDetailData,
  StatItem,
  Step,
  Student,
  SuccessStoryCard,
  VideoData,
  VideoSectionData
} from "@/utils/Types";
export const heroImage =
  "/Images/Home/HeroSection.png";

export const navItems: NavItem[] = [
  { label: "About Us", href: "/about" },
  { label: "Programs", href: "#programs" },
  { label: "Opportunities", href: "#programs" },
  { label: "Success Stories", href: "#spotlight" },
  { label: "Media Center", href: "#innovations" },
  { label: "Events", href: "#awards" },
  { label: "Contact", href: "#contact" },
];

export const featureCards: FeatureCard[] = [
  {
    title: "Nurturing Prodigies",
    description:
      "DiscoverSTEM creates Wunderkind! We nurture a child’s inborn capability to think outside of the box, empower them with logical thinking and critical analysis skills and then challenge them to solve the world's toughest problems.",
    borderColor: "#7b53a1",
    iconBg: "rgba(123,83,161,0.18)",
  },
  {
    title: "Inspiring Innovation",
    description:
      "We pride ourselves in providing the right conditioning and stimuli for children to capitalize on their creative thinking. While children learn nuances of innovation, we also mentor parents to develop an ‘innovation culture’ at home.",
    borderColor: "#ee4823",
    iconBg: "rgba(238,72,35,0.16)",
  },
  {
    title: "Launching Startups",
    description:
      "We have developed a startup ecosystem for children to transform their ideas and solutions to market-ready commercial innovations. From raising funds to company formation, our students get complete & complimentary support in forming their startups.",
    borderColor: "#f9a51e",
    iconBg: "rgba(249,165,30,0.2)",
  },
  {
    title: "Expert Mentors",
    description:
      "Exclusive access to Innovation Facilitators and a Panel of Experts who dedicate their time to enhancing the intellectual abilities of growing minds. They mentor students and challenge them towards logical thinking and critical analysis.",
    borderColor: "#619040",
    iconBg: "rgba(98,142,67,0.2)",
  },
];

export const programs: ProgramCard[] = [
  {
    title: "Summer Impact Program",
    image: "/Images/Home/Programs/OurProgram1.png",
    link: "/programs/sip"
  },
  {
    title: "Ivy League Mentorship",
    image: "/Images/Home/Programs/OurProgram2.png",
     link: "/programs/ilm"
  },
  {
    title: "DiscoverSTEM Innovation Program",
    image: "/Images/Home/Programs/OurProgram3.png",
     link: "/programs/dip"
  },
];

export const studentSpotlight: SpotlightCard[] = [
  { name: "Madhalasa Iyer", image: "/Images/Home/Spotlight/1.png", college: "Princeton, UPenn, Cornell, Caltech" },
  { name: "Vedanth Venkatesh", image: "/Images/Home/Spotlight/2.jpg", college: "Stanford University" },
  { name: "Nikit Thoduguli", image: "/Images/Home/Spotlight/3.jpg", college: "MIT" },
  { name: "Adam Mhal", image: "/Images/Home/Spotlight/4.jpg", college: "MIT (CS)" },
  { name: "Prisha Bhat", image: "/Images/Home/Spotlight/prisha.jpg", college: "Harvard University" },
  { name: "Zashaan Shaikh", image: "/Images/Home/Spotlight/Zashaan.jpg", college: "Princeton, Georgia Tech, Rice" },
  { name: "Shreya Nair", image: "/Images/Home/Spotlight/shreya.jpg", college: "UPenn" },
  { name: "Isha Agrawal", image: "/Images/Home/Spotlight/Isha.jpg", college: "Cornell, UT Austin, UIUC" },
  { name: "Tanvi Saxena", image: "/Images/Home/Spotlight/Tanvi.jpg", college: "Cornell University" },
  { name: "Dhruv Alamuri", image: "/Images/Home/Spotlight/Dhruv.jpg", college: "UT Austin (CS)" },
  { name: "Aniq S.", image: "/Images/Home/Spotlight/Aniq.jpg", college: "UT Austin (CS)" },
  { name: "Rayhan Shanavas", image: "/Images/Home/Spotlight/rayhan.png", college: "UNC Chapel Hill" },
  { name: "Nakshatra Piduri", image: "/Images/Home/Spotlight/nakshatra.jpg", college: "UC Berkeley, Creighton, Ohio State" },
  { name: "Reem Khan", image: "/Images/Home/Spotlight/reem.jpg", college: "USC IYA" },
  { name: "Rania Khan", image: "/Images/Home/Spotlight/rania.jpg", college: "USC IYA (Dean's Scholar)" },
  { name: "Abdullah Kabeer", image: "/Images/Home/Spotlight/abdullah.jpg", college: "McCombs School of Business" },
];

export const patents: PatentCard[] = [
  {
    title: "Smart Shower Head",
    patentNumber: "USPTO Patent Number: XXXXXXX",
    image: "/Images/Home/Patents.png",
  },
  {
    title: "Smart Shower Head",
    patentNumber: "USPTO Patent Number: XXXXXXX",
    image: "/Images/Home/Patents.png",
  },
];

export const innovationCards: PatentCard[] = [
  {
    title: "An automated system for cleaning & recovering spilled oil",
    patentNumber: "DiscoverSTEM Students",
    image: "/Images/Home/Trailblazing/1.png",
  },
  {
    title: "An automated system for cleaning & recovering spilled oil",
    patentNumber: "DiscoverSTEM Students",
    image: "/Images/Home/Trailblazing/2.png",
  },
];

export const awardCards: AwardCard[] = [
  { image: "/Images/Home/Awards/1.png" },
  { image: "/Images/Home/Awards/2.png" },
  { image: "/Images/Home/Awards/3.png" },
  { image: "/Images/Home/Awards/4.png" },
];

export const testimonial = {
  name: "Dr. Hashima Hasan",
  role: "Program Scientist, NASA.",
  image: "/Images/Home/Testimonials/HasinaHasn.png",
  quote:
    "What started as a small mentoring program in 2016 has now evolved to one where students have won NASA innovation awards, patented their innovations, and are heading towards commercialization.",
};

export const mirzaFaizan = {
  name: "Mirza Faizan",
  role: "Aerospace Scientist & Inventor of GRIPS",
  image: "/Images/AboutUs/MirzaFaizan.png",
  experience: "10 years of experience",
  description:
    "Faizan is an aerospace scientist and inventor of the GRIPS system, a real-time runway safety technology that prevents incursions, excursions, and detects debris. He has extensive experience in aerospace, defense, and mission-critical system development. His collision-prediction algorithm is highly appreciated by experts from NASA, the Pentagon-AMRDEC, and the US Air Force. \nHe is frequently consulted by global R&D teams for his expertise in innovation, aerospace design, and aviation safety.\n\nAlongside his technical work, Faizan holds a Bachelor’s degree in Psychology with a focus on child learning and development. His exceptional contributions to aerospace and defense earned him a U.S. permanent residency under the prestigious ‘Einstein Visa’ category.",
  email:"mirza.faizan@discoverstem.info",
  socialLinks: {
    facebook: "#",
    twitter: "#",
    linkedin: "#",
    instagram:"#",
  },

  shortBio:
    "Alongside his technical work, Faizan holds a Bachelor's degree in Psychology with a focus on child learning and development. His exceptional contributions to aerospace and defense earned him a U.S. permanent residency under the prestigious 'Einstein Visa' category.",

  awards: {
  leftTitle:
    "For his innovation GRIPS, he was nominated, finalist, and awarded various national and international awards like:",
    
  rightTitle:
    "In recognition of his remarkable mentoring in STEM, Innovation, Creative Thinking, and enabling school kids to Think, Explore and Innovate, he was awarded:",

  left: [
    "Business Leaders of Tomorrow Award-2011’ by Economic Times and Ernst & Young (Top 5 in India among 50,000 nominees, evaluated by the Jury panel which includes Innovation Advisor to the Prime Minister of India),",
    
    "‘Airline Industry Innovation Award–2013’ (Winner),",
    
    "‘IHS Jane’s Air Traffic Management Award–2014’ (shortlisted among the Top 4 runway safety technologies developed globally) by World Air Traffic Management Congress.",
    
    "Listed among ‘8 Lesser known Biharis who Played a Key Role in Shaping Modern India’",
  ],

  right: [
    "Freedoms Foundation’s National Award; the ‘George Washington Honor Medal (Education)-2020’",
    
    "He was also awarded ‘Innovative Teacher of the Year-2017’ by Conrad Foundation at NASA Kennedy Space Center for mentoring youths for Innovation and Creativity.",
    
    "Faizan also received a ‘Teacher’s Certificate of Recognition’ from the National Space Society at International Space Development Conference 2018 in Los Angeles for mentoring over 25 award-winning students at NASA Ames Space Settlement International Challenge.",
    
    "The Grand Lodge of Texas awarded him with the ‘Apollo Science Teaching Award 2017’ (an award given in honor of NASA’s Apollo Mission).",
  ],
}
};

export const ContactUs:Contact ={
  title:"Contact Us",
  description:"Get Started on Your Journey to Become an Innovator, Researcher or Entrepreneur.",
  image:"/Images/ContactUs/HeroSection.jpg",
};

export const Heromedia:mediaCenter=
  {
  title:"Media Center",
  description:"Get started on your journey to become an innovator, researcher or entrepreneur.",
  image:"/Images/ContactUs/HeroSection.jpg",
  };

export const contactData = {
  title: "What happens in a Free Information Session?",

  description:
    "DiscoverSTEM Information Session is the first opportunity to explore more about our programs and discover a clear pathway to help children become innovators, researchers, or entrepreneurs.\nDuring the session, you will learn about:",

  sections: [
    {
      title: "About DiscoverSTEM",
      text: "Understand our mission, how we empower young minds, and what makes us the world's leading platform for future researchers, inventors, and entrepreneurs.",
    },
    {
      title: "Programs",
      text: "Explore the various DiscoverSTEM programs which empower students to develop innovative & patentable solutions to solve real-world problems, conduct hands-on research, and build startups.",
    },
    {
      title: "Accomplishments",
      text: "Get inspired by our students' achievements—patents, global awards, published research, and admissions to top universities through their DiscoverSTEM experience.",
    },
    {
      title: "Enrollment",
      text: "Get clarity on how a student can join DiscoverSTEM — from application steps and eligibility to selection steps.",
    },
  ],
};

export const contactInfoSessionNote =
  "The information session is followed by the Tour of the Innovation & Research Labs.";


export const researchLabs: ResearchLab[] = [
   {
        title: "Aerospace Research Lab",
        image: "/Images/ContactUs/image2aerospacellab.jpg",
        href: "/opportunities/aerospace_research_lab",
    },
    {
        title: "AI-ML and Autonomous Tech Research Lab",
        image: "/Images/ContactUs/image3ailab.jpg",
        href: "/opportunities/ai-autonomous-tech-and-robotics-research-lab",
    },
    {
        title: "Banking, Finance & Fintech Research Lab",
        image: "/Images/ContactUs/image7bankinglab.jpg",
        href: "/opportunities/banking-finance-fintech-research-lab",
    },
    {
        title: "Energy & Environment Research Lab",
        image: "/Images/ContactUs/image5energylab.jpg",
        href: "/opportunities/energy-environment-research-lab",
    },
    {
        title: "Genomics, Biotechnology & Health Sciences Research Lab",
        image: "/Images/ContactUs/image4geolab.jpg",
        href: "/opportunities/genomics-biotechnology-health-sciences-research-lab",
    },
    {
        title: "Neurotech & Brain-Computer Interface",
        image: "/Images/ContactUs/image1lab.jpg",
        href: "/opportunities/neurotech-brain-computer-interface",
    },
];


export const blogCards: BlogCardType[] = [
  {
    title: "Driving Business Growth with Custom Software Solutions in 2025",
    description:
      "Each demo built with Teba will look different. You can customize almost anything in appearance of your website with only a few clicks.",
    date: "5 Min",
    author: "Admin",
    comments: 3,
    image: "/Images/MediaCenter/sample.jpg",
    slug: "business-growth-2025",
  },
  {
    title: "Driving Business Growth with Custom Software Solutions in 2025",
    description:
      "Each demo built with Teba will look different. You can customize almost anything in appearance of your website with only a few clicks.",
    date: "5 Min",
    author: "Admin",
    comments: 3,
    image: "/Images/MediaCenter/sample.jpg",
    slug: "custom-software-2025",
  },
  {
    title: "Driving Business Growth with Custom Software Solutions in 2025",
    description:
      "Each demo built with Teba will look different. You can customize almost anything in appearance of your website with only a few clicks.",
    date: "5 Min",
    author: "Admin",
    comments: 3,
    image: "/Images/MediaCenter/sampleImg.avif",
    slug: "software-solutions-guide",
  },
];

export const recentPosts: RecentPostType[] = [
  {
    id: 1,
    title: "Driving Business Growth with Custom Software Solutions in 2025",
    date: "09 May, 2024",
    image: "/Images/MediaCenter/posts/post1.png",
  },
  {
    id: 2,
    title: "How Custom Software Solutions Drive Business Growth in 2025",
    date: "09 May, 2024",
    image: "/Images/MediaCenter/posts/post2.png",
  },
  {
    id: 3,
    title: "Powering Business—Always On, Always Ready.",
    date: "09 May, 2024",
    image: "/Images/MediaCenter/posts/post3.png",
  },
];

// data/sipData.ts

export const sipData = {
  title: "Summer Impact Program (SIP)",
  image:"/Images/Programs/sip/SummerImpact.jpg",
  description1: "Every year, we meet exceptional high school students, those with near-perfect GPAs, top-tier SAT/ACT scores, and a full roster of AP courses, who realize too late that academic excellence alone isn't enough to stand out in elite college admissions. They missed the opportunity to join our 4-year Ivy League Mentorship (ILM) program, where students build startups, file patents, publish research, and cultivate a profile that truly sets them apart.",
  description2:"To bridge that gap, we created the Summer Impact Program (SIP), an accelerated, high-intensity version of ILM designed to deliver the same prestigious outcomes in eight transformative weeks. SIP empowers high school students to become innovators, entrepreneurs, and researchers, fast. It's the perfect opportunity for students who are running out of time but still want to craft a college application that demands attention. Time is running out. This summer could change everything.",
  statsTitle: "ILM Success Stories: First Batch Results (2025)",

  statsDescription:
    "The first batch of DiscoverSTEM’s Ivy League Mentorship (ILM 2021-25) program has achieved extraordinary success in their college admissions journey. These students have secured acceptances at some of the most prestigious universities in the United States. The exceptional outcome validates our unique approach to nurturing future innovators, researchers, entrepreneurs and leaders.",

  points: [
    "83% ILM Students who graduated high school in 2025 accepted to the Top 10 US Schools",
    "94% ILM Students who graduated high school in 2025 accepted to the Top 21 US Schools",
  ],
};

// data/programDetailsData.ts

export const programDetailsData= {
  title: "Program Details",
  description:
    "Summer Impact Program (SIP) is a highly selective summer program. It provides an accelerated pathway turning high school students into innovators, entrepreneurs and researchers of tomorrow.\n We offer three high impact learning tracks. We mentor you with the goal that you achieve unparalleled and meaningful outcomes by the end of the program.",

  cards: [
    {
      title: "Entrepreneurs",
      image: "/Images/Programs/sip/entrepreneur.jpg",
      description:
        "Commercialize great ideas that can positively impact the world. Launch your start up. Who knows, by the time you finish college, you could be leading the next unicorn.",
      outcome:
        "Outcome: Startup incorporated, Seed funding arranged, product R&D completed, prototyping/MVP initiated, website developed and social media presence set up.",
      footer:
        "Startup launched and credentialed by 15th October, 2025.",
    },
    {
      title: "Inventors",
      image: "/Images/programs/sip/inventors.jpg",
      description:
        "Generate great ideas to solve the problems that matter to our world. Invent, design and create a patentable innovation. Perhaps your invention will change the world positively.",
      outcome:
        " One patentable innovation ready, technical design complete, patent application filed at the United States Patent & Trademark Office.",
      footer:
        "US Patent Pending status credentialed by 15th October, 2025.",
    },
    {
      title: "Researchers",
      image: "/Images/programs/sip/researchers.jpg",
      description:
        "Lead with influence. Convert your out-of-the-box ideas into purposeful research, conducted scientifically, and submit for publication. You might discover the next miracle medicine!",
      outcome:
        "One ready-to-publish research, submitted to journals and publishers",
      footer:
        "Publication pending status by 15th October, 2025.",
    },
  ],
};

export const logosData: Logo[] = [
  {
    image: "/Images/Programs/sip/logo/harvard.png",
    alt: "Harvard University",
  },
  {
    image: "/Images/Programs/sip/logo/stanford.png",
    alt: "Stanford University",
  },
  {
    image: "/Images/Programs/sip/logo/princeton.png",
    alt: "Princeton University",
  },
  {
    image: "/Images/Programs/sip/logo/mit.png",
    alt: "Massachusetts Institute of Technology",
  },
  {
    image: "/Images/Programs/sip/logo/cornell.png",
    alt: "Cornell University",
  },
  {
    image: "/Images/Programs/sip/logo/nyu.png",
    alt: "New York University",
  },
  {
    image: "/Images/Programs/sip/logo/johns.png",
    alt: "Johns Hopkins University",
  },
  {
    image: "/Images/Programs/sip/logo/rice.png",
    alt: "Rice University",
  },
  {
    image: "/Images/Programs/sip/logo/berkeley.png",
    alt: "University of California Berkeley",
  },
  {
    image: "/Images/Programs/sip/logo/georgia.png",
    alt: "Georgia Institute of Technology",
  },
  {
    image: "/Images/Programs/sip/logo/brown.png",
    alt: "Brown University",
  },
  {
    image: "/Images/Programs/sip/logo/penn.png",
    alt: "University of Pennsylvania",
  },
  {
    image: "/Images/Programs/sip/logo/caltech.png",
    alt: "California Institute of Technology",
  },
  {
    image: "/Images/Programs/sip/logo/ucla.png",
    alt: "University of California Los Angeles",
  },
];

export const startupsData: Startup[] = [
  {
    logo: "/Images/Programs/sip/squat.png",
    title: "Squat Guard",
    description:
      "Revolutionary portable kit ensuring flawless squat alignment and joint symmetry.",
  },
  {
    logo: "/Images/Programs/sip/uvset.png",
    title: "UVSET",
    description:
      "Self-disinfecting door handle mechanism to prevent the spread of infections.",
  },
  {
    logo: "/Images/Programs/sip/meb.png",
    title: "Mental Emotional Behavioral",
    description:
      "Unique peer-to-peer feedback system to predict mental, emotional and behavioral wellness.",
  },
];

export const researchData: Research[] = [
  {
    image: "/Images/Programs/sip/research-thought-controlled-wheelchair.jpg",
    title: "Converting an Electric Wheelchair into a Thought-Controlled Wheelchair for Paraplegics Using Brain-Computer Interface Technology",
    link: "https://meridian.allenpress.com/innovationsjournals-IDDB/article/4/2024/89/505304/Converting-an-Electric-Wheelchair-into-a-Thought",
    video: "https://www.youtube.com/embed/wc-8P8oZAlk",
  },
  {
    image: "/Images/Programs/sip/research-eeg-wheelchair.jpg",
    title: "Affordable EEG-Controlled Wheelchair Attachment for Fully Immobilized Individuals",
    link: "https://meridian.allenpress.com/innovationsjournals-IDDB/article/2/2022/73/488269/Abstracts-Presented-at-the-2nd-Annual-Advancing#14834798",
    video: "https://www.youtube.com/embed/NdObJRA7sYg",
  },
  {
    image: "/Images/Programs/sip/research-mental-behavioral.jpg",
    title: "Mental, Emotional and Behavioral Reporting System",
    link: "https://meridian.allenpress.com/innovationsjournals-IDDB/article/2/2022/73/488269/Abstracts-Presented-at-the-2nd-Annual-Advancing#14834806",
    video: "https://www.youtube.com/embed/3u8l95qT5Hc",
  },
  {
    image: "/Images/Programs/sip/research-uvset-safetouch.jpg",
    title: "Reopen the Doors of the World with UVSET Safetouch",
    link: "https://meridian.allenpress.com/innovationsjournals-IDDB/article/2/2022/73/488269/Abstracts-Presented-at-the-2nd-Annual-Advancing#14834790",
    video: "https://www.youtube.com/embed/LVDJbXqqtBI",
  },
];

export const studentsData: Student[] = [
  {
    image: "/Images/Programs/sip/madhalasa-thumb.webp",
    name: "Madhalasa Iyer",
    video: "https://www.youtube.com/embed/wc-8P8oZAlk",
  },
  {
    image: "/Images/Programs/sip/wafiqah-thumb.webp",
    name: "Wafiqah Zubair",
    video: "https://www.youtube.com/embed/uEsHVoAlcCM",
  },
];

export const stepsData: Step[] = [
   { step: "Step - 01", 
    title: "Register", 
    description: "Request a free information session through the CONTACT US page.", },
    { step: "Step - 02",
       title: "Free Information Session", 
       description: "We’ll schedule an information and Q&A session where we will provide more details about the program and answer your questions. The information session is followed by a tour of our Innovation & Research Labs. Both the student and parent must attend to proceed.", },
        { step: "Step - 03",
           title: "Application Form",
            description: "If you meet our eligibility criteria and are interested in joining this program, we’ll send the Application Form and schedule the selection test.", },
             { step: "Step - 04", 
              title: "Selection Test", 
              description: `Please fill out the application form and attend our very interesting selection test along with your parents. The selection test comprises of:
               i. Left and Right Brain Coordination Test
                ii. Learning Curve Test 
                iii. Creativity & Family Innovation Culture Test 
                iv. Abstract, Forward & Backward Thinking Test 
                v. Interview`, },
                 { step: "Step - 05",
                   title: "Final Enrollment",
                    description: "If you make it to our merit list, we’ll inform you via email and text message to allot you a seat! You may now start your journey to be our next young inventor, researcher, or entrepreneur!", 
                  }, 
                  ];


export const expertsData = [
  {
    image: anthony,
    category: "Genomics, Genetics & Biotechnology",
    name: "Dr. Anthony Gregg",
    degree: "MD, MBA",
    org: "@American College of Obstetricians",
    modalData: {
      title: "Dr. Anthony Gregg, MD, MBA",
      description: [
        "Dr. Anthony Gregg is a world-renowned expert in Genomics, Genetics, and Biotechnology. He is a practicing doctor in Obstetrics & Gynecology and has served in various positions from Adjunct Professor to the Chief and Chair of Obstetrics and Gynecology and Human Genetics at some of the top health institutions in the US.",
        "He is a Past Chair of the American College of Obstetricians and Gynecologists Committee on Genetics and previously served in a liaison capacity to that Committee. He spent the early part of his genetics career exploring hypertension during pregnancy using transgenic and knock-out mice.",
        "He co-wrote American College of Medical Genetics and Genomics policy statements on carrier screening and non-invasive prenatal screening for fetal aneuploidy using cell-free fetal DNA.",
        "Dr. Gregg is an avid researcher and has served on the review panel with the National Institute of Health, mentored several post-doctoral fellows across the globe, published over 45 research papers, and spoken at 140+ research events worldwide.",
        "He contributes to clinical practice guidelines and national policies that focus on the introduction of genetic and genomic technologies into clinical practice.",
        "Dr. Gregg is committed to nurturing the next generation of Genomics and Genetics experts. Our Genomics, Biotechnology, and Health Sciences research labs run under his esteemed guidance."
      ]
    }
  },
  {
    image: peter,
    category: "Molecular Biologist",
    name: "Dr. Peter Guida",
    degree: "PhD",
    org: "@Harvard University",
    modalData: {
      title: "Dr. Peter Guida",
      description: [
        "Dr. Peter Guida is a NASA-based molecular biologist who specializes in the field of radiation biology. He graduated from the Albert Einstein College of Medicine in 1999 with a Ph.D. in developmental and molecular biology. He then completed a 3-year post-doctoral fellowship at Brookhaven National Laboratory (BNL) in New York in the field of accelerator-based radiation biology.",
        "In 2003 he joined the scientific staff at BNL and is currently a Full Scientist running a laboratory that investigates the effects of radiation on human neuronal cells.  In addition, he serves as NASA’s Liaison Biologist for the NASA Space Radiation Laboratory Program, which examines the potential health risks to astronauts from exposure to the charged particle radiation that is found in space.  He has published many research papers and is a peer-reviewer for numerous journals in the radiation and neuroscience fields. Dr. Guida brings extensive knowledge of molecular signaling pathways and DNA repair to DiscoverSTEM.",
      ]
    }
  },
  {
    image: babar,
    category: "Artificial Intelligence & Machine Learning",
    name: "Babar M. Bhatti",
    degree: "MS",
    org: "@MIT / IBM",
    modalData: {
      title: "Babar Bhatti",
      description: [
        "When it comes to futuristic technologies, Artificial Intelligence & Machine Learning – Babar M. Bhatti would be among the voices who undoubtedly command global authority. With unparalleled credentials to his name, Babar is a Thought Leader in Artificial Intelligence and Machine Learning. He is an expert in Data, Analytics and Digital Product, an Entrepreneur & Startup Advisor, Author and Speaker.",
        "Babar is Principal, AI Customer Success at IBM. Babar is co-founder of Dallas AI, a non-profit dedicated to education and networking of AI, a meetup group of over 3,000 AI professionals.",
        "Babar also serves co-chair of Tech Titans AI Forum. Babar regularly speaks about Artificial Intelligence to executives and professionals. He has spoken and presented at Tech Titans Executive Programs, Harvard Club of Dallas, DFW Executive Connection, University of Texas at Dallas (Computer Science, School of Management), MIT Club of DFW, MIT Professional Development, Financial Executives International (FEI) and multiple Dallas AI events.",
        "Babar was co-founder and CEO of MutualMind, a social media analytics company that served global brands such as IBM, American Airlines, Nestle, and Hilton. After MutualMind was acquired by Shapiro+Raj, he served as there as the Head of Digital. Babar is an advisor and mentor to many organizations. He has served as chairman, MIT Enterprise Forum of Dallas Fort Worth. He was author of a chapter in the book Cyber Security Standards, Practices and Industrial Applications. Babar holds dual MS from MIT in Civil and Environmental Engineering and Technology and Policy. Our AI-ML and Autonomous Technology research lab runs under his inspiring and able guidance.",
      ]
    }
  },
  {
    image: sanju,
    category: "Entrepreneur",
    name: "Sanjay Soni",
    degree: "Founder",
    org: "@Izmo Limited",
    modalData: {
      title: "Sanjay Soni – (Business)",
      description: [
        "Mr. Sanjay Soni is a serial entrepreneur and one of the pioneers of computer science and information technology in India. He is the founder of Izmo Limited, a publicly-traded IT company, listed on the National Stock Exchange of India.",
        "He also founded Si2 Microsystems, a leading Indian manufacturer of high-end electronics for space and defense applications, and Hughes Precision Manufacturing Pvt. Ltd., India's first manufacturer of military-caliber ammunition.",
        "Mr. Sanjay has several innovations and achievements to his credit. He led his companies to be among Deloitte Fast 50 Company and Financial Times' Fastest 1000 growing companies in Asia Award. He received a letter of commendation from Shri Rajiv Gandhi, the then Prime Minister of India in 1989, for his book on Computer Science for college students.",
        "He is the Member of Defence Advisory Committee – CII South India and Member of MSME Advisory Committee – FICCI South India. Mr. Sanjay is fond of mentoring students on topics like Startup, Business Management, and Growth Strategies.",
        "Our DiscoverSTEM Entrepreneurship Program (DEP) runs under the able guidance of Mr. Sanjay Soni.",
      ]
    }
  },
  {
    image: basho,
    category: "Islet Cell Transplant",
    name: "Dr. Bashoo Naziruddin",
    degree: "Ph.D., FAST",
    org: "@Baylor University Medical Center",
    modalData: {
      title: "Dr. Bashoo Naziruddin",
      description: [
        "Leading the charge in biotech and healthcare advancements, Dr. Bashoo Naziruddin's work has shaped the course of life-changing research work. He has been the Director of the cGMP Islet Cell Processing Laboratory at Baylor University Medical Center since April 2003. He is also an Adjunct Professor at the Institute of Biomedical Studies at Baylor University, Waco, Texas.",
        "Dr. Bashoo Naziruddin is a translational research scientist with more than 30 years of experience in academia, the biotech industry, and the healthcare system.",
        "His professional experiences include extensive work in life science research, teaching, mentoring, cGMP practice, and clinical and experimental islet transplantation. His current research is focused on Immunobiology of human islet cell transplantation. His specific research topics include the assessment of immune response in islet transplant recipients, the development of an optimal immunosuppressive regimen for islet transplantation, strategies to induce tolerance towards donor islets, and the identification of novel drugs to prevent islet rejection.",
        "Dr. Bashoo Naziruddin has published more than 157 research articles in peer-reviewed journals and has co-authored more than 200 presentations at international/national scientific meetings. He has written chapters in four books on Organ/Cell Transplantation and has been awarded four patents on islet transplantation.",
        "DiscoverSTEM is proud to have collaborated with Dr. Bashoo Naziruddin's Islet Cell Transplant Lab. Our research partnership agreement (MoU) allows our students to explore and experience research opportunities at the Islet Cell Transplant lab, which has some of the World's most advanced technologies and equipment.",
      ]
    }
  },
  {
    image: baron,
    category: "Transplant Immunologist",
    name: "Dr. Medhat Askar",
    degree: "MD, Ph.D.",
    org: "@Texas A&M / Baylor",
    modalData: {
      title: "Dr. Medhat Askar",
      description: [
        "If there is an individual who commands great respect and admiration in the field of Transplant Immunology, it has to be Dr. Medhat Askar. His academic qualifications, professional experience, and sheer weight of his work in the domain have earned him great laurels in the medical fraternity.",
        "Dr. Medhat Askar, MD, Ph.D., MSHPE, FRCPath, is a Professor of Pathology and Laboratory Medicine at Texas A&M College of Medicine, the Director of Transplant Immunology, Hematopoietic Cell Processing and COVID-19 laboratories at Baylor University Medical Center, Dallas, TX, USA.",
        "Dr. Askar is the President of The American Society for Histocompatibility and Immunogenetics (ASHI), Immediate Past President of The American Board for Histocompatibility and Immunogenetics (ABHI), and a member of the Executive Committee of the National Boards of Directors of United Network for Organ Sharing (UNOS) and Organ Procurement and Transplantation Network (OPTN).",
        "He is also a Councillor to The Transplantation Society (TTS) representing North America, the Co-Chair of the TTS Education Committee, a member of the Laboratory Practice Committee of the International Society of Cell and Gene Therapy, and a Principal Investigator on several study protocols through the Center for International Blood and Marrow Transplant Research (CIBMTR).",
        "DiscoverSTEM students have this distinguished opportunity to carry out research activities at Dr. Medhat Askar's Transplant Immunology Lab. We have signed a research agreement (MoU) with Dr. Medhat Askar, which allows our students access to world-class research facilities.",
      ]
    }
  },
  {
    image: mani,
    category: "Energy & Environment",
    name: "Mani Bhushan",
    degree: "MA",
    org: "@World Resources Institute",
    modalData: {
      title: "Mani Bhushan",
      description: [
        "Mani is currently based in India. He is currently working with World Resources Institute India where he supports the work in Bihar to develop climate-resilient and low-carbon development pathways for the state through stakeholders' consultation, field visits, policy analysis, and more.",
        "He has previously worked with the Confederation of Indian Industries, and Public Policy Research Centre in New Delhi. He has also worked with CDU Fraktion in the Berlin Parliament, and with a few Members of Parliament in India.",
        "Mani is a trained Lawyer from Amity Law School, Delhi, and has completed his Master's in Public Policy from Willy Brandt School of Public Policy, Germany with a specialization in Public, Non-profit management, and International Political Economy.",
        "Mani is from Madhubani, Bihar. He loves traveling, reading, and volunteering.",
      ]
    }
  },
  {
    image: omar,
    category: "Blockchain & Fintech",
    name: "Omar Syed",
    degree: "MS",
    org: "@Case Western Reserve",
    modalData: {
      title: "Omar Syed",
      description: [
        "Over the past three decades, Omar has been involved with helping large organizations such as NASA, Yahoo, and Zynga build scalable, fault-tolerant, distributed systems for mission-critical applications.",
        "Omar has also been involved with several startups, including the first matrimonial website and the first stock sentiment analysis website. In early 2016, he started Unblocked Inc., a blockchain consultancy company. In 2017 he organized the Shardus project to build a linearly scalable blockchain.",
        "Omar holds a B.S. and M.S. from Case Western Reserve University with a specialization in Artificial Intelligence. Omar, along with his son, Aamir invented the strategy board game Arimaa and offered the Arimaa Challenge Prize to promote breakthrough research in AI.",
        "Omar's long-term vision is a world where everyone receives an unconditional basic income based on a stable cryptocurrency so that poverty and hunger are eliminated.",
      ]
    }
  },
  {
    image: jyoti,
    category: "Product Design",
    name: "Jyoti Sudhir",
    degree: "MA",
    org: "@InventIndia Innovations",
    modalData: {
      title: "Jyoti Sudhir",
      description: [
        "A Graduate of the Goldman Sachs 10000 Women Program from the prestigious IIM, Bangalore, India, and a Masters in Human Development from Lady Irwin College, Delhi University; Jyoti Sudhir is the Co-founder & Chief Strategist of InventIndia Innovations Pvt. Ltd., an award-winning global industrial design and development firm.",
        "With an incredible track record of 20+ years in leadership, team, and organization transformation, Jyoti has held various academic, corporate & partnership positions across diverse industries including Healthcare, Education, and Finance. She currently mentors the Innovation & Start-Up Taskforce, Co-Chairs the Social Impact Taskforce, and is an elected State Council Member for the Confederation of Indian Industry (CII), Gujarat.",
        "Jyoti has more than 26 National & Global Awards and Honors to her credit including the Most Visionary Leaders APAC 2018, Women Power Winner 2019, National Entrepreneurship Award 2019 by the Ministry of Skill Development & Entrepreneurship, Women Super-Achiever Award 2021, SME's Empowering India 2021, Women in Tech 2022 to mention a few.",
      ]
    }
  },
  {
    image: venkat,
    category: "Entrepreneur",
    name: "Venkat Yerubandi",
    degree: "B.Tech",
    org: "@Noblesoft Technologies",
    modalData: {
      title: "Venkat Yerubandi",
      description: [
        "Venkat Yerubandi is the Founder & CEO of Noblesoft Technologies – a winner of the prestigious Inc 500 award and one of the fastest-growing 500 private companies in the United States of America. Based in Texas, his company offers SaaS & nearshore solutions in the USA, the UK, Mexico, Spain, Argentina, and Brazil.",
        "He has many awards and recognitions to his name. In the year 2021, he was honored with the International Achievers Award for his outstanding contributions. Earlier he was Ernst & Young – Entrepreneur of the Year, a finalist in the years 2008, 2011, and 2013.",
        "An entrepreneur by passion, Venkat founded Noblesoft to make a difference in the world through technology. Whether it's Supply Chain Management Artificial Intelligence or Algo Trading, he firmly believes that people come ahead of technologies.",
        "Prior to Noblesoft, Venkat founded Indova Capital, a financial capital markets company. He also co-founded and exited Vedicsoft, a software services company. Under his joint leadership, Vedicsoft won numerous awards including NJBiz #1 Best Place to Work in New Jersey, Inc 500 - Fastest Growing Companies in the USA, and Silicon India - Top 15 Indian IT Companies in the USA.",
        "Venkat graduated from I.I.T. Chennai, India after obtaining his B.Tech. from N.I.T. Kurukshetra, India. He is passionate about mentoring entrepreneurs and stock market investors. Our DiscoverSTEM Entrepreneurship Program (DEP) runs under the able guidance of Mr. Venkat Yerubandi.",
      ]
    }
  },
  {
    image: nadeem,
    category: "Bioengineering",
    name: "Dr. Nadeem Vellore",
    degree: "Ph.D.",
    org: "@Janssen Pharmaceuticals",
    modalData: {
      title: "Dr. Nadeem Vellore",
      description: [
        "Dr. Nadeem comes with a wealth of knowledge and experience in computations and simulations to understand the behavioral patterns of complex biological reactions. Professionally, Dr. Nadeem Ahmad Vellore is a computational chemist working for Janssen Pharmaceuticals (R&D division of Johnson and Johnson).",
        "His research interest includes computational simulation of proteins trying to understand how atoms move to coordinate the fascinating biological pathways and in-silico designing of novel inhibitors (drugs) to target various diseases.",
        "Dr. Vellore obtained his Bachelors from India in Biotechnology and his Ph.D. in Bioengineering from Clemson University, USA. He has published over 25 articles in scientific journals and periodically serves as a reviewer for many journals as well.",
      ]
    }
  },
  {
    image: saket,
    category: "Finance & Investment",
    name: "Saket Kumar",
    degree: "MBA",
    org: "@Cushing Asset Management",
    modalData: {
      title: "Saket Kumar",
      description: [
        "Saket Kumar has worked in investment management and investment banking focused on the energy and industrials sector since 2007. Presently, he serves as a CO-CIO and Partner at Cushing Asset Management, an investment firm focused on investing in listed infrastructure including clean energy infrastructure. In addition, Saket has also been leading the firm's fintech initiatives for the last couple of years.",
        "In his previous professional career in investment management, he focused on investing in companies that enable the energy independence of North America. He has also worked in various roles at firms like Bear Steans and Citadel Investment Group.",
        "He has an MBA in finance and accounting from Cox School of Business at SMU. He started his career as a marine engineer and has worked out at sea in the capacity of marine and naval engineer. He grew up in India, is an IIT JEE rank holder, and received his bachelor's degree in marine engineering.",
        "He was also awarded the President's Gold Medal by the President of India for being the finest marine engineering cadet for the year 2002. He also received the Best Cadet Award from the National Maritime Day Celebration Committee of India in 2003.",
      ]
    }
  },
  {
    image: usman,
    category: "Aerospace",
    name: "Usman A. Ghani",
    degree: "MS",
    org: "@MIT",
    modalData: {
      title: "Usman A. Ghani",
      description: [
        "A child prodigy who lived up to the expectations by sheer perseverance, Usman Ghani's love, passion, and sustained hard work have today made him a role model for many. A lifelong consummate Science & Technology enthusiast, Usman's first reading at age 4 was the life of The Wright Brothers.",
        "He made a small camera as a hobbyist and indulged in science experiments with a lab set at home from his pocket money. He led the science society at school and college. Usman became a staunch follower of NASA and collected materials related to the Mercury, Gemini, and Apollo programs, sharing it further with his school and college mates and teachers. Later, he donated all the materials to the college.",
        "Fast Forward: Usman acquired 3 Master's degrees from the Massachusetts Institute of Technology within three years, one of these being Management of Technology with his deep interest in Aeronautics and Astronautics. He is a long-standing member of AIAA, AOPA, and EAA and an avid reader of Scientific American. Usman loves to mentor young minds keen on scientific inquiry and method and sees the future through his advisees' eyes.",
        "While pursuing his bachelor's in mechanical engineering, he set up a Science & Technology Society and established an AIAA Chapter. He later assisted in setting up a Gas Dynamics laboratory and designed Aeronautics and Astronautics experiments for seniors.",
        "Our Aerospace research lab runs under his inspiring and able guidance.",
      ]
    }
  },
  {
    image: hari,
    category: "Fintech",
    name: "Hari Kusumakar",
    degree: "MBA",
    org: "@Cushing Asset Management",
    modalData: {
      title: "Hari Kusumakar",
      description: [
        "Hari Kusumakar holds all the aces when it comes to Fintech solutions. He is an expert in developing and optimizing Fintech solutions for investment management applications such as stock investments, credit research, and real estate investments.",
        "Since 2018, he has been working at Cushing Asset Management in Dallas as a Portfolio Manager. Priorly, he worked as an equity research analyst for Tiger Legatus Capital Management, a tiger-seeded long/short equity hedge fund in New York. Prior to that, he worked at Moody's Corporation as a credit research analyst in New York.",
        "Additionally, he has a strong educational foundation in finance, data science, and engineering. He earned his MBA from MIT Sloan School of Management; MS in Industrial and System Engineering from The Ohio State University; and BS in Chemical Engineering from Indian Institute of Technology, Bombay.",
      ]
    }
  },
  {
    image: shahin,
    category: "Clinical and Molecular Diagnostics",
    name: "Dr. Shahin Iqbal",
    degree: "Ph.D., MBA",
    org: "@BioGX",
    modalData: {
      title: "Dr. Shahin Iqbal",
      description: [
        "Dr. Shahin Iqbal is the President and COO at BioGX. A versatile leader with experience and knowledge that span multiple domains and specializations, Dr. Iqbal brings over 25 years of expertise in clinical and molecular diagnostics, global operations, quality, manufacturing, supply chain, R&D, systems development, and both commercial and global service organizations.",
        "His areas of expertise include entrepreneurship, core lab automation, acquisitions and value expansion, program management, business planning and strategy, customer service, as well as the design, development, and manufacturing of medical devices.",
        "Before joining BioGX, Dr. Iqbal led Abbott Diagnostics' Global Service & Support, specifically for informatics, core lab automation, immunoassay, and clinical chemistry systems. He is the recipient of the President's Award and multiple service and innovation awards at Abbott. Dr. Iqbal holds several patents related to optical sensors, automation systems development, RFID applications, and robotics for system dispensing.",
        "Prior to Abbott, he served as Head of Operations, Quality & Regulatory, Systems Development, and Manufacturing of IHC Systems at BioGenex in California.",
        "Dr. Iqbal holds an MBA and Ph.D., along with a Master's in Electrical Engineering from the University of Texas at San Antonio.",
      ]
    }
  },
    {
    image: sudhir,
    category: "Product Design & Innovations",
    name: "Sanandan Sudhir",
    degree: "Founder",
    org: "@InventIndia Innovations",
    modalData: {
      title: "Sanandan Sudhir",
      description: [
        "Winner of several Entrepreneurship, Industrial Design & Engineering awards; Sanandan (Sandy) Sudhir is an accomplished leader with more than 2 decades of experience in Team Management, Organization Transformation, New Product Development, Manufacturing & Market Differentiation. He is a true thought leader with a passion to create end-to-end products focused on IP strategy.",
        "Sandy is the Founder & President of InventIndia Innovations Pvt. Ltd. focused on taking new product ideas right through to prototype development and manufacturing. He is also the Founder of the Indian Inventors Association, a global platform for bringing all inventors & innovators together. Sandy's patented product On2Cook – World's fastest Cooking Device onboarded to BRINC Food Tech Accelerator in Hong Kong has been the most celebrated invention at CES 2022, Las Vegas.",
        "An inventor at heart, he has 17 Global patents (granted) & more than 50+ applied for.",
        "GE, Jarden, Haier, Dell, GSK, Shell, Tata, Temptations, Symphony, Eureka Forbes, Godrej, HLL, Voltas, Michelin, Clorox, Eton, Polycom, Whitney, Bio Medix, Dover, Arrow, Invixium, Amico are some of the big names that have been guided by Sandy's Expertise.",
        "Sandy is the mentor to several start-ups, mid-sized and large corporations. InventIndia is an Industry leader focused on filling the gaps that are essentially intellectual property, Crowdfunding, Certification, and Manufacturing as well as Logistics.",
        "The Invent Group has 25+ domestic and global awards to its credit including the prestigious iF Design Award, Design Intelligence Award (DIA), International Design Award (IDA), A Design Award, Business Excellence Award, INPEX Award, India's Best Industrial Design Studio Award (IBDSA), National Entrepreneurship Award (NEA), Best MSME in Services to mention just a few.",
      ]
    }
  },
    {
    image: shreyas,
    category: "Professor of Practice, CSE, Texas A&M",
    name: "Dr. Shreyas Kumar",
    degree: "PhD",
    org: "@Texas A&M University",
    modalData: {
      title: "Dr. Shreyas Kumar",
      description: [
        "Dr Kumar is the AI advisor to DiscoverSTEM. Dr. Shreyas Kumar is a Professor of Practice at the Department of Computer Science and Engineering at Texas A&M University. He researches AI for Government, Grid, Infrastructure, and engineering Security and has designed and taught courses on Cybersecurity. He has previously worked in engineering and cybersecurity leadership positions at Oracle, Adobe, and Uber.",
        "He has advised various Silicon Valley startups and the U.S. Space Force. He has published research papers in top security and cyber warfare journals and conference proceedings. He holds Master's degrees in Computer Science and Legal Studies from Texas A&M University.",
      ]
    }
  },
    {
    image: shefali,
    category: "Oncology Therapeutic Area",
    name: "Shefali Kakar",
    degree: "PhD",
    org: "@Novartis",
    modalData: {
      title: "Shefali Kakar",
      description: [
        "Shefali Kakar, PhD VP and Global Head, Oncology Therapeutic Area, PK Sciences at Novartis. She is responsible for overseeing all aspects of PK Sciences (ADME, PK, PK/PD and clinical pharmacology) for 100+ projects in the Novartis oncology portfolio spanning early discovery to marketed products.",
        "Shefali has been passionate about dose for oncology patients throughout her 20+ year career in Pharma. Prior to joining Novartis, Shefali worked at Pfizer and also served as an Adjunct faculty for Clinical Pharmacology at the Brown University. She received her PhD in Pharmacology from U of Michigan.",
      ]
    }
  },
    {
    image: asim,
    category: "Marketing",
    name: "Dr. Asim Ansari",
    degree: "PhD",
    org: "@Columbia Business School",
    modalData: {
      title: "Dr. Asim Ansari",
      description: [
        "Asim Ansari is the William T. Dillard professor of Marketing at Columbia Business School. He received his PhD in marketing from New York university. His current research focuses on personalization and the use of machine learning and AI methods for marketing problem solving. His research has appeared in several leading marketing journals. He has received the Paul Green award from the American Marketing Association for his work on e-customization in 2004.",
        "His research has also been nominated for the William O'Dell Award, the Paul Green Award, the Long-Term Impact Award from the INFORMS Society for Marketing Science, the Frank M. Bass Outstanding Dissertation Award, and the John D. Little Award on multiple occasions.",
      ]
    }
  },
    {
    image: aamir,
    category: "Pharmaceutics",
    name: "Dr. Aamir Mirza",
    degree: "PhD",
    org: "@Jamia Hamdard",
    modalData: {
      title: "Dr. Aamir Mirza",
      description: [
        "Dr. M. Aamir Mirza is working as an Assistant Professor in the Department of Pharmaceutics, Jamia Hamdard, an NIRF Rank 1 institute and a NAAC 'A +' grade deemed to be University. He has a multifaceted career portfolio adorned with both industry and academic accomplishments. During his industry stay he became a seasoned scientist and dealt with challenging NCE/NDA development.",
        "He is on advisory boards of some international research-based companies of India, New Zealand and Europe. Academics and Research being close to his heart, he has published more than 110 manuscripts in the journals of international repute and has been granted 02 Indian patent and filed for 04.",
        "He has contributed several chapters in books published by reputed authors like Elsevier and Bentham. He is amongst the very few scientists globally who has an expertise in Humic substances research. A well-travelled scientist; he has delivered scientific addresses in countries like USA, Austria, Japan, Netherlands, Turkey, Estonia, Spain and Russia. He has been Elite Fellow at University of Malaya (Malaysia) for the last 5 years where he takes classes on the topics related to industrial pharmacy.",
      ]
    }
  },
    {
    image: zizis,
    category: "Laboratory Services & Biobanking",
    name: "Dr. Zisis Kozlakidis",
    degree: "PhD",
    org: "@IARC / World Health Organization",
    modalData: {
      title: "Dr. Zisis Kozlakidis",
      description: [
        "Dr. Zisis Kozlakidis is the Head of Laboratory Services and Biobanking at the International Agency for Research on Cancer (IARC), part of the World Health Organization (WHO). A highly accomplished senior healthcare professional, he brings decades of experience in biomedical research, innovation strategy, and global health consulting.",
        "With a unique blend of scientific expertise and business acumen, he has led international projects focused on the integration of cutting-edge technologies into healthcare systems, fostering collaborations with major global players like Intel and Illumina.",
        "Dr. Kozlakidis has served as President of the International Society for Biological and Environmental Repositories (ISBER) from 2017 to 2018 and co-founded the Cass Health Innovation Club at Cass Business School, promoting interdisciplinary innovation in life sciences and medicine.",
        "His contributions span virology, biobanking, and digital health, earning him numerous international awards. He is a Fellow of the Linnean Society of London and serves on several high-level international boards and committees that shape policy on medical ethics, innovation, and healthcare startup strategy.",
        "With work experience across the UK, US, China, Vietnam, Indonesia, and Greece, Dr. Kozlakidis continues to drive global impact by advising on the implementation and scalability of healthcare solutions, while mentoring the next generation of scientific leaders.",
      ]
    }
  },
    {
    image: darshan,
    category: "Oncology & Healthcare Innovation",
    name: "Dr. Darshan Gandhi",
    degree: "MD, MBA",
    org: "@Harvard / Methodist Health System",
    modalData: {
      title: "Dr. Darshan Gandhi",
      description: [
        "Dr. Gandhi is an Oncologist, C-Suite executive, Entrepreneur and Ex-strategic venture capitalist with a passion to drive personalized oncology care powered by innovation in biology and data-science. He is Board Certified in Hematology/Medical Oncology and is an accomplished operator who co-founded and led several cancer drug discovery and development companies addressing cancers of most unmet need.",
        "He also led strategy/innovation at OncoHealth, a VC-backed company where he was instrumental in scaling operations, sales, raising capital and positioning for M & A.",
        "In his prior role, he was the Executive Director of Innovation/Venture for Methodist Health System, a $2.5B healthcare system in Dallas where he led strategic investments in early-mid stage companies.",
        "He is also a Mentor and Advisor at the Harvard Innovation Labs in Boston and as Harvard Business School Alumni, actively involved with the Broad Institute and MIT. He is a National Speaker and Author with primary focus on healthcare innovation, especially in Oncology.",
        "He is a former Member of the National Pharmacy and Therapeutics (P & T) committee for United Healthcare and OptumRx and a Member of the Oncology Pathways Committee for United Healthcare.",
        "He has completed the Advanced Management Program (AMP) at the Harvard Business School (HBS) and was elected the Class Secretary. He earned MBA (Masters of Business Administration) from the Isenberg School of Management, University of Massachusetts and completed medical training at the University of Iowa Hospitals and Clinics.",
        "He is a serial entrepreneur and been a Founder/Co-founder of several companies in the health-tech and biotech space. He is actively involved in philanthropy and social entrepreneurship initiatives.",
      ]
    }
  },
];

export const advisoryData = [
  {
    title: "ADVISORY & LEADERSHIP",
    name: "Col. Richard Graham",
    role: "Sr. STEM Strategic Innovation Advisor & Aviation Consultant",
    desc:"He is an SR-71 pilot, author, speaker, aviation consultant, flight instructor, and safety team representative with the FAA. After receiving his US Air Force ROTC commission, he entered pilot training at Craig AFB, Alabama. In 1965, he graduated from pilot training and remained at Craig AFB as a T-37 instructor pilot and flight examiner.",
    description:
    [
      "He is an SR-71 pilot, author, speaker, aviation consultant, flight instructor, and safety team representative with the FAA. After receiving his US Air Force ROTC commission, he entered pilot training at Craig AFB, Alabama. In 1965, he graduated from pilot training and remained at Craig AFB as a T-37 instructor pilot and flight examiner.",
"He is an SR-71 pilot, author, speaker, aviation consultant, flight instructor, and safety team representative with the FAA. After receiving his US Air Force ROTC commission, he entered pilot training at Craig AFB, Alabama. In 1965, he graduated from pilot training and remained at Craig AFB as a T-37 instructor pilot and flight examiner.",
"Colonel Graham was selected to enter the SR-71 strategic reconnaissance program in 1974. Following Air War College in June of 1982, he was assigned to the Headquarters USAF (Pentagon) to work in Programs and Resources as a strategic force programmer.",

"He was also selected to work in the Office of the Air Force's Assistant Secretary for Manpower, Reserve Affairs, and Installations. As the Director of Program Integration, he worked on Air Force budgetary matters closely with the Office of the Secretary of Defense, the Joint Chiefs of Staff, and the Air Staff",
    ],
    image: richard,
    reverse: false,
  },
  {
    title: "ADVISORY & TECH",
    name: "Dr. Charles Rodenberger",
    role: "Sr. STEM Strategic Innovation Advisor & Aviation Consultant",
    desc:"He is a top NASA scientist and a Professor Emeritus in Aerospace Engineering at Texas A&M University. He completed his Master’s in Mechanical Engineering and Doctorate in Aerospace Engineering.",
      description:[
        "He is a top NASA scientist and a Professor Emeritus in Aerospace Engineering at Texas A&M University. He completed his Master’s in Mechanical Engineering and Doctorate in Aerospace Engineering.",
    "Since then, he has enjoyed a host of positions in industrial research and academia, with senior research positions at the Meteoroid Protection Division of NASA, General Motors Defense Research Labs, Southwest Research Institute, Meiller Research Inc., and General Dynamics-Fort Worth, among other organizations.",
    "Some of Dr. Charles’s remarkable work was as Head of the Hyper-velocity Acceleration Laboratory, wherein he did the research for NASA for his invention – ‘the hyper-velocity gun’. He is also famously known as a developer of sandwich structural concepts for meteoroid protection of spacecraft for NASA. He is listed in the prestigious",
    
    "- Who's Who in America (1984-85)",
    "- Who's Who in American Education (1965)",
    "- Who's Who in Engineering (1982)",
    "among other prestigious awards & honors.",
      ],
    image: charles,
    reverse: true,
  },
  {
    title: "AEROSPACE & FUTURE",
    name: "Dr. Abdul A. Baker\n (MD, FAANS)",
    role: "Sr. STEM Strategic Innovation Advisor & Aviation Consultant",
    desc:"He is a serial innovator and has several patent-pending innovations, including BCI and AI-powered exoskeleton, a holistic system to access the mental, behavioral, and emotional well-being of an individual, and a system and method to provide consultation, checkup, and surgery to patients remotely.",
      description:
      [
        "– Chief Healthcare Innovation Officer, DiscoverSTEM",
        "– Board-Certified and Spine Fellowship-trained Neurosurgeon",
        "– Minimally Invasive Robotic Spine Surgeon",
        "Dr. Baker is a world-renowned Neurosurgeon of Emirati origin.",
        "He is a serial innovator and has several patent-pending innovations, including BCI and AI-powered exoskeleton, a holistic system to access the mental, behavioral, and emotional well-being of an individual, and a system and method to provide consultation, checkup, and surgery to patients remotely.",
        "Dr. Baker earned his medical degree at Wright State University School of Medicine in Dayton, Ohio. He was inducted into the Medical School Honor Society Alpha Omega Alpha (AOA) and was among the top medical school graduates. He completed his neurosurgery residency and Complex Spine Fellowship at the University of Louisville and his Spine and Peripheral Nerve Fellowship at Johns Hopkins University.",
        "Dr. Baker is board certified by the American Board of Neurological Surgery and is a Fellow of the American Association of Neurological Surgeons.",
        "He uses the highest standard, a Minimally Invasive approach to treating patients with neurologic problems using all the clinical resources and cutting-edge technology available with the goal of providing compassionate yet comprehensive neurosurgical care for his patients.",
        "Dr. Baker is deeply dedicated to his Neurosurgery practice and wishes to serve his community with humility and compassion.",
      ],
    image: abdul,
    reverse: false,
  },
    {
    title: "ADVISORY & TECH",
    name: "Sanjay Soni",
    role: "Sr. STEM Strategic Innovation Advisor & Aviation Consultant",
    desc:"He is a serial entrepreneur and one of the pioneers of computer science and information technology in India. He is the founder of Izmo Limited, a publicly traded IT company, listed on the National Stock Exchange of India.",
    description:
    [
      "He is a serial entrepreneur and one of the pioneers of computer science and information technology in India. He is the founder of Izmo Limited, a publicly traded IT company, listed on the National Stock Exchange of India.",
      "He also founded Si2 Microsystems, a leading Indian manufacturer of high-end electronics for space and defense applications, and Hughes Precision Manufacturing Pvt. Ltd., India’s first manufacturer of military-caliber ammunition.",
      "Mr. Sanjay has several innovations and achievements to his credit. He led his companies to be among Deloitte’s Fast 50 Company and Financial Times Fastest 1000 growing companies in Asia Award. He received a letter of commendation from Shri Rajiv Gandhi, the then Prime Minister of India in 1989, for his book on Computer Science for college students.",
      "He is a Member of the Defense Advisory Committee – CII South India and a Member of the MSME Advisory Committee – FICCI South India. Mr. Sanjay is fond of mentoring students on topics like Startup, Business Management, and Growth Strategies.",
    ],
    image: sanjay,
    reverse: true,
  },
  {
    title: "ADVISORY & TECH",
    name: "M. Sameer Ahmed - \nAttorney at Law",
    role: "Sr. STEM Strategic Innovation Advisor & Aviation Consultant",
    desc:"Sameer received a B. S. in Biology from Southern Methodist University and worked in the legal department of Ernst & Young, LLP. He decided to attend law school and earn his J.D. from South Texas College of Law in 1997. After graduating, he moved to the small border town of McAllen, Texas, where he began his career as an attorney in 1998 and grew his practice by representing many physicians in their transactional matters.",
      description:
      [
        "Sameer received a B. S. in Biology from Southern Methodist University and worked in the legal department of Ernst & Young, LLP. He decided to attend law school and earn his J.D. from South Texas College of Law in 1997. After graduating, he moved to the small border town of McAllen, Texas, where he began his career as an attorney in 1998 and grew his practice by representing many physicians in their transactional matters.",
      "Later, Sameer moved back to the Dallas/Fort Worth metroplex to establish The Ahmed Firm, PLLC. He now represents numerous local businesses, including hospitals, physician practices, transportation carriers and brokers, engineering groups, construction companies, and real estate developers in various transactional and litigation matters.",
  ],
    image: sameer,
    reverse: false,
  },
];

export const stemEducationData = {
  about: {
    heading: "About DiscoverSTEM Foundation",
    description: [
      "DiscoverSTEM Foundation is a registered 501(c)(3) non-profit organization devoted to helping underprivileged, deprived, and deserving children through scholarships and other financial aid.",
      "DiscoverSTEM Foundation, an arm of DiscoverSTEM emerged out of our inherent and long-standing desire of seeing children innovate and bring their ideas to reality, and in the process make a positive impact on our communities, our country, and the World at large. However, for many children, getting access to top-quality education remains a distant dream.",
      "Running state-of-the-art research and innovation labs, mentoring our students for innovation, and filing patent applications for patentable ideas are costly affairs. However, we want every passionate young kid of ours to have access to these facilities without worrying about finances. We help our young geniuses overcome this hurdle by assisting at every possible stage so that they focus on their innovation and realize their true potential.",
      "The DiscoverSTEM Foundation is our attempt to bring all our financial assistance, scholarships, donations, and other activities under one umbrella. This formal structure will streamline our efforts, formalize a proper structure, and develop a dedicated channel to seek aid and distribute it further to deserving children.",
      "Since 2016, DiscoverSTEM has come forth to support 167 deserving students(96 boys and 71 girls) who had financial constraints to attend our programs Adhering to our philosophy of not leaving any deserving child behind, so far, we have granted USD 1,012,636 in full/partial scholarships to our young innovators.",
      "Here are some of the other ways how DiscoverSTEM Foundation has been at the forefront when it comes to assisting children and helping them with scholarships.",
    ],
  },
  sections: [
    {
      id: "Stem",
      title: "STEM & Innovation Education - FREE",
      description: "We take great pride in our vision of making a positive impact in students\u2019 lives. At DiscoverSTEM, we are keen to empower students with distinct capabilities and help them capitalize on their talent and deliver breakthrough innovations. Aligning with our commitment, we extend our support to students who face financial constraints.",
      points: [
        "We offer 10% to 100% scholarships to students whose parent\u2019s combined annual income is less than $65,000.",
        "Every year up to 25% of students are offered scholarships to pursue their innovation spirit.",
        "We also take into account any special circumstances of parents & students and try to support them with as much assistance as we can.",
        "In honor of their service and contribution to our communities, we ALWAYS offer 100% scholarship to the children of current & ex-Police, and US Armed Forces Officers, irrespective of parent\u2019s family income, with a cap of 3% of our total intake in each program.",
      ],
      image: stem,
    },
    {
      id: "Filing of Patent",
      title: "Filing of Patent for Student\u2019s Innovation - Complimentary",
      description: "DiscoverSTEM program is all about innovation. Our students go through engaging and rigorous training to come up with patentable solutions. Over the years, we have noticed that approximately 90% of our students end up innovating something patentable.",
      points: [
        "Under DiscoverSTEM Foundation, we will file ONE complimentary patent application with USPTO per team of 6-10 students only. The filing of patents is not a straightforward process and requires comprehensive documentation and technical know-how for getting approvals.",
        "We help our students with all the assistance and resources needed to file patents. Our affiliations and past experience come in extremely handy to complete the documentation process and successfully filing for patents.",
      ],
      image:patent
    },
    {
      id: "Seed Funding",
      title: "Seed Funding of up to $30,000 to launch innovation-based start-ups",
      description: "At DiscoverSTEM, we believe that innovation without commercialization is just a half-baked cake. Our focus lies in rolling out the innovation for public/community use and solving real-world problems. In that pursuit, we go beyond helping our students find innovative & patentable solutions and provide a seed fund to launch their innovation into full-fledged start-ups.",
      points: [
        "Under the DiscoverSTEM foundation, we provide a seed fund of up to $30,000 to help our students commercialize their innovation, launch start-ups, and drive forward an innovation-based economy that helps our communities and country at large.",
      ],
      image:funding
    },
    {
      id: "Office Infrastructure",
      title: "Office Infrastructure \u2013 Complimentary",
      description: "Innovations, patents, and start-ups demand a lot of research, analysis, brainstorming, collaboration, and execution. We provide FREE office space to the \u2018DiscoverSTEM Entrepreneurship Program\u2019 students to enable them to launch their start-ups to commercialize their innovations.",
      points: [
        "DiscoverSTEM Foundation supports students by providing adequate space, IT infrastructure, tools, and ancillary services to help them find and file patentable solutions. The foundation aims to leave no stone unturned to increase the competency and productivity of our students by providing all the infrastructure assistance needed to get patents, commercialize innovation, and launch start-ups.",
      ],
      image:infra
    },
    {
      id: "Free CPA",
      title: "FREE CPA (Certified Public Accountant) Support for their startup",
      description: "Commercializing an innovation is not a straightforward task. It involves the incorporation of start-ups, handling taxes to meeting statutory requirements and legal compliances \u2013 all of which can be complex and several entrepreneurs end up getting overwhelmed. At DiscoverSTEM, through our affiliated resources, we take care of these by providing FREE CPA support to our \u2018Entrepreneurship\u2019 students. All they need to do is to focus on turning their idea into a million-dollar business.",
      points: [],
      image:cpa
    },
    {
      id: "Legal Support",
      title: "FREE Legal Support for their startup",
      description: "A start-up is a serious business venture that can have a profound impact on the founder\u2019s future. It is important to safeguard the interest of the founder, team members, and associated people to ensure minimum risks.",
      points: [
        "At DiscoverSTEM, we provide all the requisite legal assistance and consultation to our students for their start-ups for FREE. From company formation & documentation to various agreements, contracts, and other legal compliance, we ensure that our students receive the best legal advice and counseling for their start-ups.",
      ],
      image:support
    },
    {
      id: "Mentoring",
      title: "FREE Mentoring by Distinguished & Dedicated Panel of Experts, Business Mentors, Technology Mentors & Management Consultant",
      description: "No startup founder, entrepreneur, or inventor can work independently and successfully commercialize an innovation. At every step of the journey, some assistance, valuable input, practical tips, or supervision is needed.",
      points: [
        "The DiscoverSTEM Foundation ensures that our students receive the best of mentorship from seasoned professionals across business, technology, and management domains. They help navigate our students in their innovation journey and avoid potential pitfalls. Our experienced mentors become the most powerful asset of our students and play a pivotal role by investing their time and giving them valuable inputs on a regular basis.",
      ],
      image:mentoring
    },
  ],
};


export const PatentsGrantedSlider =[
  {
    title: "Patents Granted to DiscoverSTEM Students",
 description: "",
   image:"/Images/ContactUs/HeroSection.jpg",
  },
  {
    title: "Patents Granted to DiscoverSTEM Students",
   description: "",
   image:"/Images/ContactUs/HeroSection.jpg",
  },
  {
    title: "Patents Granted to DiscoverSTEM Students",
    description: "",
   image:"/Images/ContactUs/HeroSection.jpg",
  },
];

export const PatentIntroData = {
  title: "Inventions that left the lab — and entered the patent registry.",
  description:
    "Every entry below is a granted patent — issued by the United States Patent & Trademark Office or the Companies and Intellectual Property Commission of South Africa. The inventors? DiscoverSTEM students, with their ages at the time of innovation listed alongside their names. Search, filter by jurisdiction, and explore the breadth of what young innovators are capable of.",
};



export const patentsData: PatentCardData[] = [
  {
    id: "1",
    type: "US",
    title: "Relay-based system to launch a projectile",
    image: "/Images/patent-granted/1.jpg",
    inventorCount: 7,
    inventors: "Mikaeel Faisal Khan (12), Zaynab Khan (13), Faraz Rahman (13), Mohammed Omer Shakoor (11), Ishaq Nadeem Khan (12), Shoaib Ali (14), Bilal Syed Ali Shah (11)",
    googlePatentLink: "https://patents.google.com/patent/US11536534/en",
    certificateLink: "#",
  },
  {
    id: "2",
    type: "US",
    title: "Wind Powered System To Lift Water Using Multiple Tanks",
    image: "/Images/patent-granted/2.jpg",
    inventorCount: 6,
    inventors: "Mohammad Ayaan (11), Mariya Kawish (09), Faizaan Syed Hussain (13), Maryam Abid Bhojwani (12), Bilal Syed Ali Shah (11), Nimra Syeda Ali Shah (14)",
    googlePatentLink: "https://patents.google.com/patent/US11408397/en",
    certificateLink: "#",
  },
  {
    id: "3",
    type: "US",
    title: "Automated aircraft tray table disinfecting system using ultra-violet light",
    image: "/Images/patent-granted/3.jpg",
    inventorCount: 3,
    inventors: "Yumna Syeda Ali Shah (16), Nimra Syeda Ali Shah (14), Bilal Syed Ali Shah (11)",
    googlePatentLink: "https://patents.google.com/patent/US11427326/en",
    certificateLink: "#",
  },
  {
    id: "4",
    type: "US",
    title: "Biodegradable bottle cap using Pestalotiopsis Microsporia to biodegrade waste plastic bottle",
    image: "/Images/patent-granted/4.jpg",
    inventorCount: 8,
    inventors: "Hana Ahmad (15), Humza Ahmad (12), Mohsen Ahmad (8), Rabiya Sayeed (13), Sofia Ali (14), Zain Ali (9), Sarah Nawab (14), Danyal Nawab (12)",
    googlePatentLink: "https://patents.google.com/patent/US11472617/en",
    certificateLink: "#",
  },
  {
    id: "5",
    type: "US",
    title: "Drug abuse prevention device and a method thereof",
    image: "/Images/patent-granted/5.jpg",
    inventorCount: 5,
    inventors: "Aalia Mohammad (14), Aanchal Raghuvanshi (15), Deepika Dandeboina (14), Sarah Varghese (16), Ridah Shaista Shanavas (15)",
    googlePatentLink: "https://patents.google.com/patent/US11464462/en",
    certificateLink: "#",
  },
  {
    id: "6",
    type: "US",
    title: "Handheld device to detect lead compounds and impurities in water",
    image: "/Images/patent-granted/6.jpg",
    inventorCount: 8,
    inventors: "Rafae Qureshi (8), Mishaal Qureshi (17), Minal Ahmad (10), Ayaan Nauert (11), Ibrahim Nauert (9), Zakaria Shaikh (10), Fatima Shakeel (12), Yusra Ali Khan (10)",
    googlePatentLink: "https://patents.google.com/patent/US11754543/en",
    certificateLink: "#",
  },
  {
    id: "7",
    type: "US",
    title: "An automated system for cleaning and recovering spilled oil in the ocean using hair felt rollers",
    image: "/Images/patent-granted/7.jpg",
    inventorCount: 7,
    inventors: "Zeyd Mohd Fahzy (11), Abdallah Farooqui (12), Adam Arsalan Jaffery (10), Abdul Basit Piracha (11), Maheen Rafique (10), Salaah Asif Sayed (10), Umar Ahmad Syed (9)",
    googlePatentLink: "https://patents.google.com/patent/US11401673/en",
    certificateLink: "#",
  },
  {
    id: "8",
    type: "US",
    title: "A system to generate an alert to wake a driver of a vehicle and a method thereof",
    image: "/Images/patent-granted/8.jpg",
    inventorCount: 7,
    inventors: "Abdullah Kabeer (11), Adam Mhal (14), Anish Bhattacharya (13), Ayra Iftikhar (12), Manha Sadarulanam (12), Tanish Prasad (9), Vivek Maranganti (13)",
    googlePatentLink: "https://patents.google.com/patent/US11433916/en",
    certificateLink: "#",
  },
  {
    id: "9",
    type: "US",
    title: "Apparatus and method to clean garbage from water bodies",
    image: "/Images/patent-granted/9.jpg",
    inventorCount: 3,
    inventors: "Yumna Syeda Ali Shah (16), Nimra Syeda Ali Shah (14), Bilal Syed Ali Shah (11)",
    googlePatentLink: "https://patents.google.com/patent/US11414825/en",
    certificateLink: "#",
  },
  {
    id: "10",
    type: "US",
    title: "A package delivery box",
    image: "/Images/patent-granted/10.jpg",
    inventorCount: 7,
    inventors: "Hisham Ahmad (12), Isha Agrawal (12), Carcyn Coleman (14), Aiza Gaffar (14), Daniel Syed (11), Sooryavanshi Narayanan (13), Anika Prasad (7)",
    googlePatentLink: "https://patents.google.com/patent/US11571079/en",
    certificateLink: "#",
  },
  {
    id: "11",
    type: "US",
    title: "Fluid flow control unit",
    image: "/Images/patent-granted/11.jpg",
    inventorCount: 1,
    inventors: "Ayat Faizan (04)",
    googlePatentLink: "https://patents.google.com/patent/US11753804/en",
    certificateLink: "#",
  },
  {
    id: "12",
    type: "US",
    title: "Wearable device for managing alcohol-driven violence",
    image: "/Images/patent-granted/12.jpg",
    inventorCount: 9,
    inventors: "Reya Dawlah (15), Zad Ahmed (13), Naadira Shareef Kateeb (13), Tarik Syed (11), Rishi Kata (11), Lingesh Veda (13), Yusuf Zakiy Ali (11), Shreya Nair (14), Ahmed Malik (14)",
    googlePatentLink: "https://patents.google.com/patent/US11766549/en",
    certificateLink: "#",
  },
  {
    id: "13",
    type: "US",
    title: "System and Method for Mental State Determination",
    image: "/Images/patent-granted/13.jpg",
    inventorCount: 7,
    inventors: "Sidra Ambreen (16), Syed Shah Ekramullah Alvi (15), Abdul Malik Ayam (15), Hunzalah Iqbal (14), Mustafa Qadri (15), Ayan Zaman (15), Ridah Shaista Shanavas (15)",
    googlePatentLink: "https://patents.google.com/patent/US11751783/en",
    certificateLink: "#",
  },
  {
    id: "14",
    type: "US",
    title: "High-speed pressure based propulsion system for transporting resources",
    image: "/Images/patent-granted/14.jpg",
    inventorCount: 5,
    inventors: "Summan Rahman (15), Aiman Rahman (15), Daanish Sheikh (16), Roohie Sheikh (14), Ridah Shaista Shanavas (15)",
    googlePatentLink: "https://patents.google.com/patent/US11858756/en",
    certificateLink: "#",
  },
  {
    id: "15",
    type: "US",
    title: "Apparatus for sanitising products",
    image: "/Images/patent-granted/15.jpg",
    inventorCount: 8,
    inventors: "Kayla Goodrich (12), Manish Rangan (13), Muhammad Sayed (15), Benjamin Stafford (14), Zaina Iqbal (12), Shayan Iqbal (11), Kenny Joel DeCay Jr. (15), Omar Eido (8)",
    googlePatentLink: "https://patents.google.com/patent/US11857687/en",
    certificateLink: "#",
  },
  {
    id: "16",
    type: "US",
    title: "Automatic Sunvisor Assembly",
    image: "/Images/patent-granted/16.jpg",
    inventorCount: 7,
    inventors: "Abdullah Hasani (16), Mustafa Hasani (13), Mariam Mansoor (14), Rizwan Mansoor (15), Madhalasa Iyer (13), Sparsh Kamdar (10), Umar Kateeb (10)",
    googlePatentLink: "https://patents.google.com/patent/US11858319/en",
    certificateLink: "#",
  },
  {
    id: "17",
    type: "US",
    title: "Bio-Degradable Container",
    image: "/Images/patent-granted/17.jpg",
    inventorCount: 8,
    inventors: "Hana Ahmad (15), Humza Ahmad (12), Mohsen Ahmad (8), Rabiya Sayeed (13), Sofia Ali (14), Zain Ali (09), Sarah Nawab (14), Danyal Nawab (12)",
    googlePatentLink: "https://patents.google.com/patent/US11891221/en",
    certificateLink: "#",
  },
  {
    id: "18",
    type: "US",
    title: "Deep sea pressure based projectile launching system",
    image: "/Images/patent-granted/18.jpg",
    inventorCount: 10,
    inventors: "Aroush Fatima (8), Arifa Fatima (8), Ashaz Haque (10), Zayd Khan (11), Omar Farooq Khan (12), Wafiqah Zubair (13), Rida Siddiqui (13), Abdullah Nouiouat (14), Abdurraheem Sheikh (13), Hamza Ahmed (11)",
    googlePatentLink: "https://patents.google.com/patent/US11959725/en",
    certificateLink: "#",
  },
  {
    id: "19",
    type: "US",
    title: "Smart shower head",
    image: "/Images/patent-granted/19.jpg",
    inventorCount: 6,
    inventors: "Ameer Syedibrahim (15), Amjad Syedibrahim (15), Syed Shah Ekramullah Alvi (15), Sidra Ambreen (16), Hiba Khan (15), Zainab Khan (14)",
    googlePatentLink: "https://patents.google.com/patent/US11933029/en",
    certificateLink: "#",
  },
  {
    id: "20",
    type: "US",
    title: "A System for refilling of used markers",
    image: "/Images/patent-granted/20.jpg",
    inventorCount: 11,
    inventors: "Maheen Rafique (11), Abdul Basit Piracha (13), Naveed Rauf (12), Ali Akbar Kayani (10), Meher Saanvi Singh (10), Jiya Saanvi Singh (08), Maya Ajlouni (07), Abdullah Mohiuddin (10), Hassan Saadi (11), Hiba Sheikh (12), Gibran Saleem (11)",
    googlePatentLink: "https://patents.google.com/patent/US11964508/en",
    certificateLink: "#",
  },
  {
    id: "21",
    type: "US",
    title: "Apparatus to enable differently abled users to communicate and a method thereof",
    image: "/Images/patent-granted/21.jpg",
    inventorCount: 14,
    inventors: "Yashas Vamsi Pradeep (16), Zayn Sohel Sachak (13), Gautam Rao (16), Hamza Ali Zakir (12), Sanjiv Sridharan (13), Sheza Asif (13), Iliyan Ali Mithani (08), Vihan Yerubandi (15), Nihal Yerubandi (10), Abdullah Ali Syed (11), Avaneesh Jakkireddy (12), Raj Kusumakar (10), Abdullah Hasani (17), Mishaal Qureshi (17)",
    googlePatentLink: "https://patents.google.com/patent/US12032156/en",
    certificateLink: "#",
  },
  {
    id: "22",
    type: "US",
    title: "An IOT-Based management system and a method for assisting users around a swimming pool",
    image: "/Images/patent-granted/22.jpg",
    inventorCount: 15,
    inventors: "Mohammed Abdussamad Zaki (09), Safiyah Fatima (13), Afreen Fatima (17), Afrin Shaikh (14), Kemery Oparah (12), Maazin Saif (13), Amreen Syed (10), Hadiya Sameen (12), Aayan Chowdhury (12), Abdul Basit Piracha (14), Abdullah Hasani (17), Mishaal Qureshi (17), Zaynab Khan (17), Mariam Mir (11), Muhummed Mir (14)",
    googlePatentLink: "https://patents.google.com/patent/US12020553/en",
    certificateLink: "#",
  },
  {
    id: "23",
    type: "US",
    title: "Method and system for preventing injury by friendly fire",
    image: "/Images/patent-granted/23.jpg",
    inventorCount: 7,
    inventors: "Aarish Salman Bhojani (15), Nadia Anisa Sethuraman (16), Sofia Sethuraman (15), Raahi S Jogani (16), Zaid Marwat (15), Abdullah Hasani (17), Hisham Ahmad (13)",
    googlePatentLink: "https://patents.google.com/patent/US12038245/en",
    certificateLink: "#",
  },
  {
    id: "24",
    type: "US",
    title: "Biodegradable cover for a portable electronic device",
    image: "/Images/patent-granted/24.webp",
    inventorCount: 15,
    inventors: "Zara Majid (13), Aniq Shaikh (13), Ali Khan (13), Abdullah Mommandi (13), Basith Abdul Syed (11), Aayesha Syed Ibrahim (16), Saanchi Gabri (09), Pranav Kumar (13), Prisha Bhat (12), Hadia Khatri (14), Sufiya Khatri (13), Abdullah Hasani (17), Mishaal Qureshi (17), Zaynab Khan (17), Rishika Nandigam (16)",
    googlePatentLink: "https://patents.google.com/patent/US12212355/en",
    certificateLink: "#",
  },
  {
    id: "25",
    type: "US",
    title: "Method and system for providing a smart whiteboard cleaner",
    image: "/Images/patent-granted/25.webp",
    inventorCount: 11,
    inventors: "Vedanth Venkatesh (14), Gabriel Bashir Khatri (09), Iffra Mehek Pathan (12), Saad Master (14), Rehan Sahir Ali (10), Zahra Shifa Khatri (11), Samad Syed (13), Darshan Kumar (11), Abdullah Hasani (17), Mishaal Qureshi (17), Zaynab Khan (17)",
    googlePatentLink: "https://patents.google.com/patent/US12210692/en",
    certificateLink: "#",
  },
  {
    id: "26",
    type: "US",
    title: "Perfume dispersing device",
    image: "/Images/patent-granted/26.webp",
    inventorCount: 1,
    inventors: "Kimaya Rafiq Meherali (17)",
    googlePatentLink: "https://patents.google.com/patent/US12207721/en",
    certificateLink: "#",
  },
  {
    id: "27",
    type: "US",
    title: "Aircraft tracking system and method",
    image: "/Images/patent-granted/27.webp",
    inventorCount: 7,
    inventors: "Danish Khan (17), Sidra Ambreen (19), Mustafa Syed (16), Yaseen Syed (15), Mehreen Syed (13), Aiman Rahman (16), Summan Rahman (16)",
    googlePatentLink: "https://patents.google.com/patent/US12217616/en",
    certificateLink: "#",
  },
  {
    id: "28",
    type: "US",
    title: "Smart rescue system coordinated with an interactive application",
    image: "/Images/patent-granted/28.webp",
    inventorCount: 14,
    inventors: "Aarifa Fatima (11), Ayesha Fatima (07), Ashaz Haque (13), Kaushiki Mudgal (17), Abhudya Sharma (12), Zayan Tabish (10), Zayed Tabish (13), Daanya Tabish (08), Shayan Naiyar Taban (10), Mikhail Imtiaz (15), Sama Fatima (13), Mishaal Fauzan Qureshi (15), Aiman Fatima Jamadar (17), Aroush Fatima (11)",
    googlePatentLink: "https://patents.google.com/patent/US12211384/en",
    certificateLink: "#",
  },
  {
    id: "29",
    type: "US",
    title: "A System For Displaying Selected Clothes On A Dummy Human Body",
    image: "/Images/patent-granted/29.png",
    inventorCount: 1,
    inventors: "Kimaya Rafiq Meherali (17)",
    googlePatentLink: "https://patents.google.com/patent/US12327279/en",
    certificateLink: "#",
  },
  {
    id: "30",
    type: "US",
    title: "Self Sanitizing Door Handle With Protective Cover",
    image: "/Images/patent-granted/30.png",
    inventorCount: 9,
    inventors: "Maleeha Khan (16), Imaan Moosa (16), Inaya Sheikh (16), Mahum Rana (16), Laiba Mehmood (16), Ayaan Mehmood (16), Aamena Baig (14), Ayesha Baig (14), Deen Sheikh (15)",
    googlePatentLink: "https://patents.google.com/patent/US12415005/en",
    certificateLink: "#",
  },
  {
    id: "31",
    type: "US",
    title: "Method and System For Providing A Smart Ladder To A User",
    image: "/Images/patent-granted/31.png",
    inventorCount: 10,
    inventors: "Shayaan Shaik (10), Aqil Gudur (12), Zashaan T Shaik (12), Gupil Mayari (12), Omar Mohammed (12), Suleman Khan Mohammed (10), Humna Fakeha Khan (13), Abdullah Hasani (17), Mishaal Qureshi (17), Zaynab Khan (17)",
    googlePatentLink: "https://patents.google.com/patent/US12404722/en",
    certificateLink: "#",
  },
  {
    id: "32",
    type: "SA",
    title: "Water desalination system",
    image: "/Images/patent-granted/32.jpg",
    inventorCount: 6,
    inventors: "Mohammad Ayaan (11), Mariya Kawish (9), Faizaan Syed Hussain (13), Maryam Abid Bhojwani (12), Bilal S. Ali Shah (11), Nimra Syeda Ali Shah (14)",
    googlePatentLink: "https://patents.google.com/patent/ZA202209145/en",
    certificateLink: "#",
  },
  {
    id: "33",
    type: "SA",
    title: "Brick for power generation",
    image: "/Images/patent-granted/33.jpg",
    inventorCount: 7,
    inventors: "Aamenah Saeed (12), Bilal S. Ali Shah (11), Mehreen Afreen Syed (13), Omar Aamir Memon (11), Rania Azeez (13), Yahya Siddiqui (10), Zain Khan (12)",
    googlePatentLink: "https://patents.google.com/patent/ZA202209146/en",
    certificateLink: "#",
  },
  {
    id: "34",
    type: "SA",
    title: "Stress management system",
    image: "/Images/patent-granted/34.jpg",
    inventorCount: 6,
    inventors: "Bilaal Hassan (16), Marium Khan (17), Shafaat Ahsen (17), Bilal Nouiouat (15), Hiba Thayyil (16), Sidra Ambreen (16)",
    googlePatentLink: "https://patents.google.com/patent/ZA202209154/en",
    certificateLink: "#",
  },
  {
    id: "35",
    type: "SA",
    title: "Vehicle collision avoidance system",
    image: "/Images/patent-granted/35.jpg",
    inventorCount: 7,
    inventors: "Azal Amer (14), Ryan Xie (13), Connor Price-Gearey (14), Nikitha Thoduguli (13), Rishab Sidamshetty (13), Shreeya Madhavanur (13), Ashton Rischer (14)",
    googlePatentLink: "https://patents.google.com/patent/ZA202209144/en",
    certificateLink: "#",
  },
  {
    id: "36",
    type: "SA",
    title: "Method and apparatus for enabling communication of differently abled users",
    image: "/Images/patent-granted/36.jpg",
    inventorCount: 14,
    inventors: "Yashas Vamsi Pradeep (16), Zayn Sohel Sachak (13), Gautam Rao (16), Hamza Ali Zakir (12), Sanjiv Sridharan (13), Sheza Asif (13), Iliyan Ali Mithani (08), Vihan Yerubandi (15), Nihal Yerubandi (10), Abdullah Ali Syed (11), Avaneesh Jakkireddy (12), Raj Kusumakar (10), Abdullah Hasani (17), Mishaal Qureshi (17)",
    googlePatentLink: "https://patents.google.com/patent/ZA202209147/en",
    certificateLink: "#",
  },
  {
    id: "37",
    type: "SA",
    title: "Preventing finger of a user from pinch in a door gap",
    image: "/Images/patent-granted/37.jpg",
    inventorCount: 2,
    inventors: "Ayat Faizan (4), Vihan Yerubandi (15)",
    googlePatentLink: "https://patents.google.com/patent/ZA202210453/en",
    certificateLink: "#",
  },
  {
    id: "38",
    type: "SA",
    title: "Method and system for providing a smart ladder to a user",
    image: "/Images/patent-granted/38.jpg",
    inventorCount: 10,
    inventors: "Shayaan Shaik (10), Aqil Gudur (12), Zashaan T Shaik (12), Gupil Mayari (12), Omar Mohammed (12), Suleman Khan Mohammed (10), Humna Fakeha Khan (13), Abdullah Hasani (17), Mishaal Qureshi (17), Zaynab Khan (17)",
    googlePatentLink: "https://patents.google.com/patent/ZA202303467/en",
    certificateLink: "#",
  },
  {
    id: "39",
    type: "SA",
    title: "A system for monitoring water consumption of users and a method thereof",
    image: "/Images/patent-granted/39.jpg",
    inventorCount: 12,
    inventors: "Mustafa Hasani (15), Malak Askar (15), Karim Askar (13), Adam Mhal (15), Manha Sadarulanam (14), Sooryavanshi Narayanan (15), Vishy Narayanan (8), Meher Saanvi Singh (11), Jiya Saanvi Singh (9), Benjamin Stafford (16), Sparsh Kamdar (12), Aaina Mitchell (12)",
    googlePatentLink: "https://patents.google.com/patent/ZA202303468/en",
    certificateLink: "#",
  },
  {
    id: "40",
    type: "SA",
    title: "A system and a method for color-blind person to distinguish colors in a surrounding",
    image: "/Images/patent-granted/40.jpg",
    inventorCount: 11,
    inventors: "Isha Agrawal (13), Tarik Syed (13), Nakshatra Piduri (13), Advaita Piduri (09), Madhalasa Iyer (15), Nithyashri Ramesh (11), Hisham Ahmad (13), Abdullah Kabeer (13), Abdullah Hasani (17), Mishaal Qureshi (17), Zaynab Khan (17)",
    googlePatentLink: "https://patents.google.com/patent/ZA202303469/en",
    certificateLink: "#",
  },
  {
    id: "41",
    type: "SA",
    title: "An IOT-Based management system and a method for assisting users around a swimming pool",
    image: "/Images/patent-granted/41.jpg",
    inventorCount: 15,
    inventors: "Mohammed Abdussamad Zaki (09), Safiya Fatima (13), Afreen Fatima (17), Afrin Shaikh (14), Kemery Oparah (12), Maazin Saif (13), Amreen Syed (10), Hadiya Sameen (12), Aayan Chowdhury (12), Abdul Basit Piracha (14), Abdullah Hasani (17), Mishaal Qureshi (17), Zaynab Khan (17), Mariam Mir (11), Muhummed Mir (14)",
    googlePatentLink: "https://patents.google.com/patent/ZA202303472/en",
    certificateLink: "#",
  },
  {
    id: "42",
    type: "SA",
    title: "Method and system for preventing injury by friendly fire",
    image: "/Images/patent-granted/42.jpg",
    inventorCount: 7,
    inventors: "Aarish Salman Bhojani (15), Nadia Anisa Sethuraman (16), Sofia Sethuraman (15), Raahi S Jogani (16), Zaid Marwat (15), Abdullah Hasani (17), Hisham Ahmad (13)",
    googlePatentLink: "https://patents.google.com/patent/ZA202303517/en",
    certificateLink: "#",
  },
  {
    id: "43",
    type: "SA",
    title: "A system for displaying selected clothes on a human body",
    image: "/Images/patent-granted/43.jpg",
    inventorCount: 1,
    inventors: "Kimaya Rafiq Meherali (17)",
    googlePatentLink: "https://patents.google.com/patent/ZA202303520/en",
    certificateLink: "#",
  },
  {
    id: "44",
    type: "SA",
    title: "Stabilizer System For Controlling Tipping Of Furniture",
    image: "/Images/patent-granted/44.png",
    inventorCount: 14,
    inventors: "Isha Agrawal (13), Nithyashri Ramesh (11), Sooryavanshi Narayanan (15), Sanjiv Sridharan (13), Hisham Ahmad (13), Vishy Narayanan (09), Sheza Asif (14), Nihal Yerubandi (11), Sparsh Kamdar (12), Nakshatra Piduri (13), Raahi S Jogani (16), Sofia Sethuraman (15), Ashaz Haque (15), Aarifa Fatima (12)",
    googlePatentLink: "https://patents.google.com/patent/ZA202402960/en",
    certificateLink: "#",
  },
];
export const patentStatsData:StatItem[] = [
  {
    value: "44",
    label: "Patents Granted",
    color: "#7B53A1",
  },
  {
    value: "31",
    flag: "/Images/patent-granted/Us.png",
    color: "#EF4123",
  },
  {
    value: "13",
   flag: "/Images/patent-granted/SA.png",
    color: "#F59E0B",
  },
  {
    value: "4",
    label: "Youngest Inventor (yrs)",
    color: "#5A8F3D",
  },
];


export const CollegeAcceptanceData =[
  {
    title: "College Acceptance",
   image:"/Images/ContactUs/HeroSection.jpg",
  },
  {
     title: "College Acceptance",
   image:"/Images/ContactUs/HeroSection.jpg",
  },
  {
     title: "College Acceptance",
   image:"/Images/ContactUs/HeroSection.jpg",
  },
];

export const AcceptanceData:CommonTextSectionData ={
title: "College Acceptance Success Stories",
  description:
    "DiscoverSTEM has a proven track record of students getting accepted into the World’s top universities like Harvard, Stanford, Duke University, Johns Hopkins, Caltech, New York University, MIT-Massachusetts, Brown University, Rice University, Princeton, University of California – Berkeley, and so on. Due to their exceptional innovation capabilities, patented inventions and meritorious profile, our students have also been granted full and partial scholarships for their college.Over the years, the DiscoverSTEM Team has developed the knowledge and roadmap for getting students into top universities and acquiring scholarships. We mentor our students in diverse disciplines, including innovations, research, entrepreneurship and leadership.",
 


}

export const collegeAcceptance2025Data: CommonTextSectionData = {
  title: "College Acceptances - 2025",
  description:
    "DiscoverSTEM has witnessed tremendous success in the 2025 college admissions cycle. Our students have secured acceptances at some of the most prestigious universities in the United States. The exceptional outcome validates our unique approach to nurturing future innovators, researchers, entrepreneurs and leaders.",
  points: [
    "83% of ILM Students who graduated high school in 2025 accepted to the Top 10 US Schools",
    "94% of ILM Students who graduated high school in 2025 accepted to the Top 21 US Schools",
  ],
};

export const admissionFilters = {
  batchFilters: [
    "All Batches",
    "Class of 2025",
    "Previous Batches",
  ],

  programFilters: [
    "All",
    "DIP",
    "ILM",
    "X-AILM",
    "DIP & DEP",
  ],
};

export const admissionStudentsData: AdmissionStudent[] = [
  {
    id: 1,
    name: "Prisha Bhat",
    initials: "PB",
    image: "/Images/Home/Spotlight/prisha.jpg",
    batch: "Class of 2025",
    program: "DIP",
    school: "DiscoverSTEM Program · DIP",
    acceptedTo: "Harvard University",
  },
  {
    id: 2,
    name: "Zashaan Shaikh",
    initials: "ZS",
    image: "/Images/Home/Spotlight/Zashaan.jpg",
    batch: "Class of 2025",
    program: "ILM",
    school: "DiscoverSTEM Program · ILM",
    acceptedTo: "Princeton, Georgia Tech, Rice University",
  },
  {
    id: 3,
    name: "Shreya Nair",
    initials: "SN",
    image: "/Images/Home/Spotlight/shreya.jpg",
    batch: "Class of 2025",
    program: "DIP",
    school: "DiscoverSTEM Program · DIP",
    acceptedTo: "UPenn",
  },
  {
    id: 4,
    name: "Adam Mhal",
    initials: "AM",
    image: "/Images/Home/Spotlight/adam.jpg",
    batch: "Class of 2025",
    program: "ILM",
    school: "DiscoverSTEM Program · ILM",
    acceptedTo: "MIT (CS)",
  },
  {
    id: 5,
    name: "Isha Agrawal",
    initials: "IA",
    image: "/Images/Home/Spotlight/Isha.jpg",
    batch: "Class of 2025",
    program: "ILM",
    school: "DiscoverSTEM Program · ILM",
    acceptedTo: "Cornell University (CS), UT Austin (CS), UIUC (CS)",
  },
  {
    id: 6,
    name: "Tanvi Saxena",
    initials: "TS",
    image: "/Images/Home/Spotlight/Tanvi.jpg",
    batch: "Class of 2025",
    program: "ILM",
    school: "DiscoverSTEM Program · ILM",
    acceptedTo: "Cornell University (CS)",
  },
  {
    id: 7,
    name: "Dhruv Alamuri",
    initials: "DA",
    image: "/Images/Home/Spotlight/Dhruv.jpg",
    batch: "Class of 2025",
    program: "ILM",
    school: "DiscoverSTEM Program · ILM",
    acceptedTo: "UT Austin (CS)",
  },
  {
    id: 8,
    name: "Aniq S.",
    initials: "AS",
    image: "/Images/Home/Spotlight/Aniq.jpg",
    batch: "Class of 2025",
    program: "ILM",
    school: "DiscoverSTEM Program · ILM",
    acceptedTo: "UT Austin (CS)",
  },
  {
    id: 9,
    name: "Rayhan Shanavas",
    initials: "RS",
    image: "/Images/Home/Spotlight/rayhan.png",
    batch: "Class of 2025",
    program: "ILM",
    school: "DiscoverSTEM Program · ILM",
    acceptedTo: "UNC Chapel Hill (Public Health)",
  },
  {
    id: 10,
    name: "Nakshatra Piduri",
    initials: "NP",
    image: "/Images/Home/Spotlight/nakshatra.jpg",
    batch: "Class of 2025",
    program: "ILM",
    school: "DiscoverSTEM Program · ILM",
    acceptedTo: "UC Berkeley (Neuroscience), Creighton Medical School, Ohio State Medical School",
  },
  {
    id: 11,
    name: "Reem Khan",
    initials: "RK",
    image: "/Images/Home/Spotlight/reem.jpg",
    batch: "Class of 2025",
    program: "ILM",
    school: "DiscoverSTEM Program · ILM",
    acceptedTo: "USC IYA (Business of Innovation)",
  },
  {
    id: 12,
    name: "Rania Khan",
    initials: "RK",
    image: "/Images/Home/Spotlight/rania.jpg",
    batch: "Class of 2025",
    program: "ILM",
    school: "DiscoverSTEM Program · ILM",
    acceptedTo: "USC IYA (Business of Innovation, Dean's Scholar)",
  },
  {
    id: 13,
    name: "Abdullah Kabeer",
    initials: "AK",
    image: "/Images/Home/Spotlight/abdullah.jpg",
    batch: "Class of 2025",
    program: "ILM",
    school: "DiscoverSTEM Program · ILM",
    acceptedTo: "McCombs School of Business",
  },
  {
    id: 14,
    name: "Fatima Shakeel",
    initials: "FS",
    image: "/Images/Home/Spotlight/fatima.jpg",
    batch: "Class of 2025",
    program: "ILM",
    school: "DiscoverSTEM Program · ILM",
    acceptedTo: "McCombs School of Business",
  },
  {
    id: 15,
    name: "Zakaria S",
    initials: "ZS",
    image: "/Images/Home/Spotlight/zakaria.jpg",
    batch: "Class of 2025",
    program: "ILM",
    school: "DiscoverSTEM Program · ILM",
    acceptedTo: "McCombs School of Business, USC Marshall School of Business, Kelley School of Business",
  },
  {
    id: 16,
    name: "Simran Babaria",
    initials: "SB",
    image: "/Images/Home/Spotlight/simran.jpg",
    batch: "Class of 2025",
    program: "ILM",
    school: "DiscoverSTEM Program · ILM",
    acceptedTo: "Kelley School of Business",
  },
  {
    id: 17,
    name: "Ambreen Younas",
    initials: "AY",
    image: "/Images/Home/Spotlight/ambreen.jpg",
    batch: "Class of 2025",
    program: "DIP",
    school: "DiscoverSTEM Program · DIP",
    acceptedTo: "Galveston Medical School, University of Texas Medical Branch, Baylor College of Medicine",
  },
  {
    id: 18,
    name: "Hanin Shakeel",
    initials: "HS",
    image: "/Images/Home/Spotlight/hanin.jpg",
    batch: "Class of 2025",
    program: "DIP",
    school: "DiscoverSTEM Program · DIP",
    acceptedTo: "The University of North Texas Health Science Center (Medical School)",
  },
  {
    id: 19,
    name: "Nadia Mustafa",
    initials: "NM",
    image: "/Images/Home/Spotlight/nadia.jpg",
    batch: "Class of 2025",
    program: "DIP",
    school: "DiscoverSTEM Program · DIP",
    acceptedTo: "Southern Methodist University, Baylor College of Medicine",
  },
  {
    id: 20,
    name: "Madhalasa Iyer",
    initials: "MI",
    image: "/Images/Home/Spotlight/madhalasa.png",
    batch: "Previous Batches",
    program: "ILM",
    school: "DiscoverSTEM Program · ILM",
    acceptedTo: "Princeton University, UPenn, Cornell University, Caltech",
  },
  {
    id: 21,
    name: "Nikitha Thoduguli",
    initials: "NT",
    image: "/Images/Home/Spotlight/nikitha.jpg",
    batch: "Previous Batches",
    program: "DIP",
    school: "DiscoverSTEM Program · DIP",
    acceptedTo: "MIT",
  },
  {
    id: 22,
    name: "Wafiqah Zubair",
    initials: "WZ",
    image: "/Images/Home/Spotlight/Wafiqah.jpg",
    batch: "Previous Batches",
    program: "DIP",
    school: "DiscoverSTEM Program · DIP",
    acceptedTo: "Harvard University",
  },
  {
    id: 23,
    name: "Ryan Xie",
    initials: "RX",
    image: "/Images/Home/Spotlight/Ryan.jpg",
    batch: "Previous Batches",
    program: "DIP",
    school: "DiscoverSTEM Program · DIP",
    acceptedTo: "Cornell University",
  },
  {
    id: 24,
    name: "Marium Khan",
    initials: "MK",
    image: "/Images/Home/Spotlight/marium.png",
    batch: "Previous Batches",
    program: "DIP",
    school: "DiscoverSTEM Program · DIP",
    acceptedTo: "Duke University, UT Southwestern Medical Center",
  },
  {
    id: 25,
    name: "Ameer Syedibrahim",
    initials: "AS",
    image: "/Images/Home/Spotlight/ameer.jpg",
    batch: "Previous Batches",
    program: "DIP",
    school: "DiscoverSTEM Program · DIP",
    acceptedTo: "Duke University",
  },
  {
    id: 26,
    name: "Amjad Syedibrahim",
    initials: "AS",
    image: "/Images/Home/Spotlight/amzad.jpg",
    batch: "Previous Batches",
    program: "DIP",
    school: "DiscoverSTEM Program · DIP",
    acceptedTo: "Duke University",
  },
  {
    id: 27,
    name: "Shreeya Madhvanur",
    initials: "SM",
    image: "/Images/Home/Spotlight/shreeya.jpg",
    batch: "Previous Batches",
    program: "DIP",
    school: "DiscoverSTEM Program · DIP",
    acceptedTo: "Rice University",
  },
  {
    id: 28,
    name: "Abdullah Hasani",
    initials: "AH",
    image: "/Images/Home/Spotlight/AbdullahHasani.png",
    batch: "Previous Batches",
    program: "DIP",
    school: "DiscoverSTEM Program · DIP",
    acceptedTo: "UT Austin (CS)",
  },
  {
    id: 29,
    name: "Sooryavanshi Narayanan",
    initials: "SN",
    image: "/Images/Home/Spotlight/Sooryavanshi.png",
    batch: "Previous Batches",
    program: "ILM",
    school: "DiscoverSTEM Program · ILM",
    acceptedTo: "UT Austin, NYU",
  },
  {
    id: 30,
    name: "Raahi Jogani",
    initials: "RJ",
    image: "/Images/Home/Spotlight/Raahi.jpg",
    batch: "Previous Batches",
    program: "X-AILM",
    school: "DiscoverSTEM Program · X-AILM",
    acceptedTo: "Georgia Tech",
  },
  {
    id: 31,
    name: "Manish Rangan",
    initials: "MR",
    image: "/Images/Home/Spotlight/manish.jpg",
    batch: "Previous Batches",
    program: "DIP & DEP",
    school: "DiscoverSTEM Program · DIP & DEP",
    acceptedTo: "Georgia Tech",
  },
  {
    id: 32,
    name: "Carcyn Coleman",
    initials: "CC",
    image: "/Images/Home/Spotlight/carcyn.jpg",
    batch: "Previous Batches",
    program: "DIP",
    school: "DiscoverSTEM Program · DIP",
    acceptedTo: "NYU",
  },
  {
    id: 33,
    name: "Ridah Shaista Shanavas",
    initials: "RS",
    image: "/Images/Home/Spotlight/Ridah.jpg",
    batch: "Previous Batches",
    program: "ILM",
    school: "DiscoverSTEM Program · ILM",
    acceptedTo: "Caltech",
  },
  {
    id: 34,
    name: "Ashton Rischer",
    initials: "AR",
    image: "/Images/Home/Spotlight/ashton.jpg",
    batch: "Previous Batches",
    program: "DIP",
    school: "DiscoverSTEM Program · DIP",
    acceptedTo: "Embry-Riddle Aeronautical University",
  },
  {
    id: 35,
    name: "Rishika Nandigam",
    initials: "RN",
    image: "/Images/Home/Spotlight/Rishika.jpg",
    batch: "Previous Batches",
    program: "DIP",
    school: "DiscoverSTEM Program · DIP",
    acceptedTo: "NYU",
  },
  {
    id: 36,
    name: "Hadia Khatri",
    initials: "HK",
    image: "/Images/Home/Spotlight/Hadia.jpg",
    batch: "Previous Batches",
    program: "DIP",
    school: "DiscoverSTEM Program · DIP",
    acceptedTo: "Washington University",
  },
  {
    id: 37,
    name: "Vedanth Venkatesh",
    initials: "VV",
    image: "/Images/Home/Spotlight/Vedanth.jpg",
    batch: "Previous Batches",
    program: "DIP",
    school: "DiscoverSTEM Program · DIP",
    acceptedTo: "Stanford University",
  },
  {
    id: 38,
    name: "Bilaal Hassan",
    initials: "BH",
    image: "/Images/Home/Spotlight/Bilaal.jpg",
    batch: "Previous Batches",
    program: "DIP",
    school: "DiscoverSTEM Program · DIP",
    acceptedTo: "University of Texas Southwestern Medical Center",
  },
  {
    id: 39,
    name: "Rishabh Siddamshetty",
    initials: "RS",
    image: "/Images/Home/Spotlight/Rishab.jpg",
    batch: "Previous Batches",
    program: "DIP",
    school: "DiscoverSTEM Program · DIP",
    acceptedTo: "Michigan Ross School of Business",
  },
  {
    id: 40,
    name: "Rahil Kakar",
    initials: "RK",
    image: "/Images/Home/Spotlight/Rahil.jpg",
    batch: "Previous Batches",
    program: "DIP",
    school: "DiscoverSTEM Program · DIP",
    acceptedTo: "Michigan Ross School of Business",
  },
];


export const ctaBannerData: CtaBannerData = {
  title: "Want to be our next",
  highlight: "young innovator & prodigy?",
  subtitle: "Innovation Quotient is the new IQ",
  buttonText: "Request a FREE Information Session",
};

export const awardsStatsData= [
  {
    value: "1",
    label: "George Washington Honor Medal",
    color: "#7B53A1",
  },
  {
    value: "4×",
    label: "AHIS First & Special Prizes",
    color: "#EF4123",
  },
  {
    value: "2×",
    label: "NASA Challenge Recognitions",
    color: "#F59E0B",
  },
  {
    value: "40+",
    label: "Granted Patents Awarded",
    color: "#5A8F3D",
  },
];



const awardExtensions: Record<number, string> = {
  2: "webp",
  3: "webp",
  4: "webp",
};
const awardItems = Array.from({ length: 34 }, (_, i) => {
  const num = i + 1;
  const ext = awardExtensions[num] || "png";
  return {
    image: `/Images/Home/Awards/award${num}.${ext}`,
    alt: `Award ${num}`,
  };
});

export const awardsImagesData: AwardImageItem[] = awardItems;



export const innovationStatsData: StatItem[] = [
  {
    value: "49",
    label: "Innovations Showcased",
    color: "#7B53A1",
  },
  {
    value: "36",
    label: "Patents Granted",
    color: "#EF4123",
  },
  {
    value: "13",
    label: "Patents Pending",
    color: "#F59E0B",
  },
  {
    value: "13",
    label: "Award-Winning Projects",
    color: "#5A8F3D",
  },
];


export const AwardsData =[
  {
    title: "Awards & Recognitions",
 
   image:"/Images/ContactUs/HeroSection.jpg",
  },
  {
    title: "Awards & Recognitions",
 
   image:"/Images/ContactUs/HeroSection.jpg",
  },
  {
   title: "Awards & Recognitions",
 
   image:"/Images/ContactUs/HeroSection.jpg",
  },
];


export const InnovationData =[
  {
    title: "Our Students Innovations",
 
   image:"/Images/ContactUs/HeroSection.jpg",
  },
  {
    title: "Our Students Innovations",
 
   image:"/Images/ContactUs/HeroSection.jpg",
  },
  {
   title: "Our Students Innovations",
 
   image:"/Images/ContactUs/HeroSection.jpg",
  },
];

export const StudentInnovationData= {
  paragraph1:
    "Since 2016, when DiscoverSTEM mentored the first team of innovator kids, all aged between 7–18 years, they have been leading the way on the path of innovation.",

  paragraph2:
    "They have imbibed innovative thinking and entrepreneurial mindset and solved real-life pressing problems in different domains, that include Aerospace, Power, Energy, Security, Health, Environment, Infrastructure, Ocean Health, Transportation, World Hunger, Mental Health, Water, Artificial Intelligence, Child Safety among others.",

  paragraph3:
    "Some of these innovations have gone on to win some of the most prestigious awards in global student innovation competitions. Many of the innovations were evaluated as an 'Innovation of National Security Importance' by US Federal agencies on the recommendation of the United States Patents & Trademark Office.",

  paragraph4:
    "Our student's innovative solutions and products are in the process of being commercialized and making a global impact. Our program is helping young innovators to become serial entrepreneurs at a very young age.",
};





export const innovationFilters: InnovationFilter[] = [
  "All Status",
  "Granted",
  "Pending",
];

const innovationImgExt: Record<number, string> = {
  1:"jpeg",2:"jpg",3:"jpeg",4:"jpg",5:"jpg",6:"jpeg",7:"webp",8:"jpg",
  9:"jpeg",10:"webp",11:"jpg",12:"jpeg",13:"jpg",14:"jpg",15:"jpg",16:"jpg",
  17:"jpg",18:"jpg",19:"jpg",20:"jpg",21:"png",22:"jpg",23:"jpg",24:"jpg",
  25:"jpeg",26:"jpg",27:"jpg",28:"jpg",29:"jpg",30:"jpeg",31:"jpg",32:"jpg",
  33:"jpg",34:"jpg",35:"jpg",36:"png",37:"png",38:"jpeg",39:"jpg",40:"jpeg",
  41:"jpg",42:"jpeg",43:"png",44:"jpg",45:"jpeg",46:"png",47:"jpeg",48:"jpg",49:"jpeg"
};
const patentExt: Record<number, string> = {
  1:"jpg",2:"jpg",3:"jpg",4:"jpg",5:"jpg",6:"jpg",7:"jpg",8:"jpg",9:"jpg",
  10:"jpg",11:"jpg",12:"jpg",13:"jpg",14:"jpg",15:"jpg",16:"jpg",17:"jpg",
  18:"jpg",19:"jpg",20:"jpg",21:"jpg",22:"jpg",23:"jpg",24:"webp",25:"webp",
  26:"webp",27:"webp",28:"png",29:"png",30:"jpg",31:"jpg",32:"jpg",33:"jpg",
  34:"jpg",35:"jpg",36:"jpg"
};
const bibloExt: Record<number, string> = {37:"png",38:"png",39:"png",40:"png",41:"png",42:"png",43:"png",44:"png",45:"jpg",46:"png"};

const innovationItems: InnovationCardItem[] = [
  { id:1, category:"Aerospace", filterType:"Granted", statusIcon:"/Images/innovation/granted.png", image:`/Images/student-innovation/innovation1.${innovationImgExt[1]}`, title:"Relay based system to launch a projectile", awardIcon:"/Images/innovation/award.png", award:"Winner · 1st Prize, NASA Ames Space Settlement Challenge — 2018", patentLink:"https://patents.google.com/patent/US20220034624A1/en?oq=US+20220034624+A1", certificateLink:`/Images/student-innovation/inPatent1.${patentExt[1]}` },
  { id:2, category:"Energy", filterType:"Granted", statusIcon:"/Images/innovation/granted.png", image:`/Images/student-innovation/innovation2.${innovationImgExt[2]}`, title:"Wind powered system to lift water using multiple tanks", awardIcon:"/Images/innovation/award.png", award:"Winner · 1st Prize, Texas Regional Future City Competition — 2020 · Special Prize, Global Finals of Future City Competition — 2020", patentLink:"https://patents.google.com/patent/US20210270240A1/en?oq=US+20210270240+A1", certificateLink:`/Images/student-innovation/inPatent2.${patentExt[2]}` },
  { id:3, category:"Aerospace", filterType:"Granted", statusIcon:"/Images/innovation/granted.png", image:`/Images/student-innovation/innovation3.${innovationImgExt[3]}`, title:"Automated Aircraft Tray Table Disinfecting System Using Ultra-Violet light", awardIcon:"/Images/innovation/award.png", award:"Alternate Finalist · Conrad Spirit of Innovation Challenge — 2018, NASA Kennedy Space Center", patentLink:"https://patents.google.com/patent/US20210269158A1/en?oq=US+20210269158+A1", certificateLink:`/Images/student-innovation/inPatent3.${patentExt[3]}` },
  { id:4, category:"Environment", filterType:"Granted", statusIcon:"/Images/innovation/granted.png", image:`/Images/student-innovation/innovation4.${innovationImgExt[4]}`, title:"Biodegradable bottle cap using pestalotiopsis microsporia to biodegrade waste plastic bottle", awardIcon:"/Images/innovation/award.png", award:"Alternate Finalist · Conrad Spirit of Innovation Challenge — 2018, NASA Kennedy Space Center", patentLink:"https://patents.google.com/patent/US20210269158A1/en?oq=US+20210269158+A1", certificateLink:`/Images/student-innovation/inPatent4.${patentExt[4]}` },
  { id:5, category:"Health", filterType:"Granted", statusIcon:"/Images/innovation/granted.png", image:`/Images/student-innovation/innovation5.${innovationImgExt[5]}`, title:"Drug abuse prevention device and a method thereof", awardIcon:"/Images/innovation/award.png", award:"Winner · Power Pitch Award, Conrad Spirit of Innovation Challenge — 2017, NASA Kennedy Space Center", patentLink:"https://patents.google.com/patent/US11464462B1/en?oq=US-11464462-B1", certificateLink:`/Images/student-innovation/inPatent5.${patentExt[5]}` },
  { id:6, category:"Environment", filterType:"Granted", statusIcon:"/Images/innovation/granted.png", image:`/Images/student-innovation/innovation6.${innovationImgExt[6]}`, title:"Handheld device to detect lead compounds and impurities in water", awardIcon:"/Images/innovation/award.png", award:"Honorable Mention · NASA Ames Space Settlement Design Challenge — 2018", patentLink:"https://patents.google.com/patent/US20210270793A1/en?oq=US+20210270793+A1", certificateLink:`/Images/student-innovation/inPatent6.${patentExt[6]}` },
  { id:7, category:"Automotive", filterType:"Granted", statusIcon:"/Images/innovation/granted.png", image:`/Images/student-innovation/innovation7.${innovationImgExt[7]}`, title:"A system to generate an alert to wake a driver of a vehicle and a method thereof", award:"", patentLink:"https://patents.google.com/patent/US11433916B1/en?oq=US-11433916-B1", certificateLink:`/Images/student-innovation/inPatent7.${patentExt[7]}` },
  { id:8, category:"Environment", filterType:"Granted", statusIcon:"/Images/innovation/granted.png", image:`/Images/student-innovation/innovation8.${innovationImgExt[8]}`, title:"Automated system for cleaning and recovering spilled oil in the ocean using hair felt rollers", award:"", patentLink:"https://patents.google.com/patent/US20210269997A1/en?oq=US+20210269997+A1", certificateLink:`/Images/student-innovation/inPatent8.${patentExt[8]}` },
  { id:9, category:"Environment", filterType:"Granted", statusIcon:"/Images/innovation/granted.png", image:`/Images/student-innovation/innovation9.${innovationImgExt[9]}`, title:"Apparatus and method to clean garbage from water bodies", award:"", patentLink:"https://patents.google.com/patent/US20210269998A1/en?oq=US+20210269998+A1", certificateLink:`/Images/student-innovation/inPatent9.${patentExt[9]}` },
  { id:10, category:"Infrastructure", filterType:"Granted", statusIcon:"/Images/innovation/granted.png", image:`/Images/student-innovation/innovation10.${innovationImgExt[10]}`, title:"A package delivery box", award:"", patentLink:"https://patents.google.com/patent/US20230065017A1/en?oq=US+20230065017+A1", certificateLink:`/Images/student-innovation/inPatent10.${patentExt[10]}` },
  { id:11, category:"Energy", filterType:"Granted", statusIcon:"/Images/innovation/granted.png", image:`/Images/student-innovation/innovation11.${innovationImgExt[11]}`, title:"Fluid flow control unit", award:"", patentLink:"https://patents.google.com/patent/US20230034830A1/en?oq=US+20230034830+A1", certificateLink:`/Images/student-innovation/inPatent11.${patentExt[11]}` },
  { id:12, category:"Health", filterType:"Granted", statusIcon:"/Images/innovation/granted.png", image:`/Images/student-innovation/innovation12.${innovationImgExt[12]}`, title:"Wearable device for managing alcohol-driven violence", award:"", patentLink:"https://patents.google.com/patent/US20230048142A1/en?oq=US+20230048142+A1", certificateLink:`/Images/student-innovation/inPatent12.${patentExt[12]}` },
  { id:13, category:"Health", filterType:"Granted", statusIcon:"/Images/innovation/granted.png", image:`/Images/student-innovation/innovation13.${innovationImgExt[13]}`, title:"System and Method for Mental State Determination", awardIcon:"/Images/innovation/award.png", award:"Global Finalist · Conrad Spirit of Innovation Challenge — 2017, NASA Kennedy Space Center", patentLink:"https://patents.google.com/patent/US20220386914A1/en?oq=US+20220386914+A1", certificateLink:`/Images/student-innovation/inPatent13.${patentExt[13]}` },
  { id:14, category:"Aerospace", filterType:"Granted", statusIcon:"/Images/innovation/granted.png", image:`/Images/student-innovation/innovation14.${innovationImgExt[14]}`, title:"High-speed pressure based propulsion system for transporting resources", award:"", patentLink:"https://patents.google.com/patent/US20220388788A1/en/", certificateLink:`/Images/student-innovation/inPatent14.${patentExt[14]}` },
  { id:15, category:"Automotive", filterType:"Granted", statusIcon:"/Images/innovation/granted.png", image:`/Images/student-innovation/innovation15.${innovationImgExt[15]}`, title:"Automatic sunvisor assembly", award:"", patentLink:"https://patents.google.com/patent/US20230061443A1", certificateLink:`/Images/student-innovation/inPatent15.${patentExt[15]}` },
  { id:16, category:"Health", filterType:"Granted", statusIcon:"/Images/innovation/granted.png", image:`/Images/student-innovation/innovation16.${innovationImgExt[16]}`, title:"Apparatus for sanitising products", award:"", patentLink:"https://patents.google.com/patent/US20230066405A1/en/", certificateLink:`/Images/student-innovation/inPatent16.${patentExt[16]}` },
  { id:17, category:"Environment", filterType:"Granted", statusIcon:"/Images/innovation/granted.png", image:`/Images/student-innovation/innovation17.${innovationImgExt[17]}`, title:"Bio-Degradable Container", award:"", patentLink:"https://patents.google.com/patent/US20220388736A1/en?oq=US+20220388736+A1", certificateLink:`/Images/student-innovation/inPatent17.${patentExt[17]}` },
  { id:18, category:"Water", filterType:"Granted", statusIcon:"/Images/innovation/granted.png", image:`/Images/student-innovation/innovation18.${innovationImgExt[18]}`, title:"Smart shower head", award:"", patentLink:"https://patents.google.com/patent/US20220389694A1/en?oq=US+20220389694+A1", certificateLink:`/Images/student-innovation/inPatent18.${patentExt[18]}` },
  { id:19, category:"Aerospace", filterType:"Granted", statusIcon:"/Images/innovation/granted.png", image:`/Images/student-innovation/innovation19.${innovationImgExt[19]}`, title:"Deep sea pressure based projectile launching system", awardIcon:"/Images/innovation/award.png", award:"Winner · 2nd Prize, NASA Ames Space Settlement Challenge — 2017", patentLink:"https://patents.google.com/patent/US20220099408A1/en?oq=US+20220099408+A1", certificateLink:"/Images/student-innovation/inpatent19.jpg" },
  { id:20, category:"Infrastructure", filterType:"Granted", statusIcon:"/Images/innovation/granted.png", image:`/Images/student-innovation/innovation20.${innovationImgExt[20]}`, title:"System for refilling of used markers", award:"", patentLink:"https://patents.google.com/patent/US20230060737A1/en?oq=US+20230060737+A1", certificateLink:`/Images/student-innovation/inPatent20.${patentExt[20]}` },
  { id:21, category:"Health", filterType:"Granted", statusIcon:"/Images/innovation/granted.png", image:`/Images/student-innovation/innovation21.${innovationImgExt[21]}`, title:"Method and apparatus for enabling communication of differently abled users", award:"", patentLink:"https://patents.google.com/patent/US20230324680A1/", certificateLink:`/Images/student-innovation/inPatent21.${patentExt[21]}` },
  { id:22, category:"Safety", filterType:"Granted", statusIcon:"/Images/innovation/granted.png", image:`/Images/student-innovation/innovation22.${innovationImgExt[22]}`, title:"An IOT-Based management system and a method for assisting users around a swimming pool", award:"", patentLink:"https://patents.google.com/patent/US12020553B2/en?oq=12020553", certificateLink:`/Images/student-innovation/inPatent22.${patentExt[22]}` },
  { id:23, category:"Security", filterType:"Granted", statusIcon:"/Images/innovation/granted.png", image:`/Images/student-innovation/innovation23.${innovationImgExt[23]}`, title:"Method and system for preventing injury by friendly fire", award:"", patentLink:"https://patents.google.com/patent/US12038245B2/en?oq=12038245", certificateLink:`/Images/student-innovation/inPatent23.${patentExt[23]}` },
  { id:24, category:"Environment", filterType:"Granted", statusIcon:"/Images/innovation/granted.png", image:`/Images/student-innovation/innovation24.${innovationImgExt[24]}`, title:"A biodegradable cover for a portable electronic device", award:"", patentLink:"https://patents.google.com/patent/US12212355B2", certificateLink:`/Images/student-innovation/inPatent24.${patentExt[24]}` },
  { id:25, category:"Infrastructure", filterType:"Granted", statusIcon:"/Images/innovation/granted.png", image:`/Images/student-innovation/innovation25.${innovationImgExt[25]}`, title:"Method and system for providing a smart whiteboard cleaner", award:"", patentLink:"https://patents.google.com/patent/US12210692B2/", certificateLink:`/Images/student-innovation/inPatent25.${patentExt[25]}` },
  { id:26, category:"Lifestyle", filterType:"Granted", statusIcon:"/Images/innovation/granted.png", image:`/Images/student-innovation/innovation26.${innovationImgExt[26]}`, title:"Perfume dispersing device", award:"", patentLink:"https://patents.google.com/patent/US12207721B2/", certificateLink:`/Images/student-innovation/inPatent26.${patentExt[26]}` },
  { id:27, category:"Aerospace", filterType:"Granted", statusIcon:"/Images/innovation/granted.png", image:`/Images/student-innovation/innovation27.${innovationImgExt[27]}`, title:"Aircraft tracking system and method", award:"", patentLink:"https://patents.google.com/patent/US20220390615A1/", certificateLink:`/Images/student-innovation/inPatent27.${patentExt[27]}` },
  { id:28, category:"Safety", filterType:"Granted", statusIcon:"/Images/innovation/granted.png", image:`/Images/student-innovation/innovation28.${innovationImgExt[28]}`, title:"Method and system for providing a smart ladder to a user", award:"", patentLink:"https://patents.google.com/patent/ZA202303467B/en?oq=ZA202303467B", certificateLink:`/Images/student-innovation/inPatent28.${patentExt[28]}` },
  { id:29, category:"Lifestyle", filterType:"Granted", statusIcon:"/Images/innovation/granted.png", image:`/Images/student-innovation/innovation29.${innovationImgExt[29]}`, title:"A System For Displaying Selected Clothes On A Dummy Human Body", award:"", patentLink:"https://patents.google.com/patent/US12327279B2/en?oq=17993091", certificateLink:`/Images/student-innovation/inPatent29.${patentExt[29]}` },
  { id:30, category:"Energy", filterType:"Granted", statusIcon:"/Images/innovation/granted.png", image:`/Images/student-innovation/innovation30.${innovationImgExt[30]}`, title:"Water desalination system", awardIcon:"/Images/innovation/award.png", award:"1st Prize, Texas Regional Future City Competition — 2020 · Special Prize, Global Finals of Future City Competition — 2020", patentLink:"https://patents.google.com/patent/ZA202209145B/en?oq=ZA202209145B", certificateLink:`/Images/student-innovation/inPatent30.${patentExt[30]}` },
  { id:31, category:"Energy", filterType:"Granted", statusIcon:"/Images/innovation/granted.png", image:`/Images/student-innovation/innovation31.${innovationImgExt[31]}`, title:"Brick for power generation", awardIcon:"/Images/innovation/award.png", award:"2nd Prize, Texas Regional Future City Competition — 2019 · Special Prize, Texas Regional Future City Competition — 2019", patentLink:"https://patents.google.com/patent/ZA202209146B/en?oq=ZA202209146B", certificateLink:`/Images/student-innovation/inPatent31.${patentExt[31]}` },
  { id:32, category:"Health", filterType:"Granted", statusIcon:"/Images/innovation/granted.png", image:`/Images/student-innovation/innovation32.${innovationImgExt[32]}`, title:"Stress management system", awardIcon:"/Images/innovation/award.png", award:"1st Prize, Conrad Spirit of Innovation Challenge — 2016, NASA Kennedy Space Center", patentLink:"https://patents.google.com/patent/ZA202209154B/en?oq=ZA202209154B", certificateLink:`/Images/student-innovation/inPatent32.${patentExt[32]}` },
  { id:33, category:"Safety", filterType:"Granted", statusIcon:"/Images/innovation/granted.png", image:`/Images/student-innovation/innovation33.${innovationImgExt[33]}`, title:"Vehicle collision avoidance system", award:"", patentLink:"https://patents.google.com/patent/ZA202209144B/en?oq=ZA202209144B", certificateLink:`/Images/student-innovation/inPatent33.${patentExt[33]}` },
  { id:34, category:"Safety", filterType:"Granted", statusIcon:"/Images/innovation/granted.png", image:`/Images/student-innovation/innovation34.${innovationImgExt[34]}`, title:"Preventing finger of a user from pinch in a door gap", award:"", patentLink:"https://patents.google.com/patent/ZA202210453B/en?oq=ZA202210453B", certificateLink:`/Images/student-innovation/inPatent34.${patentExt[34]}` },
  { id:35, category:"Health", filterType:"Granted", statusIcon:"/Images/innovation/granted.png", image:`/Images/student-innovation/innovation35.${innovationImgExt[35]}`, title:"A system for monitoring water consumption of users and a method thereof", award:"", patentLink:"https://patents.google.com/patent/ZA202303468B/en?oq=ZA202303468B", certificateLink:`/Images/student-innovation/inPatent35.${patentExt[35]}` },
  { id:36, category:"Health", filterType:"Granted", statusIcon:"/Images/innovation/granted.png", image:`/Images/student-innovation/innovation36.${innovationImgExt[36]}`, title:"A system and a method for color-blind person to distinguish colors in a surrounding", award:"", patentLink:"https://patents.google.com/patent/ZA202303469B/en?oq=ZA202303469B", certificateLink:`/Images/student-innovation/inPatent36.${patentExt[36]}` },
  { id:37, category:"Security", filterType:"Pending", statusIcon:"/Images/innovation/pending.png", image:`/Images/student-innovation/innovation37.${innovationImgExt[37]}`, title:"Safety system for preventing mass shootings by Smart guns", awardIcon:"/Images/innovation/award.png", award:"Global Finalist · Conrad Spirit of Innovation Challenge — 2018, NASA Kennedy Space Center", patentLink:"https://patents.google.com/patent/US20220390200A1/", certificateLink:`/Images/student-innovation/inBiblo37.${bibloExt[37]}` },
  { id:38, category:"Health", filterType:"Pending", statusIcon:"/Images/innovation/pending.png", image:`/Images/student-innovation/innovation38.${innovationImgExt[38]}`, title:"Surgical Image Processing and Reporting System (SIPORS)", award:"", patentLink:"https://patents.google.com/patent/US20210098114A1", certificateLink:`/Images/student-innovation/inBiblo38.${bibloExt[38]}` },
  { id:39, category:"Infrastructure", filterType:"Pending", statusIcon:"/Images/innovation/pending.png", image:`/Images/student-innovation/innovation39.${innovationImgExt[39]}`, title:"System and method for contactless provisioning of elevator service", award:"", patentLink:"https://patents.google.com/patent/US20210094796A1/", certificateLink:`/Images/student-innovation/inBiblo39.${bibloExt[39]}` },
  { id:40, category:"Security", filterType:"Pending", statusIcon:"/Images/innovation/pending.png", image:`/Images/student-innovation/innovation40.${innovationImgExt[40]}`, title:"Active security system and a method to detect and neutralize armed intruders", award:"", patentLink:"https://patents.google.com/patent/US20220028234A1/", certificateLink:`/Images/student-innovation/inBiblo40.${bibloExt[40]}` },
  { id:41, category:"Automotive", filterType:"Pending", statusIcon:"/Images/innovation/pending.png", image:`/Images/student-innovation/innovation41.${innovationImgExt[41]}`, title:"System to safeguard vehicle from flash flood and puddles", award:"", patentLink:"https://patents.google.com/patent/US20210272440A1", certificateLink:`/Images/student-innovation/inBiblo41.${bibloExt[41]}` },
  { id:42, category:"Safety", filterType:"Pending", statusIcon:"/Images/innovation/pending.png", image:`/Images/student-innovation/innovation42.${innovationImgExt[42]}`, title:"System to prevent injury from stair fall", award:"", patentLink:"https://patents.google.com/patent/US20210270050A1", certificateLink:`/Images/student-innovation/inBiblo42.${bibloExt[42]}` },
  { id:43, category:"Health", filterType:"Pending", statusIcon:"/Images/innovation/pending.png", image:`/Images/student-innovation/innovation43.${innovationImgExt[43]}`, title:"Wearable device to identify medical emergencies and notify", award:"", patentLink:"https://patents.google.com/patent/US20220386899A1/", certificateLink:`/Images/student-innovation/inBiblo43.${bibloExt[43]}` },
  { id:44, category:"Health", filterType:"Pending", statusIcon:"/Images/innovation/pending.png", image:`/Images/student-innovation/innovation44.${innovationImgExt[44]}`, title:"Self-sanitizing Poles", award:"", patentLink:"https://patents.google.com/patent/US20220387647A1/", certificateLink:`/Images/student-innovation/inBiblo44.${bibloExt[44]}` },
  { id:45, category:"Health", filterType:"Pending", statusIcon:"/Images/innovation/pending.png", image:`/Images/student-innovation/innovation45.${innovationImgExt[45]}`, title:"Automatic system to monitor health condition of an infant", award:"", patentLink:"https://patents.google.com/patent/US20230061572A1/", certificateLink:`/Images/student-innovation/inBiblo45.${bibloExt[45]}` },
  { id:46, category:"Lifestyle", filterType:"Pending", statusIcon:"/Images/innovation/pending.png", image:`/Images/student-innovation/innovation46.${innovationImgExt[46]}`, title:"Device to secure an ice cream and a method thereof", award:"", patentLink:"https://patents.google.com/patent/US20230030844A1/", certificateLink:`/Images/student-innovation/inBiblo46.${bibloExt[46]}` },
  { id:47, category:"Health", filterType:"Pending", statusIcon:"/Images/innovation/pending.png", image:`/Images/student-innovation/innovation47.${innovationImgExt[47]}`, title:"Self disinfecting door handle with UV protection covering", award:"", patentLink:"#", certificateLink:"#" },
  { id:48, category:"Transportation", filterType:"Pending", statusIcon:"/Images/innovation/pending.png", image:`/Images/student-innovation/innovation48.${innovationImgExt[48]}`, title:"System to prevent ambulance delays due to traffic", award:"", patentLink:"#", certificateLink:"#" },
  { id:49, category:"Lifestyle", filterType:"Pending", statusIcon:"/Images/innovation/pending.png", image:`/Images/student-innovation/innovation49.${innovationImgExt[49]}`, title:"Multipurpose phone case", award:"", patentLink:"#", certificateLink:"#" },
];


export const innovationCardsData: InnovationCardItem[] = innovationItems;

export const ImpactData =[
  {
    title: "InnovateSTEM Impact",
 
   image:"/Images/ContactUs/HeroSection.jpg",
  },
  {
    title: "InnovateSTEM Impact",
 
   image:"/Images/ContactUs/HeroSection.jpg",
  },
  {
   title: "InnovateSTEM Impact",
 
   image:"/Images/ContactUs/HeroSection.jpg",
  },
];



export const uvsetData: StartupDetailData = {
  title: "UVSET:",
  subtitle:
    "Self-Disinfecting Door Handle Mechanism to Prevent COVID-19 Spread",

  teamTitle: "The Founding Team",

  team: [
    {
      initials: "HA",
      name: "Hisham Ahmad",
      role: "CMO",
      color: "#8B63B6",
      image: "/Images/Uvset/founder-hisham.jpg",
    },
    {
      initials: "MR",
      name: "Manish Rangan",
      role: "CEO",
      color: "#F05A37",
      image: "/Images/Uvset/founder-manish.jpg",
    },
    {
      initials: "AK",
      name: "Aiman Khan",
      role: "COO",
      color: "#F5A623",
      image: "/Images/Uvset/founder-aiman.jpg",
    },
    {
      initials: "HS",
      name: "Humza Sheikh",
      role: "CTO",
      color: "#739B49",
      image: "/Images/Uvset/founder-humza.jpg",
    },
    {
      initials: "VY",
      name: "Vihan Yerubandi",
      role: "CFO",
      color: "#4E8EF7",
      image: "/Images/Uvset/founder-vihan.jpg",
    },
  ],

  problemTitle: "Problem:",

  problem:
    "Spread of COVID-19 infection through door handles.",

  innovationTitle: "Innovation:",

  innovation: [
    "The University of Arizona conducted research in which they concluded that if there is an infected door handle in a mid-size office with 500 employees, it will take 2–4 hours for the infection to spread among 80 percent of employees.",

    "This fact inspired DiscoverSTEM's young innovators to design a system to disinfect surfaces, including door handles, doorbells, and lift button panels.",

    "DiscoverSTEM Students from Entrepreneurship Program came together to form a team, launch their startup, and commercialize this innovation. These high-school students were able to secure funding from Kubera Capital, a Texas-based Venture Capital firm in February 2022.",
  ],

  logo: "/Images/Uvset/uvset-logo.png",

  startupImage: "/Images/Uvset/uvsetimage.png",

  videoUrl: "/Images/Uvset/UVSET-5-Second.mp4",

  status: {
    title: "STATUS",
    value: "To be launched soon",
    description:
      "Manufacturing partnerships and pilot deployments lined up across commercial real estate and healthcare.",
  },

  patent: {
    title: "PATENT",
    value: "USPTO + India Patent Office",
    description:
      "Patent pending at the United States Patent and Trademark Office (USPTO) and India Patent Office.",
  },

  website: {
    title: "ONLINE",
    value: "uvsetinc.com",
    buttons: [
      { label: "Visit Website", url: "https://uvsetinc.com" },
      { label: "Facebook", url: "https://www.facebook.com/safetouchbyuvset#" },
      { label: "LinkedIn", url: "https://www.linkedin.com/company/uvset-inc/" }
    ],
  },
};

export const mediaSectionData: MediaSectionData = {
  title: "In the Media",

  items: [
    {
      id: 1,
      tag: "Funding",
      source: "NTX Inno News",
      title:
        "Student-founded startup eyes product launch with LOIs worth nearly $750K",
      image: "/Images/Uvset/media-1.jpg",
      visitLink: "https://www.bizjournals.com/dallas/inno/stories/profiles/2021/12/14/uv-set-aimen-khan-humza-sheikh-manish-rangan.html",
      pdfLink: "/Images/Uvset/NXT-Inno-Article-UVSET-DiscoverSTEM.pdf",
    },
    {
      id: 2,
      tag: "Honors",
      source: "India Abroad",
      title:
        "Congressman Raja Krishnamoorthi honors 18 Indian American achievers under 18",
      image: "/Images/Uvset/media-2.jpg",
      visitLink: "https://indicanews.com/2022/10/05/congressman-raja-krishnamoorthi-honors-18-indian-american-achievers-under-18/",
      pdfLink: "/Images/Uvset/IndicaNews-18Under18.pdf",
    },
    {
      id: 3,
      tag: "Profile",
      source: "CEOMOM News",
      title: "CEOKID Spotlight: Meet Teen Inventor Manish Rangan",
      image: "/Images/Uvset/media-3.jpg",
      visitLink: "https://ceomommagazine.com/ceokid-spotlight-meet-teen-inventor-manish-rangan",
      pdfLink: "/Images/Uvset/CEO-MOM-Manish-Rangan.pdf",
    },
    {
      id: 4,
      tag: "Innovation",
      source: "Indica News",
      title: "Preventing Infection through Sanitization",
      image: "/Images/Uvset/media-4.jpg",
      visitLink: "https://indicanews.com/2022/09/11/preventing-infection-through-sanitization/",
      pdfLink: "/Images/Uvset/IndicaNews-UVSET.pdf",
    },
    {
      id: 5,
      tag: "Talk",
      source: "TEDx Talk",
      title: "Manish Rangan | TEDx Youth @ TAMS",
      image: "/Images/Uvset/media-5.jpg",
      visitLink: "https://youtu.be/opySIC6TRhs",
      pdfLink: "#",
    },
  ],
};

export const UVsetData =[
  {
    title: "Our Student Innovation",
 
   image:"/Images/ContactUs/HeroSection.jpg",
  },
  {
    title: "Our Student Innovation",
 
   image:"/Images/ContactUs/HeroSection.jpg",
  },
  {
   title: "Our Student Innovation",
 
   image:"/Images/ContactUs/HeroSection.jpg",
  },
];

export const YoungInvestorData =[
  {
    title: "The Spotlight",
 
   image:"/Images/ContactUs/HeroSection.jpg",
  },
  {
    title: "The Spotlight",
 
   image:"/Images/ContactUs/HeroSection.jpg",
  },
  {
   title: "The Spotlight",
 
   image:"/Images/ContactUs/HeroSection.jpg",
  },
];


export const InvestorsDescriptionData: CenterDescriptionData = {
  description: `At DiscoverSTEM, we have this strong legacy of transforming dozens of children every year into serial innovators,
who have the ability, skill set, and, more importantly, an entrepreneurial & exploratory mindset to solve the most
pressing problems facing humanity today. We are proud that most of our students have gone on to develop
unique patentable innovations, many of which are already registered in the United States Patent & Trademark
Office (USPTO), while some of them have won prestigious innovation competitions at a global level.`,
};




export const quoteBannerData: QuoteBannerData = {
  quote:
    "Most of our students have gone on to develop unique patentable innovations\nand many already hold USPTO registrations before they finish high school.",
  author: "DiscoverSTEM Faculty",
};




export const patentFacesData: PatentFacesData = {
  title: "The faces behind the patents",
  searchPlaceholder: "Search innovators by name...",

  students: [
    {
      id: 1,
      name: "Madhalasa Iyer",
      role: "DiscoverSTEM Student",
      image: "/Images/Home/Spotlight/Madhalasa-Iyer.png",
    },
    {
      id: 2,
      name: "Nikitha Thoduguli",
      role: "DiscoverSTEM Student",
      image: "/Images/Home/Spotlight/spotlight12.jpg",
    },
    {
      id: 3,
      name: "Wafiqah Zubair",
      role: "DiscoverSTEM Student",
      image: "/Images/Home/Spotlight/Wafiqah.jpg",
    },
    {
      id: 4,
      name: "Ryan Xie",
      role: "DiscoverSTEM Student",
      image: "/Images/Home/Spotlight/Ryan.jpg",
    },
    {
      id: 5,
      name: "Marium Khan",
      role: "DiscoverSTEM Student",
      image: "/Images/Home/Spotlight/Marium-Khan-1.png",
    },
    {
      id: 6,
      name: "Ameer Syedibrahim",
      role: "DiscoverSTEM Student",
      image: "/Images/Home/Spotlight/spotlight13.jpg",
      tag: "Innovator",
    },
    {
      id: 7,
      name: "Shreeya Madhavanur",
      role: "DiscoverSTEM Student",
      image: "/Images/Home/Spotlight/spotlight15.jpg",
      tag: "Innovator",
    },
    {
      id: 8,
      name: "Raahi Jogani",
      role: "DiscoverSTEM Student",
      image: "/Images/Home/Spotlight/Raahi-1.jpg",
      tag: "Innovator",
    },
    {
      id: 9,
      name: "Manish Rangan",
      role: "DiscoverSTEM Student",
      image: "/Images/Home/Spotlight/Manish-Rangan-CEO-UVSET.jpg",
      tag: "Innovator",
    },
    {
      id: 10,
      name: "Carcyn Coleman",
      role: "DiscoverSTEM Student",
      image: "/Images/Home/Spotlight/spotlight6.jpg",
      tag: "Innovator",
    },
    {
      id: 11,
      name: "Ridah Shanavas",
      role: "DiscoverSTEM Student",
      image: "/Images/Home/Spotlight/Ridah-1.jpg",
      tag: "Innovator",
    },
    {
      id: 12,
      name: "Ashton Rischer",
      role: "DiscoverSTEM Student",
      image: "/Images/Home/Spotlight/spotlight2.jpg",
      tag: "Innovator",
    },
    {
      id: 13,
      name: "Rishabh Siddamshetty",
      role: "DiscoverSTEM Student",
      image: "/Images/Home/Spotlight/Rishab-Siddamshetty.jpg",
      tag: "Innovator",
    },
    {
      id: 14,
      name: "Isha Agrawal",
      role: "DiscoverSTEM Student",
      image: "/Images/Home/Spotlight/Isha-1.jpg",
      tag: "Innovator",
    },
    {
      id: 15,
      name: "Kayla Goodrich",
      role: "DiscoverSTEM Student",
      image: "/Images/Home/Spotlight/spotlight8.jpg",
      tag: "Innovator",
    },
    {
      id: 16,
      name: "Azal Amer",
      role: "DiscoverSTEM Student",
      image: "/Images/Home/Spotlight/spotlight3.jpg",
      tag: "Innovator",
    },
    {
      id: 17,
      name: "Bilal Ali Shah",
      role: "DiscoverSTEM Student",
      image: "/Images/Home/Spotlight/spotlight5.jpg",
      tag: "Innovator",
    },
    {
      id: 18,
      name: "Tarik Syed",
      role: "DiscoverSTEM Student",
      image: "/Images/Home/Spotlight/spotlight16.jpg",
      tag: "Innovator",
    },
    {
      id: 19,
      name: "Maya Kusumakar",
      role: "DiscoverSTEM Student",
      image: "/Images/Home/Spotlight/spotlight11.jpg",
      tag: "Innovator",
    },
    {
      id: 20,
      name: "Inaya Sheikh",
      role: "DiscoverSTEM Student",
      image: "/Images/Home/Spotlight/spotlight7.jpg",
      tag: "Innovator",
    },
    {
      id: 21,
      name: "Ben Stafford",
      role: "DiscoverSTEM Student",
      image: "/Images/Home/Spotlight/spotlight4.jpg",
      tag: "Innovator",
    },
    {
      id: 22,
      name: "Kenny DeCay",
      role: "DiscoverSTEM Student",
      image: "/Images/Home/Spotlight/spotlight9.jpg",
      tag: "Innovator",
    },
  ],
};


export const NobelLaureatesData=[
  {
    title: "Meeting_with_Nobel_Laureates",
 
   image:"/Images/ContactUs/HeroSection.jpg",
  },
  {
    title: "Meeting_with_Nobel_Laureates",
 
   image:"/Images/ContactUs/HeroSection.jpg",
  },
  {
   title: "Meeting_with_Nobel_Laureates",
 
   image:"/Images/ContactUs/HeroSection.jpg",
  },
];



export const achievementStatsData: AchievementStatItem[] = [
  {
    value: "2",
    label: "Nobel Laureates Engaged",
    color: "#7B53A1",
  },
  {
    value: "~3 hrs",
    label: "Of Direct Exchange",
    color: "#EF4123",
  },
  {
    value: "1988 - 2015",
    label: "Nobel Years Represented",
    color: "#F9A51E",
  },
  {
    value: "22 Apr 2025",
    label: "A Day to Remember",
    color: "#5E8E3E",
  },
];

export const EventquoteBanner: QuoteBannerData = {
  quote:
    "That's remarkable work!",
  author: "Dr. Johann Deisenhofer · Nobel Laureate, 1988",
};

export const gallerySectionData: GallerySectionData = {
  eyebrow: "Gallery",
  title: "Moments from the meet-up",

  images: [
    {
      id: 1,
      image: "/Images/Finale/Students presenting research.png",
      alt: "Laboratory glassware",
      variant: "large",
    },
    {
      id: 2,
      image: "/Images/Finale/Lab discussion.png",
      alt: "Students meet-up group",
      variant: "small",
    },
    {
      id: 3,
      image: "/Images/Finale/Student with research poster.png",
      alt: "Student in science goggles",
      variant: "small",
    },
    {
      id: 4,
      image: "/Images/Finale/Group meeting.png",
      alt: "Computer research screen",
      variant: "small",
    },
    {
      id: 5,
      image: "/Images/Finale/Speaker at podium.png",
      alt: "Students working at table",
      variant: "small",
    },
    {
      id: 6,
      image: "/Images/Finale/Researcher and student.png",
      alt: "Programming and research",
      variant: "wide",
    },
    {
      id: 7,
      image: "/Images/Finale/Discussion with mentor.png",
      alt: "Lecture room",
      variant: "small",
    },
    {
      id: 8,
      image: "/Images/Finale/Audience listening.png",
      alt: "Students with laptops",
      variant: "small",
    },
    {
      id: 9,
      image: "/Images/Finale/Notebook and research.png",
      alt: "AI innovation note",
      variant: "last",
    },
  ],
};

export const nobelLaureatesGalleryData: GallerySectionData = {
  eyebrow: "Gallery",
  title: "Moments from the meet-up",
  images: [
    { id: 1, image: "/Images/NobelLauretes/Nobel1.jpg", alt: "Meeting with Nobel Laureates", variant: "large" },
    { id: 2, image: "/Images/NobelLauretes/Nobel2.jpg", alt: "Meeting with Nobel Laureates", variant: "small" },
    { id: 3, image: "/Images/NobelLauretes/Nobel3.jpg", alt: "Meeting with Nobel Laureates", variant: "small" },
    { id: 4, image: "/Images/NobelLauretes/Nobel4.jpg", alt: "Meeting with Nobel Laureates", variant: "small" },
    { id: 5, image: "/Images/NobelLauretes/Nobel5.jpg", alt: "Meeting with Nobel Laureates", variant: "small" },
    { id: 6, image: "/Images/NobelLauretes/nobel6.jpg", alt: "Meeting with Nobel Laureates", variant: "wide" },
    { id: 7, image: "/Images/NobelLauretes/Nobel7.jpg", alt: "Meeting with Nobel Laureates", variant: "small" },
    { id: 8, image: "/Images/NobelLauretes/Nobel8.jpg", alt: "Meeting with Nobel Laureates", variant: "small" },
    { id: 9, image: "/Images/NobelLauretes/Nobel9.jpg", alt: "Meeting with Nobel Laureates", variant: "wide" },
    { id: 10, image: "/Images/NobelLauretes/Nobel10.jpg", alt: "Meeting with Nobel Laureates", variant: "small" },
    { id: 11, image: "/Images/NobelLauretes/Nobel11.jpg", alt: "Meeting with Nobel Laureates", variant: "small" },
    { id: 12, image: "/Images/NobelLauretes/Nobel12.jpg", alt: "Meeting with Nobel Laureates", variant: "small" },
    { id: 13, image: "/Images/NobelLauretes/Nobel13.jpg", alt: "Meeting with Nobel Laureates", variant: "small" },
    { id: 14, image: "/Images/NobelLauretes/Nobel14.jpg", alt: "Meeting with Nobel Laureates", variant: "small" },
  ],
};

export const nobelLaureatesVideoData: VideoSectionData = {
  title: "Where Young Minds Met Global Scientific Greats",
  subtitle: "Where Young Minds Met Global Scientific Greats",
  videoUrl: "https://www.youtube.com/embed/avTCXG34FZw",
};

export const nobelLaureatesContentData: ContentSectionData = {
  paragraphs: [
    `On 22 April 2025, students from DiscoverSTEM experienced an extraordinary moment as they had the rare<br />
opportunity to meet <strong>two Nobel Laureates – Dr. Aziz Sancar (Nobel Laureate, 2015)</strong> and <strong>Dr. Johann Deisenhofer<br />
(Nobel Laureate, 1988)</strong>. This extraordinary opportunity provided our young researchers with invaluable insights,<br />
inspiration, and appreciation of their scientific pursuits.`,

    `What made this meet-up truly exceptional wasn’t simply the presence of Nobel Laureates, but the depth of<br />
engagement between these scientific luminaries and our students. This wasn’t merely a photo opportunity or<br />
casual introduction – it was a genuine exchange of research experiences spread close to three hours.`,

    `DiscoverSTEM students confidently presented their original research projects to Dr. Sancar and Dr. Deisenhofer,<br />
who listened attentively, asked probing questions, and offered invaluable feedback. The Nobel Laureates<br />
engaged with each student, providing thoughtful recommendations and encouraging our young researchers<br />
to explore new directions in their innovation and research endeavors.`,

    `The interaction was not limited to formal presentations. It was an inspiring exchange where our students were<br />
treated as fellow researchers – questioned, challenged, and appreciated. In a notable moment, Dr. Deisenhofer<br />
praised our student’s work with a comment – “That’s remarkable work!”`,

    `This event marks a significant achievement in our mission to nurture the next generation of researchers and<br />
innovators through meaningful global academic experiences.`,
  ],
};

export const texasVideoData: VideoSectionData = {
  title: "DiscoverSTEM Innovation Day at Texas State Capitol",
  subtitle: "Texas House of Representatives Honors DiscoverSTEM",
  videoUrl: "https://www.youtube.com/embed/q3Tm9qQtP6c",
};

export const texasGalleryData: GallerySectionData = {
  eyebrow: "Gallery",
  title: "Moments from the meet-up",
  images: [
    { id: 1, image: "/Images/InTexas/image1.jpg", alt: "Innovation Day Texas", variant: "large" },
    { id: 2, image: "/Images/InTexas/image2.jpg", alt: "Innovation Day Texas", variant: "small" },
    { id: 3, image: "/Images/InTexas/image3.jpg", alt: "Innovation Day Texas", variant: "small" },
    { id: 4, image: "/Images/InTexas/image4.jpg", alt: "Innovation Day Texas", variant: "small" },
    { id: 5, image: "/Images/InTexas/image5.jpg", alt: "Innovation Day Texas", variant: "small" },
    { id: 6, image: "/Images/InTexas/image6.jpg", alt: "Innovation Day Texas", variant: "wide" },
    { id: 7, image: "/Images/InTexas/image7.jpg", alt: "Innovation Day Texas", variant: "small" },
    { id: 8, image: "/Images/InTexas/image8.jpg", alt: "Innovation Day Texas", variant: "small" },
    { id: 9, image: "/Images/InTexas/image9.jpg", alt: "Innovation Day Texas", variant: "wide" },
    { id: 10, image: "/Images/InTexas/image10.jpg", alt: "Innovation Day Texas", variant: "small" },
    { id: 11, image: "/Images/InTexas/image11.jpg", alt: "Innovation Day Texas", variant: "small" },
    { id: 12, image: "/Images/InTexas/image12.jpg", alt: "Innovation Day Texas", variant: "small" },
    { id: 13, image: "/Images/InTexas/image13.jpg", alt: "Innovation Day Texas", variant: "small" },
    { id: 14, image: "/Images/InTexas/image14.jpg", alt: "Innovation Day Texas", variant: "small" },
    { id: 15, image: "/Images/InTexas/image15.jpg", alt: "Innovation Day Texas", variant: "small" },
    { id: 16, image: "/Images/InTexas/image16.jpg", alt: "Innovation Day Texas", variant: "small" },
    { id: 17, image: "/Images/InTexas/image17.jpg", alt: "Innovation Day Texas", variant: "small" },
    { id: 18, image: "/Images/InTexas/image18.jpg", alt: "Innovation Day Texas", variant: "small" },
    { id: 19, image: "/Images/InTexas/image19.jpg", alt: "Innovation Day Texas", variant: "small" },
    { id: 20, image: "/Images/InTexas/image20.jpg", alt: "Innovation Day Texas", variant: "small" },
  ],
};

export const texasInnovationDayContentData :ContentSectionData = {
  paragraphs: [
    `On March 18, 2025, DiscoverSTEM achieved a historic milestone as the Texas House of Representatives honored the organization with House Resolution 403, officially declaring the day as DiscoverSTEM Innovation Day. This remarkable honor highlights DiscoverSTEM’s commitment to empowering young innovators and fostering a culture of creativity, research, and entrepreneurship.`,

    `The event, held at the Texas State Capitol, was attended by DiscoverSTEM’s founder, Mr. Faizan, and a group of outstanding young innovators. Their work—spanning patented inventions and scientific breakthroughs—was commended by many Texas state representatives, underscoring the organization’s powerful impact on youth development in the field of innovation, research & entrepreneurship.`,

    `House Resolution 403 acknowledges the profound impact of DiscoverSTEM’s programs in equipping students with critical thinking skills, fostering an innovative mindset, and providing hands-on learning experiences. Through unique programs such as the Summer Impact Program (SIP), DiscoverSTEM Innovation Program (DIP), and Ivy League Mentorship (ILM), the organization has mentored hundreds of students, helping them translate their ideas into real-world solutions.`,

    `Mr. Faizan expressed heartfelt gratitude, calling the recognition a testament to the spirit of curiosity and perseverance. He reaffirmed DiscoverSTEM’s mission to inspire the next generation of changemakers—regardless of background—through inclusive education and scholarships. As DiscoverSTEM celebrates this milestone, it continues its commitment to building future-ready leaders equipped to solve complex global challenges through innovation and vision.`,
  ],
};


export const innovationDay2025VideoData: VideoSectionData = {
  title: "Celebrating Youth Ingenuity, Innovations, Research and Entrepreneurship of DiscoverSTEM Students",
  subtitle: "DiscoverSTEM Innovation Day 2025 Highlights",
  videoUrl: "https://www.youtube.com/embed/pKTVqwC2ANk",
};

export const innovationDay2025GalleryData: GallerySectionData = {
  eyebrow: "Gallery",
  title: "Moments from the meet-up",
  images: [
    { id: 1, image: "/Images/innovation2025/g1.jpg", alt: "Innovation Day 2025", variant: "large" },
    { id: 2, image: "/Images/innovation2025/g2.jpg", alt: "Innovation Day 2025", variant: "small" },
    { id: 3, image: "/Images/innovation2025/g3.jpg", alt: "Innovation Day 2025", variant: "small" },
    { id: 4, image: "/Images/innovation2025/g4.jpg", alt: "Innovation Day 2025", variant: "small" },
    { id: 5, image: "/Images/innovation2025/g5.jpg", alt: "Innovation Day 2025", variant: "small" },
    { id: 6, image: "/Images/innovation2025/g6.jpg", alt: "Innovation Day 2025", variant: "wide" },
    { id: 7, image: "/Images/innovation2025/g7.jpg", alt: "Innovation Day 2025", variant: "small" },
    { id: 8, image: "/Images/innovation2025/g8.jpg", alt: "Innovation Day 2025", variant: "small" },
    { id: 9, image: "/Images/innovation2025/g9.jpg", alt: "Innovation Day 2025", variant: "wide" },
    { id: 10, image: "/Images/innovation2025/g10.jpg", alt: "Innovation Day 2025", variant: "small" },
    { id: 11, image: "/Images/innovation2025/g11.jpg", alt: "Innovation Day 2025", variant: "small" },
    { id: 12, image: "/Images/innovation2025/g12.jpg", alt: "Innovation Day 2025", variant: "small" },
  ],
};

export const innovationDayHighlightsData:ImageContentSplitData = {
  topSection: {
    description: [
      "DiscoverSTEM Innovation Day 2025 was a remarkable celebration of young minds, showcasing their innovations, research, and entrepreneurial skills. Students who secured patents for their inventions were honored with a patent certificate, marking a milestone achievement in their journey of innovation.",
      "Adding to this year's prestige, the Texas State Capitol honored DiscoverSTEM and its young innovators in March 2025 with an official House Resolution #403, recognizing their profound impact on shaping future leaders. Each student was invited on stage and presented with a personalized letter from the Capitol, making it a once-in-a-lifetime recognition.",
    ],
    image: "/Images/innovation2025/image1.jpg",
  },

  bottomSection: {
    image: "/Images/innovation2025/image2.jpg",
    description: [
      "The highlight of the event was the Grand Finale of Top Young Innovators 2025, where the most promising student innovators took center stage. Their visionary work, bold thinking, and relentless pursuit of solutions for a better world were celebrated with great honor.",
      "Each innovation highlighted DiscoverSTEM's mission to inspire, mentor, and empower the next generation of changemakers. To close the day on an exciting note, the Innovation Quiz 2025 challenged participants with thought-provoking questions and rewarded winners with exclusive Apple merchandise, turning the event into a perfect blend of learning, recognition, and inspiration.",
    ],
  },
};

export const innovationDay2023VideoData: VideoSectionData = {
  title: "Innovation Day 2023",
  subtitle: "Celebrating Youth Ingenuity, Creativity and Innovation Skills of DiscoverSTEM Students",
  videoUrl: "https://www.youtube.com/embed/UdB5KuT5Ze8",
};

export const innovationDay2023HighlightsData: ImageContentSplitData = {
  topSection: {
    description: [
      "The second edition of DiscoverSTEM Innovation Day in 2023 was a testament to the creative potential of young innovators. This inspiring event celebrated students who achieved the extraordinary feat of securing patents for their groundbreaking ideas. Recognizing their dedication and brilliance, we highlighted their accomplishments to motivate others to pursue innovation. The event also featured an engaging Innovation Quiz, where participants demonstrated their knowledge and competed for exclusive Apple merchandise, adding an element of excitement and reward to the celebration.",
    ],
    image: "/Images/innovation2023/2023-1.jpg",
  },

  bottomSection: {
    image: "/Images/innovation2023/2023-2.jpg",
    description: [
      "Innovation Day 2023 served as a vibrant platform for fostering creativity and collaboration. By honoring these exceptional young minds, we strengthened our mission to cultivate a culture of innovation and problem-solving. The event left a lasting impact, encouraging students to think beyond boundaries and embrace their potential to shape the future. With each edition, DiscoverSTEM continues to inspire the leaders of tomorrow, igniting the passion for invention and progress in every participant.",
    ],
  },
};

export const patentCertificatesData2023: PatentCertificatesData = {
  title: "Patent Certificates Granted in 2022-23",

  items: [
    { id: 1, label: "USA-1", image: "/Images/innovation2023/USA-1.jpg", videoUrl: "https://www.youtube.com/embed/pAEwfZbbJ-0" },
    { id: 2, label: "USA-2", image: "/Images/innovation2023/USA-2.jpg", videoUrl: "https://www.youtube.com/embed/Ygq4dcq7eoo" },
    { id: 3, label: "USA-3", image: "/Images/innovation2023/USA-3.jpg", videoUrl: "https://www.youtube.com/embed/QatcPeyt4xM" },
    { id: 4, label: "USA-4", image: "/Images/innovation2023/USA-4.jpg", videoUrl: "https://www.youtube.com/embed/12-yKxPBa_o" },
    { id: 5, label: "USA-5", image: "/Images/innovation2023/USA-5.jpg", videoUrl: "https://www.youtube.com/embed/DrbSxk3wLok" },
    { id: 6, label: "USA-6", image: "/Images/innovation2023/USA-6.jpg", videoUrl: "https://www.youtube.com/embed/6jeQYj19M0c" },
    { id: 7, label: "USA-7", image: "/Images/innovation2023/USA-7.jpg", videoUrl: "https://www.youtube.com/embed/UVheU-0Tnao" },
    { id: 8, label: "USA-8", image: "/Images/innovation2023/USA-8.jpg", videoUrl: "https://www.youtube.com/embed/JqDhm7hK0Ds" },
    { id: 9, label: "USA-9", image: "/Images/innovation2023/USA-9.jpg", videoUrl: "https://www.youtube.com/embed/DFjIVKIyNYw" },
    { id: 10, label: "USA-10", image: "/Images/innovation2023/USA-10.jpg", videoUrl: "https://www.youtube.com/embed/qEqeWlOvaeQ" },
    { id: 11, label: "USA-11", image: "/Images/innovation2023/USA-11.jpg", videoUrl: "https://www.youtube.com/embed/Ahcl-G9PsiA" },
    { id: 12, label: "USA-12", image: "/Images/innovation2023/USA-12.jpg", videoUrl: "https://www.youtube.com/embed/t1MInCXaEOk" },
    { id: 13, label: "USA-13", image: "/Images/innovation2023/USA-13.jpg", videoUrl: "https://www.youtube.com/embed/WwZNUKkWYRI" },
    { id: 14, label: "SA-1", image: "/Images/innovation2023/SA-1.jpg", videoUrl: "https://www.youtube.com/embed/WHYvkpyJ8To" },
    { id: 15, label: "SA-2", image: "/Images/innovation2023/SA-2.jpg", videoUrl: "https://www.youtube.com/embed/xr78rCSSLig" },
    { id: 16, label: "SA-3", image: "/Images/innovation2023/SA-3.jpg", videoUrl: "https://www.youtube.com/embed/O6FKflVCWIc" },
    { id: 17, label: "SA-4", image: "/Images/innovation2023/SA-4.jpg", videoUrl: "https://www.youtube.com/embed/_Ud88VadjnE" },
    { id: 18, label: "SA-5", image: "/Images/innovation2023/SA-5.jpg", videoUrl: "https://www.youtube.com/embed/wCLjcZZ1PGU" },
    { id: 19, label: "SA-6", image: "/Images/innovation2023/SA-6.jpg", videoUrl: "https://www.youtube.com/embed/Wn-uC4sazxw" },
    { id: 20, label: "SA-7", image: "/Images/innovation2023/SA-7.jpg", videoUrl: "https://www.youtube.com/embed/ta65NHMNfXk" },
    { id: 21, label: "SA-8", image: "/Images/innovation2023/SA-8.jpg", videoUrl: "https://www.youtube.com/embed/2L33yPiKQsU" },
    { id: 22, label: "SA-9", image: "/Images/innovation2023/SA-9.jpg", videoUrl: "https://www.youtube.com/embed/uWZSHxWJXhE" },
    { id: 23, label: "SA-10", image: "/Images/innovation2023/SA-10.jpg", videoUrl: "https://www.youtube.com/embed/na-bWkrDvt0" },
    { id: 24, label: "SA-11", image: "/Images/innovation2023/SA-11.jpg", videoUrl: "https://www.youtube.com/embed/BbqCzxqm2JU" },
    { id: 25, label: "SA-13", image: "/Images/innovation2023/SA-13.jpg", videoUrl: "https://www.youtube.com/embed/azj2MPyxE68" },
  ],
};

export const specialMessagesData2023 = {
  title: "Special Messages",
  items: [
    {
      title: "Salman Bhojani Message",
      image: "/Images/innovation2023/salman-bhojani.jpg",
      videoUrl: "https://www.youtube.com/embed/LVDJbXqqtBI",
    },
    {
      title: "Dr. Hashima Hasan Message",
      image: "/Images/innovation2023/dr-hashima-hasan.jpg",
      videoUrl: "https://www.youtube.com/embed/3u8l95qT5Hc",
    },
    {
      title: "Madhalasa Iyer Message",
      image: "/Images/innovation2023/madhalasa-iyer.jpg",
      videoUrl: "https://www.youtube.com/embed/wc-8P8oZAlk",
    },
    {
      title: "Yashas Pradeep Message",
      image: "/Images/innovation2023/yashas-pradeep.jpg",
      videoUrl: "https://www.youtube.com/embed/NdObJRA7sYg",
    },
  ],
};

export const innovationDay2023GalleryData: GallerySectionData = {
  eyebrow: "Gallery",
  title: "Moments from Innovation Day 2023",
  images: [
    { id: 1, image: "/Images/innovation2023/gallery-1.webp", alt: "Innovation Day 2023", variant: "large" },
    { id: 2, image: "/Images/innovation2023/gallery-2.webp", alt: "Innovation Day 2023", variant: "small" },
    { id: 3, image: "/Images/innovation2023/gallery-3.webp", alt: "Innovation Day 2023", variant: "small" },
    { id: 4, image: "/Images/innovation2023/gallery-4.webp", alt: "Innovation Day 2023", variant: "small" },
    { id: 5, image: "/Images/innovation2023/gallery-5.webp", alt: "Innovation Day 2023", variant: "small" },
    { id: 6, image: "/Images/innovation2023/gallery-6.webp", alt: "Innovation Day 2023", variant: "wide" },
    { id: 7, image: "/Images/innovation2023/gallery-7.webp", alt: "Innovation Day 2023", variant: "small" },
    { id: 8, image: "/Images/innovation2023/gallery-8.webp", alt: "Innovation Day 2023", variant: "small" },
    { id: 9, image: "/Images/innovation2023/gallery-9.webp", alt: "Innovation Day 2023", variant: "wide" },
    { id: 10, image: "/Images/innovation2023/gallery-10.webp", alt: "Innovation Day 2023", variant: "small" },
    { id: 11, image: "/Images/innovation2023/gallery-11.webp", alt: "Innovation Day 2023", variant: "small" },
    { id: 12, image: "/Images/innovation2023/gallery-12.webp", alt: "Innovation Day 2023", variant: "small" },
    { id: 13, image: "/Images/innovation2023/gallery-13.webp", alt: "Innovation Day 2023", variant: "small" },
    { id: 14, image: "/Images/innovation2023/gallery-14.webp", alt: "Innovation Day 2023", variant: "small" },
    { id: 15, image: "/Images/innovation2023/gallery-15.webp", alt: "Innovation Day 2023", variant: "small" },
  ],
};

export const innovationDay2024VideoData: VideoSectionData = {
  title: "Innovation Day 2024",
  subtitle: "Celebrating Youth Ingenuity, Creativity and Innovation Skills of DiscoverSTEM Students",
  videoUrl: "https://www.youtube.com/embed/QwGD7xCV5XI",
};

export const innovationDay2024HighlightsData: ImageContentSplitData = {
  topSection: {
    description: [
      "Innovation Day 2024 was a remarkable celebration of young minds, showcasing their innovations, research, and entrepreneurial skills. Students who secured patents for their inventions were honored with a patent certificate, marking a milestone achievement in their journey of innovation.",
      "The event was graced by the esteemed presence of Mr. Richard Green, Director General of DPS, who inspired our young innovators with his words of wisdom. Students from across the nation showcased groundbreaking ideas with the power to shape a healthier, smarter, and more sustainable future.",
    ],
    image: "/Images/innovation2024/2024-1.webp",
  },

  bottomSection: {
    image: "/Images/innovation2024/2024-2.webp",
    description: [
      "The highlight of the event was the Grand Finale of Top Young Innovators 2024, where the most promising student innovators took center stage. Their visionary work, bold thinking, and relentless pursuit of solutions for a better world were celebrated with great honor.",
      "Each innovation highlighted DiscoverSTEM's mission to inspire, mentor, and empower the next generation of changemakers. The event brought together students, parents, educators, and distinguished guests to celebrate the ingenuity and creativity of DiscoverSTEM students.",
    ],
  },
};

export const patentCertificatesData2024: PatentCertificatesData = {
  title: "Patent Certificates Granted in 2023-24",

  items: [
    { id: 1, label: "USA-14", image: "/Images/patent-granted/USA-14-100-min.jpg", videoUrl: "https://www.youtube.com/embed/3k2u_Iv03Ns" },
    { id: 2, label: "USA-15", image: "/Images/patent-granted/USA-15-100-min.jpg", videoUrl: "https://www.youtube.com/embed/f8a8vV_aJfU" },
    { id: 3, label: "USA-16", image: "/Images/patent-granted/USA-16-100-min.jpg", videoUrl: "https://www.youtube.com/embed/44kwPMbH67o" },
    { id: 4, label: "USA-17", image: "/Images/patent-granted/USA-17-100-min.jpg", videoUrl: "https://www.youtube.com/embed/PKE4e_tze2o" },
    { id: 5, label: "USA-18", image: "/Images/patent-granted/USA-18-100-min.jpg", videoUrl: "https://www.youtube.com/embed/51dvT4uoFmo" },
    { id: 6, label: "USA-19", image: "/Images/patent-granted/USA-19-100-min.jpg", videoUrl: "https://www.youtube.com/embed/Lf3a9UkeBt8" },
    { id: 7, label: "USA-20", image: "/Images/patent-granted/USA-20-100-min.jpg", videoUrl: "https://www.youtube.com/embed/oDLIKowMNMc" },
    { id: 8, label: "USA-21", image: "/Images/patent-granted/USA-21-100-min.jpg", videoUrl: "https://www.youtube.com/embed/dgCwWBKsrKU" },
    { id: 9, label: "USA-22", image: "/Images/patent-granted/USA-22-100-min.jpg", videoUrl: "https://www.youtube.com/embed/vR3DjT7woPA" },
    { id: 10, label: "USA-23", image: "/Images/patent-granted/USA-23-100-min.jpg", videoUrl: "https://www.youtube.com/embed/B0Zt7ptjEvI" },
  ],
};

export const innovationDay2024GrandFinaleData: ImageTextHighlightSectionData = {
  title: "Grand Finale of America's Top Young Innovators\n2024",

  image: "/Images/innovation2024/TYI3-min.jpg",

  imageAlt: "Grand Finale of America's Top Young Innovators 2024",

  content: `
    The DiscoverSTEM Innovation Day event featured the Grand Finale of the first-ever America's Top Young Innovators 2024,
    celebrating exceptional young minds driving innovation forward. Dallas-based <strong>Hisham Ahmad</strong> was crowned
    as <strong>'America's Top Young Innovator 2024'</strong>, a title that recognizes innovation with the potential to create
    a lasting global impact.

    <br /><br />

    Selected from an exceptional pool of entries spanning the USA and UAE, Hisham's groundbreaking invention — a revolutionary
    system that autonomously disinfects door handles — tackles a leading cause of germ transmission. With its capacity to
    prevent future pandemics and reduce hospital-acquired infections, which are among the leading causes of death among the
    elderly,     this innovation stands as a monumental leap in public health and safety.`,
};

export interface ChiefGuest {
  name: string;
  title: string;
  role: string;
  image: string;
  socials: { icon: string; url: string }[];
}

export const chiefGuestsData2024: ChiefGuest[] = [
  {
    name: "Salman Bhojani",
    title: "Hon'ble State Representative",
    role: "",
    image: "/Images/innovation2024/Salman_Bhojani_portrait.jpg",
    socials: [
      { icon: "linkedin", url: "https://www.linkedin.com/in/salman-bhojani-2a24b8a/" },
      { icon: "instagram", url: "https://www.instagram.com/salmanbhojanitx/" },
      { icon: "web", url: "https://house.texas.gov/members/4115" },
    ],
  },
  {
    name: "Dr. Hashima Hasan",
    title: "Senior NASA Scientist",
    role: "Program scientist at NASA, Deputy Program Scientist for the James Webb Space Telescope",
    image: "/Images/innovation2024/Dr-Hashima-Hasan.png",
    socials: [
      { icon: "linkedin", url: "https://www.linkedin.com/in/hashima-hasan-03715515/" },
      { icon: "web", url: "https://science.nasa.gov/astrophysics/astrophysics-organization-and-staff/staff-bios/dr-hashima-hasan/" },
      { icon: "web", url: "https://science.nasa.gov/people/hashima-hasan/" },
    ],
  },
];

export const specialMessagesData2024 = {
  title: "Special Messages",
  items: [
    {
      title: "Dr. Zizi's Kozlakidis Message",
      image: "/Images/innovation2024/DrZizis-Kozlakidis-Message.webp",
      videoUrl: "https://www.youtube.com/embed/RnXRjVUxvU4",
    },
    {
      title: "Wafiqah Zubair Message",
      image: "/Images/innovation2024/Wafiqah-Zubair-Message.webp",
      videoUrl: "https://www.youtube.com/embed/uEsHVoAlcCM",
    },
  ],
};

export const innovationDay2024CategoryAwards: AccordionSectionData = {
  title: "Category Awards",

  items: [
    {
      question: "Most Human-Centric Innovation Award",
      answer: [
        `<strong>Hajer Janabi</strong> & <strong>Jumana Janabi</strong> were conferred with the prestigious Most Human-Centric Innovation award for their groundbreaking system that understands and predicts human behaviors using peer-to-peer feedback and life events as key indicators. By putting human experience at the center of their innovation, the duo has created a transformative tool that empowers early intervention and holistic support, redefining how we view human interaction and mental well-being.`,
      ],
    },
    {
      question: "Best Innovation in Biotechnology Category",
      answer: [
        `<strong>Abdullah Kabeer</strong>, <strong>Nithyashri Ramesh</strong>, <strong>Isha Agrawal</strong>, <strong>Nakshatra Piduri</strong>, <strong>Tarik Syed</strong>, and <strong>Zaynab Khan</strong> were recognized for developing a visionary solution that enables color-blind individuals to identify colors, offering newfound clarity and inclusivity to their world. This remarkable innovation, recently patented in the United States, demonstrates the team's commitment to enhancing the lives of millions of people globally.`,
      ],
    },
    {
      question: "Best Innovation in AI & Robotics Category",
      answer: [
        `<strong>Ali Humaid Ali Alloghani Al-Ali</strong>, who traveled from Dubai, UAE, to attend as a finalist, clinched the award for Best Innovation in Robotics Category for his AI-powered robotic doctor designed to revolutionize early patient diagnosis. Affectionately known as the 'Wonder Kid of the UAE,' this invention is a testament to his visionary approach to healthcare, providing a glimpse into the future of medical innovation.`,
      ],
    },
    {
      question: "Best Innovation in Neurotechnology & Brain-Computer Interface",
      answer: [
        `<strong>Avaneesh Jakkireddy</strong>, <strong>Gautam Rao</strong>, <strong>Iliyan Mithani</strong>, <strong>Raj Kusumakar</strong>, <strong>Vihan Yerubandi</strong>, and <strong>Nihal Yerubandi</strong> were awarded for their life-altering solution for ALS patients. Their patented innovation allows individuals with ALS to communicate clearly, easily, and effectively, restoring hope and offering a renewed quality of life. This breakthrough represents a pivotal advancement in neurotechnology and healthcare.`,
      ],
    },
    {
      question: "Best Innovation in Mental Health Category",
      answer: [
        `<strong>Anusha Nigam</strong>, <strong>Raisha Bhojani</strong>, and <strong>Meher Saanvi Singh</strong> were recognized with the Best Innovation in Mental Health Category award. Their pioneering technology, which predicts the onset of mental health challenges among teenagers, provides an invaluable opportunity for early intervention, addressing one of the most critical issues facing youth today and shaping a healthier, more resilient generation.`,
      ],
    },
    {
      question: "Best Innovation in Fitness Category",
      answer: [
        `<strong>Sparsh Kamdar</strong> received the Best Innovation in Fitness Category award for his revolutionary system that ensures optimal hydration by automatically monitoring an individual's water consumption. This solution exemplifies the potential of technology to support personal well-being and long-term health.`,
      ],
    },
  ],
};

export const innovationDay2024GalleryData: GallerySectionData = {
  eyebrow: "Gallery",
  title: "Moments from Innovation Day 2024",
  images: [
    { id: 1, image: "/Images/innovation2024/1-1-768x432.webp", alt: "Innovation Day 2024", variant: "large" },
    { id: 2, image: "/Images/innovation2024/2-1-768x432.webp", alt: "Innovation Day 2024", variant: "small" },
    { id: 3, image: "/Images/innovation2024/3-1-768x432.webp", alt: "Innovation Day 2024", variant: "small" },
    { id: 4, image: "/Images/innovation2024/4-768x432.webp", alt: "Innovation Day 2024", variant: "small" },
    { id: 5, image: "/Images/innovation2024/5-1-768x432.webp", alt: "Innovation Day 2024", variant: "small" },
    { id: 6, image: "/Images/innovation2024/6-1-768x432.webp", alt: "Innovation Day 2024", variant: "wide" },
    { id: 7, image: "/Images/innovation2024/7-1-768x432.webp", alt: "Innovation Day 2024", variant: "small" },
    { id: 8, image: "/Images/innovation2024/8-1-768x432.webp", alt: "Innovation Day 2024", variant: "small" },
    { id: 9, image: "/Images/innovation2024/9-1-768x432.webp", alt: "Innovation Day 2024", variant: "wide" },
    { id: 10, image: "/Images/innovation2024/10-1-768x432.webp", alt: "Innovation Day 2024", variant: "small" },
    { id: 11, image: "/Images/innovation2024/11-1-768x432.webp", alt: "Innovation Day 2024", variant: "small" },
    { id: 12, image: "/Images/innovation2024/12-1-768x432.webp", alt: "Innovation Day 2024", variant: "small" },
    { id: 13, image: "/Images/innovation2024/13-1-768x432.webp", alt: "Innovation Day 2024", variant: "small" },
    { id: 14, image: "/Images/innovation2024/14-1-768x432.webp", alt: "Innovation Day 2024", variant: "small" },
    { id: 15, image: "/Images/innovation2024/15-1-768x432.webp", alt: "Innovation Day 2024", variant: "small" },
  ],
};

export const innovationDay2020VideoData: VideoSectionData = {
  title: "Innovation Day 2020",
  subtitle: "Celebrating Youth Ingenuity, Creativity and Innovation Skills of DiscoverSTEM Students",
  videoUrl: "https://www.youtube.com/embed/r4qfayZCHZQ",
};

export const innovationDay2020HighlightsData: ImageContentSplitData = {
  topSection: {
    description: [
      "The inaugural DiscoverSTEM Innovation Day in 2020 marked the beginning of a transformative journey to inspire and empower young innovators. This groundbreaking event celebrated students who developed patent pending innovations for their pioneering ideas, highlighting their creativity and dedication. The event also featured the thrilling Innovation Quiz, where participants showcased their knowledge and competed for coveted Apple merchandise, creating an atmosphere of learning and excitement.",
    ],
    image: "/Images/innovation2020/2020-Main-Image1.jpg",
  },

  bottomSection: {
    image: "/Images/innovation2020/2020-Main-Image2.jpg",
    description: [
      "As the first edition, Innovation Day 2020 laid the foundation for fostering a culture of innovation and exploration. By honoring the achievements of young minds, DiscoverSTEM demonstrated its commitment to nurturing future leaders equipped to solve real-world challenges. The success of this milestone event inspired students to dream big and paved the way for future editions that continue to elevate the spirit of creativity and progress.",
    ],
  },
};

export const chiefGuestsData2020: ChiefGuest[] = [
  {
    name: "Dr. Charles A. Rodenberger",
    title: "Senior NASA Scientist",
    role: "Senior NASA scientist, Professor Emeritus, Aerospace Engineering, Texas A&M University",
    image: "/Images/innovation2020/Dr-Charles-A-Rodenberger.jpg",
    socials: [
      { icon: "web", url: "https://engineering.tamu.edu/aerospace/profiles/rodenberger-charles.html" },
    ],
  },
  {
    name: "Col. Richard Graham",
    title: "SR-71 Pilot & Author",
    role: "SR-71 pilot, author, speaker, aviation consultant, flight instructor, USAF (Ret.)",
    image: "/Images/innovation2020/Colonel-Richard-Graham.jpg",
    socials: [
      { icon: "web", url: "https://airandspace.si.edu/multimedia-gallery/4940hjpg" },
      { icon: "web", url: "http://www.habu.org/graham/graham-bio.html" },
    ],
  },
  {
    name: "Dr. Hashima Hasan",
    title: "Senior NASA Scientist",
    role: "Program scientist at NASA, Deputy Program Scientist for the James Webb Space Telescope",
    image: "/Images/innovation2020/Dr-Hashima-Hasan.png",
    socials: [
      { icon: "linkedin", url: "https://www.linkedin.com/in/hashima-hasan-03715515/" },
      { icon: "web", url: "https://science.nasa.gov/astrophysics/astrophysics-organization-and-staff/staff-bios/dr-hashima-hasan/" },
      { icon: "web", url: "https://science.nasa.gov/people/hashima-hasan/" },
    ],
  },
];

export const innovationDay2020GalleryData: GallerySectionData = {
  eyebrow: "Gallery",
  title: "Moments from Innovation Day 2020",
  images: [
    { id: 1, image: "/Images/innovation2020/2020-1-min.jpg", alt: "Innovation Day 2020", variant: "large" },
    { id: 2, image: "/Images/innovation2020/2020-1-min-1.jpg", alt: "Innovation Day 2020", variant: "small" },
    { id: 3, image: "/Images/innovation2020/2020-2-min.jpg", alt: "Innovation Day 2020", variant: "small" },
    { id: 4, image: "/Images/innovation2020/2020-3-min.jpg", alt: "Innovation Day 2020", variant: "small" },
    { id: 5, image: "/Images/innovation2020/2020-4-min.jpg", alt: "Innovation Day 2020", variant: "small" },
    { id: 6, image: "/Images/innovation2020/2020-5-min.jpg", alt: "Innovation Day 2020", variant: "wide" },
    { id: 7, image: "/Images/innovation2020/2020-6-min.jpg", alt: "Innovation Day 2020", variant: "small" },
    { id: 8, image: "/Images/innovation2020/2020-7-min.jpg", alt: "Innovation Day 2020", variant: "small" },
    { id: 9, image: "/Images/innovation2020/2020-8-min.jpg", alt: "Innovation Day 2020", variant: "wide" },
    { id: 10, image: "/Images/innovation2020/2020-9-min.jpg", alt: "Innovation Day 2020", variant: "small" },
    { id: 11, image: "/Images/innovation2020/2020-10-min.jpg", alt: "Innovation Day 2020", variant: "small" },
    { id: 12, image: "/Images/innovation2020/2020-3-min-1.jpg", alt: "Innovation Day 2020", variant: "small" },
    { id: 13, image: "/Images/innovation2020/2020-11-min.jpg", alt: "Innovation Day 2020", variant: "small" },
    { id: 14, image: "/Images/innovation2020/2020-12-min.jpg", alt: "Innovation Day 2020", variant: "small" },
    { id: 15, image: "/Images/innovation2020/2020-13-min.jpg", alt: "Innovation Day 2020", variant: "small" },
    { id: 16, image: "/Images/innovation2020/2020-14-min.jpg", alt: "Innovation Day 2020", variant: "small" },
    { id: 17, image: "/Images/innovation2020/2020-2-min-1.jpg", alt: "Innovation Day 2020", variant: "small" },
    { id: 18, image: "/Images/innovation2020/2020-15-min.jpg", alt: "Innovation Day 2020", variant: "small" },
  ],
};

export const patentCertificatesData: PatentCertificatesData = {
  title: "Patent Certificates Granted in 2024-25",

  items: [
    { id: 1, label: "PATENT #01", image: "/Images/patent-granted/USA-Patent-Self-SanitizingDoorHandlesWithProtectiveCover.jpg", videoUrl: "https://www.youtube.com/embed/FsSeaDfqL44" },
    { id: 2, label: "PATENT #02", image: "/Images/patent-granted/USAPatent-ASystemForDisplayingSelectedClothesOnADummHumanBody.jpg", videoUrl: "https://www.youtube.com/embed/oV28Bz25FuY" },
    { id: 3, label: "PATENT #03", image: "/Images/patent-granted/USA-Patent-Smart-Rescue-SystemCoordinatedWithAnInteractiveApplication.jpg", videoUrl: "https://www.youtube.com/embed/fe8WUqE-OpM" },
    { id: 4, label: "PATENT #04", image: "/Images/patent-granted/USA-Patent-AircraftTrackingSystemAndMethod.jpg", videoUrl: "https://www.youtube.com/embed/UVPj-Wh-kDY" },
    { id: 5, label: "PATENT #05", image: "/Images/patent-granted/USA-Patent-PerfumeDispensingDevice.jpg", videoUrl: "https://www.youtube.com/embed/JMcYbSUPmZ8" },
    { id: 6, label: "PATENT #06", image: "/Images/patent-granted/USA-Patent-SmartWhiteboardCleaner.jpg", videoUrl: "https://www.youtube.com/embed/0Yd1hYb-wPY" },
    { id: 7, label: "PATENT #07", image: "/Images/patent-granted/USA-Patent-BiodegradableCoverForAPortableElectronicDevice.jpg", videoUrl: "https://www.youtube.com/embed/WNhXDETPAb0" },
    { id: 8, label: "PATENT #08", image: "/Images/patent-granted/SA-Patent-StabilizerSystemForControllingTippingOfFurniture.jpg", videoUrl: "https://www.youtube.com/embed/TLfhpIUBows" },
    { id: 9, label: "PATENT #09", image: "/Images/patent-granted/USA-Patent-SmartLadder.jpg", videoUrl: "https://www.youtube.com/embed/OCP7xJo4zQ4" },
  ],
};



export const grandFinaleSectionData: ImageTextHighlightSectionData = {
  title: "Grand Finale of America's Top Young Innovators\n2025",

  image: "/Images/innovation2025/grandFinale.jpg",

  imageAlt: "Grand Finale of America's Top Young Innovators 2025",

  content: `
    The DiscoverSTEM Innovation Day 2025 event featured the Grand Finale of America’s Top Young Innovators 2025,
    a celebration of young visionaries pushing the boundaries of science, technology, and innovation. From across
    the nation, students showcased groundbreaking ideas with the power to shape a healthier, smarter, and more
                                            sustainable future.

    <br /><br />

    Among the standout participants was <strong>Arjun Kommidi</strong>, who earned the coveted title of<strong> America’s Top 
    Young Innovator 2025</strong>. Arjun was recognized for his remarkable contributions and his leadership as Chief Technology
    Officer in launching an app designed to record and report the mental, emotional, behavioral, and intellectual 
    well-being of teenagers. His work represents a bold, practical,and forward-looking approach to addressing 
                    some of the most urgent mental health challenges facing today’s youth.`,
};

export const categoryAwardsData:AccordionSectionData = {
  title: "Category Awards",

  items: [
    {
      question: "Best Innovation in Neurotechnology & Brain-Computer Interface",
      answer: [
        `<strong>Dummy Student One</strong> was awarded for building a smart neurotechnology concept that explores how brain-computer interface systems can support accessibility and assistive communication.`,
      ],
    },
    {
      question: "Best Innovation in Computer Science",
      answer: [
        `<strong>Dummy Student Two</strong> received recognition for developing a computer science project focused on problem-solving, automation, and scalable digital systems.`,
      ],
    },
    {
      question: "Best Innovation in AI Category",
      answer: [
        `<strong>Ashaz Haque</strong> and <strong>Hadiya Sameen</strong> were jointly awarded for developing the AI algorithm behind the MyUNI app, a groundbreaking tool designed to record and report the mental, emotional, behavioral, and intellectual well-being of teenagers.`,
        `<strong>Aryanshi Sundaram</strong> was recognized for her outstanding research in Green AI, using a comparative study of different LLM and SLM models.`,
      ],
    },
    {
      question: "Best Innovation in Healthcare Category",
      answer: [
        `<strong>Dummy Student Three</strong> was honored for creating a healthcare innovation that supports early awareness, patient care, and better access to health-related information.`,
      ],
    },
    {
      question: "Best Innovation in Robotics Category",
      answer: [
        `<strong>Dummy Student Four</strong> earned this award for designing a robotics project that demonstrates creativity, engineering skills, and real-world problem-solving.`,
      ],
    },
  ],
};
export const researchMentorsTextData: ResearchMentorTextData = {
  title: "Research Mentors",
  content: [
    {
      type: "paragraph",
      text: `At DiscoverSTEM, <strong>research mentorship is not delegated – it is delivered by the best.</strong><br />
Unlike many research programs that pair students with college graduate students, we have taken a bold and unmatched approach. We have invited some of the <strong>world’s foremost experts</strong> – leaders in their respective fields – to personally mentor our students. Under their esteemed guidance, our young researchers receive the kind of mentorship typically reserved for graduate-level scholars.`,
    },
    {
      type: "heading",
      text: "Our distinguished research mentors support students by:",
    },
    {
      type: "list",
      items: [
        "Recommending and approving high-impact, relevant research topics",
        "Hosting personalized kickoff sessions to outline methodology, available resources, and strategic approaches",
        "Providing ongoing, expert-level mentorship throughout the research process",
        "Reviewing manuscripts prior to journal submission to ensure academic excellence",
        "Advising on best-fit journals and conferences for publication and presentation",
        "Instilling scientific rigor, intellectual curiosity, and the highest standards of research ethics",
      ],
    },
  ],
};


export const HEADER_DATA: NavItem[] = [
  {
    label: "About Us",
    items: [
      {
        label: "Advisory Board",
        href: "/about/advisory-board",
      },
      {
        label: "Our Founder",
        href: "/about/founder",
      },
      {
        label: "Panel Of Experts",
        href: "/about/panel-of-experts",
      },
      {
        label: "DiscoverSTEM Foundation",
        href: "/about/discoverstem-foundation",
      },
    ],
  },

  {
    label: "Programs",
    items: [
      {
        label: "SIP",
        href: "/programs/sip",
      },
      {
        label: "ILM",
        href: "/programs/ilm",
      },
      {
        label: "DIP",
        href: "/programs/dip",
        
      },
          {
        label: "FAQ",
        href: "/programs/faq",
        
      },
    ],
  },

  {
    label: "Opportunities",
   
        items: [
          {
            label: "Research Mentors",
            href: "/opportunities/research-mentors",
          },
          {
            label: "Aerospace Research Lab",
            href: "/opportunities/aerospace_research_lab",
          },
          {
            label: "AI-ML and Autonomous Tech Research Lab",
            href: "/opportunities/ai-autonomous-tech-and-robotics-research-lab",
          },
           {
            label: "Banking, Finance & Fintech Research Lab",
            href: "/opportunities/banking-finance-fintech-research-lab",
          },
          {
            label: "Energy & Environment Research Lab",
            href: "/opportunities/energy-environment-research-lab",
          },
          {
            label: "Genomics, Biotechnology & Health Sciences Research Lab",
            href: "/opportunities/genomics-biotechnology-health-sciences-research-lab",
          },
          {
            label: "Neurotechnology & Brain-Computer Interface Research Lab",
            href: "/opportunities/neurotech-brain-computer-interface",
          },
      {
        label: "Startup Opportunities",
        href: "/opportunities/startup-opportunities",
      },
      {
        label: "Partners Ecosystem",
        href: "/opportunities/partners-ecosystem",
      },
    ],
  },

  {
    label: "Success Stories",
    items: [
      {
        label: "Patents Granted",
        href: "/success-stories/patents-granted",
      },
      {
        label: "College Acceptance",
        href: "/success-stories/college-acceptance",
      },
      {
        label: "Awards & Recognition",
        href: "/success-stories/awards-recognition",
      },
      {
        label: "Student Innovations",
        href: "/success-stories/student-innovations",
      },
      {
        label: "Impact",
        href: "/success-stories/impact",
      },
      {
        label: "UVSET",
        href: "/success-stories/uvset",
      },
      {
        label: "Young Investors",
        href: "/success-stories/young-investors",
      },
    ],
  },

  {
    label: "Media Center",
    href: "/media",
  },

  {
    label: "Events",
    items: [
      {
        label: "Meeting With Nobel Laureates",
        href: "/events/meeting_with_nobel_laureates",
      },
      {
        label: "Innovation Day at Texas State Capitol",
        href: "/events/innovation_day_at_texas_state_capitol",
      },
      {
        label: "Innovation Day 2025",
        href: "/events/innovation_day_2025",
      },
      {
        label: "Innovation Day 2024",
        href: "/events/innovation_day_2024",
      },
      {
        label: "Innovation Day 2023",
        href: "/events/innovation_day_2023",
      },
      {
        label: "Innovation Day 2020",
        href: "/events/innovation_day_2020",
      },
    ],
  },

  {
    label: "Contact",
    href: "/contact",
  },
];



export const impactQuoteSectionData: ImpactQuoteSectionData = {
  tag: "THE IMPACT",

  description: `
    Recently, DiscoverSTEM students engaged in a rare three-hour scientific
    exchange with two <span>Nobel Laureates</span> in a single day. At the
    conclusion of this session, one of the Laureates praised our student's work:
  `,

  quote: `"That's remarkable work."`,

  footerText:
    `A powerful validation of the caliber, depth, and promise of research emerging from 
    DiscoverSTEM.`,
};

export const aerospaceResearchLabTextData: ResearchMentorTextData = {
  title: "Aerospace Research Lab",
  content: [
    {
      type: "paragraph",
      text: `Space is the NEXT BIG destination of humanity! With private players taking giant leaps in space travel, it is evident that the second space race is going on and aerospace has become one of the in-demand disciplines in today's era.`,
    },
    {
      type: "paragraph",
      text: `Our aerospace research lab provides exposure to the basic and advanced concepts in aerospace as well as present and future challenges in the aerospace industry. Innovators at DiscoverSTEM gain great insights into the design and engineering of aircraft, spacecraft, and satellites and then indulge further in solving some real-world challenges in this field.`,
    },
    {
      type: "heading",
      text: "At our Aerospace Research Lab, we provide our students:",
    },
    {
      type: "list",
      items: [
        "Domain-specific training.",
        "Activities to understand domain concepts.",
        "One large project at the end of the module.",
        "We leave our students by introducing them to some of the most pressing problems in the aerospace domain, encouraging them to find solutions to these problems.",
      ],
    },
  ],
};


export const aerospaceOutcomesData: OutcomesSectionData = {
  eyebrow: "Designed For Outcomes",

  title: "Inspired by the world's\nbest universities.",

  description:
    "Our Domain Research Lab Curriculum is inspired by curriculums of some of the best universities in the world. The labs are designed with three outcomes in mind:",

  items: [
    {
      number: "1",
      text: "Introduce you to the basic and advanced topics of these domains through interesting and easy-to-understand modules.",
    },
    {
      number: "2",
      text: "Introduce you to some of the challenges in these domains and encourage you to brainstorm ways to solve them.",
    },
    {
      number: "3",
      text: "Enable you to find your passion early and empower you to make better, more informed career decisions later in life.",
    },
  ],
};

export const aerospaceModulesData: ResearchModulesSectionData = {
  title: "Aerospace Research Lab — 14 Modules",
  buttonText: "Download Curriculum",
  curriculumLink: "/Images/Aerospace-Lab-Curriculum-v3-1.pdf",
  modules: [
    {
      id: 1,
      title: "DSA01 :: Aircraft Classification",
      description:
        "Early aircraft designs. Classification of aircraft based on various factors of their operations, design, propulsion, usage and wing type. Exercise: Design Analysis of Different Aircraft.",
    },
    {
      id: 2,
      title: "DSA02 :: Airport and Airspace",
      description:
        "Runways, Taxiways, Airport Signs, and Lighting systems. Landing Aids, VASI, PAPI, VFR and IFR, ILS. Airspace classes. Exercise: Design crude attitude measurement equipment for an aircraft.",
    },
    {
      id: 3,
      title: "DSA03 :: Basic Terms of Aeronautics and Astronautics",
      description:
        "Inspired from Stanford AA100. Fundamental physics concepts: Air Pressure, Mass, Volume, Weight, Force, Density, Temperature, Fluid Friction, Drag, Altitude. Exercise: Analysis of an aircraft's flight with respect to different flight parameters.",
    },
    {
      id: 4,
      title: "DSA04 :: Atmospheric Flight",
      description:
        "Inspired from Stanford AA141. Aerodynamics of flight, forces acting on an aircraft, how wings generate lift. Airfoil design, angle of attack, center of pressure, wingtip vortex, lift coefficient. Exercise: Designing an Airfoil with Maximum Lift and Minimum Drag.",
    },
    {
      id: 5,
      title: "DSA05 :: Flight Mechanics and Controls",
      description:
        "Inspired from Stanford AA173. Airplane axis and degrees of freedom, Pitch, Yaw and Roll. Control surfaces: Aileron, Flaps, Slats, Rudder. Lift formula, drag forces, stall, principles of flight. Exercise: Designing and Building a Remote-controlled Aircraft.",
    },
    {
      id: 6,
      title: "DSA06 :: Space Flight Systems and Concepts",
      description:
        "Inspired from Stanford AA131. What is Space and the Karman line. Satellites, ISS, Orbital Dynamics: Hohmann Transfer, Interplanetary Travel, Oberth Effect. Spacecraft attitude determination. Exercise: Designing a Hybrid Plane for Atmosphere and Space flight.",
    },
    {
      id: 7,
      title: "DSA07 :: Air and Space Propulsion",
      description:
        "Inspired from Stanford AA103. Rocket science, rocket systems: Structural, Propulsion, Payload, Guidance. Jet engines, rocket propulsion types: Liquid, Solid, Hybrid. Future propulsion: Electric Plasma, Nuclear, Ion Engine, Solar sails. Exercise: Designing a futuristic propulsion system.",
    },
    {
      id: 8,
      title: "DSA08 :: Guidance and Navigation",
      description:
        "Inspired from Stanford AA172. Introduction to Spacecraft Guidance, Navigation, and Control Systems (GN&C). Case study: Missile Guidance System. Exercise: Designing a Guidance and Navigation System for a Robot.",
    },
    {
      id: 9,
      title: "DSA09 :: Space Mechanics",
      description:
        "Inspired from Stanford AA279A. Gravity and how it enables orbits. Orbit types, Kepler's Laws, Launch, Propulsion, and Re-entry. Orbital Rendezvous and Launch Window. Exercise: Designing a satellite system for 24x7 connectivity.",
    },
    {
      id: 10,
      title: "DSA10 :: Introduction to Spacecraft Subsystems",
      description:
        "Inspired from Stanford AA136A. Introduction to Spacecraft Subsystems. Exercise: Designing, Building, and Launching a Satellite to Monitor Forest Fire.",
    },
    {
      id: 11,
      title: "DSA11 :: Designing and Building a CubeSat",
      description:
        "Inspired from Stanford AA136A. What is a CubeSat, Space 2.0. Challenges in CubeSat Engineering: Propulsion, Hardware and Software Design. SpaceX Falcon 9 and Dragon case study. Exercise: Designing a Nano Satellite for a Novel Space Application.",
    },
    {
      id: 12,
      title: "DSA12 :: Aircraft Design",
      description:
        "Inspired from Stanford AA146A. Aircraft structure, systems, and avionics. Fuselage, wing design, aircraft design process, engineering drawing, weight calculation. Exercise: Designing the Most Efficient Airplane in the World.",
    },
    {
      id: 13,
      title: "DSA13 :: Avionics Systems — 1",
      description:
        "Introduction to Avionics and Fly-By-Wire System. Cockpit Display Systems: PFD, MFD, EICAS. Case study: Boeing 737 and Gulfstream 6550 Flight deck. Exercise: Designing a Cockpit Display System to Prevent Human Error.",
    },
    {
      id: 14,
      title: "DSA14 :: Avionics Systems — 2",
      description:
        "Flight Management System (FMS). Traffic Alert Collision Avoidance System (TCAS). Enhanced Ground Proximity Warning System (EGPWS) with 7 modes. Exercise: Designing Avionics for a Flying Bike for Urban Transportation.",
    },
  ],
};

export const DIPData =[
  {
    title: "DiscoverSTEM Innovation Program (DIP)",
 description: "6–8 month midterm course to mentor students to think like an innovator and develop novel & patentable solutions.",
   image:"/Images/ContactUs/HeroSection.jpg",
  },
  {
    title: "DiscoverSTEM Innovation Program (DIP)",
    description: "6–8 month midterm course to mentor students to think like an innovator and develop novel & patentable solutions.",
   image:"/Images/ContactUs/HeroSection.jpg",
  },
  {
    title: "DiscoverSTEM Innovation Program (DIP)",
  description: "6–8 month midterm course to mentor students to think like an innovator and develop novel & patentable solutions.",
   image:"/Images/ContactUs/HeroSection.jpg",
  },
];

export const ILMData =[
  {
    title: "DiscoverSTEM Innovation Program (ILM)",
 description: "6–8 month midterm course to mentor students to think like an innovator and develop novel & patentable solutions.",
   image:"/Images/ContactUs/HeroSection.jpg",
  },
  {
    title: "DiscoverSTEM Innovation Program (ILM)",
    description: "6–8 month midterm course to mentor students to think like an innovator and develop novel & patentable solutions.",
   image:"/Images/ContactUs/HeroSection.jpg",
  },
  {
    title: "DiscoverSTEM Innovation Program (ILM)",
  description: "6–8 month midterm course to mentor students to think like an innovator and develop novel & patentable solutions.",
   image:"/Images/ContactUs/HeroSection.jpg",
  },
];
export const ilmSuccessStoryData: IlmSuccessStoryData = {
  title: "ILM Success Stories: First Batch Results (2025)",

  description:
    "The first batch of DiscoverSTEM’s Ivy League Mentorship (ILM 2021–25) program has achieved extraordinary success in their college admissions journey. These students have secured acceptances at some of the most prestigious universities in the United States. The exceptional outcome validates our unique approach to nurturing future innovators, researchers, entrepreneurs and leaders.",

   points: [
    "83% ILM Students who graduated high school in 2025 accepted to the Top 10 US Schools",
    "94% ILM Students who graduated high school in 2025 accepted to the Top 21 US Schools",
  ],

  buttonText:
    "Request a <strong>FREE Information Session</strong>",

  buttonLink: "/contact",

  image: "/Images/ilm/image-23.png",
};




export const ProgramDetailsData:ProgramDetailData = {
  title: "Program Details",

  description: `This elite, immersive four-year program is meticulously designed to cultivate critical thinking, innovation, problem-solving, research, and leadership skills while fostering an entrepreneurial mindset.

Structured as a parallel education pathway, it offers hands-on experiences, enabling students to develop groundbreaking innovations, conduct research, and launch startups—shaping them into future leaders.

Beyond academic excellence, this program strategically strengthens your child’s college admissions profile, setting them apart for Ivy League and other top-tier institutions.`,
};



export const ilmLearningTracksData: IlmLearningTracksData = {
  title: "ILM Program consists of Four Learning Tracks",

  tracks: [
    {
      id: 1,
      title: "Innovation Track",
      description:
        "Identify a real-world problem and develop a patentable solution through hands-on problem-solving and expert-guided mentorship.",
      outcome: "Patent-pending Innovation.",
      icon: "/Images/ilm/innovation.png",
      color: "#7B53A1",
    },
    {
      id: 2,
      title: "Leadership Track",
      description:
        "Master soft skills, strategic thinking, and entrepreneurial leadership, preparing you for success in professional and startup ecosystems.",
      outcome: "Soft Skills, Entrepreneurial & Professional Readiness.",
      icon: "/Images/ilm/leadership.png",
      color: "#EE4823",
    },
    {
      id: 3,
      title: "Research Track",
      description:
        "Gain deep domain knowledge, engage in hands-on research activities, and write a research paper that drives real-world advancements.",
      outcome: "Writing and submitting research papers.",
      icon: "/Images/ilm/research.png",
      color: "#F9A51E",
    },
    {
      id: 4,
      title: "Entrepreneurship Track",
      description:
        "Turn your ideas into reality by learning to develop, market, and scale an innovative business—guided by expert mentorship and real-world case studies.",
      outcome:
        "Startup launched and product prototype developed for crowdfunding.",
      icon: "/Images/ilm/entrepreneurship.png",
      color: "#619040",
    },
  ],
};

export const ilmInfoCardsData: InfoCardItem[] = [
  {
    id: 1,
    label: "Eligibility",
    value: "10–16 years",
    description:
      "Students in 10th grade may get accepted for the Accelerated ILM program.",
    color: "#7B53A1",
  },
  {
    id: 2,
    label: "Duration",
    value: "4 years",
    description: "Parallel education pathway alongside school.",
    color: "#EE4823",
  },
  {
    id: 3,
    label: "Time Commitment",
    value: "3 hrs / week",
    description: "Could be attended in-person or online.",
    color: "#F9A51E",
  },
  {
    id: 4,
    label: "Enrollment Deadline",
    value: "Sep 30, 2026",
    description: "Rolling admission for ILM 2025–26.",
    color: "#619040",
  },
];

export const ilmOtherProgramsData: OtherProgramsData = {
  eyebrow: "More From DiscoverSTEM",
  title: "Explore Our Other Programs",
  programs: [
    {
      id: 1,
      shortName: "SIP",
      title: "Summer Impact Program",
      description:
        "Summer Impact Program (SIP) is a highly selective summer program. It provides an accelerated pathway turning high school students into innovators, entrepreneurs and researchers of tomorrow.",
      buttonText: "Explore SIP",
      href: "/programs/sip",
    },
    {
      id: 2,
      shortName: "DIP",
      title: "DiscoverSTEM Innovation Program",
      description:
        "6–8 month midterm course to mentor students to think like an innovator and develop novel & patentable solutions.",
      buttonText: "Explore DIP ",
      href: "/programs/dip",
    },
  ],
};

export const dipProgramDetailsData:DIPProgramDetailData = {
  title: "Program Details",

  content: [
    `The DiscoverSTEM Innovation Program is designed to turn kids into innovators and problem-solvers of tomorrow.
Kids are natural out-of-the-box thinkers and have unique ideas. But due to their limitations, they do not know
how to convert their ideas into an invention or innovations. That's where our program comes in and teaches
children how to solve real-world problems and become an innovator.`,

    `The program comprises two fundamental parts – <strong>the Foundation Course (Part 1)</strong> and <strong>the Implementation
Course (Part 2)</strong>. The Foundation course trains them to think like innovators and problem solvers and arms them
with the skills required to research and innovate. In the Implementation Course, their acquired skills are put to
the test wherein they identify a real-world problem and innovate solutions to that problem.`,
  ],
};

export const foundationCoursesSectionData:CardsSectionData = {
  eyebrow: "Part I",
  title: "Foundation Courses of Innovation",
  description:
    "Build the essential skills, mindset, and framework needed to become an innovator before moving into real-world implementation.",
};

export const foundationCoursesData: FoundationCoursesData = {
  eyebrow: "Part I",
  title: "Foundation Courses of Innovation",
  description:
    "Build the essential skills, mindset, and frameworks needed to think and act like a true innovator.",

  cards: [
    {
      id: 1,
      icon: "users",
      level: "BEGINNER",
      title: "Introduction & Team Building",
      description:
        "Build collaborative foundations and learn to work effectively in innovation teams.",
      duration: "2 weeks",
    },
    {
      id: 2,
      icon: "lightbulb",
      level: "BEGINNER",
      title: "Introduction to Innovation",
      description:
        "Discover the principles, mindset, and processes that drive innovative thinking.",
      duration: "3 weeks",
    },
    {
      id: 3,
      icon: "target",
      level: "INTERMEDIATE",
      title: "How to Think Like an Innovator",
      description:
        "Master asking the right questions and finding meaningful answers.",
      duration: "4 weeks",
    },
    {
      id: 4,
      icon: "message",
      level: "INTERMEDIATE",
      title: "Brainstorming & Persuasion",
      description:
        "Generate breakthrough ideas and communicate them with clarity and confidence.",
      duration: "3 weeks",
    },
    {
      id: 5,
      icon: "file",
      level: "INTERMEDIATE",
      title: "Introduction to Patents",
      description:
        "Learn how to protect intellectual property and navigate the patent landscape.",
      duration: "2 weeks",
    },
    {
      id: 6,
      icon: "puzzle",
      level: "ADVANCED",
      title: "Research & Problem Dividing",
      description:
        "Break down complex problems into manageable components for effective research.",
      duration: "4 weeks",
    },
    {
      id: 7,
      icon: "clipboard",
      level: "ADVANCED",
      title: "Establishing Research Statements",
      description:
        "Craft precise problem statements that drive focused, impactful research.",
      duration: "3 weeks",
    },
    {
      id: 8,
      icon: "science",
      level: "ADVANCED",
      title: "The Logic of Scientific Discovery",
      description:
        "Apply scientific reasoning to validate hypotheses and uncover new insights.",
      duration: "5 weeks",
    },
  ],
};

export const ImplementationCoursesData: FoundationCoursesData = {
  eyebrow: "Part II",
  title: "Implementation course",
  description:
    "to identify a real-world problem and innovate solutions to this problem",

  cards: [
    {
      id: 1,
      icon: "users",
      level: "BEGINNER",
      title: "Introduction & Team Building",
      description:
        "Build collaborative foundations and learn to work effectively in innovation teams.",
      duration: "2 weeks",
    },
    {
      id: 2,
      icon: "lightbulb",
      level: "BEGINNER",
      title: "Introduction to Innovation",
      description:
        "Discover the principles, mindset, and processes that drive innovative thinking.",
      duration: "3 weeks",
    },
    {
      id: 3,
      icon: "target",
      level: "INTERMEDIATE",
      title: "How to Think Like an Innovator",
      description:
        "Master asking the right questions and finding meaningful answers.",
      duration: "4 weeks",
    },
    {
      id: 4,
      icon: "message",
      level: "INTERMEDIATE",
      title: "Brainstorming & Persuasion",
      description:
        "Generate breakthrough ideas and communicate them with clarity and confidence.",
      duration: "3 weeks",
    },
    {
      id: 5,
      icon: "file",
      level: "INTERMEDIATE",
      title: "Introduction to Patents",
      description:
        "Learn how to protect intellectual property and navigate the patent landscape.",
      duration: "2 weeks",
    },
    {
      id: 6,
      icon: "puzzle",
      level: "ADVANCED",
      title: "Research & Problem Dividing",
      description:
        "Break down complex problems into manageable components for effective research.",
      duration: "4 weeks",
    },
    {
      id: 7,
      icon: "clipboard",
      level: "ADVANCED",
      title: "Establishing Research Statements",
      description:
        "Craft precise problem statements that drive focused, impactful research.",
      duration: "3 weeks",
    },
    {
      id: 8,
      icon: "science",
      level: "ADVANCED",
      title: "The Logic of Scientific Discovery",
      description:
        "Apply scientific reasoning to validate hypotheses and uncover new insights.",
      duration: "5 weeks",
    },
  ],
};



export const faqData: FaqCategory[] = [
  {
    id: "program",
    label: "Program and Teams",
    faqs: [
      {
        question: "How are teams formed?",
        answer:
          "Students are grouped based on interests, skills, and program requirements.",
      },
      {
        question: "Can students switch teams later?",
        answer:
          "Yes, depending on mentor approval and project availability.",
      },
      {
        question: "How many students are in a team?",
        answer:
          "Typically 3–5 students work together on a project.",
      },
    ],
  },

  {
    id: "innovation",
    label: "Innovation and Patents",
    faqs: [
      {
        question:
          "Will my child be automatically listed as a co-inventor if a patent application is filed?",
        answer:
          "Yes. Anyone who contributes to the inventive concept may be listed as an inventor.",
      },
      {
        question:
          "What is the cost of filing a patent and who pays for it?",
        answer:
          "Patent filing costs vary depending on jurisdiction and filing strategy.",
      },
      {
        question: "Is the grant of a patent guaranteed?",
        answer:
          "The patent is granted by respective patent offices of different countries and DiscoverSTEM has no control in the grant of the patent. The grant, therefore, is not guaranteed by DiscoverSTEM. Our responsibility ceases once we apply for a patent.",
      },
      {
        question: "Who owns the patent?",
        answer:
          "Ownership depends on inventor agreements and applicable laws.",
      },
    ],
  },

  {
    id: "application",
    label: "Application",
    faqs: [
      {
        question: "How do I apply?",
        answer:
          "Complete the online application form and submit the required information.",
      },
      {
        question: "Is there an interview?",
        answer:
          "Some applicants may be invited for a short interview.",
      },
    ],
  },

  {
    id: "tuition",
    label: "Tution, fee, Scholarship",
    faqs: [
      {
        question: "Are scholarships available?",
        answer:
          "Yes. Merit-based and need-based scholarships may be available.",
      },
      {
        question: "Can fees be paid in installments?",
        answer:
          "Yes. Flexible payment plans are available.",
      },
    ],
  },
];


export const partnersEcosystemTextData: SimpleTextSectionData = {
  paragraphs: [
    `Over the last couple of years, our young innovators have been generating great ideas that can positively  
    impact the world. But what good an idea will do by staying on paper & patents, and not getting
    commercialized?`,

    `Many of our students want to launch their startups and commercialize their innovations. So, we've gone ahead and developed an ecosystem of partners worldwide, which include Business Mentors, Technology Mentors, 
    Management Consultants, Product Designers, Product Prototyping firms, Manufacturers, Packagers, Marketing 
    &amp; Promotion firms, Shipping firms, Clearing &amp; Forwarding Agencies, CPA and Attorneys among others.`,

    `We've taken care of everything to launch an idea into the market. All we need are bright and promising individuals to pick up an idea and run their company. What's more, over and above, we provide a seed capital between $10,000/- to $30,000/- per startup to kickstart their business.`,

    `To summarize, DiscoverSTEM Entrepreneurship Program teaches what is missing even in the best management schools in the world; launch and run your own company! Additionally, by the time you finish college, you may end up owning a successful business enterprise!`,
  ],
};

export const EcosystemTextData: SimpleTextSectionData = {
  paragraphs: [
    `At DiscoverSTEM, we leave no stone unturned to help our innovators turn their unique ideas and inventions into commercialized products or solutions to solve real-world problems. Our startup ecosystem is designed to provide all the tangible and intangible support our innovators might need to commercialize their innovation successfully. Right from giving them intellectual support, critical inputs & reviews to infrastructure and seed funding, we assist our innovators in all ways possible to commercialize their innovation and become entrepreneurs.`,

    `DiscoverSTEM has built advanced infrastructure with the finest research labs for our students to pursue their inventions. We also have a long list of illustrious mentors and seasoned professionals in our panel of experts who help students at every step of their innovation.`,
  ],
};


export const entrepreneurshipFundingData: EntrepreneurshipFundingData = {
  title:
    "<strong>$10,000 to $30,000</strong> per startup, to kickstart your company.",

  description:
    "The DiscoverSTEM Entrepreneurship Program teaches what is missing even in the best management schools in the world: how to actually launch and run your own company. By the time you finish college, you may already own a successful business enterprise.",

  image: "/Images/entrepreneurship/image1-1.jpg",
  imageAlt: "Startup Entrepreneurship",

  points: [
    "Direct cash injection per founding team",
    "Tied to milestones, not paperwork",
    "Backed by mentors, not just capital",
    "Lab + infrastructure access included",
  ],
};

export const productDesignPartnersData: ImageTextPartnerSectionData = {
  title: "Product Design, Prototyping, and Manufacturing Partners",

  description: [
    `Innovating a product or solution demands a lot of testing with trials and errors. Prototyping an invention idea often makes a significant contribution to projects as it allows refining ideas through repetitive experimentation.`,

    `At DiscoverSTEM, we are partnering with credible product design, prototyping, and manufacturing partners who help our innovators bring their thoughts and ideas to concrete solutions through product design and prototyping. It enables our innovators to understand and identify any potential issues with initial designs and amend accordingly before progressing further. It also helps our innovators avoid any design-related manufacturing problems which may prove costly or delay the manufacturing process.`,
  ],

  image: "/Images/partners/image1-2.jpg",
  imageAlt: "Product Design Partner",
};

export const DesignPartnersData: ImageTextPartnerSectionData = {
  title: "Startup Ecosystem Partner CPA/Legal",

  description: [
    `From fundraising and company formation to the launch and the ongoing operations, a startup needs legal and financial advice at every step to ensure that all necessary compliances are met, and agreements are made. A startup is not some random dream that the founder sees and wakes up the next day to fulfill it. Startup demands organized efforts day in and day out and need professional counseling from legal experts and CPAs.`,

    `At DiscoverSTEM, a huge ecosystem of partners is already on board to support our innovators in their entrepreneurial journey. While legal partners help innovators in documentation, agreements, contracts, and other legal compliance, our CPAs help shape a detailed cost structure, revenue generation, and a complete business model`,
  ],

  image: "/Images/partners/image2-1.jpg",
  imageAlt: "CPA Legal Partner",
};

export const FAQData =[
  {
    title: "Frequently Asked question",
 description: "Have Question? You’re in the right place",
   image:"/Images/ContactUs/HeroSection.jpg",
  },
  {
     title: "Frequently Asked question",
 description: "Have Question? You’re in the right place",
   image:"/Images/ContactUs/HeroSection.jpg",
  },
  {
     title: "Frequently Asked question",
 description: "Have Question? You’re in the right place",
   image:"/Images/ContactUs/HeroSection.jpg",
  },
];

export const successStoriesData: SuccessStoryCard[] = [
  {
    id: 1,
    name: "Dr. Hashima Hasan",
    designation: "(Program Scientist @ NASA)\nPh.D. (Nuclear Physics – Oxford University)\nJames Webb Telescope",
    image: "/Images/impact/impect1dr.hashima-1.jpg",
    description:
      "The program brings to life the true scientific process. Rather than focusing on book-centric activities, the students are encouraged to be inquisitive about real-life situations and seek answers through research and experimentation.\n\nThe down-to-earth approach of DiscoverSTEM takes the fear out of scientific learning. DiscoverSTEM encourages students to make their own discoveries. By working together in groups, they feed off each other's energies as each has his or her own Eureka moment.\n\nWhat started as a small mentoring program in 2016 has now evolved to one where students have won NASA innovation awards, patented their innovations, and are now proceeding towards commercialization.",
  },
  {
    id: 2,
    name: "Dr. Charles A. Rodenberger",
    designation: "(NASA Scientist)\nDesigner of the Apollo Spacecraft\nInventor of Hypervelocity Gun\nResearcher for NASA related to meteoroid protection of spacecraft",
    image: "/Images/impact/impect2.jpg",
    description:
      "As a scientist and one of the designers of the NASA Apollo spacecraft, I've seen intensive brain-storming and innovation activities in our team when we were designing systems to land a man on the moon and safely bring them back! The next time I saw such an activity is at DiscoverSTEM. This is the best STEM & Innovation program I've ever seen.",
  },
  {
    id: 3,
    name: "Jim Christensen",
    designation: "Director of Education\nNASA Kennedy Space Center Visitor's Complex",
    image: "/Images/impact/impect3.jpg",
    description:
      "One thing which is fascinating is 'How kids can be trained to be innovative'? Mirza has come up with a step-by-step kind of program and approach to help people create innovations, and I just love that. This program absolutely fascinates me!",
  },
  {
    id: 4,
    name: "Shreeya Dasikan",
    designation: "(DIP 2018-19)\nGreenhill School, Dallas",
    image: "/Images/impact/impect6.jpg",
    description:
      "My favorite part about the program was when all of us would sit in the meeting room and begin to brainstorm ideas. I deeply enjoyed those moments when we were gathered together, throwing out crazy ideas that only seemed crazy until we made them a reality.",
  },
  {
    id: 5,
    name: "Dr. Medhat Askar",
    designation: "(Transplant Immunologist)",
    image: "/Images/impact/impect4.jpg",
    description:
      "As an ex-member of the admission committee of the Cleveland Clinic Lerner College of Medicine for many years, I think one of the most valuable qualities many top-tier medical schools are looking for is Innovations and patents on the applicant's CV. DiscoverSTEM programs mentors a student to earn these valuable additions to their profile.",
  },
  {
    id: 6,
    name: "Dr. Baron Hammon",
    designation: "Father of Mollie Hammon (DIP2018-19)\nStanford University – B.S.\nHarvard Medical School – Cardiac Physiology\n(Author of 98 research and scholarly papers)",
    image: "/Images/impact/impect5.jpg",
    description:
      "This program stands on the shoulder of other master innovators - Edison, Stanley Sarnoff, Ford, and others.",
  },
  {
    id: 7,
    name: "R. Dawlah",
    designation: "Mother of Reya Dawlah\n(DIP2019-20), Sherman-TX, USA",
    image: "/Images/impact/impect9.jpg",
    description:
      "Being a part of this program has been an amazing experience. I learned so much about innovation and patents. I have opened up my way of thinking, and now I am constantly looking around me and thinking of ways to innovate.",
  },
  {
    id: 8,
    name: "Jeanette Goodrich",
    designation: "Pilot – United States Air Force\nMother of Kayla Goodrich (DIP2019-20)",
    image: "/Images/impact/impect7.jpg",
    description:
      "DiscoverSTEM Innovation Programs truly prepare kids to become the next generation of innovators. I love how they are challenged to think and explore; to identify and solve everyday problems; I love how much I've seen my daughter grow.",
  },
  {
    id: 9,
    name: "Kayla Goodrich",
    designation: "(DIP2019-20), Dallas-TX-USA",
    image: "/Images/impact/impect8.jpg",
    description:
      "My time at DiscoverSTEM Innovation Program has been awesome! It has given me a constructive environment to learn how to think like an innovator and build on other people's ideas. I also love how it challenges me to think outside of the box and innovate. With these skills, my future has no limit!",
  },
  {
    id: 10,
    name: "Marium Khan",
    designation: "(DIP2015-16), Irving-TX-USA",
    image: "/Images/impact/WhatsApp-Image-2022-01-24-at-10.08.16-PM.jpeg",
    description:
      "DiscoverSTEM Innovation Program has helped in countless ways. Not only did it help me secure a full-ride to Duke University, the process of going to NASA, presenting our innovation, and being ranked first against over 50 teams from all over the world was a memorable experience.\n\nWith the mentorship I received through the program, I developed and strengthened various aspects of my personality. I learned what it was like to be an innovator, researcher, entrepreneur, and public speaker.\n\nThe invaluable skills I gained have tremendously aided my college career as I continue to explore the realms of biological research and innovation further at one of the best academic institutions.",
  },
  {
    id: 11,
    name: "Candice Coleman",
    designation: "Mother of Carcyn Coleman\nDIP 2019-20), Dallas-TX-USA",
    image: "/Images/impact/impect10.jpg",
    description:
      "DiscoverSTEM Innovation Program was an awesome experience for Carcyn. Since Carcyn participated in DiscoverSTEM, I have seen her flourish as a student, leader, and innovator. She has gained immense confidence, critical thinking skills, and the importance of teamwork which has given her leadership qualities to excel.\n\nFrom this experience, Carcyn was accepted to two summer programs with fellowships at John Hopkins University and Brown University. Carcyn was also extended the opportunity to attend Brown University online during the school year. Carcyn earned an 'A' in Physics, among her other classes, and has been invited to enroll in Honors Chemistry at The Greenhill School.\n\nThe mentorship component of the DiscoverSTEM program is invaluable, and the entire program was a remarkable experience for my family.",
  },
  {
    id: 12,
    name: "Mamta Prasad",
    designation: "Mother of Anika Prasad\n(DIP2019-20), Frisco-TX, USA",
    image: "/Images/impact/impect11.jpg",
    description:
      "I liked how the program is structured and geared towards developing the innovation spirit in kids. The brainstorming sessions helped my kids in learning how to speak up and work with a team. They also learned that turning ideas into a real product to address a problem is a process.",
  },
  {
    id: 13,
    name: "Surbhi Agrawal",
    designation: "Mother of Isha Agrawal\n(DIP2019-20/ILM2020-24), Plano-TX, USA",
    image: "/Images/impact/impect14.jpg",
    description:
      "This program gave exposure to children to observe problems and come up with innovative solutions. Students learned to work together in groups and take responsibility to develop better ideas.",
  },
  {
    id: 14,
    name: "Roderick Rischer",
    designation: "Father of Ashton Richer\nGreenhill School, Dallas-TX (DIP2018-19), Dallas-TX-USA",
    image: "/Images/impact/impect15.jpg",
    description:
      "I liked that the DiscoverSTEM Innovation Program fostered critical, analytical, and innovative thinking. I liked the fact that a world-class innovator taught Ashton and that he could be around other talented young children who are curious learners and are taught to think outside of the box. I liked the left-right brain activity.",
  },
  {
    id: 15,
    name: "Alejandra Salinas",
    designation: "Father of Rafael Zapiain\n(DIP2018-19), Dallas-TX-USA",
    image: "/Images/impact/impect13.jpg",
    description:
      "We liked that this program gives our children an opportunity to understand how work teams interact in the real world. We also liked that the program instills a feeling of responsibility by letting each participant work on their own assigned tasks and present their results to the whole team later on.\n\nAn essential part of this experience is developing entrepreneurial skills and the ability to solve problems by thinking outside the box. Additional to these observations, we sincerely appreciate Mr. Faizan's professionalism and courtesy towards the parents.",
  },
  {
    id: 16,
    name: "Dr. S. Iqbal",
    designation: "Father of Shayaan and Zaina Iqbal\n(DIP2019-20), Dallas-TX, USA",
    image: "/Images/impact/father-final.png",
    description:
      "I liked the most about the program is my child got tuned into thinking about the problems around them. They learned to think and brainstorm about how to solve them and came up with solutions.\n\nHe worked collaboratively with the team and mentors. He saw the deficiencies in their project and worked towards solving them. The kids worked independently with their team without spoon-feeding from parents.",
  },
  {
    id: 17,
    name: "S. Syed",
    designation: "Mother of Tarik Syed\nGreenhill School, Dallas-TX\n(DIP2019-20/ILM2020-24), Plano-TX, USA",
    image: "/Images/impact/mother-final.png",
    description:
      "I have never seen my son as enthusiastic about learning anything. He enjoys telling us all about the products they designed. I also think the team collaboration was very beneficial. He thinks more deeply about all details. It has been a great experience for him.",
  },
  {
    id: 18,
    name: "Suresh Rangan",
    designation: "Father of Manish Rangan\n(DIP2019-20/DEP2020-22), Frisco-TX-USA",
    image: "/Images/impact/impect16.jpg",
    description:
      "First of all, thanks to Mr. Faizan and the entire DiscoverSTEM team for starting this program in North Texas. While most of the current learning is geared towards GPA, AP, and school curriculum, this came out so different as an opportunity to engage with other kids of different ages and grades, and brainstorm for problem-solving to make them a thinker and a doer.\n\nManish really enjoyed it and was looking forward to this class every week. To keep it simple, what I liked about the program is bringing kids together and having them brainstorm to develop innovation to solve a problem systematically.",
  },
  {
    id: 19,
    name: "Shayan Taban",
    designation: "(DIP2019-20)\nKuala Lumpur-Malaysia",
    image: "/Images/impact/male-student-final.png",
    description:
      "I really liked how I learned to think outside-of-the-box and innovate things. Also, I enjoyed everybody coming together and seeing their different views and opinions about the same idea.",
  },
  {
    id: 20,
    name: "Dr. Sreemdevi Nayaranan",
    designation: "Mother of Soorya Narayanan\n(DIP2019-20/ILM2020-24)",
    image: "/Images/impact/mother-final.png",
    description:
      "The program has benefitted Soorya in expressing herself more. She can tune into her true self and be on a positive growth path. It has helped her reasoning, analytical, and brainstorming skills. She is more solution-focused now.",
  },
  {
    id: 21,
    name: "Marsha DeCay",
    designation: "Mother of Kenny Joel DeCay Jr.\n(DIP2019-20), Arlington-TX, USA",
    image: "/Images/impact/mother-final.png",
    description:
      "The program fostered a dichotomy shift in the way my son views day-to-day objects, problems, inconveniences, situations. He now views them from the perspective of problem solving and solution.",
  },
  {
    id: 22,
    name: "Hiba Sheikh",
    designation: "(DIP2019-20)\nSouthlake-TX-USA",
    image: "/Images/impact/female-student-final.png",
    description:
      "In this program, I liked how the mentors took part in meetings along with my team. Also, having this opportunity here to learn innovation is something truly extraordinary. Going through the innovation process, brainstorming, STAR methodology, and making an innovation is something unique to us.\n\nThis program really helped me in my leadership skills and thinking process. Overall, I think I would do this course again because it is really fun to collaborate with different people and ideas. This program changed my thought process, which enhanced my grades.",
  },
  {
    id: 23,
    name: "Zayan Tabish",
    designation: "(DIP2019-20)\nSydney-Australia",
    image: "/Images/impact/male-student-final.png",
    description:
      "The Program was very engaging, and I learned many new things as well as the process of innovation. I looked towards the innovation sessions every week and enjoyed learning how to think like an innovator and work with a global team to solve a real-world problem.",
  },
  {
    id: 24,
    name: "Abhay Sharma",
    designation: "Father of Kaushiki & Abhyudaya\n(DIP2019-20), Bristol-UK",
    image: "/Images/impact/father-final.png",
    description:
      "The overall approach of the DiscoverSTEM Innovation Program is very good. It helps children observe the surroundings with certain analytical reasoning and evaluate it from their perspective to measure - 'Is this the right way to do or is there any other simple way or mechanism that can be proposed or invented?'.\n\nThis approach surfaces the curiosity of the young mind and also drives them to propose a solution. Since children are still not exposed to high-end Physics or mathematics, solutions proposed by them are very simple and user-friendly, which is the ultimate objective of any innovation. I am convinced and fully support this program.",
  },
  {
    id: 25,
    name: "Abdurraheem Sheikh",
    designation: "(DIP2016-17/DIP2019-20)\nIrving TX-USA",
    image: "/Images/impact/male-student-final.png",
    description:
      "The thing that I liked the most about this program was that it was very interactive, and it forced all the students to collaborate and work together as a solid team. It helped us in sharing our ideas which led to better innovation. I also liked how in this program we tried to fix the problems that really affect many people and that now we have a shot of implementing in the real world.",
  },
  {
    id: 26,
    name: "Dr. Shams Sheikh",
    designation: "Father of Hiba Sheikh & Humza Sheikh\n(DIP2019-20)",
    image: "/Images/impact/father-final.png",
    description:
      "I appreciated the process of learning innovations targeted for the kids. From seeing the results presented at the prior DiscoverSTEM demonstration, I think this is a very captivating course. I liked the approach to coming up with a patent and understanding why some ideas could not be patentable. For Hiba, this was a great experience to be in a small group and separately come up with something outside of school.",
  },
  {
    id: 27,
    name: "Saket Kumar",
    designation: "Father of Meher Singh (DIP2019-20/ILM2020-24), Southlake-TX-USA",
    image: "/Images/impact/SaketKumar.jpg",
    description:
      "We really liked the way kids started to approach problems after attending this program. They have started to look for sources /scope for innovation in their day-to-day lives. Their curiosity about everything around them has gone up.",
  },
  {
    id: 28,
    name: "Shreya Nair",
    designation: "(DIP2019-20)\nFrisco-TX-USA",
    image: "/Images/impact/female-student-final.png",
    description:
      "Being a part of this program has been an amazing experience. I learned so much about innovation and patents. I have opened up my way of thinking, and now I am constantly looking around me and thinking of ways to innovate.",
  },
];


export const impactCMOData = {
  image: "/Images/impact/pc3haizam.jpg",
  name: "Hisham Ahmad - CMO",
  description:
    "I am a 14-year-old freshman attending Brighter Horizons Academy in Garland, Texas. I have extensive experience with marketing, as I have been a part of various companies and mentorships. I graduated from the DiscoverStem program, allowing new doors to open up for me, and change the way I see things. The DiscoverStem program has also given me more experience with concepts such as patents, invention, and innovation, as well as inspiration to use these skills to help the world around us.",
};

export const impactAwardData = {
  image: "/Images/impact/WhatsApp-Image-2022-02-15-at-1.31.03-AM.jpeg",
  title:
    "DiscoverSTEM founders Mirza Rizwan and Mirza Faizan have made history by becoming the first Indian to win the coveted George Washington Honor Medal from the Freedoms Foundation – USA.",
  description: [
    "Started in 1949 by former US President Dwight D. Eisenhower, Freedoms Foundation honors exceptional contributions of Americans towards communities in the USA. Generally reserved for the US citizens, the awarding organization made an exception to recognize the stellar research work and its impact of India's Mr. Rizwan in designing and implementing a unique STEM & Innovation program for American children, thereby revolutionizing the education system in the USA.",
    "Few of the other notable non-US citizens who have received George Washington Honor Medal include Ms. Margaret Thatcher (Former Prime Minister of United Kingdom), Lech Walesa (Former President of Poland and Noble Prize winner) and world-renowned Russian writer Aleksandr Solzhenitsyn. As the latest recipients of this prestigious honor, Mirza brothers join historically acclaimed group of citizens whose work and dedication advance the American ideals, the award letter says.",
    "Some of the distinguished US citizens who have received this award for their stellar contributions in their field are Walt Disney, Astronauts Sally Ride and John Glenn, Capt. Sully Sullenberger, Athletes like Arthur Ashe, George Foreman and Tiger Woods and famous US educator Jaime Escalante.",
  ],
};

export const mentorCardsData = [
  {
    image: "/Images/mentors/Zizis-Kozlakidis.jpg",
    category: "Laboratory Services & Biobanking",
    name: "Dr. Zizis Kozlakidis",
    degree: "Head, Laboratory Services and Biobanking",
    org: "@IARC/WHO",
    modalData: {
      title: "Dr. Zisis Kozlakidis",
      description: [
        "Dr. Zisis Kozlakidis is the Head of Laboratory Services and Biobanking at the International Agency for Research on Cancer (IARC), part of the World Health Organization (WHO). A highly accomplished senior healthcare professional, he brings decades of experience in biomedical research, innovation strategy, and global health consulting. With a unique blend of scientific expertise and business acumen, he has led international projects focused on the integration of cutting-edge technologies into healthcare systems, fostering collaborations with major global players like Intel and Illumina.",
        "Dr. Kozlakidis has served as President of the International Society for Biological and Environmental Repositories (ISBER) from 2017 to 2018 and co-founded the Cass Health Innovation Club at Cass Business School, promoting interdisciplinary innovation in life sciences and medicine. His contributions span virology, biobanking, and digital health, earning him numerous international awards. He is a Fellow of the Linnean Society of London and serves on several high-level international boards and committees that shape policy on medical ethics, innovation, and healthcare startup strategy.",
        "With work experience across the UK, US, China, Vietnam, Indonesia, and Greece, Dr. Kozlakidis continues to drive global impact by advising on the implementation and scalability of healthcare solutions, while mentoring the next generation of scientific leaders.",
      ],
    },
  },
  {
    image: "/Images/mentors/Anthony-Gregg.jpg",
    category: "Genomics, Medical Genetics, and Biotechnology",
    name: "Dr. Anthony Gregg",
    degree: "MD, MBA",
    org: "@American College of Medical Genetics and Genomics",
    modalData: {
      title: "Dr. Anthony Gregg, MD, MBA",
      description: [
        "Dr. Anthony Gregg is a world-renowned expert in Genomics, Genetics, and Biotechnology. He is a practicing doctor in Obstetrics & Gynecology and has served in various positions from Adjunct Professor to the Chief and Chair of Obstetrics and Gynecology and Human Genetics at some of the top health institutions in the US.",
        "He is a Past Chair of the American College of Obstetricians and Gynecologists Committee on Genetics and previously served in a liaison capacity to that Committee. He spent the early part of his genetics career exploring hypertension during pregnancy using transgenic and knock-out mice. He co-wrote American College of Medical Genetics and Genomics policy statements on carrier screening and non-invasive prenatal screening for fetal aneuploidy using cell-free fetal DNA. Dr. Gregg received his MBA from the Warrington School of Business at the University of Florida. Dr. Gregg served as the 13th President of the American College of Medical Genetics and Genomics.",
        "Dr. Gregg is an avid researcher and has served on the review panel with the National Institute of Health, mentored several post-doctoral fellows across the globe, published over 45 research papers, written, edited, or co-edited over 11 textbook chapters, invited speaker at 140+ research events worldwide. More recently he contributes to clinical practice guidelines and national policies that focus on the introduction of genetic and genomic technologies into clinical practice. These contributions led to an invitation to Capitol Hill and an opportunity to speak at a hearing devoted to prenatal carrier screening in the US. Dr. Gregg is committed to nurturing the next generations of Genomics and Genetics experts.",
      ],
    },
  },
  {
    image: "/Images/mentors/Peter-Guida.jpg",
    category: "Molecular Biology and Radiation Research",
    name: "Dr. Peter Guida",
    degree: "Ph.D.",
    org: "@NASA / Brookhaven National Laboratory",
    modalData: {
      title: "Dr. Peter Guida",
      description: [
        "Dr. Peter Guida is a NASA-based molecular biologist who specializes in the field of radiation biology. He graduated from the Albert Einstein College of Medicine in 1999 with a Ph.D. in developmental and molecular biology. He then completed a 3-year post-doctoral fellowship at Brookhaven National Laboratory (BNL) in New York in the field of accelerator-based radiation biology.",
        "In 2003 he joined the scientific staff at BNL and is currently a Full Scientist running a laboratory that investigates the effects of radiation on human neuronal cells. In addition, he serves as NASA's Liaison Biologist for the NASA Space Radiation Laboratory Program, which examines the potential health risks to astronauts from exposure to the charged particle radiation that is found in space. He has published many research papers and is a peer-reviewer for numerous journals in the radiation and neuroscience fields. Dr. Guida brings extensive knowledge of molecular signaling pathways and DNA repair to DiscoverSTEM.",
      ],
    },
  },
  {
    image: "/Images/mentors/image5dr.baron_.jpg",
    category: "Transplant Immunology and Histocompatibility",
    name: "Dr. Medhat Askar",
    degree: "MD, Ph.D., MSHPE, FRCPath",
    org: "@Baylor University Medical Center",
    modalData: {
      title: "Dr. Medhat Askar",
      description: [
        "If there is an individual who commands great respect and admiration in the field of Transplant Immunology, it has to be Dr. Medhat Askar. His academic qualifications, professional experience, and sheer weight of his work in the domain have earned him great laurels in the medical fraternity.",
        "Dr. Medhat Askar, MD, Ph.D., MSHPE, FRCPath, is a Professor of Pathology and Laboratory Medicine at Texas A&M College of Medicine, the Director of Transplant Immunology, Hematopoietic Cell Processing and COVID-19 laboratories at Baylor University Medical Center, Dallas, TX, USA.",
        "Dr. Askar is the President of The American Society for Histocompatibility and Immunogenetics (ASHI), Immediate Past President of The American Board for Histocompatibility and Immunogenetics (ABHI), and a member of the Executive Committee of the National Boards of Directors of United Network for Organ Sharing (UNOS) and Organ Procurement and Transplantation Network (OPTN).",
        "He is also a Councillor to The Transplantation Society (TTS) representing North America, the Co-Chair of the TTS Education Committee, a member of the Laboratory Practice Committee of the International Society of Cell and Gene Therapy, and a Principal Investigator on several study protocols through the Center for International Blood and Marrow Transplant Research (CIBMTR).",
        "DiscoverSTEM students have this distinguished opportunity to carry out research activities at Dr. Medhat Askar's Transplant Immunology Lab. We have signed a research agreement (MoU) with Dr. Medhat Askar, which allows our students access to world-class research facilities.",
      ],
    },
  },
  {
    image: "/Images/mentors/image4dr.bashoo.jpg",
    category: "Islet Cell Transplantation and Transplant Immunology",
    name: "Dr. Bashoo Naziruddin",
    degree: "Ph.D., FAST",
    org: "@Baylor University Medical Center",
    modalData: {
      title: "Dr. Bashoo Naziruddin",
      description: [
        "Leading the charge in biotech and healthcare advancements, Dr. Bashoo Naziruddin's work has shaped the course of life-changing research work. He has been the Director of the cGMP Islet Cell Processing Laboratory at Baylor University Medical Center since April 2003. He is also an Adjunct Professor at the Institute of Biomedical Studies at Baylor University, Waco, Texas.",
        "Dr. Bashoo Naziruddin is a translational research scientist with more than 30 years of experience in academia, the biotech industry, and the healthcare system. His professional experiences include extensive work in life science research, teaching, mentoring, cGMP practice, and clinical and experimental islet transplantation. His current research is focused on immunobiology of human islet cell transplantation. His specific research topics include the assessment of immune response in islet transplant recipients, the development of an optimal immunosuppressive regimen for islet transplantation, strategies to induce tolerance towards donor islets, and the identification of novel drugs to prevent islet rejection.",
        "Dr. Bashoo Naziruddin has published more than 157 research articles in peer-reviewed journals and has co-authored more than 200 presentations at international/national scientific meetings. He has written chapters in four books on Organ/Cell Transplantation and has been awarded four patents on islet transplantation. He is one of the eminent personalities, who is regularly invited to deliver talks at reputed Institutions and served as a member of several national/institutional committees.",
        "DiscoverSTEM is proud to have collaborated with Dr. Bashoo Naziruddin's Islet Cell Transplant Lab. Our research partnership agreement (MoU) allows our students to explore and experience research opportunities at the Islet Cell Transplant lab, which has some of the World's most advanced technologies and equipment.",
      ],
    },
  },
  {
    image: "/Images/mentors/Aamir-Mirza.jpg",
    category: "Pharmaceutics and Drug Delivery Systems",
    name: "Dr. Aamir Mirza",
    degree: "Ph.D.",
    org: "@Jamia Hamdard",
    modalData: {
      title: "Dr. Aamir Mirza",
      description: [
        "Dr. M. Aamir Mirza is working as an Assistant Professor in the Department of Pharmaceutics, Jamia Hamdard, an NIRF Rank 1 institute and a NAAC 'A+' grade deemed to be University. He has a multifaceted career portfolio adorned with both industry and academic accomplishments. During his industry stay he became a seasoned scientist and dealt with challenging NCE/NDA development. He is on advisory boards of some international research-based companies of India, New Zealand and Europe. Academics and Research being close to his heart, he has published more than 110 manuscripts in the journals of international repute and has been granted 02 Indian patent and filed for 04.",
        "He has contributed several chapters in books published by reputed authors like Elsevier and Bentham. He is amongst the very few scientists globally who has an expertise in Humic substances research. A well-travelled scientist; he has delivered scientific addresses in countries like USA, Austria, Japan, Netherlands, Turkey, Estonia, Spain and Russia. He has been Elite Fellow at University of Malaya (Malaysia) for the last 5 years where he takes classes on the topics related to industrial pharmacy.",
      ],
    },
  },
  {
    image: "/Images/mentors/Dr-Asim-Ansari.jpg",
    category: "Marketing Strategy and Consumer Behavior Analytics",
    name: "Dr. Asim Ansari",
    degree: "Ph.D.",
    org: "@Columbia Business School",
    modalData: {
      title: "Dr. Asim Ansari",
      description: [
        "Asim Ansari is the William T. Dillard professor of Marketing at Columbia Business School. He received his PhD in marketing from New York university. His current research focuses on personalization and the use of machine learning and AI methods for marketing problem solving. His research has appeared in several leading marketing journals. He has received the Paul Green award from the American Marketing Association for his work on e-customization in 2004.",
        "His research has also been nominated for the William O'Dell Award, the Paul Green Award, the Long-Term Impact Award from the INFORMS Society for Marketing Science, the Frank M. Bass Outstanding Dissertation Award, and the John D. Little Award on multiple occasions.",
      ],
    },
  },
  {
    image: "/Images/mentors/image9dr.nadeem.jpg",
    category: "Bioengineering and Medical Device Innovation",
    name: "Dr. Nadeem Vellore",
    degree: "Ph.D.",
    org: "@Janssen Pharmaceuticals (Johnson & Johnson)",
    modalData: {
      title: "Dr. Nadeem Vellore",
      description: [
        "Dr. Nadeem comes with a wealth of knowledge and experience in computations and simulations to understand the behavioral patterns of complex biological reactions. Professionally, Dr. Nadeem Ahmad Vellore is a computational chemist working for Janssen Pharmaceuticals (R&D division of Johnson and Johnson).",
        "His research interest includes computational simulation of proteins trying to understand how atoms move to coordinate the fascinating biological pathways and in-silico designing of novel inhibitors (drugs) to target various diseases.",
        "Dr. Vellore obtained his Bachelors from India in Biotechnology and his Ph.D. in Bioengineering from Clemson University, USA. He has published over 25 articles in scientific journals and periodically serves as a reviewer for many journals as well.",
      ],
    },
  },
  {
    image: "/Images/mentors/Shreyas-Kumar-DiscoverSTEM-Panel-of-Experts.png",
    category: "Computer Science, AI Applications, and Systems Engineering",
    name: "Prof. Shreyas Kumar",
    degree: "Professor of Practice",
    org: "@Texas A&M University",
    modalData: {
      title: "Dr. Shreyas Kumar",
      description: [
        "Dr. Kumar is the AI advisor to DiscoverSTEM. Dr. Shreyas Kumar is a Professor of Practice at the Department of Computer Science and Engineering at Texas A&M University. He researches AI for Government, Grid, Infrastructure, and engineering Security and has designed and taught courses on Cybersecurity. He has previously worked in engineering and cybersecurity leadership positions at Oracle, Adobe, and Uber.",
        "He has advised various Silicon Valley startups and the U.S. Space Force. He has published research papers in top security and cyber warfare journals and conference proceedings. He holds Master's degrees in Computer Science and Legal Studies from Texas A&M University.",
      ],
    },
  },
  {
    image: "/Images/mentors/Shefali-Kakar.jpg",
    category: "Oncology Therapeutics, Pharmacokinetics, and Clinical Drug Development",
    name: "Shefali Kakar",
    degree: "Ph.D.",
    org: "@Novartis",
    modalData: {
      title: "Shefali Kakar",
      description: [
        "Shefali Kakar, PhD VP and Global Head, Oncology Therapeutic Area, PK Sciences at Novartis. She is responsible for overseeing all aspects of PK Sciences (ADME, PK, PK/PD and clinical pharmacology) for 100+ projects in the Novartis oncology portfolio spanning early discovery to marketed products.",
        "Shefali has been passionate about dose for oncology patients throughout her 20+ year career in Pharma. Prior to joining Novartis, Shefali worked at Pfizer and also served as an Adjunct faculty for Clinical Pharmacology at the Brown University. She received her PhD in Pharmacology from U of Michigan.",
      ],
    },
  },
];

export const AerospacevideoData: VideoData = {
  youtubeUrl: "https://www.youtube.com/embed/5nWVP8-GpII",
  title: "Program Video",
};

export const roboticsResearchLabTextData: ResearchMentorTextData = {
  title: "AI-ML and AutonomousTech Research Lab",
  content: [
    {
      type: "paragraph",
      text: `Are machines really going to take over the world? How 'smart' can a smart machine become? What is 'Artificial Intelligence and how different it is from 'Real Intelligence'? What are the top challenges in autonomous systems and how to solve them?`,
    },
    {
      type: "paragraph",
      text: `If your kid is interested in exploring some of these exciting questions, our AI-ML and Autonomous Tech Research Lab may have answers. We have a dedicated space for young innovators to explore domains like Artificial Intelligence, Autonomous Mobility, Automation, and Machine Learning.`,
    },
    {
      type: "heading",
      text: "At our AI-ML and Autonomous Tech Research Lab, we provide our students:",
    },
    {
      type: "list",
      items: [
        "Domain-specific training.",
        "Activities to understand domain concepts.",
        "One large project at the end of the module.",
        "We leave our students by introducing them to some of the most pressing problems in AI, automation & technology domains, encouraging them to find a solution later in their lives.",
      ],
    },
  ],
};

export const fintechResearchLabTextData: ResearchMentorTextData = {
  title: "Banking, Finance & Fintech Research Lab",
  content: [
    {
      type: "paragraph",
      text: `Do our kids understand money the way they should? Do they understand how our banking systems work? Do they have any idea about insurance, digital currency, wealth creation, or income tax?`,
    },
    {
      type: "paragraph",
      text: `Our Banking, Finance & Fintech Research Lab gives our innovators an understanding of 'Money' – the central driving force behind every human activity on this earth. This lab provides exposure to our young innovators to money, banking system, mobile payments, blockchain technology, and digital currency. The lab provides them with resources to gain knowledge on critical issues like how wealth is created, how economies work, challenges in developed & developing nations, differences between sustainable & non-sustainable economies, and others.`,
    },
    {
      type: "heading",
      text: "At our Banking, Finance & Fintech Research Lab, we provide our students:",
    },
    {
      type: "list",
      items: [
        "Domain-specific training.",
        "Activities to understand domain concepts.",
        "One large project at the end of the module.",
        "We leave our students by introducing them to some of the most pressing problems in banking, finance, and fintech domain, encouraging them to find a solution later in their lives.",
      ],
    },
  ],
};

export const energyResearchLabTextData: ResearchMentorTextData = {
  title: "Energy & Environment Research Lab",
  content: [
    {
      type: "paragraph",
      text: `Preserving the environment and sustainable development is one of the top concerns faced by world leaders today. Our Energy & Environment Research Lab provides exposure to the environmental problems directly related to the production and consumption of energy. It includes air pollution, climate change, water pollution, greenhouse emissions, and its impact. This lab provides the space, technology, and equipment for young innovators to brainstorm and find alternate, sustainable, and renewable energy solutions.`,
    },
    {
      type: "paragraph",
      text: `Our students are exposed to and challenged to find innovative solutions to some of the most pressing environmental issues, including marine pollution, plastic pollution, deforestation, overfishing, and others.`,
    },
    {
      type: "heading",
      text: "At our Energy & Environment Research Lab, we provide our students:",
    },
    {
      type: "list",
      items: [
        "Domain-specific training.",
        "Activities to understand domain concepts.",
        "One large project at the end of the module.",
        "We leave our students by introducing them to some of the most pressing problems in the energy and environment domain, encouraging them to find a solution later in their lives.",
      ],
    },
  ],
};

export const biotechResearchLabTextData: ResearchMentorTextData = {
  title: "Genomics, Biotechnology & Health Sciences Research Lab",
  content: [
    {
      type: "paragraph",
      text: `Healthcare and biotechnology have emerged as one of the most challenging and in-demand domains in recent times. Advancements in this domain lead to innovations like wearable gadgets, medical devices, robotics surgery, new & effective treatment of diseases, control of an epidemic, and development of life-saving vaccines.`,
    },
    {
      type: "paragraph",
      text: `Our Genomics, Biotechnology & Health Sciences Research Lab provides children great exposure to Gene Editing and its applications, DNA sequencing technology, CRISPR, Plant biology, and therapeutics. This lab allows our young innovators to explore some of the top challenges in this domain, and brainstorm with fellow students to innovate solutions to meet these challenges.`,
    },
    {
      type: "heading",
      text: "At our Genomics, Biotechnology & Health Sciences Research Lab, we provide our students:",
    },
    {
      type: "list",
      items: [
        "Domain-specific training.",
        "Activities to understand domain concepts.",
        "One large project at the end of the module.",
        "We leave our students by introducing them to some of the most pressing problems in the genomics, biotechnology & health sciences domain, encouraging them to find a solution later in their lives.",
      ],
    },
  ],
};

export const neuroResearchLabTextData: ResearchMentorTextData = {
  title: "Neurotechnology & Brain-Computer Interface Research Lab",
  content: [
    {
      type: "paragraph",
      text: `Our Neurotechnology & Brain-Computer Interface Research Lab is yet another effort to help our innovators research futuristic technologies. In our Brain-Machine Interface Research Lab, we have acquired technology that captures human brain waves and converts them into programmable signals. This center has all the facilities to develop machines of the future that will be controlled by the thoughts of a person.`,
    },
    {
      type: "paragraph",
      text: `Giving children access to such powerful and futuristic technologies will open a whole new world of possibilities, allowing them to capitalize on their innovative ideas and develop radical inventions.`,
    },
    {
      type: "heading",
      text: "At our Neurotechnology & Brain-Computer Interface Research Lab, we provide our students:",
    },
    {
      type: "list",
      items: [
        "Domain-specific training.",
        "Activities to understand domain concepts.",
        "One large project at the end of the module.",
        "We leave our students by introducing them to some of the most pressing problems in the neurotechnology domain, encouraging them to find a solution later in their lives.",
      ],
    },
  ],
};

export const fintechModulesData: ResearchModulesSectionData = {
  title: "Banking, Finance & Fintech Research Lab — 14 Modules",
  buttonText: "Download Curriculum",
  curriculumLink: "#",
  modules: [
    {
      id: 1,
      title: "DSBFF01 :: Money Explained",
      description:
        "This curriculum is inspired from FNCE100 Corporate Finance – Wharton Undergraduate Finance. The barter system and double coincidence of wants. Need for money and its characteristics. Understanding money. Money as a store of value and medium of exchange. Development of paper money and origin of bank. Exercise: The barter system poses several challenges. Device a new type of barter system which is slightly easier to implement.",
    },
    {
      id: 2,
      title: "DSBFF02 :: Introduction to Banking & Other Financial System",
      description:
        "This curriculum is inspired from International Banking FNCE232 – Wharton Undergraduate Finance. Section I: Origin of a Bank, Functions of a bank, Credit Union, Crowdfunding, Future of Banking – A fintech revolution. Section II: How do banks make money? Introduction to Fractional Reserve Banking, Federal Reserve and its role in controlling the economy of the USA. Section III: An Introduction to Investment Banking. Exercise: Current banking system is based on interest. Devise different ways to raise the funds for a project.",
    },
    {
      id: 3,
      title: "DSBFF03 :: Fintech - Reshaping the Banking and Payment Industry",
      description:
        "This curriculum is inspired from Harvard Business School Fintech Course. Introduction to Fintech | Fintech Explained. How FinTech is Shaping the Future of Banking. 15 Things You Didn't Know About Fintech Industry. Credit Card & Crowdfunding. Crowdfunding – Success stories in Fintech. Exercise: Brainstorming Future Innovations in Fintech.",
    },
    {
      id: 4,
      title: "DSBFF04 :: Economy & Its Importance",
      description:
        "This curriculum is inspired from FNCE101 Corporate Finance – Wharton Undergraduate Finance. Three forces that drive the economy. How credit creates growth. Economic expansion and recession. Concept of de-leveraging and how to solve it. The Lost Decade. The financial system. Exercise: Brainstorm various parameters which impact the economy of a country and how they can be tweaked during a crisis.",
    },
    {
      id: 5,
      title: "DSBFF05 :: Capital",
      description:
        "This curriculum is inspired from Private Equity & Venture Capital – Harvard Business School. What is the capital and what are the different types of capital. Private Equity & Venture Capital. Capital Market. Exercise: Develop strategies to revive the business of a newly acquired property.",
    },
    {
      id: 6,
      title: "DSBFF06 :: Corporate Finance",
      description:
        "This curriculum is inspired from FNCE100 Corporate Finance – Wharton Undergraduate Finance. Introduction to Capital Budgeting. Present Value and Future Value of Money. Uncertainty and the trade-off between risk & return. Working Capital Management. Optimal capital structure. Exercise: Devise capital budgeting strategies with an aim to keep the Sharpe Ratio as high as possible.",
    },
    {
      id: 7,
      title: "DSBFF07 :: The Payment Industry",
      description:
        "How electronic payment works. Participants involved in the payment processing industry. Real-life example of how transactions work. Payment Gateway. Exercise: Devise a point-of-sale payment system that does NOT need Internet connectivity to work or work through more innovative ways of connectivity.",
    },
    {
      id: 8,
      title: "DSBFF08 :: Consumer Finance & Its Challenges",
      description:
        "This curriculum is inspired from FNCE202 Consumer Finance Decision Making – Wharton Undergraduate Finance. Credit Cards – How Does a Credit Card Work? Student Loan – How Do Student Loans Work? Mortgage & Insurance. Understanding Health Insurance. Challenges in consumer finance. Exercise: Develop the best financial plan which pays for your college tuition in a given situation.",
    },
    {
      id: 9,
      title: "DSBFF09 :: Investment Management",
      description:
        "This curriculum is inspired from FNCE205 Investment Management – Wharton Undergraduate Finance. What is an investment? | Investment Diversification. Asset Allocation | Risk and return. How Stock Exchange Works | Stock Market Explained. Exercise: Analyze how the stock price of the company is affected by fluctuations in external and internal factors.",
    },
    {
      id: 10,
      title: "DSBFF10 :: Insurance Industry",
      description:
        "Introduction to Insurance and how does the insurance industry make money. Emerging tech-trends in the insurance industry. Insurtech Explained. World InsurTech Report 2020: Critical times require a new mindset. The future of insurance claims. The power and potential of AI in insurance claims. Disruptive trends in insurance industry. Exercise: Design an Insurtech system to settle vehicle accident claims in seconds.",
    },
    {
      id: 11,
      title: "DSBFF11 :: Data Science for Finance",
      description:
        "This curriculum is inspired from FNCE100 Corporate Finance – Wharton Undergraduate Finance. Introduction to Data Science. Five ways data Science changed Finance. Fraud Prevention and Data Science | Anomaly Detection | Customer Analytics | Risk Management | Algorithmic Trading. Top 9 Data Science Use Cases in Banking. Big Data and Analytics at Work in Banking. Exercise: Brainstorm data science use cases to make life easier for customers and service providers in the banking and finance industry.",
    },
    {
      id: 12,
      title: "DSBFF12 :: Introduction to Blockchain & Cryptocurrency",
      description:
        "This curriculum is inspired from Harvard Business School Fintech Course. What is a Blockchain and what problem do they solve? What is a smart contract & what problem do they solve? Introduction to Cryptocurrency. How Blockchain enables Cryptocurrency? Could digital currencies put banks out of business? Exercise: Use Blockchain to develop a system to prevent airplane parts overflying their age.",
    },
    {
      id: 13,
      title: "DSBFF13 :: Introduction to Financial Analysis",
      description:
        "This curriculum is inspired from Harvard Business School – Leading with Finance. Introduction and types of Financial Analysis. Reading and understanding the balance sheet. The cash flow statement. Exercise: Performing 12 types of financial analysis on a company's balance sheet.",
    },
    {
      id: 14,
      title: "DSBFF14 :: Healthy Personal Financial Habits",
      description:
        "Using credit cards wisely. Prioritizing your expenses. Investment decision. Path to your first million dollar. Exercise: Develop your personal financial plan to be a millionaire by the time you turn 25 years.",
    },
  ],
};

export const biotechModulesData: ResearchModulesSectionData = {
  title: "Genomics, Biotechnology & Health Sciences — 13 Modules",
  buttonText: "Download Curriculum",
  curriculumLink: "#",
  modules: [
    {
      id: 1,
      title: "DSGBH01 :: Organization of Life",
      description:
        "Cellular Organization. Organismal Organization. Population Organization. Exercise: Hands-on exercise to co-relate Human Cells and World around us.",
    },
    {
      id: 2,
      title: "DSGBH02 :: Introduction to DNA",
      description:
        "This curriculum is inspired from XGEN101 – Fundamentals of Genetics Stanford School of Medicine Genetics and Genomics Program. Fundamentals of human cell. What is DNA? Introduction to DNA. DNA & RNA: DNA vs RNA. mRNA, rRNA, and tRNA: Functions | Types of RNA. Protein Synthesis, DNA Transcription, and DNA Translation. DNA Methylation. Introduction to mRNA Vaccines. Exercise: Understand DNA coding and simulate DNA Code.",
    },
    {
      id: 3,
      title: "DSGBH03 :: Introduction to Genetics",
      description:
        "This curriculum is inspired from XGEN101 – Fundamentals of Genetics Stanford School of Medicine Genetics and Genomics Program. DNA, Gene, and Genome. Alleles, Genotype, and Phenotype. Punnett Square. Epigenetics. Exercise: Understand Epigenetics and the impact of certain genes on the human body.",
    },
    {
      id: 4,
      title: "DSGBH04 :: Mutation",
      description:
        "Gene Mutation. Types of Mutation. Spontaneous Mutation. Induced Mutation. Mutagens. Repair Mechanism of Mutation. Your Probability to get Superpower through some Rarest Mutations. Exercise: Design a protein shape that is capable of providing a shield from the virus mutations.",
    },
    {
      id: 5,
      title: "DSGBH05 :: Genomics",
      description:
        "This curriculum is inspired from XGEN102 – Genomics. Stanford School of Medicine Genetics and Genomics Program. What is Genomics? A Short History of Genomics. Why Genomics? Model Organism for Genomic Study. Major Branches of Genomics. Exercise: Develop Co-relation between Animal Gene and Human Gene.",
    },
    {
      id: 6,
      title: "DSGBH06 :: Introduction to Genome Sequencing",
      description:
        "This curriculum is inspired from XGEN102 – Genomics. Stanford School of Medicine Genetics and Genomics Program. What is Genome Sequencing? Some Early DNA Sequencing Methods. Second Generation Sequencing. Third Generation Sequencing. Genetics vs Genomics. Explaining the DNA Sequencing Method.",
    },
    {
      id: 7,
      title: "DSGBH07 :: Applications & Limitations of DNA Sequencing",
      description:
        "Solving Crime. Personalized Healthcare. Cancer Genomics. Studying eDNA (Environmental DNA) using DNA metabarcoding. Detecting Mutations. Parental Verification. Identifying and developing GMO Plants in agriculture. Microbial Identification and study of new species of bacteria and viruses. Exercise: Perform Gene Sequencing of Unknown DNA.",
    },
    {
      id: 8,
      title: "DSGBH08 :: The Human Genome Project",
      description:
        "Introduction, Principle, and Goals of HGP. A race to sequence the human genome. Phases of HGP. Technical Aspects of HGP. Focus of the HGP. Applications of the HGP. Ethical, Legal, and Social Implications (ELSI). Whole Genome Sequencing and You. Exercise: Brainstorm and Develop Future Use of Human Genome Information.",
    },
    {
      id: 9,
      title: "DSGBH09 :: The Future of Genomics",
      description:
        "Ten Bold Predictions. Exercise: Utilize the bold predictions and develop ways to make life better for human beings.",
    },
    {
      id: 10,
      title: "DSGBH10 :: Genetic Engineering & Biotechnology",
      description:
        "This curriculum is inspired from XGEN203 – Genetics Engineering & Biotechnology Stanford School of Medicine Genetics and Genomics Program. Introduction to Gene Editing. Gene Editing tools (CRISPR/Cas9 Technology). Gene Editing and CRISPR/Cas9 Technology – How far should we go? Complications and Risks of Gene Editing: Ethical Issues in Gene Editing. Exercise: Bioethics Research Project.",
    },
    {
      id: 11,
      title: "DSGBH11 :: Genetic Engineering - Applications & Bioethics",
      description:
        "Genetic Engineering Explained: Why Genetic Engineering? Genetic engineering and its future impact. 15 Things You Didn't Know About the Genomics Industry. 10 Reasons Why Biotech is Booming. Impact of Genetic Engineering in Medicine. Genetic Engineering Application in Agriculture. Gene Drives to Lower Disease Transmission. CRISPR Mediated Biofuels. Genomics in Organ Transplant. Genetically Modified Organism (GMO). Genetically Modified Crops. Exercise: Hands-on Gene Editing using CRISPR/Cas9 Technology.",
    },
    {
      id: 12,
      title: "DSGBH12 :: Fundamentals of Gene Therapy",
      description:
        "This curriculum is inspired from XGEN201 – Principles & Practices of Gene Therapy Stanford School of Medicine Genetics and Genomics Program. Gene Mutation & Genetic Diseases. Introduction to Gene Therapy. Some examples of Gene Therapy. Exercise: Understand and Simulate an Attempt to Develop a Cure for Cancer using TP53 Gene.",
    },
    {
      id: 13,
      title: "DSGBH13 :: Personalized Medicine through Genomics",
      description:
        "This curriculum is inspired from XGEN205 – Personal Genomics & Your Health Stanford School of Medicine Genetics and Genomics Program. How Personal Genomics impacts Healthcare. Diagnosing and Treating Diseases with the help of Genomics (Example: Diabetes, Heart Diseases, Allergies, etc.). Exercise: Research and Report Writing on Gene Therapy of a Genetic Disease.",
    },
  ],
};

export const neuroModulesData: ResearchModulesSectionData = {
  title: "Neurotechnology & Brain-Computer Interface — 11 Modules",
  buttonText: "Download Curriculum",
  curriculumLink: "#",
  modules: [
    {
      id: 1,
      title: "DSNTBCI01 :: The Nervous System",
      description:
        "This curriculum is inspired from PSYCH242 Theoretical Neuroscience Stanford University. Central Nervous System (CNS). The Blood Brain Barrier. Peripheral Nervous System (PNS). Somatic Nervous System | Autonomic Nervous System. Sympathetic Nervous System | Parasympathetic Nervous System. Sensory Division. Motor Division. Exercise: Design a Nervous System of a Building.",
    },
    {
      id: 2,
      title: "DSNTBCI02 :: The Brain at Cellular Level",
      description:
        "This curriculum is inspired from PSYCH242 Theoretical Neuroscience Stanford University. Neurons. Dendrites | Axons | Synapse. Neuronal Communication: Anatomy & Physiology. Neural Communication, Synaptic Transmission. How Neurons Communicate. Neural Networks: From The Brain To AI (What Are Neural Networks). Neural Network 3D Simulation. Glial Cells: Neurosciences. Neurochemistry. Neurotransmitters. Receptors. Exercise: Design the Central Nervous System of Future Cars.",
    },
    {
      id: 3,
      title: "DSNTBCI03 :: Neuroanatomy & Brain Organization",
      description:
        "This curriculum is inspired from PSYCH242 Theoretical Neuroscience Stanford University. Brain Anatomy. Grey and White Matter. Brain Development. Embryonic Brain Development. Brain Divisions. Forebrain | Midbrain | Hindbrain. Exercise: Take EEG signals from specific parts of brain performing specific functions.",
    },
    {
      id: 4,
      title: "DSNTBCI04 :: Brain Diseases and Disorders",
      description:
        "This curriculum is inspired from PSYCH242 Theoretical Neuroscience Stanford University. Brain and Mental Health. What Can Go Wrong? Neurodevelopmental Disorders | Neurodegenerative disorders | Psychiatric disorders. Neurogenerative Disease: The Coming Epidemic. Parkinson's Disease: How it might be stopped. Neurogenerative Disease: A Potential gene therapy for ALS. Exercise: Brainstorming on Ways to Generate Handwritten Text from Brain Activity.",
    },
    {
      id: 5,
      title: "DSNTBCI05 :: Introduction to Brain Computer Interface (BCI)",
      description:
        "What is the definition? What are the types of BCI's? Invasive. Semi-Invasive (ECoG) | Non Invasive | MEG | PET | fMRI | fNIRS | EEG. Components. Brain activity | Signal acquisition | Preprocessing | Feature Extraction | Classification | Translation | Feedback device. Applications, Examples & Limitations. Ethics & Safety. Future of the field. Exercise: Designing Futuristic Applications of Brain Computer Interface.",
    },
    {
      id: 6,
      title: "DSNTBCI06 :: BCI Applications",
      description:
        "NeuroEntertainment. Neurogaming | NeuroToys | Art | Virtual Reality. Security. Brain based authentication. Biofeedback Therapy: Anxiety | Sleep Improvement | ADHD | PTSD. Cognitive Training. Performance Optimization | Brain Ageing | Early Development | Mindfulness | Accelerated Learning | Enhanced creativity. Rehabilitation. Stroke Recovery | Addiction | Rett Syndrome. Diagnostics. Concussion | Alzheimer's | Epilepsy. Exercise: Designing Bi-directional Communication through Brain Computer Interface.",
    },
    {
      id: 7,
      title: "DSNTBCI07 :: Introduction to Unicorn BCI Headsets",
      description:
        "What to look for in a headset. Number and Placement of Electrodes | Sampling Rate | ADC Bits. Using BCI Device. Unicorn BCI Headset | Charging & Usage. Putting on a Headset. Positioning. Using Gel. Starting the software. Connecting a headset with software. Reading the EEG Data. Using Unicorn Suite. Unicorn Speller to spell a word using P300. Unicorn Blondy Check. Moving a Sphero robot using the Unicorn Speller suite. Motor Imagery Exercise. Exercise: Use BCI Application to Spell Words, Move Robots, and Perform Blondy Check.",
    },
    {
      id: 8,
      title: "DSNTBCI08 :: BCI Signal Processing",
      description:
        "What is Preprocessing? | Why is preprocessing needed? Importing Data. FIF | EDF / EDF+ | Other standard formats | Other non-standard formats (CSV / .mat). Removing Bad Channels and Interpolation. What is a 'bad' channel? | How to spot a bad channel | How to remove a bad channel from the data | Interpolation | Filtering. Downsampling. Re-referencing. Artifact rejection and correction. Types of artifacts | Rejection based on visualization. Preprocessing for High Density (Research EEG) vs Low Density (Consumer EEG). Channel Removal | Using Event-Markers | Data Quality | Referencing and ERP Shape. Introduction to EEG & Generation of EEG. Origin, significance, and interpretation of EEG. Exercise: Use Unicorn BCI to Generate EEG Artifacts and Identify them on the Chart.",
    },
    {
      id: 9,
      title: "DSNTBCI09 :: Extracting Neural Oscillations from EEG data",
      description:
        "What are Neural Oscillations? Why do we produce neural oscillations? So why do neural oscillations matter? How do we extract neural oscillations as a feature of our EEG data? Importing, reading, and formatting data | Preprocessing | Epoching data. Exercise: Collect EEG Data of Your Team Member and Identify Alpha, Beta, Theta, and Gamma Oscillations on the Chart. Read their Frequency and Amplitude.",
    },
    {
      id: 10,
      title: "DSNTBCI10 :: Event Related Potential (ERP)",
      description:
        "Goals. Feature Extraction. What is feature extraction | Which features to extract. Event-Related Potential. What is an event-related potential | How to record an ERP with EEG | How to use ERP's | How to generate an ERP | The P3 family of ERP's | History of P3-based BCIs. Types of ERP (P300 | SSVEP | Motor Imagery). Exercise: Using the Instructions as attached, through a UDP connection, turn a LED ON and OFF.",
    },
    {
      id: 11,
      title: "DSNTBCI11 :: Future of BCI",
      description:
        "New Emerging Technologies. Introduction | Reading | Writing | Read/Write. Applications and Public Perception. Healthcare Applications | Wellness Applications | Outlooks. Exercise: Develop a system to use your thoughts and BCI technology, and generate materials for a PowerPoint presentation.",
    },
  ],
};

export const fintechVideoData: VideoData = {
  youtubeUrl: "https://www.youtube.com/embed/5nWVP8-GpII",
  title: "Program Video",
};

export const biotechVideoData: VideoData = {
  youtubeUrl: "https://www.youtube.com/embed/5nWVP8-GpII",
  title: "Program Video",
};

export const neuroVideoData: VideoData = {
  youtubeUrl: "https://www.youtube.com/embed/5nWVP8-GpII",
  title: "Program Video",
};

export const SipOtherProgramsData: OtherProgramsData = {
  eyebrow: "More From DiscoverSTEM",
  title: "Explore Our Other Programs",
  programs: [
    {
      id: 1,
      shortName: "ILM",
      title: "Ivy League Mentorship Program",
      description:
        "This elite, immersive four-year parallel education program is meticulously designed to cultivate critical thinking, innovation, problem-solving, research, and leadership skills while fostering an entrepreneurial mindset.",
      buttonText: "Explore ILM",
      href: "/programs/ilm",
    },
    {
      id: 2,
      shortName: "DIP",
      title: "DiscoverSTEM Innovation Program",
      description:
        "6–8 month midterm course to mentor students to think like an innovator and develop novel & patentable solutions.",
      buttonText: "Explore DIP",
      href: "/programs/dip",
    },
  ],
};
export const DipOtherProgramsData: OtherProgramsData = {
  eyebrow: "More From DiscoverSTEM",
  title: "Explore Our Other Programs",
  programs: [
    {
      id: 1,
      shortName: "SIP",
      title: "Summer Impact Program ",
      description:
        "Summer Impact Program (SIP) is a highly selective summer program. It provides an accelerated pathway turning high school students into innovators, entrepreneurs and researchers of tomorrow.",
      buttonText: "Explore SIP",
      href: "/programs/sip",
    },
    {
      id: 2,
      shortName: "ILM",
      title: "Ivy League Mentorship Program",
      description:
        "This elite, immersive four-year parallel education program is meticulously designed to cultivate critical thinking, innovation, problem-solving, research, and leadership skills while fostering an entrepreneurial mindset.",
      buttonText: "Explore ILM",
      href: "/programs/ilm",
    },
  ],
};



import { MediaCategoryItem, MediaNewsItem } from "@/utils/Types";

export const mediaCategories: MediaCategoryItem[] = [
  { label: "Home", sectionId: "home" },
  { label: "Latest News", sectionId: "latest-news" },
  { label: "College Acceptance", sectionId: "college-acceptance" },
  { label: "Patents", sectionId: "patents" },
  { label: "Awards", sectionId: "awards" },
  { label: "Young Inventors", sectionId: "young-inventors" },
  { label: "In The Press", sectionId: "in-the-press" },
  { label: "Blog", sectionId: "blog" },
  { label: "Contact Us", sectionId: "contact-us" },
];



export const mediaNewsData: MediaNewsItem[] = [
  {
    id: 1,
    slug: "driving-business-growth",
    category: "Latest News",
    title: "Driving Business Growth with Custom Software Solutions in 2025",
    image: "/Images/media/news1.png",
     author: "Alam Khan",
  comments: 3,
  views: "5 Min",
  publishedDate: "09 May, 2024",
    time: "10 Hour Ago",
    readTime: "5 Min Read",

    description:
      "As technology continues to evolve, custom software solutions are helping businesses streamline operations, improve customer experiences, and drive long-term growth. As technology continues to evolve, custom software solutions are helping businesses streamline operations, improve customer experiences, and drive long-term growth.As technology continues to evolve, custom software solutions are helping businesses streamline operations, improve customer experiences, and drive long-term growth. As technology continues to evolve, custom software solutions are helping businesses streamline operations, improve customer experiences, and drive long-term growth.As technology continues to evolve, custom software solutions are helping businesses streamline operations, improve customer experiences, and drive long-term growth.As technology continues to evolve, custom software solutions are helping businesses streamline operations, improve customer experiences, and drive long-term growth. As technology continues to evolve, custom software solutions are helping businesses streamline operations, improve customer experiences, and drive long-term growth.As technology continues to evolve, custom software solutions are helping businesses streamline operations, improve customer experiences, and drive long-term growth.As technology continues to evolve, custom software solutions are helping businesses streamline operations, improve customer experiences, and drive long-term growth.As technology continues to evolve, custom software solutions are helping businesses streamline operations, improve customer experiences, and drive long-term growth.",

    content: `
DiscoverSTEM students continue to demonstrate remarkable innovation through research, entrepreneurship, and technology development.

This project explores how custom software solutions are transforming businesses in 2025. Companies are increasingly investing in digital transformation to improve efficiency, reduce costs, and enhance customer engagement.

Students participating in the DiscoverSTEM Innovation Program researched real-world business challenges and proposed scalable software solutions that address operational bottlenecks.

The project highlighted key areas including artificial intelligence, automation, data analytics, and cloud computing.

Through mentorship and hands-on experience, students gained valuable insights into product development and entrepreneurship.

The findings demonstrate that innovation and technology can create meaningful impact across industries while preparing students for future careers in STEM.
    `,
  },

  {
    id: 2,
    slug: "stem-research-projects",
    category: "Latest News",
    title: "STEM Students Present Groundbreaking Research Projects",
    image: "/Images/media/news2.png",
     author: "Alam Khan",
  comments: 3,
  views: "5 Min",
  publishedDate: "09 May, 2024",
    time: "9 Hour Ago",
    readTime: "4 Min Read",

    description:
      "Students showcased innovative research projects covering artificial intelligence, healthcare, sustainability, and robotics.",

    content: `
The annual DiscoverSTEM Research Showcase featured groundbreaking student-led projects from across the country.

Participants presented innovative solutions addressing real-world problems through scientific research and engineering design.

Projects focused on healthcare innovation, environmental sustainability, machine learning, and space technology.

Industry experts and academic mentors provided feedback and guidance to students throughout the event.

Many projects demonstrated publication-level research quality and strong commercialization potential.

The showcase highlighted the next generation of innovators committed to solving global challenges through STEM.
    `,
  },

  {
    id: 3,
    slug: "innovation-program7",
    category: "Latest News",
    title: "DiscoverSTEM Launches New Innovation Program",
    image: "/Images/media/news3.png",
     author: "Alam Khan",
  comments: 3,
  views: "5 Min",
  publishedDate: "09 May, 2024",
    time: "8 Hour Ago",
    readTime: "6 Min Read",

    description:
      "The newly launched innovation program provides mentorship, research opportunities, and startup support for students.",

    content: `
DiscoverSTEM has officially launched its newest innovation initiative aimed at empowering young researchers and entrepreneurs.

The program connects students with industry experts, university researchers, and startup founders.

Participants gain access to advanced resources, mentorship sessions, innovation labs, and project funding opportunities.

Students are encouraged to develop solutions addressing challenges in healthcare, climate, education, and technology.

The initiative is expected to support hundreds of students annually and expand opportunities for innovation nationwide.

This program reinforces DiscoverSTEM's mission to inspire future leaders and innovators.
    `,
  },

  {
    id: 4,
    slug: "national-recognition6",
    category: "Latest News",
    title: "Young Innovators Receive National Recognition",
    image: "/Images/media/news4.png",
     author: "Alam Khan",
  comments: 3,
  views: "5 Min",
  publishedDate: "09 May, 2024",
    time: "7 Hour Ago",
    readTime: "5 Min Read",

    description:
      "Several DiscoverSTEM students were recognized nationally for their contributions to science, technology, and innovation.",

    content: `
Young innovators from DiscoverSTEM received prestigious national recognition for their outstanding achievements.

The awards celebrate creativity, leadership, and dedication to solving real-world problems through STEM.

Winning projects included medical technologies, sustainability initiatives, robotics systems, and AI-powered solutions.

Students credited mentorship, collaboration, and hands-on learning opportunities as key contributors to their success.

The recognition demonstrates the impact of empowering students through research and innovation.

DiscoverSTEM remains committed to supporting future generations of scientists, engineers, and entrepreneurs.
    `,
  },


  {
    id: 12,
    slug: "stem-research-projects4",
    category: "Latest News",
    title: "STEM Students Present Groundbreaking Research Projects",
    image: "/Images/media/news2.png",
     author: "Alam Khan",
  comments: 3,
  views: "5 Min",
  publishedDate: "09 May, 2024",
    time: "9 Hour Ago",
    readTime: "4 Min Read",

    description:
      "Students showcased innovative research projects covering artificial intelligence, healthcare, sustainability, and robotics.",

    content: `
The annual DiscoverSTEM Research Showcase featured groundbreaking student-led projects from across the country.

Participants presented innovative solutions addressing real-world problems through scientific research and engineering design.

Projects focused on healthcare innovation, environmental sustainability, machine learning, and space technology.

Industry experts and academic mentors provided feedback and guidance to students throughout the event.

Many projects demonstrated publication-level research quality and strong commercialization potential.

The showcase highlighted the next generation of innovators committed to solving global challenges through STEM.
    `,
  },
{
    id: 17,
    slug: "stem-research-projects8",
    category: "Latest News",
    title: "STEM Students Present Groundbreaking Research Projects",
    image: "/Images/media/news2.png",
     author: "Alam Khan",
  comments: 3,
  views: "5 Min",
  publishedDate: "09 May, 2024",
    time: "9 Hour Ago",
    readTime: "4 Min Read",

    description:
      "Students showcased innovative research projects covering artificial intelligence, healthcare, sustainability, and robotics.",

    content: `
The annual DiscoverSTEM Research Showcase featured groundbreaking student-led projects from across the country.

Participants presented innovative solutions addressing real-world problems through scientific research and engineering design.

Projects focused on healthcare innovation, environmental sustainability, machine learning, and space technology.

Industry experts and academic mentors provided feedback and guidance to students throughout the event.

Many projects demonstrated publication-level research quality and strong commercialization potential.

The showcase highlighted the next generation of innovators committed to solving global challenges through STEM.
    `,
  },
  {
    id: 13,
    slug: "innovation-program2",
    category: "Latest News",
    title: "DiscoverSTEM Launches New Innovation Program",
    image: "/Images/media/news3.png",
     author: "Alam Khan",
  comments: 3,
  views: "5 Min",
  publishedDate: "09 May, 2024",
    time: "8 Hour Ago",
    readTime: "6 Min Read",

    description:
      "The newly launched innovation program provides mentorship, research opportunities, and startup support for students.",

    content: `
DiscoverSTEM has officially launched its newest innovation initiative aimed at empowering young researchers and entrepreneurs.

The program connects students with industry experts, university researchers, and startup founders.

Participants gain access to advanced resources, mentorship sessions, innovation labs, and project funding opportunities.

Students are encouraged to develop solutions addressing challenges in healthcare, climate, education, and technology.

The initiative is expected to support hundreds of students annually and expand opportunities for innovation nationwide.

This program reinforces DiscoverSTEM's mission to inspire future leaders and innovators.
    `,
  },

  {
    id: 14,
    slug: "national-recognition3",
    category: "Latest News",
    title: "Young Innovators Receive National Recognition",
    image: "/Images/media/news4.png",
    
  author: "Alam Khan",
  comments: 3,
  views: "5 Min",
  publishedDate: "09 May, 2024",
    time: "7 Hour Ago",
    readTime: "5 Min Read",

    description:
      "Several DiscoverSTEM students were recognized nationally for their contributions to science, technology, and innovation.",

    content: `
Young innovators from DiscoverSTEM received prestigious national recognition for their outstanding achievements.

The awards celebrate creativity, leadership, and dedication to solving real-world problems through STEM.

Winning projects included medical technologies, sustainability initiatives, robotics systems, and AI-powered solutions.

Students credited mentorship, collaboration, and hands-on learning opportunities as key contributors to their success.

The recognition demonstrates the impact of empowering students through research and innovation.

DiscoverSTEM remains committed to supporting future generations of scientists, engineers, and entrepreneurs.
    `,
  },

   {
  id: 6,
  slug: "college-acceptance",
  category: "College Acceptance",
  title: "Students Accepted Into Top Universities",
  image: "/Images/media/news6.png",
  time: "10 Hour Ago",
  readTime: "5 Min Read",
  author: "Alam Khan",
  comments: 3,
  views: "5 Min",
  publishedDate: "09 May, 2024",
  description:
    "DiscoverSTEM students continue to achieve remarkable college admissions success across leading universities worldwide.",
  content: `
Students from DiscoverSTEM have received admission offers from top universities around the world.

Through research, innovation projects, leadership initiatives, and mentorship programs, students build strong academic portfolios.

Many students have been accepted into prestigious institutions with scholarships and recognition for their achievements.

These accomplishments reflect the dedication, creativity, and hard work demonstrated throughout their DiscoverSTEM journey.
  `,
},

{
  id: 7,
  slug: "patents",
  category: "Patents",
  title: "Young Researchers Secure Patent Approvals",
  image: "/Images/media/news7.png",
  time: "10 Hour Ago",
  readTime: "5 Min Read",
  author: "Alam Khan",
  comments: 3,
  views: "5 Min",
  publishedDate: "09 May, 2024",
  description:
    "Student innovators continue to transform ideas into intellectual property through patent filings and approvals.",
  content: `
DiscoverSTEM students are actively developing innovative solutions and securing patent approvals.

These patents cover a wide range of fields including healthcare, sustainability, robotics, and artificial intelligence.

Students work alongside mentors to transform concepts into real-world innovations with commercial potential.

Patent approvals demonstrate the impact of student-led research and innovation.
  `,
},

{
  id: 8,
  slug: "awards",
  category: "Awards",
  title: "DiscoverSTEM Students Win Global Awards",
  image: "/Images/media/news8.png",
  time: "10 Hour Ago",
  readTime: "5 Min Read",
  author: "Alam Khan",
  comments: 3,
  views: "5 Min",
  publishedDate: "09 May, 2024",
  description:
    "Students have received recognition at national and international competitions for excellence in STEM and innovation.",
  content: `
DiscoverSTEM participants continue to receive prestigious awards around the world.

Recognition spans science fairs, innovation competitions, entrepreneurship challenges, and academic events.

Students are honored for their creativity, leadership, and ability to solve meaningful problems.

These achievements inspire future innovators to pursue ambitious goals.
  `,
},

{
  id: 9,
  slug: "young-inventors",
  category: "Young Inventors",
  title: "Young Inventors Showcase New Technologies",
  image: "/Images/media/news9.png",
  time: "10 Hour Ago",
  readTime: "5 Min Read",
  author: "Alam Khan",
  comments: 3,
  views: "5 Min",
  publishedDate: "09 May, 2024",
  description:
    "Young inventors are presenting groundbreaking technologies that address challenges in healthcare, education, and sustainability.",
  content: `
Students showcased innovative technologies during the annual Young Inventors Exhibition.

Projects included AI-powered tools, healthcare innovations, environmental solutions, and smart devices.

The event provided students with an opportunity to present their work to industry professionals and researchers.

These inventions demonstrate the power of youth-driven innovation.
  `,
},

{
  id: 10,
  slug: "in-the-press",
  category: "In The Press",
  title: "Media Highlights DiscoverSTEM Success Stories",
  image: "/Images/media/news10.png",
  time: "10 Hour Ago",
  readTime: "5 Min Read",
  author: "Alam Khan",
  comments: 3,
  views: "5 Min",
  publishedDate: "09 May, 2024",
  description:
    "Major media outlets continue to feature DiscoverSTEM students and their innovative accomplishments.",
  content: `
DiscoverSTEM has been featured in numerous media publications highlighting student success stories.

Coverage focuses on breakthrough research, startup ventures, award-winning innovations, and community impact.

These stories help inspire other students to explore STEM and innovation opportunities.

Media recognition further validates the achievements of DiscoverSTEM participants.
  `,
},

{
  id: 11,
  slug: "blog",
  category: "Blog",
  title: "How Innovation Shapes Future Careers",
  image: "/Images/media/news11.png",
  time: "10 Hour Ago",
  readTime: "5 Min Read",
  author: "Alam Khan",
  comments: 3,
  views: "5 Min",
  publishedDate: "09 May, 2024",
  description:
    "Innovation, creativity, and entrepreneurship are becoming essential skills for future career success.",
  content: `
The future workforce will increasingly depend on innovation and problem-solving abilities.

Students who engage in research and entrepreneurship gain valuable skills that prepare them for emerging industries.

Innovation encourages critical thinking, leadership, collaboration, and adaptability.

These experiences help students build successful careers while creating meaningful impact.
  `,
},
];

