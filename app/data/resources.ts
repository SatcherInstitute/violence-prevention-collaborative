export type ResourceCategory =
  | "Data & Research"
  | "Community Programs"
  | "Education & Training"
  | "Policy & Advocacy"
  | "Health Services"
  | "Crisis Intervention";

export const RESOURCE_CATEGORIES: ResourceCategory[] = [
  "Data & Research",
  "Community Programs",
  "Education & Training",
  "Policy & Advocacy",
  "Health Services",
  "Crisis Intervention",
];

export interface Resource {
  id: string;
  title: string;
  org?: string;
  url: string;
  description: string;
  thumbnail?: string;
  category: ResourceCategory;
  tags: string[];
}

export const resources: Resource[] = [
  // Data & Research
  {
    id: "health-equity-tracker",
    title: "Health Equity Tracker",
    org: "Satcher Institute at Morehouse School of Medicine",
    url: "https://healthequitytracker.org",
    description:
      "Free, interactive data platform covering a broad range of health equity topics, including gun violence, HIV, maternal mortality, COVID-19, diabetes, and mental health, alongside determinants of health such as poverty, uninsurance, housing instability, food insecurity, and air quality. Searchable by race, age, geography, and outcome type across Georgia and the U.S.",
    category: "Data & Research",
    tags: ["data", "atlanta", "national", "youth", "free"],
  },
  {
    id: "cdc-wisqars",
    title: "WISQARS — Web-based Injury Statistics Query and Reporting System",
    org: "Centers for Disease Control and Prevention",
    url: "https://www.cdc.gov/injury/wisqars/",
    description:
      "National database of fatal and nonfatal injury data, including firearm-related deaths and injuries. Allows custom queries by state, age group, race, and intent.",
    category: "Data & Research",
    tags: ["data", "national", "research"],
  },
  {
    id: "gdph-violence-data",
    title: "Georgia Violent Death Reporting System",
    org: "Georgia Department of Public Health",
    url: "https://dph.georgia.gov/",
    description:
      "State-level surveillance data on violent deaths in Georgia, including firearm homicide, suicide, and unintentional injury. Used to identify trends and inform prevention strategies.",
    category: "Data & Research",
    tags: ["data", "atlanta", "research"],
  },

  // Community Programs
  {
    id: "100bm-anti-gun-violence",
    title: "Anti-Gun Violence Campaign",
    org: "100 Black Men of Atlanta, Inc.",
    url: "https://100blackmen-atlanta.org/what-we-do/initiatives-campaigns/anti-gun-violence-campaign-faqs.html",
    description:
      "Community-led campaign addressing gun violence through mentoring, youth engagement, and civic action. Bridges public health strategy with on-the-ground outreach in communities most affected by violence.",
    category: "Community Programs",
    tags: ["community", "youth", "atlanta"],
  },
  {
    id: "cure-violence",
    title: "Cure Violence Global",
    org: "Cure Violence",
    url: "https://cvg.org",
    description:
      "Evidence-based community intervention model that interrupts cycles of violence using credible messengers and outreach workers embedded in high-violence neighborhoods.",
    category: "Community Programs",
    tags: ["community", "crisis-intervention", "national"],
  },

  // Education & Training
  {
    id: "nonviolence365",
    title: "Nonviolence365® Training",
    org: "The King Center",
    url: "https://thekingcenter.org/programs/nonviolence365/",
    description:
      "Six-week curriculum rooted in Dr. King's philosophy of nonviolence, providing practical tools for conflict reconciliation, community healing, and youth empowerment.",
    category: "Education & Training",
    tags: ["training", "youth", "community", "atlanta"],
  },
  {
    id: "johns-hopkins-vpr",
    title: "Violence Prevention Research Program",
    org: "Johns Hopkins Bloomberg School of Public Health",
    url: "https://www.jhsph.edu/research/centers-and-institutes/johns-hopkins-center-for-gun-violence-solutions/",
    description:
      "Leading academic center for evidence-based gun violence prevention research, policy analysis, and training for public health professionals and community practitioners.",
    category: "Education & Training",
    tags: ["research", "training", "national", "policy"],
  },

  // Policy & Advocacy
  {
    id: "everytown-research",
    title: "Everytown Research & Policy",
    org: "Everytown for Gun Safety",
    url: "https://everytownresearch.org",
    description:
      "Rigorous, independent research on gun violence in America, covering policy effectiveness, state law comparisons, and community-level impact data to support advocacy and legislation.",
    category: "Policy & Advocacy",
    tags: ["policy", "research", "national"],
  },
  {
    id: "ga-coalition-gun-violence",
    title: "Georgia Coalition Against Gun Violence",
    org: "GCAGV",
    url: "https://www.gcagv.org",
    description:
      "Statewide advocacy organization working to reduce gun violence through education, community engagement, and support for evidence-based legislation in Georgia.",
    category: "Policy & Advocacy",
    tags: ["policy", "atlanta", "community"],
  },

  // Health Services
  {
    id: "grady-trauma",
    title: "Grady Hospital Trauma Center",
    org: "Grady Health System",
    url: "https://www.gradyhealth.org/services/trauma/",
    description:
      "Level I trauma center serving Metro Atlanta, including the Grady Trauma Recovery Center which provides mental health support and violence intervention for gunshot survivors.",
    category: "Health Services",
    tags: ["health", "crisis-intervention", "atlanta"],
  },

  // Crisis Intervention
  {
    id: "988-lifeline",
    title: "988 Suicide & Crisis Lifeline",
    org: "SAMHSA",
    url: "https://988lifeline.org",
    description:
      "24/7 crisis support by call, text, or chat. Connects individuals in mental health crises, including those at risk of firearm self-harm, to local crisis centers and counselors.",
    category: "Crisis Intervention",
    tags: ["crisis-intervention", "health", "national"],
  },
  {
    id: "georgia-crisis",
    title: "Georgia Crisis & Access Line",
    org: "GCAL / Behavioral Health Link",
    url: "https://www.bhlink.org",
    description:
      "Statewide 24/7 crisis line (1-800-715-4225) connecting Georgians to mental health crisis care, mobile crisis teams, and emergency psychiatric services.",
    category: "Crisis Intervention",
    tags: ["crisis-intervention", "health", "atlanta"],
  },
];
