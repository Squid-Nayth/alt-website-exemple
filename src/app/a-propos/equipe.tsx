import UpperAbout from "@/components/about/aboutHead";
import Teams from "@/components/about/teams";
import AboutExplor from "@/components/about/explorer";

export default function AProposPage() {
  return (
    <div className="w-full">
      <UpperAbout />
      <Teams />
      <AboutExplor />
    </div>
  );
}
