import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah & Mike T.",
    location: "Austin, TX",
    rating: 5,
    text: "HAAS transformed our home in one day. We went from zero smart devices to a fully automated home. The team was professional and patient explaining everything.",
  },
  {
    name: "David Chen",
    location: "Seattle, WA",
    rating: 5,
    text: "I tried setting up Home Assistant myself for months. HAAS did it in hours, perfectly. Best investment I've made for my home.",
  },
  {
    name: "Linda Morrison",
    location: "Denver, CO",
    rating: 5,
    text: "I was nervous about smart home tech but the HAAS team made it so easy to understand. Now I control everything from my phone — it's incredible.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Testimonials
          </span>
          <h2 className="font-extrabold text-4xl md:text-5xl text-foreground mb-4">
            What Homeowners Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Real stories from real homes we've transformed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card rounded-2xl p-7 border border-border shadow-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />

              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-6">
                "{t.text}"
              </p>

              <div className="flex items-center gap-3 border-t border-border pt-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center font-bold text-primary-foreground text-sm">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
