import type { Metadata } from "next";
import "./vpc.css";
import { sourceSans, roboto, robotoCondensed, bitter } from "./fonts";

const fontVariables = `${sourceSans.variable} ${roboto.variable} ${robotoCondensed.variable} ${bitter.variable}`;

export const metadata: Metadata = {
  title: "Violence Prevention Collaborative of Metro Atlanta",
  description:
    "Gun violence is a public health emergency. The Violence Prevention Collaborative unites 100 Black Men, The King Center, and MSM to coordinate research, data, and community action across Metro Atlanta.",
  metadataBase: new URL("https://vpcatlanta.org"),
  openGraph: {
    title: "Violence Prevention Collaborative of Metro Atlanta",
    description:
      "Gun violence is a public health emergency. The Violence Prevention Collaborative unites 100 Black Men, The King Center, and MSM to coordinate research, data, and community action across Metro Atlanta.",
    url: "https://vpcatlanta.org",
    siteName: "Violence Prevention Collaborative of Metro Atlanta",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Violence Prevention Collaborative of Metro Atlanta",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Violence Prevention Collaborative of Metro Atlanta",
    description:
      "Gun violence is a public health emergency. The Violence Prevention Collaborative unites 100 Black Men, The King Center, and MSM to coordinate research, data, and community action across Metro Atlanta.",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={fontVariables}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){var s=localStorage.getItem('theme');var sys=window.matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light';document.documentElement.setAttribute('data-theme',s||sys);})();` }} />
        <link rel="shortcut icon" href="/images/favicon.png" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/images/webclip.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Violence Prevention Collaborative of Metro Atlanta",
              url: "https://vpcatlanta.org",
              description:
                "A regional partnership uniting 100 Black Men of Atlanta, The King Center, and MSM to coordinate research, data, and community action to prevent gun violence across Metro Atlanta.",
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
