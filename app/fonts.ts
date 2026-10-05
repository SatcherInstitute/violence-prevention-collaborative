import { Source_Sans_3, Roboto, Roboto_Condensed, Bitter } from "next/font/google";

export const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: "variable",
  variable: "--ff-source-sans",
  display: "swap",
});

export const roboto = Roboto({
  subsets: ["latin"],
  weight: "variable",
  variable: "--ff-roboto",
  display: "swap",
});

export const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: "variable",
  variable: "--ff-roboto-condensed",
  display: "swap",
});

export const bitter = Bitter({
  subsets: ["latin"],
  weight: "variable",
  style: ["normal", "italic"],
  variable: "--ff-bitter",
  display: "swap",
});
