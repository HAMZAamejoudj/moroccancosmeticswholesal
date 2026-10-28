import { privateLabelProcess } from "@/lib/private-label";

export function PrivateLabelProcess() {
  return (
    <ol className="grid gap-4 lg:grid-cols-5">
      {privateLabelProcess.map((item) => (
        <li
          key={item.step}
          className="relative rounded-2xl border border-border/60 bg-card p-5 shadow-soft lg:flex lg:flex-col"
        >
          <p className="text-primary mb-2 text-xs font-bold tracking-widest">{item.step}</p>
          <h3 className="font-heading mb-2 text-base font-semibold sm:text-lg">{item.title}</h3>
          <p className="text-muted-foreground flex-1 text-sm leading-relaxed">{item.description}</p>
        </li>
      ))}
    </ol>
  );
}
