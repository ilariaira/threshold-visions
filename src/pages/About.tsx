import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import { exhibitions, awards } from '@/data/works';
import portraitImage from '@/assets/artist-portrait.jpg';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-32 md:pt-40 max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
          {/* Portrait */}
          <div className="md:col-span-5">
            <div className="aspect-[3/4] overflow-hidden animate-slow-fade-in">
              <img
                src={portraitImage}
                alt="Ilaria Igliani"
                className="w-full h-full object-cover"
                width={1200}
                height={1600}
              />
            </div>
          </div>

          {/* Content */}
          <div className="md:col-span-6 md:col-start-7 flex flex-col justify-center">
            <h1 className="font-serif text-4xl md:text-5xl font-light text-foreground animate-slow-fade-up mb-12">
              About
            </h1>

            <ScrollReveal>
              <div className="mb-16">
                <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground font-light mb-6">
                  Statement
                </p>
                <p className="font-serif text-lg md:text-xl font-light text-foreground/80 leading-relaxed">
                  Ilaria Igliani is an Italian multidisciplinary artist. Her practice moves across ceramics, plaster,
                  installation, photography, and video, exploring the relationships between body, unconscious,
                  memory, and ritual.
                </p>
                <p className="font-serif text-lg md:text-xl font-light text-foreground/60 leading-relaxed mt-6">
                  Her works arise from fragments of reality—gestures, stories, emotional imprints—transformed
                  into essential, fragile, and resonant forms.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="mb-16">
                <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground font-light mb-6">
                  Biography
                </p>
                <p className="text-sm font-light text-foreground/60 leading-[1.9] tracking-wide">
                  Born in Italy, Ilaria Igliani studied at the Accademia di Belle Arti in Rome and continued
                  her formation at the École des Beaux-Arts in Paris and the Universität der Künste in Berlin.
                  Her multidisciplinary practice spans ceramics, plaster, installation, photography, and video.
                  She has exhibited in Italy, France, and Germany, and has been awarded residencies and prizes
                  from major institutions including the Cité Internationale des Arts and MAXXI Museum.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="mb-16">
                <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground font-light mb-6">
                  Education
                </p>
                <div className="space-y-3">
                  <p className="text-sm font-light text-foreground/60 tracking-wide">
                    Universität der Künste, Berlin
                  </p>
                  <p className="text-sm font-light text-foreground/60 tracking-wide">
                    École des Beaux-Arts, Paris
                  </p>
                  <p className="text-sm font-light text-foreground/60 tracking-wide">
                    Accademia di Belle Arti, Rome
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Selected exhibitions */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-24 md:py-32">
        <ScrollReveal>
          <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground font-light mb-12">
            Selected Exhibitions
          </p>
          <div className="space-y-6">
            {exhibitions.slice(0, 5).map((ex, i) => (
              <div key={i} className="flex items-baseline gap-6 border-b border-border/20 pb-6">
                <span className="text-xs text-muted-foreground/50 font-light w-12 shrink-0">{ex.year}</span>
                <div>
                  <p className="font-serif text-base font-light text-foreground">{ex.title}</p>
                  <p className="text-xs text-muted-foreground/60 font-light mt-1">{ex.venue}, {ex.location}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* Awards */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 pb-24">
        <ScrollReveal>
          <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground font-light mb-12">
            Awards & Residencies
          </p>
          <div className="space-y-6">
            {awards.map((aw, i) => (
              <div key={i} className="flex items-baseline gap-6 border-b border-border/20 pb-6">
                <span className="text-xs text-muted-foreground/50 font-light w-12 shrink-0">{aw.year}</span>
                <div>
                  <p className="font-serif text-base font-light text-foreground">{aw.title}</p>
                  <p className="text-xs text-muted-foreground/60 font-light mt-1">{aw.institution}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <Footer />
    </div>
  );
};

export default About;
