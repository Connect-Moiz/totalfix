export default function SectionHeading({
  title, intro, id, align = "left",
}: { title: string; intro?: string; id?: string; align?: "left" | "center" }) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <h2 id={id} className="text-2xl font-bold tracking-tight text-red sm:text-3xl">{title}</h2>
      {intro && <p className="mt-3 text-base leading-relaxed text-muted">{intro}</p>}
    </div>
  );
}
