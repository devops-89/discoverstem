import type {
  AwardCard,
  BlogCardType,
  Contact,
  FeatureCard,
  Logo,
  mediaCenter,
  NavItem,
  PatentCard,
  ProgramCard,
  RecentPostType,
  Research,
  ResearchLab,
  SpotlightCard,
  Startup,
  Step,
  Student
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
      "DiscoverSTEM nurtures a child's inborn capability to think outside the box and solve real-world challenges through critical thinking.",
    borderColor: "#7b53a1",
    iconBg: "rgba(123,83,161,0.18)",
  },
  {
    title: "Inspiring Innovation",
    description:
      "Children learn the nuances of innovation while parents are mentored to build an innovation-first culture at home.",
    borderColor: "#ee4823",
    iconBg: "rgba(238,72,35,0.16)",
  },
  {
    title: "Launching Startups",
    description:
      "Students receive complete support to transform ideas into market-ready startups, from validation to company formation.",
    borderColor: "#f9a51e",
    iconBg: "rgba(249,165,30,0.2)",
  },
  {
    title: "Expert Mentors",
    description:
      "Exclusive access to innovation facilitators and domain experts who sharpen logic, analysis, and invention skills.",
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
    "Faizan is an aerospace scientist and inventor of the GRIPS system, a real-time runway safety technology that prevents incursions, excursions, and detects debris. He has extensive experience in aerospace, defense, and mission-critical system development. His collision-prediction algorithm is highly appreciated by experts from NASA, the Pentagon-AMRDEC, and the US Air Force. \nHe is frequently consulted by global R&D teams for his expertise in innovation, aerospace design, and aviation safety.",
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
    "'Business Leaders of Tomorrow Award-2011' by Economic Times and Ernst & Young (Top 5 in India among 50,000 nominees, evaluated by the Jury panel which includes Innovation Advisor to the Prime Minister of India),",
    
    "'Airline Industry Innovation Award-2013' (Winner),",
    
    "'IHS Jane's Air Traffic Management Award-2014' (shortlisted among the Top 4 runway safety technologies developed globally) by World Air Traffic Management Congress.",
    
    "Listed among '8 lesser known Biharis who Played a Key Role in Shaping Modern India'",
  ],

  right: [
    "Freedoms Foundation's National Award; the 'George Washington Honor Medal (Education)-2020'.",
    
    "He was also awarded 'Innovative Teacher of the Year-2017' by Conrad Foundation at NASA Kennedy Space Center for mentoring youths for Innovation and Creativity.",
    
    "Faizan also received a 'Teacher's Certificate of Recognition' from the National Space Society at International Space Development Conference 2018 in Los Angeles for mentoring over 25 award-winning students at NASA Ames Space Settlement International Challenge.",
    
    "The Grand Lodge of Texas awarded him with the 'Apollo Science Teaching Award 2017' (an award given in honor of NASA's Apollo Mission).",
  ],
}
};

export const ContactUs:Contact ={
  title:"Contact Us",
  description:"Get started on your journey to become an innovator, researcher or entrepreneur.",
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
      text: "Get inspired by our students achievements—patents, global awards, published research, and admissions to top universities through their DiscoverSTEM experience.",
    },
    {
      title: "Enrollment",
      text: "Get clarity on how a student can join DiscoverSTEM – from application steps and eligibility to selection steps.\nThe information session is followed by the Tour of the Innovation & Research Labs.",
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
  description1: "Every year, we meet exceptional High School students—those with near-perfect GPAs, top-tier SAT/ACT scores, and a full roster of AP courses - who realize too late that academic excellence alone isn't enough to stand out in elite college admissions. They missed the opportunity to join our 4-year Ivy League Mentorship (ILM) program, where students build startups, file patents, publish research, and cultivate a profile that truly sets them apart.",
  description2:"To bridge that gap, we created the Summer Impact Program (SIP) – an accelerated, high-intensity version of ILM designed to deliver the same prestigious outcomes in 8 transformative weeks. SIP empowers High School students to become innovators, entrepreneurs, and researchers -fast. It's the perfect opportunity for students who are running out of time but still want to craft a college application that demands attention. Time is running out. This summer could change everything.",
  statsTitle: "ILM Success Stories: First Batch Results (2025)",

  statsDescription:
    "The first batch of DiscoverSTEM's Ivy League Mentorship (ILM 2021-25) program has achieved extraordinary success in their college admissions journey. These students have secured acceptances at some of the most prestigious universities in the United States. The exceptional outcome validates our unique approach to nurturing future innovators, researchers, entrepreneurs and leaders.",

  points: [
    "83% ILM Students who graduated high school in 2025 accepted to the Top 10 US Schools",
    "94% ILM Students who graduated high school in 2025 accepted to the Top 21 US Schools",
  ],
};

// data/programDetailsData.ts

