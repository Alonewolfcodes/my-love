import AnimatedBackground from "./components/AnimatedBackground";
import ProposalCard from "./components/ProposalCard";

export default function Home() {
  return (
    <main className="relative h-screen flex justify-center items-center overflow-hidden">
      <AnimatedBackground />

      <ProposalCard />
    </main>
  );
}