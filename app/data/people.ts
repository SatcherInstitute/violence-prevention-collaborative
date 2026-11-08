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
  { name: "Larry Johnson", coChair: true },

  // --- Members ---
  { name: "Benjamin Hammond", title: "Senior Software Engineer and Team Lead, Health Equity Tracker, Satcher Institute, Morehouse School of Medicine" },
];
