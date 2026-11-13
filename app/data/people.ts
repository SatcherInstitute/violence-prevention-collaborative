export interface Person {
  name: string;
  // Free-text professional title, as supplied by the person. May include an
  // org affiliation (e.g. MSM, 100 Black Men, The King Center) or none.
  title?: string;
  coChair?: boolean;
}

export const foundingCollective: Person[] = [
  // --- Co-Chairs ---
  { name: "Andjela Kessler", title: "Author, RadicalLoveTheMovie.com & former journalist", coChair: true },
  { name: "Larry L. Johnson", title: "Past Chairman, 100 Black Men of Atlanta", coChair: true },

  // --- Members ---
  { name: "Kimberly Cinco, MPsy, USN Veteran Ret.", title: "Product Manager + UX Engineer, Health Equity Tracker, Satcher Institute, Morehouse School of Medicine" },
  { name: "Alex E. Crosby, MD, MPH", title: "Medical Epidemiologist, Department of Community Health and Preventive Medicine, Morehouse School of Medicine" },
  { name: "Benjamin Hammond", title: "Senior Software Engineer and Team Lead, Health Equity Tracker, Satcher Institute, Morehouse School of Medicine" },
  { name: "Sandra Harris-Hooker, PhD", title: "Interim Executive Director, Satcher Health Leadership Institute; Senior Vice President for External Affairs and Innovation; Professor, Department of Pathology and Medical Education, Morehouse School of Medicine" },
  { name: "Evan Martin, LCSW", title: "Project Director; Associate Professor, Morehouse School of Medicine; Community Therapist" },
  { name: "Eric Warren II", title: "Software Engineer, Health Equity Tracker, Satcher Institute, Morehouse School of Medicine" },
  { name: "Ashley Watkins", title: "Senior Budget Analyst, Satcher Institute, Morehouse School of Medicine" },
];
