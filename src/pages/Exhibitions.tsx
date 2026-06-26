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

      {/* EXHIBITIONS */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 py-24 md:py-32">
        <ScrollReveal>
          <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground font-light mb-16">
            Exhibitions
          </p>
        </ScrollReveal>

        <div className="space-y-14">

          {exhibitions.map((group, i) => (
            <div key={i} className="relative">

              {/* LINEA VERTICALE */}
              <div className="absolute left-10 md:left-14 top-0 bottom-0 w-px bg-border/20" />

              {/* BLOCCO ANNO + PRIMA ITEM */}
              <div className="flex gap-8 md:gap-12">

                {/* ANNO (allineato SOLO al primo elemento) */}
                <div className="w-20 shrink-0">
                  <div className="text-xs tracking-[0.15em] text-muted-foreground/50 font-light pt-[2px]">
                    {group.year}
                  </div>
                </div>

                {/* ITEMS */}
                <div className="space-y-10 flex-1">

                  {group.items.map((ex, j) => (
                    <ScrollReveal key={j} delay={j * 80}>
                      <div className="flex items-start gap-6">

                        {/* DOT */}
                        <div className="relative w-4 shrink-0">
                          <div className="w-2 h-2 rounded-full bg-muted-foreground/20 mt-[6px]" />
                        </div>

                        {/* CONTENUTO */}
                        <div>
                          <p className="font-serif text-lg md:text-xl font-light text-foreground">
                            {ex.title}
                          </p>
                          <p className="text-xs text-muted-foreground/60 font-light mt-2 tracking-wide">
                            {ex.venue}, {ex.location}
                          </p>
                        </div>

                      </div>
                    </ScrollReveal>
                  ))}

                </div>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* AWARDS */}
<section className="max-w-5xl mx-auto px-6 md:px-12 pb-24 md:pb-32">
  <ScrollReveal>
    <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground font-light mb-16">
      Awards
    </p>
  </ScrollReveal>

  <div className="space-y-14">

    {awards.map((group, i) => (
      <div key={i} className="relative">

        {/* LINEA VERTICALE */}
        <div className="absolute left-10 md:left-14 top-0 bottom-0 w-px bg-border/20" />

        {/* BLOCCO ANNO + ITEMS */}
        <div className="flex gap-8 md:gap-12">

          {/* ANNO */}
          <div className="w-20 shrink-0">
            <div className="text-xs tracking-[0.15em] text-muted-foreground/50 font-light pt-[2px]">
              {group.year}
            </div>
          </div>

          {/* ITEMS */}
          <div className="space-y-8 flex-1">

            {group.items.map((aw, j) => (
              <ScrollReveal key={j} delay={j * 80}>
                <div className="flex items-start gap-6">

                  {/* DOT */}
                  <div className="relative w-4 shrink-0">
                    <div className="w-2 h-2 rounded-full bg-muted-foreground/20 mt-[6px]" />
                  </div>

                  {/* CONTENUTO */}
                  <div>
                    <p className="font-serif text-lg font-light text-foreground">
                      {aw.title}
                    </p>
                    <p className="text-xs text-muted-foreground/50 font-light mt-2">
                      {aw.institution}
                    </p>
                  </div>

                </div>
              </ScrollReveal>
            ))}

          </div>
        </div>
      </div>
    ))}

  </div>
</section>

      <Footer />
    </div>
  );
};

export default Exhibitions;