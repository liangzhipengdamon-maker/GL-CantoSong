import { AppNav } from "@/components/AppNav";
import { PlayablePath } from "@/components/PlayablePath";
import { activeBossSong } from "@/data/songs";
import { analyzeBossSong } from "@/lib/mock-ai";

export default function PathPage() {
  const analysis = analyzeBossSong(activeBossSong.id);

  return (
    <main className="single-page">
      <header className="simple-header">
        <p className="eyebrow">逐句通关</p>
        <h1>7天清掉《枪火》6句 Rap</h1>
        <p>{analysis.summary}</p>
      </header>
      <AppNav />
      <PlayablePath nodes={analysis.path} />
    </main>
  );
}
