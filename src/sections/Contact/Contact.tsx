import { profile } from "../../data/profile";

export function Contact() {
  return (
    <section id="contact" className="contact">
      <p className="eyebrow">Get in touch</p>
      <h2>Let&apos;s build something worthwhile.</h2>
      <a href={`mailto:${profile.email}`}>{profile.email}</a>
    </section>
  );
}