export const programDetailsData = {
  title: "Program Details",
  description:
    "Summer Impact Program (SIP) is a highly selective summer program. It provides an accelerated pathway turning high school students into innovators, entrepreneurs and researchers of tomorrow. We offer three high impact learning tracks. We mentor you with the goal that you achieve unparalleled and meaningful outcomes by the end of the program.",

  cards: [
    {
      title: "Entrepreneurs",
      image: "/Images/Programs/sip/entrepreneur.jpg",
      description:
        "Commercialize great ideas that can positively impact the world. Launch your start up. Who knows, by the time you finish college, you could be leading the next unicorn.",
      outcome:
        "Startup incorporated, Seed funding arranged, product R&D completed, prototyping/MVP initiated, website developed and social media presence set up.",
      footer:
        "Startup launched & credentialed by 15th October, 2025.",
    },
    {
      title: "Inventors",
      image: "/Images/programs/sip/inventors.jpg",
      description:
        "Commercialize great ideas that can positively impact the world. Launch your start up. Who knows, by the time you finish college, you could be leading the next unicorn.",
      outcome:
        "Startup incorporated, Seed funding arranged, product R&D completed, prototyping/MVP initiated, website developed and social media presence set up.",
      footer:
        "Startup launched & credentialed by 15th October, 2025.",
    },
    {
      title: "Researchers",
      image: "/Images/programs/sip/researchers.jpg",
      description:
        "Commercialize great ideas that can positively impact the world. Launch your start up. Who knows, by the time you finish college, you could be leading the next unicorn.",
      outcome:
        "Startup incorporated, Seed funding arranged, product R&D completed, prototyping/MVP initiated, website developed and social media presence set up.",
      footer:
        "Startup launched & credentialed by 15th October, 2025.",
    },
  ],
};

export const logosData:Logo[] = [
  {  image: "/Images/Programs/sip/logo/harvard.png" },
  { image: "/Images/Programs/sip/logo/stanford.png" },
  { image: "/Images/Programs/sip/logo/princeton.png" },
  { image: "/Images/Programs/sip/logo/mit.png" },
  { image: "/Images/Programs/sip/logo/cornell.png" },
  { image: "/Images/Programs/sip/logo/nyu.png" },
  { image: "/Images/Programs/sip/logo/johns.png" },
  { image: "/Images/Programs/sip/logo/rice.png" },
  { image: "/Images/Programs/sip/logo/berkeley.png" },
  {  image: "/Images/Programs/sip/logo/georgia.png" },
  {  image: "/Images/Programs/sip/logo/brown.png" },
  {  image: "/Images/Programs/sip/logo/penn.png" },
  {  image: "/Images/Programs/sip/logo/caltech.png" },
  {  image: "/Images/Programs/sip/logo/ucla.png" },
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
      "Unique peer-to-peer feedback system to predict mental, emotional and behavioral wellness",
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
  {
    step: "Step - 01",
    title: "Register",
    description:
      "Request a free information session through the CONTACT US page.",
  },
  {
    step: "Step - 02",
    title: "Information Session",
    description:
      "We’ll schedule an information and Q&A session where we explain the program and answer your questions.",
  },
  {
    step: "Step - 03",
    title: "Application",
    description:
      "If you meet our eligibility criteria, we will send the Application Form to begin the process.",
  },
  {
    step: "Step - 04",
    title: "Selection Test",
    description:
      "You will be invited to take a selection test designed to evaluate your aptitude and potential.",
  },
  {
    step: "Step - 05",
    title: "Final Enrollment",
    description:
      "Selected students will receive an offer and can complete enrollment to begin their journey.",
  },
];


