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
  AchievementStatItem,
  AwardCard,
  AwardImageItem,
  BlogCardType,
  CenterDescriptionData,
  CommonTextSectionData,
  Contact,
  ContentSectionData,
  CtaBannerData,
  FeatureCard,
  GallerySectionData,
  InnovationCardItem,
  InnovationFilter,
  Logo,
  mediaCenter,
  MediaSectionData,
  NavItem,
  PatentCard,
  PatentCardData,
  PatentFacesData,
  ProgramCard,
  QuoteBannerData,
  RecentPostType,
  Research,
  ResearchLab,
  SpotlightCard,
  Startup,
  StartupDetailData,
  StatItem,
  Step,
  Student,
  SuccessStoryCard,
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
  },
  {
    title: "Ivy League Mentorship",
    image: "/Images/Home/Programs/OurProgram2.png",
  },
  {
    title: "DiscoverSTEM Innovation Program",
    image: "/Images/Home/Programs/OurProgram3.png",
  },
];

export const studentSpotlight: SpotlightCard[] = [
  { name: "Nikitha Thoduguli", image: "/Images/Home/Spotlight/1.png" },
  { name: "Wafiqah Zubair", image: "/Images/Home/Spotlight/2.png" },
  { name: "Marium Khan", image: "/Images/Home/Spotlight/3.png" },
  { name: "Ameer Syedibrahim", image: "/Images/Home/Spotlight/4.png" },
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
  title: "What happens in our Free Information Session?",

  description:
    "DiscoverSTEM Information Session is the first opportunity to explore more about our programs and discover a clear pathway to help children become innovators, researchers, or entrepreneurs.\nDuring the session, you will learn about:",

  sections: [
    {
      title: "About DiscoverSTEM",
      text: "Understand our mission, how we empower young minds, and what makes us the world’s leading platform for future researchers, inventors, and entrepreneurs.",
    },
    {
      title: "Programs",
      text: "Explore the various DiscoverSTEM programs which empower students to develop innovative & patentable solutions to solve real-world problems, conduct hands-on research, and build startups.",
    },
    {
      title: "Accomplishments",
      text: "Get inspired by what our students achieve through DiscoverSTEM: patents, global awards, published research, and top university admissions.",
    },
    {
      title: "Enrollment",
      text: "Get clarity on how you can join DiscoverSTEM, from application steps to the final enrollment.The information session is followed by the Tour of the Innovation & Research Labs.",
    },
  ],
};


