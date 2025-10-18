export const TruestedCompanies: { imgSrc: string; heading: string }[] = [
  {
    imgSrc: "/images/companies/airbnb.svg",
    heading: "Accounting and Bookkeeping",
  },
  {
    imgSrc: "/images/companies/fedex.svg",
    heading: "Auditing and Assurance",
  },
  {
    imgSrc: "/images/companies/google.svg",
    heading: "Tax and Consultancy",
  },
  {
    imgSrc: "/images/companies/hubspot.svg",
    heading: "Company Secretary",
  },
  {
    imgSrc: "/images/companies/microsoft.svg",
    heading: "Human Resources Services",
  },
  {
    imgSrc: "/images/companies/walmart.svg",
    heading: "Physical Verification of Inventory",
  },
  {
    imgSrc: "/images/companies/airbnb.svg",
    heading: "Physical Verification of Fixed Assets",
  },
  {
    imgSrc: "/images/companies/fedex.svg",
    heading: "Other Services",
  },
];


export const courseData: {
  heading: string;
  imgSrc: string;
  name: string;
  students: number;
  classes: number;
  price: number;
  rating: number;
}[] = [
    {
      heading: 'Full stack modern javascript',
      name: "Colt stelle",
      imgSrc: '/images/courses/courseone.png',
      students: 150,
      classes: 12,
      price: 20,
      rating: 4.4,
    },
    {
      heading: 'Design system with React programme',
      name: "Colt stelle",
      imgSrc: '/images/courses/coursetwo.png',
      students: 130,
      classes: 12,
      price: 20,
      rating: 4.5,
    },
    {
      heading: 'Design banner with Figma',
      name: "Colt stelle",
      imgSrc: '/images/courses/coursethree.png',
      students: 120,
      classes: 12,
      price: 20,
      rating: 5,
    },
    {
      heading: 'We Launch Delia Webflow this Week!',
      name: "Colt stelle",
      imgSrc: '/images/courses/courseone.png',
      students: 150,
      classes: 12,
      price: 20,
      rating: 5,
    },
    {
      heading: 'We Launch Delia Webflow this Week!',
      name: "Colt stelle",
      imgSrc: '/images/courses/coursetwo.png',
      students: 150,
      classes: 12,
      price: 20,
      rating: 5,
    },
    {
      heading: 'We Launch Delia Webflow this Week!',
      name: "Colt stelle",
      imgSrc: '/images/courses/coursethree.png',
      students: 150,
      classes: 12,
      price: 20,
      rating: 4.2,
    },
  ]

// export const MentorData: { profession: string; name: string; imgSrc: string }[] = [
//   {
//     profession: 'Senior Accountat',
//     name: 'Kosala Aiya',
//     imgSrc: '/images/mentor/user3.png',
//   },
// ]


export const MentorData: {
  profession?: string;
  name: string;
  imgSrc: string;
  age: string;
  education: string;
  experience: string;
  position: string;
  company: string;
  workingPeriod: string;
  specialization: string;
  description: string[];
}[] = [
  {
    imgSrc: "/images/mentor/user3.png",
    name: "Kosala Nuwan",
    age: "34",
    education: "ACA, SAT, BSc",
    experience: "10+ years",
    position: "Managing Director",
    company: "Probity Accountants",
    workingPeriod: "2013 – Present",
    specialization: "Accounting, Auditing, Taxation, Project Reports",
    description: [
      "Kosala is the Founder and Managing Director of Probity Accountants.",
      "He has the following qualifications:",
      "• Associate Member of Institute of Chartered Accountants of Sri Lanka",
      "• Senior Member of Association of Accounting Technicians in Sri Lanka",
      "• Graduate of University of Sri Jayewardenepura – B.Sc. Public Management Special",
      "Kosala has over 10 years of accounting and auditing experience in various industries including:",
      "• Manufacturing (Steel, Liquor, Rubber products, Poultry, and others)",
      "• Wholesale and Retail",
      "• Construction",
      "• Service",
      "• Real Estate",
      "• Logistics and Shipping",
      "• Financial Services",
      "• Hotel and Restaurants",
      "• Non-Profit Organizations",
      "In addition, he has extensive experience and knowledge in the Taxation of Sri Lanka including direct and indirect tax compliances and tax advisory.",
      "He has specialized in Project Report writing.",
      "He gained experience working for top ten and Big 4 audit firms and has overseas experience working in UAE-Dubai as a financial auditor."
    ]
  }
];



export const TestimonialData: { profession: string; comment: string; imgSrc: string; name: string; rating: number; }[] = [
  {
    name: "Kosala Aiya",
    profession: 'Accountant',
    comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
    imgSrc: '/images/testimonial/user.svg',
    rating: 5
  },
  
]
export interface ServiceHome {
  imgSrc: string;
  title: string;
  description: string;
}

