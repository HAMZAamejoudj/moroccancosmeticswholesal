import { privateLabelServices } from "@/lib/private-label";

export function PrivateLabelServices() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {privateLabelServices.map((service) => {
        const Icon = service.icon;
        return (
          <article
            key={service.title}
            className="rounded-2xl border border-border/60 bg-card p-6 shadow-soft transition-shadow hover:shadow-elevated"
          >
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Icon className="h-5 w-5" aria-hidden />
            </div>
            <h3 className="font-heading mb-2 text-lg font-semibold">{service.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
          </article>
        );
      })}
    </div>
  );
}
