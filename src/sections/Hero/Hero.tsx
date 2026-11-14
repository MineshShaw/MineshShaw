import { profile } from "../../data/profile";

export function Hero() {
  return (
    <section className="hero">
      <p className="eyebrow">Portfolio / 2026</p>
      <h1>{profile.name}</h1>
      <p className="hero-tagline">{profile.tagline}</p>
      <p className="hero-introduction">{profile.introduction}</p>
    </section>
  );
}