export const serviceDataHome:ServiceHome[] = [
  {
    imgSrc: "/images/services/Accounting and Bookkeeping.jpg",
    title: "Accounting and Bookkeeping",
    description:
      "We record daily business transactions using accounting software to provide financial statements...",
  },
  {
    imgSrc: "/images/services/Auditing and Assurance.jpg",
    title: "Auditing and Assurance",
    description:
      "We provide independent opinions on financial statements of your business...",
  },
  {
    imgSrc: "/images/services/Tax and Consultancy.jpg",
    title: "Tax and Consultancy",
    description:
      "We advise on tax planning to maximize profits legally...",
  },
  {
    imgSrc: "/images/services/Company Secretary.jpg",
    title: "Company Secretary",
    description:
      "We assist your company in complying with the Companies Act of Sri Lanka...",
  },
  {
    imgSrc: "/images/services/Human Resources Services.jpg",
    title: "Human Resources Services",
    description:
      "We help maintain employee records, manage payroll...",
  },
  {
    imgSrc: "/images/services/Physical Verification of Inventory.jpg",
    title: "Physical Verification of Inventory",
    description:
      "We verify stock records to ensure accuracy and reliability...",
  },
  {
    imgSrc: "/images/services/Physical Verification of Fixed Assets.jpg",
    title: "Physical Verification of Fixed Assets",
    description:
      "Our team verifies the existence and condition of assets...",
  },
];

export interface Service {
  imgSrc: string;
  title: string;
  slug: string;
  description: string;
  details: string[];
}

export const serviceData: Service[] = [
  {
    imgSrc: "/images/services/Accounting and Bookkeeping.jpg",
    title: "Accounting and Bookkeeping",
    slug: "accounting-and-bookkeeping",
    description:
      "We help you record daily financial transactions accurately, providing clear insights into your business performance.",
    details: [
      "It is essential to record day-to-day transactions in a business so that owners can understand its progress.",
      "We assist you in recording financial transactions using accounting software and preparing the statement of profit and loss, statement of financial position, and statement of cash flows.",
      "Accurate bookkeeping provides:",
      "• Relevant, timely and informative financial data",
      "• Guidance for the management of cash flows",
      "• Creation of a sound internal control system",
    ],
  },
  {
    imgSrc: "/images/services/Auditing and Assurance.jpg",
    title: "Auditing and Assurance",
    slug: "auditing-and-assurance",
    description:
      "We provide independent opinions on financial statements to build stakeholder confidence and ensure compliance.",
    details: [
      "If you require third-party assurance for your business records and functions, we provide independent opinions on your financial statements.",
      "This strengthens stakeholder confidence and ensures accountability.",
      "We conduct different categories of audits according to your needs, including:",
      "• Financial statement auditing",
      "• Special purpose auditing",
      "• Internal auditing",
    ],
  },
  {
    imgSrc: "/images/services/Tax and Consultancy.jpg",
    title: "Tax and Consultancy",
    slug: "tax-and-consultancy",
    description:
      "We help you plan and manage taxes legally to maximize profits and reduce compliance risks.",
    details: [
      "Businesses need to pay what they owe—no more, no less.",
      "We advise you on planning and managing all relevant taxes to maximize your profits legally.",
      "Our team comprises well-experienced and qualified professionals in Accounting and Taxation.",
      "This combination of knowledge allows us to create maximum value for your entity.",
    ],
  },
  {
    imgSrc: "/images/services/Company Secretary.jpg",
    title: "Company Secretary",
    slug: "company-secretary",
    description:
      "We ensure your company complies with Sri Lankan corporate laws and manages all secretarial documentation properly.",
    details: [
      "When running a company, it’s important to comply with the Companies Act of Sri Lanka.",
      "We help by carrying out the following company secretarial duties:",
      "• Company formation",
      "• Filing of statutory forms",
      "• Preparation of all necessary documents (minutes, resolutions, etc.)",
      "• Maintenance of statutory records (share register, minute book, etc.)",
      "• General advice on company law in Sri Lanka",
    ],
  },
  {
    imgSrc: "/images/services/Human Resources Services.jpg",
    title: "Human Resources Services",
    slug: "human-resources-services",
    description:
      "We support your HR and payroll processes while ensuring compliance with Sri Lankan labour laws.",
    details: [
      "Human resources are both the most important and highest expense for a business.",
      "We assist you in maintaining employee records, managing payroll, and handling statutory submissions.",
      "Our services include:",
      "• Preparing appointment letters",
      "• Registering employees for EPF and ETF",
      "• Submitting monthly EPF and ETF returns and advising on timely payments",
      "• Preparing monthly salary statements",
      "• Advising clients on labour laws and regulations in Sri Lanka",
      "• Assisting with all other labour-related matters as needed",
    ],
  },
  {
    imgSrc: "/images/services/Physical Verification of Inventory.jpg",
    title: "Physical Verification of Inventory",
    slug: "physical-verification-of-inventory",
    description:
      "We conduct independent inventory verification to ensure accuracy and reliability of stock records.",
    details: [
      "We provide independent physical verification of inventory to ensure accuracy and reliability in your financial records.",
      "Our team performs on-site stock counts, reconciles physical quantities with book records, and identifies discrepancies.",
      "This service helps management maintain transparency, detect losses or inefficiencies, and ensure compliance with audit and regulatory requirements.",
    ],
  },
  {
    imgSrc: "/images/services/Physical Verification of Fixed Assets.jpg",
    title: "Physical Verification of Fixed Assets",
    slug: "physical-verification-of-fixed-assets",
    description:
      "We verify the physical existence, condition, and records of your fixed assets to strengthen asset control and reporting.",
    details: [
      "We offer comprehensive physical verification of fixed assets to ensure accurate asset records and safeguard company resources.",
      "Our team verifies the existence, condition, and location of assets, reconciling them with the fixed asset register.",
      "This service enhances:",
      "• Asset management",
      "• Audit compliance",
      "• Reliable financial reporting",
    ],
  },

];


