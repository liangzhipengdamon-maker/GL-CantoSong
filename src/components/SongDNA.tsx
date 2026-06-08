import type { SongDNAItem } from "@/lib/types";

interface SongDNAProps {
  items: SongDNAItem[];
}

export function SongDNA({ items }: SongDNAProps) {
  return (
    <article className="song-dna" aria-labelledby="dna-title">
      <div className="section-heading">
        <p className="mode-label">Song DNA</p>
        <h2 id="dna-title">What this song demands</h2>
      </div>
      <div className="dna-list">
        {items.map((item) => (
          <div className="dna-item" key={item.id}>
            <strong>{item.name}</strong>
            <p>{item.detail}</p>
            <div className="dna-score" aria-label={`${item.name} difficulty ${item.difficulty} out of 5`}>
              {Array.from({ length: 5 }, (_, index) => (
                <span className={index < item.difficulty ? "is-on" : ""} key={index} />
              ))}
            </div>
            <small>{item.unlocks}</small>
          </div>
        ))}
      </div>
    </article>
  );
}
