export interface EventSection {
  heading: string;
  body?: string;
  bullets?: string[];
}

export interface EventQuote {
  text: string;
  attribution: string;
}

export interface VPCEvent {
  id: string;
  title: string;
  date: string; // ISO: YYYY-MM-DD
  location?: string;
  summary: string;
  image?: { src: string; srcSet?: string; sizes?: string; alt: string };
  sections?: EventSection[];
  quotes?: EventQuote[];
}

export const events: VPCEvent[] = [
  {
    id: "2027-symposium",
    title: "2027 Violence Prevention Symposium",
    date: "2027-03-04",
    summary: "Details and location to be announced.",
  },
  {
    id: "2026-pre-symposium",
    title: "2026 Violence Prevention Pre-Symposium",
    date: "2026-04-16",
    location: "Atlanta, GA",
    summary:
      "An invite-only roundtable discussion bringing together elected officials, law enforcement, public health experts, and civil rights organizations to move from conversation to concrete action plans on gun violence.",
    image: {
      src: "/images/IMG_3631.jpg",
      srcSet:
        "/images/IMG_3631-p-500.jpg 500w, /images/IMG_3631-p-800.jpg 800w, /images/IMG_3631.jpg 3022w",
      sizes: "(max-width: 3022px) 100vw, 3022px",
      alt: "2026 Violence Prevention Pre-Symposium",
    },
    sections: [
      {
        heading: "A Multi-Disciplinary Call to Action",
        body: "The gathering brought together a diverse coalition of elected officials, law enforcement, public health experts, and civil rights organizations. The primary goal was to move beyond discussion and toward the creation of concrete action plans that address the social determinants of health and the root causes of violent deaths.",
      },
      {
        heading: "Key Discussions and Findings",
        body: "The agenda focused on a “data-to-action” pipeline, utilizing advanced tools like the Health Equity Tracker to analyze intersectional outcomes, including youth-involved deaths and homicides affecting Black men.",
        bullets: [
          "The Story Behind the Numbers: Rana Bayakly, MPH (Georgia Dept. of Public Health), presented current trends in lethal violence, focusing on conflict and mental health narratives within ARC counties.",
          "Veteran Suicide in Georgia: Dr. Brian A. Moore shared critical research regarding mental and physical health solutions for Georgia’s veteran population.",
          "Evidence-Based Interventions: Dr. Alex Crosby led sessions on behavioral changes related to firearms and the importance of regional collaboration.",
          "The Power of Nonviolence: Ciera Bobo, a certified Nonviolence365® trainer from The King Center, provided practical insights into conflict reconciliation and youth empowerment.",
        ],
      },
      {
        heading: "Collaborative Strategies",
        body: "The pre-symposium served as a strategic planning session for a larger community event. Participants explored innovative strategies including:",
        bullets: [
          "Increasing mental health awareness and suicide prevention resources.",
          "Addressing social determinants such as housing, transportation, and food insecurity in the context of community safety.",
          "Utilizing media and awareness campaigns—similar to those used for tobacco cessation—to shift behaviors surrounding gun violence.",
        ],
      },
    ],
    quotes: [
      {
        text: "“Advancing health equity means addressing the conditions that impact community safety and well-being… we are proud to create solutions that support healthier, safer communities.”",
        attribution: "Sandra Harris-Hooker, PhD, Morehouse School of Medicine",
      },
      {
        text: "“Violence is not only a public safety issue. It is also a moral issue, a public health issue, and a human dignity issue.”",
        attribution: "Dr. Bernice A. King, CEO of The King Center",
      },
    ],
  },
  {
    id: "2024-pre-symposium",
    title: "2024 Violence Prevention Pre-Symposium",
    date: "2024-09-18",
    location: "Morehouse School of Medicine, Atlanta, GA",
    summary:
      "An invitation-only roundtable bringing together community leaders, public health experts, elected officials, and law enforcement to review lethal violence data and develop collaborative action plans with measurable outcomes.",
    sections: [
      {
        heading: "Key Objectives",
        bullets: [
          "Review data tools on lethal violence trends, including new Health Equity Tracker topics on gun-involved deaths.",
          "Identify priority concerns across homicide, suicide, youth deaths, and intersectional outcomes.",
          "Explore innovative prevention strategies including mental health awareness and suicide prevention.",
          "Develop collaborative action plans with measurable outcomes.",
        ],
      },
    ],
    quotes: [
      {
        text: "“Gun violence is a public health issue and remains a leading cause of death among U.S. adolescents, disproportionately affecting Black males.”",
        attribution: "Sandra Harris-Hooker, PhD, Senior Vice President for External Affairs and Innovation, Morehouse School of Medicine",
      },
      {
        text: "“The anti-gun violence committee serves as a vital force for change, uniting voices to advocate for safer communities.”",
        attribution: "Sidney Barron, Chairman, 100 Black Men of Atlanta, Inc.",
      },
    ],
  },
  {
    id: "2025-symposium",
    title: "2025 Violence Prevention Symposium",
    date: "2025-03-31",
    location: "Emory Miller-Ward Alumni House, Atlanta, GA",
    summary:
      "A full-day convening bringing together science, public health, and community leaders to examine gun violence as a public health crisis and build measurable action plans for Metro Atlanta.",
    sections: [
      {
        heading: "Featured Speakers",
        bullets: [
          "President Gregory L. Fenves, Emory University",
          "Valerie Montgomery Rice, MD, Morehouse School of Medicine",
          "David Satcher, MD, PhD, Satcher Institute at Morehouse School of Medicine",
          "Dr. Bernice A. King, The King Center for Nonviolent Social Change",
          "Sidney Barron, Board Chair, 100 Black Men of Atlanta",
        ],
      },
      {
        heading: "Primary Objectives",
        bullets: [
          "Examine violence in Atlanta using data as a public health crisis.",
          "Establish unified data systems for tracking regional violence trends.",
          "Explore evidence-based approaches to violence reduction.",
          "Engage youth in prevention program development.",
          "Collaborate with organizations and policymakers on sustainable strategies.",
          "Create measurable action plans with accountability measures.",
        ],
      },
    ],
  },
  {
    id: "2023-symposium",
    title: "2023 Violence Prevention Symposium",
    date: "2023-02-16",
    location: "Clark Atlanta University, Atlanta, GA",
    summary:
      "The inaugural Violence Prevention Symposium, co-organized by 100 Black Men of Atlanta, the Satcher Health Leadership Institute, and The King Center, established gun violence as a coordinated public health emergency requiring urgent, data-driven response.",
    sections: [
      {
        heading: "Keynote Speakers",
        bullets: [
          "Dr. David Satcher, Founding Director, Satcher Institute at Morehouse School of Medicine; former U.S. Surgeon General",
          "Dr. Mark Rosenberg, violence prevention researcher; former President & CEO, Task Force for Global Health",
          "Dr. Joseph V. Sakran, Vice Chair of Clinical Operations, Johns Hopkins Medicine",
          "Dr. Mercy, Director of Violence Prevention, Centers for Disease Control and Prevention",
        ],
      },
      {
        heading: "Agenda",
        bullets: [
          "Morning: Keynote presentations on gun violence prevention and public health approaches.",
          "Midday: Networking lunch.",
          "Afternoon: Youth roundtable discussions and panels featuring violence prevention program leaders, law enforcement, and conflict resolution training.",
        ],
      },
    ],
  },
];