export const researchLabs: ResearchLab[] = [
  {
    title: "Aerospace Research Lab",
    image: "/Images/ContactUs/ResearchLabImg.jpg",
  },
  {
    title: "AI-ML and Autonomous Tech Research Lab",
    image: "/Images/ContactUs/ResearchLabImg.jpg",
  },
  {
    title: "Banking, Finance & Fintech Research Lab",
    image: "/Images/ContactUs/ResearchLabImg.jpg",
  },
  {
    title: "Energy & Environment Research Lab",
    image: "/Images/ContactUs/ResearchLabImg.jpg",
  },
  {
    title: "Genomics, Biotechnology & Health Sciences Research Lab",
    image: "/Images/ContactUs/ResearchLabImg.jpg",
  },
  {
    title: "Neurotechnology & Brain-Computer Interface Research Lab",
    image: "/Images/ContactUs/ResearchLabImg.jpg",
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

export const programDetailsData = {
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
    image: "/Images/Programs/sip/research.png",
    title: "Reopen the doors of the world with UVSET safetouch",
  },
  {
    image: "/Images/Programs/sip/research.png",
    title: "Using Brain Waves And Computer Interface Technology As A Communication System",
  },
  {
    image: "/Images/Programs/sip/research.png",
    title: "Mental, Emotional and Behavioral Reporting System",
  },
];

export const studentsData: Student[] = [
  {
    image: "/Images/Programs/sip/madhalasa.png",
    name: "Madhalasa Iyer",
  },
  {
    image: "/Images/Programs/sip/wafiqah.png",
    name: "Wafiqah Zubair",
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
    id: "US-12341",
    type: "US",
    title: "Relay-based system to launch a projectile",
      image: "/Images/patent-granted/preview.png",
    inventorCount: 4,
    inventors:
      "Mikaeel Faisal Khan (12), Zaynab Khan (13), Faraz Rahman (13), Mohammed Omer Shaikoor (11)",
    googlePatentLink: "#",
    certificateLink: "#",
  },
  {
    id: "SA-12342",
    type: "SA",
    title: "Relay-based system to launch a projectile",
      image: "/Images/patent-granted/preview.png",
    inventorCount: 4,
    inventors:
      "Mikaeel Faisal Khan (12), Zaynab Khan (13), Faraz Rahman (13), Mohammed Omer Shaikoor (11)",
    googlePatentLink: "#",
    certificateLink: "#",
  },
  {
    id: "US-12343",
    type: "US",
    title: "Relay-based system to launch a projectile",
      image: "/Images/patent-granted/preview.png",
    inventorCount: 4,
    inventors:
      "Mikaeel Faisal Khan (12), Zaynab Khan (13), Faraz Rahman (13), Mohammed Omer Shaikoor (11)",
    googlePatentLink: "#",
    certificateLink: "#",
  },
  {
    id: "SA-12344",
    type: "SA",
    title: "Relay-based system to launch a projectile",
      image: "/Images/patent-granted/preview.png",
    inventorCount: 4,
    inventors:
      "Mikaeel Faisal Khan (12), Zaynab Khan (13), Faraz Rahman (13), Mohammed Omer Shaikoor (11)",
    googlePatentLink: "#",
    certificateLink: "#",
  },
  {
    id: "US-12345",
    type: "US",
    title: "Relay-based system to launch a projectile",
      image: "/Images/patent-granted/preview.png",
    inventorCount: 4,
    inventors:
      "Mikaeel Faisal Khan (12), Zaynab Khan (13), Faraz Rahman (13), Mohammed Omer Shaikoor (11)",
    googlePatentLink: "#",
    certificateLink: "#",
  },
  {
    id: "SA-12346",
    type: "SA",
    title: "Relay-based system to launch a projectile",
      image: "/Images/patent-granted/preview.png",
    inventorCount: 4,
    inventors:
      "Mikaeel Faisal Khan (12), Zaynab Khan (13), Faraz Rahman (13), Mohammed Omer Shaikoor (11)",
    googlePatentLink: "#",
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

export const admissionStudentsData = [
  {
    id: 1,
    name: "Riddah Shaista Shanavas",
    initials: "RS",
    batch: "Class of 2025",
    program: "ILM",
    school: "DiscoverSTEM Program · ILM",
    acceptedTo: "Caltech",
  },
  {
    id: 2,
    name: "Ashton Rischer",
    initials: "AR",
    batch: "Class of 2025",
    program: "DIP",
    school: "DiscoverSTEM Program · DIP",
    acceptedTo: "Embry-Riddle Aeronautical University",
  },
  {
    id: 3,
    name: "Rishika Nandigam",
    initials: "RN",
    batch: "Class of 2025",
    program: "DIP",
    school: "DiscoverSTEM Program · DIP",
    acceptedTo: "NYU",
  },
  {
    id: 4,
    name: "Hadia Khatri",
    initials: "HK",
    batch: "Class of 2025",
    program: "DIP",
    school: "DiscoverSTEM Program · DIP",
    acceptedTo: "Washington University",
  },
  {
    id: 5,
    name: "Vedanth Venkatesh",
    initials: "VV",
    batch: "Class of 2025",
    program: "DIP",
    school: "DiscoverSTEM Program · DIP",
    acceptedTo: "Stanford University",
  },
  {
    id: 6,
    name: "Bilal Hassan",
    initials: "BH",
    batch: "Class of 2025",
    program: "DIP",
    school: "DiscoverSTEM Program · DIP",
    acceptedTo: "UT Southwestern Medical Center",
  },
  {
    id: 7,
    name: "Risabh Siddamshetty",
    initials: "RS",
    batch: "Class of 2025",
    program: "DIP",
    school: "DiscoverSTEM Program · DIP",
    acceptedTo: "Michigan Ross School of Business",
  },
  {
    id: 8,
    name: "Rahil Kakar",
    initials: "RK",
    batch: "Class of 2025",
    program: "DIP",
    school: "DiscoverSTEM Program · DIP",
    acceptedTo: "Michigan Ross School of Business",
  },
   {
    id: 9,
    name: "Vedanth Venkatesh",
    initials: "VV",
    batch: "Class of 2025",
    program: "DIP",
    school: "DiscoverSTEM Program · DIP",
    acceptedTo: "Stanford University",
  },
  {
    id: 10,
    name: "Bilal Hassan",
    initials: "BH",
    batch: "Class of 2025",
    program: "DIP",
    school: "DiscoverSTEM Program · DIP",
    acceptedTo: "UT Southwestern Medical Center",
  },
  {
    id: 11,
    name: "Risabh Siddamshetty",
    initials: "RS",
    batch: "Class of 2025",
    program: "DIP",
    school: "DiscoverSTEM Program · DIP",
    acceptedTo: "Michigan Ross School of Business",
  },
  {
    id: 12,
    name: "Rahil Kakar",
    initials: "RK",
    batch: "Class of 2025",
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



export const awardsImagesData: AwardImageItem[] = [
  {
    image: "/Images/award/image 5.png",
    alt: "Future City Special Award for Flood Resilient City",
  },
  {
     image: "/Images/award/image 6.png",
    alt: "Future City Livable Community Special Award",
  },
  {
    image: "/Images/award/image 7.png",
    alt: "NASA Langley Research Center Award",
  },
  {
     image: "/Images/award/image 8.png",
    alt: "Congressional App Challenge Honorable Mention",
  },
  {
     image: "/Images/award/image 7.png",
    alt: "NASA Langley Research Center Award",
  },
  {
     image: "/Images/award/image 5.png",
    alt: "Future City Special Award for Flood Resilient City",
  },
  {
   image: "/Images/award/image 6.png",
    alt: "Future City Livable Community Special Award",
  },
  {
     image: "/Images/award/image 8.png",
    alt: "Congressional App Challenge Honorable Mention",
  },
  {
     image: "/Images/award/image 5.png",
    alt: "Future City Special Award for Flood Resilient City",
  },
  {
     image: "/Images/award/image 7.png",
    alt: "Future City Livable Community Special Award",
  },
  {
     image: "/Images/award/image 7.png",
    alt: "NASA Langley Research Center Award",
  },
  {
     image: "/Images/award/image 8.png",
    alt: "Congressional App Challenge Honorable Mention",
  },
  {
     image: "/Images/award/image 7.png",
    alt: "NASA Langley Research Center Award",
  },
  {
     image: "/Images/award/image 7.png",
    alt: "Future City Special Award for Flood Resilient City",
  },
  {
    image: "/Images/award/image 7.png",
    alt: "Future City Livable Community Special Award",
  },
  {
     image: "/Images/award/image 8.png",
    alt: "Congressional App Challenge Honorable Mention",
  },
   {
    image: "/Images/award/image 5.png",
    alt: "Future City Special Award for Flood Resilient City",
  },
  {
     image: "/Images/award/image 6.png",
    alt: "Future City Livable Community Special Award",
  },
  {
    image: "/Images/award/image 7.png",
    alt: "NASA Langley Research Center Award",
  },
  {
     image: "/Images/award/image 8.png",
    alt: "Congressional App Challenge Honorable Mention",
  },
  {
     image: "/Images/award/image 7.png",
    alt: "NASA Langley Research Center Award",
  },
  {
     image: "/Images/award/image 5.png",
    alt: "Future City Special Award for Flood Resilient City",
  },
  {
   image: "/Images/award/image 6.png",
    alt: "Future City Livable Community Special Award",
  },
  {
     image: "/Images/award/image 8.png",
    alt: "Congressional App Challenge Honorable Mention",
  },
  {
     image: "/Images/award/image 5.png",
    alt: "Future City Special Award for Flood Resilient City",
  },
  {
     image: "/Images/award/image 7.png",
    alt: "Future City Livable Community Special Award",
  },
  {
     image: "/Images/award/image 7.png",
    alt: "NASA Langley Research Center Award",
  },
  {
     image: "/Images/award/image 8.png",
    alt: "Congressional App Challenge Honorable Mention",
  },
  {
     image: "/Images/award/image 7.png",
    alt: "NASA Langley Research Center Award",
  },
  {
     image: "/Images/award/image 7.png",
    alt: "Future City Special Award for Flood Resilient City",
  },
  {
    image: "/Images/award/image 7.png",
    alt: "Future City Livable Community Special Award",
  },
  {
     image: "/Images/award/image 8.png",
    alt: "Congressional App Challenge Honorable Mention",
  },
];



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
  "All Statuses",
  "Granted",
  "Pending",
];

export const innovationCardsData: InnovationCardItem[] = [
  {
    id: 1,
    category: "Aerospace",
    filterType: "Granted",
    statusIcon: "/Images/innovation/granted.png",
    image: "/Images/innovation/image 4.png",
    title: "Relay-based system to launch a projectile",
    awardIcon: "/Images/innovation/award.png",
    award: "Winner · 1st Prize, NASA Ames Space Settlement Challenge — 2018",
    patentLink: "#",
    certificateLink: "#",
  },
  {
    id: 2,
    category: "Aerospace",
    filterType: "Pending",
    statusIcon: "/Images/innovation/pending.png",
    image: "/Images/innovation/image 4.png",
    title: "Relay-based system to launch a projectile",
    awardIcon: "/Images/innovation/award.png",
    award: "Winner · 1st Prize, NASA Ames Space Settlement Challenge — 2018",
    patentLink: "#",
    certificateLink: "#",
  },
  {
    id: 3,
    category: "Aerospace",
    filterType: "Granted",
    statusIcon: "/Images/innovation/granted.png",
    image: "/Images/innovation/image 4.png",
    title: "Relay-based system to launch a projectile",
    awardIcon: "/Images/innovation/award.png",
    award: "Winner · 1st Prize, NASA Ames Space Settlement Challenge — 2018",
    patentLink: "#",
    certificateLink: "#",
  },
  {
    id: 4,
    category: "Aerospace",
    filterType: "Granted",
    statusIcon: "/Images/innovation/granted.png",
    image: "/Images/innovation/image 4.png",
    title: "Relay-based system to launch a projectile",
    awardIcon: "/Images/innovation/award.png",
    award: "Winner · 1st Prize, NASA Ames Space Settlement Challenge — 2018",
    patentLink: "#",
    certificateLink: "#",
  },
  {
    id: 5,
    category: "Aerospace",
    filterType: "Granted",
    statusIcon: "/Images/innovation/granted.png",
    image: "/Images/innovation/image 4.png",
    title: "Relay-based system to launch a projectile",
    awardIcon: "/Images/innovation/award.png",
    award: "Winner · 1st Prize, NASA Ames Space Settlement Challenge — 2018",
    patentLink: "#",
    certificateLink: "#",
  },
  {
    id: 6,
    category: "Aerospace",
    filterType: "Pending",
    statusIcon: "/Images/innovation/pending.png",
    image: "/Images/innovation/image 4.png",
    title: "Relay-based system to launch a projectile",
    awardIcon: "/Images/innovation/award.png",
    award: "Winner · 1st Prize, NASA Ames Space Settlement Challenge — 2018",
    patentLink: "#",
    certificateLink: "#",
  },
  {
    id: 7,
    category: "Aerospace",
    filterType: "Granted",
    statusIcon: "/Images/innovation/granted.png",
    image: "/Images/innovation/image 4.png",
    title: "Relay-based system to launch a projectile",
    awardIcon: "/Images/innovation/award.png",
    award: "Winner · 1st Prize, NASA Ames Space Settlement Challenge — 2018",
    patentLink: "#",
    certificateLink: "#",
  },
  {
    id: 8,
    category: "Aerospace",
    filterType: "Granted",
    statusIcon: "/Images/innovation/granted.png",
    image: "/Images/innovation/image 4.png",
    title: "Relay-based system to launch a projectile",
    awardIcon: "/Images/innovation/award.png",
    award: "Winner · 1st Prize, NASA Ames Space Settlement Challenge — 2018",
    patentLink: "#",
    certificateLink: "#",
  },
  {
    id: 9,
    category: "Aerospace",
    filterType: "Granted",
    statusIcon: "/Images/innovation/granted.png",
    image: "/Images/innovation/image 4.png",
    title: "Relay-based system to launch a projectile",
    awardIcon: "/Images/innovation/award.png",
    award: "Winner · 1st Prize, NASA Ames Space Settlement Challenge — 2018",
    patentLink: "#",
    certificateLink: "#",
  },
  {
    id: 10,
    category: "Aerospace",
    filterType: "Pending",
    statusIcon: "/Images/innovation/pending.png",
    image: "/Images/innovation/image 4.png",
    title: "Relay-based system to launch a projectile",
    awardIcon: "/Images/innovation/award.png",
    award: "Winner · 1st Prize, NASA Ames Space Settlement Challenge — 2018",
    patentLink: "#",
    certificateLink: "#",
  },
  {
    id: 11,
    category: "Aerospace",
    filterType: "Granted",
    statusIcon: "/Images/innovation/granted.png",
    image: "/Images/innovation/image 4.png",
    title: "Relay-based system to launch a projectile",
    awardIcon: "/Images/innovation/award.png",
    award: "Winner · 1st Prize, NASA Ames Space Settlement Challenge — 2018",
    patentLink: "#",
    certificateLink: "#",
  },
  {
    id: 12,
    category: "Aerospace",
    filterType: "Granted",
    statusIcon: "/Images/innovation/granted.png",
    image: "/Images/innovation/image 4.png",
    title: "Relay-based system to launch a projectile",
    awardIcon: "/Images/innovation/award.png",
    award: "Winner · 1st Prize, NASA Ames Space Settlement Challenge — 2018",
    patentLink: "#",
    certificateLink: "#",
  },
];



export const successStoriesData: SuccessStoryCard[] = [
  {
    id: 1,
    size: "large",
    position: "left",
    name: "Dr. Hashima Hasan",
    designation:
      "(Program Scientist @ NASA)\nPh.D. (Nuclear Physics – Oxford University)\nJames Webb Telescope",
    image: "/Images/success-stories/hashima-hasan.jpg",
    description:
      "The program brings to life the true scientific process. Rather than focusing on book-centric activities, the students are encouraged to be inquisitive about real-life situations and seek answers through research and experimentation.\n\nThe down-to-earth approach of DiscoverSTEM takes the fear out of scientific learning. DiscoverSTEM encourages students to make their own discoveries. By working together in groups, they feed off each other's energies as each has his or her own 'Eureka' moment.\n\nWhat started as a small mentoring program in 2016 has now evolved to one where students have won NASA innovation awards, patented their innovations, and are now proceeding towards commercialization.",
  },
  {
    id: 2,
    size: "small",
    position: "right",
    name: "Dr. Charles A. Rodenberger",
    designation:
      "(NASA Scientist)\n-Designer of the Apollo Spacecraft\n-Inventor of Hypervelocity Gun\n-Researcher for NASA related to meteoroid protection of spacecraft",
    image: "/Images/success-stories/charles-rodenberger.jpg",
    description:
      "As a scientist and one of the designers of the NASA Apollo spacecraft, I've seen intensive brain-storming and innovation activities in our team when we were designing systems to land a man on the moon and safely bring them back! The next time I saw such an activity is at DiscoverSTEM. This is the best STEM & Innovation program I've ever seen.",
  },
  {
    id: 3,
    size: "small",
    position: "right",
    name: "Shreeya Dasikan",
    designation: "(DIP 2018-19)\nGreenhill School, Dallas",
    image: "/Images/success-stories/shreeya-dasikan.jpg",
    description:
      "My favorite part about the program was when all of us would sit in the meeting room and begin to brainstorm ideas. I deeply enjoyed those moments when we were gathered together, throwing out crazy ideas that only seemed crazy until we made them a reality.",
  },
  {
    id: 4,
    size: "small",
    position: "left",
    name: "Jim Christensen",
    designation:
      "Director of Education\nNASA Kennedy Space Center Visitor's Complex",
    image: "/Images/success-stories/jim-christensen.jpg",
    description:
      "One thing which is fascinating is 'How kids can be trained to be innovative?' Mirza has come up with a step-by-step kind of program and approach to help people create innovations, and I just love that. This program absolutely fascinates me!",
  },
  {
    id: 5,
    size: "small",
    position: "right",
    name: "Dr. Charles A. Rodenberger",
    designation:
      "(NASA Scientist)\n-Designer of the Apollo Spacecraft\n-Inventor of Hypervelocity Gun\n-Researcher for NASA related to meteoroid protection of spacecraft",
    image: "/Images/success-stories/charles-rodenberger.jpg",
    description:
      "As a scientist and one of the designers of the NASA Apollo spacecraft, I've seen intensive brain-storming and innovation activities in our team when we were designing systems to land a man on the moon and safely bring them back! The next time I saw such an activity is at DiscoverSTEM. This is the best STEM & Innovation program I've ever seen.",
  },
  {
    id: 6,
    size: "large",
    position: "left",
    name: "Dr. Hashima Hasan",
    designation:
      "(Program Scientist @ NASA)\nPh.D. (Nuclear Physics – Oxford University)\nJames Webb Telescope",
    image: "/Images/success-stories/hashima-hasan.jpg",
    description:
      "The program brings to life the true scientific process. Rather than focusing on book-centric activities, the students are encouraged to be inquisitive about real-life situations and seek answers through research and experimentation.\n\nThe down-to-earth approach of DiscoverSTEM takes the fear out of scientific learning. DiscoverSTEM encourages students to make their own discoveries. By working together in groups, they feed off each other's energies as each has his or her own 'Eureka' moment.\n\nWhat started as a small mentoring program in 2016 has now evolved to one where students have won NASA innovation awards, patented their innovations, and are now proceeding towards commercialization.",
  },
  {
    id: 7,
    size: "large",
    position: "right",
    name: "Dr. Hashima Hasan",
    designation:
      "(Program Scientist @ NASA)\nPh.D. (Nuclear Physics – Oxford University)\nJames Webb Telescope",
    image: "/Images/success-stories/hashima-hasan.jpg",
    description:
      "The program brings to life the true scientific process. Rather than focusing on book-centric activities, the students are encouraged to be inquisitive about real-life situations and seek answers through research and experimentation.",
  },
  {
    id: 8,
    size: "small",
    position: "left",
    name: "Jim Christensen",
    designation:
      "Director of Education\nNASA Kennedy Space Center Visitor's Complex",
    image: "/Images/success-stories/jim-christensen.jpg",
    description:
      "One thing which is fascinating is 'How kids can be trained to be innovative?' Mirza has come up with a step-by-step kind of program and approach to help people create innovations, and I just love that. This program absolutely fascinates me!",
  },
  {
    id: 9,
    size: "small",
    position: "right",
    name: "Jim Christensen",
    designation:
      "Director of Education\nNASA Kennedy Space Center Visitor's Complex",
    image: "/Images/success-stories/jim-christensen.jpg",
    description:
      "One thing which is fascinating is 'How kids can be trained to be innovative?' Mirza has come up with a step-by-step kind of program and approach to help people create innovations, and I just love that. This program absolutely fascinates me!",
  },
];
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
      role: "Founder",
      color: "#8B63B6",
    },
    {
      initials: "MR",
      name: "Manish Rangan",
      role: "CEO, UVSET",
      color: "#F05A37",
    },
    {
      initials: "AK",
      name: "Aiman Khan",
      role: "Co-founder",
      color: "#F5A623",
    },
    {
      initials: "HS",
      name: "Humza Sheikh",
      role: "Co-founder",
      color: "#739B49",
    },
    {
      initials: "VY",
      name: "Vihan Yerubandi",
      role: "Co-founder",
      color: "#4E8EF7",
    },
  ],

  problemTitle: "Problem:",

  problem:
    "Spread of COVID-19 infection through door handles.",

  innovationTitle: "Innovation:",

  innovation: [
    "The University of Arizona conducted research in which they concluded that if there is an infected door handle in a mid-size office with 500 employees, it will take 2–4 hours for the infection to spread among 80 percent of employees.",

    "This fact inspired DiscoverSTEM's young innovators to design a system to disinfect surfaces, including door handles, doorbells, and lift button panels.",

    "DiscoverSTEM students from the Entrepreneurship Program came together to form a team, launch their startup, and commercialize this innovation. These high-school students were able to secure funding from Kubera Capital, a Texas-based Venture Capital firm in February 2022.",
  ],

  logo: "/Images/Uvset/uvsetimage.png",

  startupImage: "/Images/startups/uvset-product.png",

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
      "Patent pending in two jurisdictions — protecting the core mechanism and UV-cycle process.",
  },

  website: {
    title: "ONLINE",
    value: "uvsetinc.com",
    buttons: ["Visit Website", "Facebook", "LinkedIn"],
  },
};

