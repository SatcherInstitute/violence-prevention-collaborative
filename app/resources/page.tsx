import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ResourceGrid from "@/components/ResourceGrid";

export const metadata = {
  title: "Resource Hub | Violence Prevention Collaborative of Metro Atlanta",
  description:
    "A curated library of data tools, community programs, training resources, and crisis services for violence prevention across Metro Atlanta.",
};

export default function ResourcesPage() {
  return (
    <>
      <Nav />
      <div className="resources-page">
        <div className="resources-hero">
          <div className="resources-hero-inner">
            <p className="overline resources-overline">Resource Hub</p>
            <h1 className="resources-heading">
              Tools, Programs & Partners
            </h1>
            <p className="resources-subheading">
              A curated library of data tools, community programs, training
              curricula, policy resources, and crisis services — organized to
              help partners find what they need and connect across Metro Atlanta.
            </p>
          </div>
        </div>
        <div className="resources-body">
          <ResourceGrid />
        </div>
      </div>
      <Footer />
    </>
  );
}
