import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import { exhibitions, awards } from '@/data/works';

const Exhibitions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-32 md:pt-40 max-w-5xl mx-auto px-6 md:px-12">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground animate-slow-fade-up">
          Exhibitions & Awards
        </h1>
      </div>

      {/* Exhibitions timeline */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 py-24 md:py-32">
        <ScrollReveal>
          <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground font-light mb-16">
            Exhibitions
          </p>
        </ScrollReveal>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[23px] md:left-[47px] top-0 bottom-0 w-px bg-border/30" />

          <div className="space-y-12">
            {exhibitions.map((ex, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="flex items-start gap-8 md:gap-12 relative">
                  <div className="w-12 md:w-24 shrink-0 text-right">
                    <span className="text-xs tracking-[0.15em] text-muted-foreground/50 font-light">{ex.year}</span>
                  </div>
                  <div className="relative -left-[4px] top-[6px] w-2 h-2 rounded-full bg-muted-foreground/20 shrink-0" />
                  <div className="pb-2">
                    <p className="font-serif text-lg md:text-xl font-light text-foreground">{ex.title}</p>
                    <p className="text-xs text-muted-foreground/60 font-light mt-2 tracking-wide">
                      {ex.venue}, {ex.location}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 pb-24 md:pb-32">
        <ScrollReveal>
          <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground font-light mb-16">
            Awards & Residencies
          </p>
        </ScrollReveal>

        <div className="space-y-8">
          {awards.map((aw, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className="border-b border-border/20 pb-8">
                <div className="flex items-baseline gap-8">
                  <span className="text-xs text-muted-foreground/40 font-light w-12 shrink-0">{aw.year}</span>
                  <div>
                    <p className="font-serif text-lg font-light text-foreground">{aw.title}</p>
                    <p className="text-xs text-muted-foreground/50 font-light mt-2">{aw.institution}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Exhibitions;