export const mediaSectionData: MediaSectionData = {
  title: "In The Media",

  items: [
    {
      id: 1,
      tag: "Funding",
      source: "NTX Inno News",
      title:
        "Student-founded startup eyes product launch with LOIs worth nearly $750K",
      image: "/Images/Uvset/media.png",
      visitLink: "#",
      pdfLink: "#",
    },
    {
      id: 2,
      tag: "Honors",
      source: "India Abroad",
      title:
        "Congressman Raja Krishnamoorthi honors 18 Indian American achievers under 18",
      image: "/Images/Uvset/media.png",
      visitLink: "#",
      pdfLink: "#",
    },
    {
      id: 3,
      tag: "Profile",
      source: "CEOMOM News",
      title: "CEOKID Spotlight: Meet Teen Inventor Manish Rangan",
      image: "/Images/Uvset/media.png",
      visitLink: "#",
      pdfLink: "#",
    },
    {
      id: 4,
      tag: "Innovation",
      source: "Feature Story",
      title: "Preventing Infection through Sanitization",
      image: "/Images/Uvset/media.png",
      visitLink: "#",
      pdfLink: "#",
    },
    {
      id: 5,
      tag: "Talk",
      source: "TEDx Talk",
      title: "Manish Rangan | TEDx Youth @ TAMS",
      image: "/Images/Uvset/media.png",
      visitLink: "#",
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
      name: "Madhalsa Iyer",
      role: "DiscoverSTEM Student",
      image: "/Images/patents/students/madhalsa-iyer.png",
    },
    {
      id: 2,
      name: "Nikitha Thoduguli",
      role: "DiscoverSTEM Student",
      image: "/Images/patents/students/nikitha-thoduguli.png",
    },
    {
      id: 3,
      name: "Wafiqah Zubair",
      role: "DiscoverSTEM Student",
      image: "/Images/patents/students/wafiqah-zubair.png",
    },
    {
      id: 4,
      name: "Ryan Xie",
      role: "DiscoverSTEM Student",
      image: "/Images/patents/students/ryan-xie.png",
    },
    {
      id: 5,
      name: "Marium Khan",
      role: "DiscoverSTEM Student",
      image: "/Images/patents/students/marium-khan.png",
    },
    {
      id: 6,
      name: "Shreeya Madhavanur",
      role: "DiscoverSTEM Student",
      image: "/Images/patents/students/shreeya-madhavanur.png",
      tag: "Innovator",
    },
    {
      id: 7,
      name: "Raahi Jogani",
      role: "DiscoverSTEM Student",
      image: "/Images/patents/students/raahi-jogani.png",
      tag: "Innovator",
    },
    {
      id: 8,
      name: "Manish Rangan",
      role: "DiscoverSTEM Student",
      image: "/Images/patents/students/manish-rangan.png",
      tag: "Innovator",
    },
    {
      id: 9,
      name: "Carcyn Coleman",
      role: "DiscoverSTEM Student",
      image: "/Images/patents/students/carcyn-coleman.png",
      tag: "Innovator",
    },
    {
      id: 10,
      name: "Ridah Shanavas",
      role: "DiscoverSTEM Student",
      image: "/Images/patents/students/ridah-shanavas.png",
      tag: "Innovator",
    },
    {
      id: 11,
      name: "Rishabh Siddamshetty",
      role: "DiscoverSTEM Student",
      image: "/Images/patents/students/rishabh-siddamshetty.png",
      tag: "Innovator",
    },
    {
      id: 12,
      name: "Isha Agrawal",
      role: "DiscoverSTEM Student",
      image: "/Images/patents/students/isha-agrawal.png",
      tag: "Innovator",
    },
    {
      id: 13,
      name: "Kayla Goodrich",
      role: "DiscoverSTEM Student",
      image: "/Images/patents/students/kayla-goodrich.png",
      tag: "Innovator",
    },
    {
      id: 14,
      name: "Azal Amer",
      role: "DiscoverSTEM Student",
      image: "/Images/patents/students/azal-amer.png",
      tag: "Innovator",
    },
    {
      id: 15,
      name: "Bilal Ali Shah",
      role: "DiscoverSTEM Student",
      image: "/Images/patents/students/bilal-ali-shah.png",
      tag: "Innovator",
    },
    {
      id: 16,
      name: "Maya Kusumakar",
      role: "DiscoverSTEM Student",
      image: "/Images/patents/students/maya-kusumakar.png",
      tag: "Innovator",
    },
    {
      id: 17,
      name: "Inaya Sheikh",
      role: "DiscoverSTEM Student",
      image: "/Images/patents/students/inaya-sheikh.png",
      tag: "Innovator",
    },
    {
      id: 18,
      name: "Ben Stafford",
      role: "DiscoverSTEM Student",
      image: "/Images/patents/students/ben-stafford.png",
      tag: "Innovator",
    },
    {
      id: 19,
      name: "Kenny DeCay",
      role: "DiscoverSTEM Student",
      image: "/Images/patents/students/kenny-decay.png",
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
      image: "/Images/gallery/gallery-1.png",
      alt: "Laboratory glassware",
      variant: "large",
    },
    {
      id: 2,
      image: "/Images/gallery/gallery-2.png",
      alt: "Students meet-up group",
      variant: "small",
    },
    {
      id: 3,
      image: "/Images/gallery/gallery-3.png",
      alt: "Student in science goggles",
      variant: "small",
    },
    {
      id: 4,
      image: "/Images/gallery/gallery-4.png",
      alt: "Computer research screen",
      variant: "small",
    },
    {
      id: 5,
      image: "/Images/gallery/gallery-5.png",
      alt: "Students working at table",
      variant: "small",
    },
    {
      id: 6,
      image: "/Images/gallery/gallery-6.png",
      alt: "Programming and research",
      variant: "wide",
    },
    {
      id: 7,
      image: "/Images/gallery/gallery-7.png",
      alt: "Lecture room",
      variant: "small",
    },
    {
      id: 8,
      image: "/Images/gallery/gallery-8.png",
      alt: "Students with laptops",
      variant: "small",
    },
    {
      id: 9,
      image: "/Images/gallery/gallery-9.png",
      alt: "AI innovation note",
      variant: "last",
    },
  ],
};

export const nobelLaureatesVideoData: VideoSectionData = {
  title: "Where Young Minds Met Global Scientific Greats",
  subtitle: "Where Young Minds Met Global Scientific Greats",
  videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
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