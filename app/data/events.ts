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
    id: "2027-symposium",
    title: "2027 Violence Prevention Symposium",
    date: "2027-03-04",
    summary: "Details and location to be announced.",
  },
];