export const expertsData = [
  {
    image: "/Images/AboutUs/PanelExperts/Anthony-Gregg.jpg",
    category: "Genomics, Genetics & Biotechnology",
    name: "Dr. Anthony Gregg",
    degree: "MD, MBA",
    org: "@American College of Obstetricians",
  },
  {
    image: "/Images/AboutUs/PanelExperts/peterGuida.jpeg",
    category: "Neuroscience & Cognitive Psychology",
    name: "Dr. Emily Carter",
    degree: "PhD",
    org: "@Harvard University",
  },
  {
    image: "/Images/AboutUs/PanelExperts/BabarM.jpg",
    category: "Artificial Intelligence & Machine Learning",
    name: "Dr. Liam Chen",
    degree: "MSc",
    org: "@Stanford University",
  },
  {
    image: "/Images/AboutUs/PanelExperts/Sanjay.jpg",
    category: "Environmental Science & Sustainability",
    name: "Dr. Sarah Johnson",
    degree: "PhD",
    org: "@University of California",
  },
  {
    image: "/Images/AboutUs/PanelExperts/shahin.jpg",
    category: "Biomedical Engineering & Robotics",
    name: "Dr. Jason Lee",
    degree: "MEng",
    org: "@MIT",
  },
  {
    image: "/Images/AboutUs/PanelExperts/Anthony-Gregg.jpg",
    category: "Genomics, Genetics & Biotechnology",
    name: "Dr. Anthony Gregg",
    degree: "MD, MBA",
    org: "@American College of Obstetricians",
  },
  {
    image: "/Images/AboutUs/PanelExperts/peterGuida.jpeg",
    category: "Neuroscience & Cognitive Psychology",
    name: "Dr. Emily Carter",
    degree: "PhD",
    org: "@Harvard University",
  },
  {
    image: "/Images/AboutUs/PanelExperts/BabarM.jpg",
    category: "Artificial Intelligence & Machine Learning",
    name: "Dr. Liam Chen",
    degree: "MSc",
    org: "@Stanford University",
  },
  {
    image: "/Images/AboutUs/PanelExperts/Sanjay.jpg",
    category: "Environmental Science & Sustainability",
    name: "Dr. Sarah Johnson",
    degree: "PhD",
    org: "@University of California",
  },
  {
    image: "/Images/AboutUs/PanelExperts/shahin.jpg",
    category: "Biomedical Engineering & Robotics",
    name: "Dr. Jason Lee",
    degree: "MEng",
    org: "@MIT",
  },
  {
    image: "/Images/AboutUs/PanelExperts/Anthony-Gregg.jpg",
    category: "Genomics, Genetics & Biotechnology",
    name: "Dr. Anthony Gregg",
    degree: "MD, MBA",
    org: "@American College of Obstetricians",
  },
  {
    image: "/Images/AboutUs/PanelExperts/peterGuida.jpeg",
    category: "Neuroscience & Cognitive Psychology",
    name: "Dr. Emily Carter",
    degree: "PhD",
    org: "@Harvard University",
  },
  {
    image: "/Images/AboutUs/PanelExperts/BabarM.jpg",
    category: "Artificial Intelligence & Machine Learning",
    name: "Dr. Liam Chen",
    degree: "MSc",
    org: "@Stanford University",
  },
  {
    image: "/Images/AboutUs/PanelExperts/Sanjay.jpg",
    category: "Environmental Science & Sustainability",
    name: "Dr. Sarah Johnson",
    degree: "PhD",
    org: "@University of California",
  },
  {
    image: "/Images/AboutUs/PanelExperts/shahin.jpg",
    category: "Biomedical Engineering & Robotics",
    name: "Dr. Jason Lee",
    degree: "MEng",
    org: "@MIT",
  },
];

export const advisoryData = [
  {
    title: "ADVISORY & LEADERSHIP",
    name: "Col. Richard Graham",
    role: "Sr. STEM Strategic Innovation Advisor & Aviation Consultant",
    description:
      `An 25+ strategic reconnaissance pilot, author, and FAA safety representative, Col. Graham received his USAF ROTC
      commission, became a T-37 instructor and flight examiner, and
      was selected for the prestigious U-2 program in 1974.`,
    image: "/Images/AboutUs/richard.jpg",
    reverse: false,
  },
  {
    title: "ADVISORY & TECH",
    name: "Col. Richard Graham",
    role: "Sr. STEM Strategic Innovation Advisor & Aviation Consultant",
    description:
      `An 25+ strategic reconnaissance pilot, author, and FAA safety representative, Col. Graham received his USAF ROTC
      commission, became a T-37 instructor and flight examiner, and
      was selected for the prestigious U-2 program in 1974.`,
    image: "/Images/AboutUs/richard.jpg",
    reverse: true,
  },
  {
    title: "AEROSPACE & FUTURE",
    name: "Col. Richard Graham",
    role: "Sr. STEM Strategic Innovation Advisor & Aviation Consultant",
    description:
      `An 25+ strategic reconnaissance pilot, author, and FAA safety representative, Col. Graham received his USAF ROTC
      commission, became a T-37 instructor and flight examiner, and
      was selected for the prestigious U-2 program in 1974.`,
    image: "/Images/AboutUs/richard.jpg",
    reverse: false,
  },
    {
    title: "ADVISORY & TECH",
    name: "Col. Richard Graham",
    role: "Sr. STEM Strategic Innovation Advisor & Aviation Consultant",
    description:
      `An 25+ strategic reconnaissance pilot, author, and FAA safety representative, Col. Graham received his USAF ROTC
      commission, became a T-37 instructor and flight examiner, and
      was selected for the prestigious U-2 program in 1974.`,
    image: "/Images/AboutUs/richard.jpg",
    reverse: true,
  },
];

export const stemEducationData = {
  title: "STEM & Innovation Education – FREE",
  description:
    "We take great pride in our vision of making a positive impact in students’ lives. At DiscoverSTEM, we are keen to empower students with distinct capabilities and help them capitalize on their talent and deliver breakthrough innovations. Aligning with our commitment, we extend our support to students who face financial constraints.",

  points: [
    "We offer 10% to 100% scholarships to students whose parent’s combined annual income is less than $65,000.",
    "Every year up to 25% of students are offered scholarships to pursue their innovation spirit.",
    "We also take into account any special circumstances of parents & students and try to support them with as much assistance as we can.",
    "In honor of their service and contribution to our communities, we ALWAYS offer 100% scholarship to the children of current & ex-Police, and US Armed Forces Officers, irrespective of parent’s family income, with a cap of 3% of our total intake in each program.",
  ],

  image: "/Images/AboutUs/StemFoundation.png", // replace with your image
};