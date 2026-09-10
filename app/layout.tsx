import type { Metadata } from "next";
import "./vpc.css";

export const metadata: Metadata = {
  title: "Violence Prevention Collaborative of Metro Atlanta",
  description:
    "Gun violence is a public health emergency. The Violence Prevention Collaborative unites 100 Black Men, The King Center, and MSM to coordinate research, data, and community action across Metro Atlanta.",
  openGraph: {
    title: "Violence Prevention Collaborative of Metro Atlanta",
    description:
      "Gun violence is a public health emergency. The Violence Prevention Collaborative unites 100 Black Men, The King Center, and MSM to coordinate research, data, and community action across Metro Atlanta.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="shortcut icon" href="/images/favicon.png" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/images/webclip.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="text/javascript"
          src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"
        />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `WebFont.load({ google: { families: ["Bitter:400,700,400italic","IBM Plex Mono:500,600","Roboto:300,400,500,600,700","Roboto Condensed:300,400,500,600,700","Source Sans 3:400,600","Source Serif 4:400,700"] } });`,
          }}
        />
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
