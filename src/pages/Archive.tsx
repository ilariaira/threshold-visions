import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import { works, themes } from '@/data/works';

const Archive = () => {
  const [activeTheme, setActiveTheme] = useState<string | null>(null);
  const [activeMedium, setActiveMedium] = useState<string | null>(null);

  const uniqueMediums = [...new Set(works.map(w => w.medium))];
  const uniqueYears = [...new Set(works.map(w => w.year))].sort().reverse();

  const filteredWorks = works.filter(w => {
    if (activeTheme && !w.themes.includes(activeTheme)) return false;
    if (activeMedium && w.medium !== activeMedium) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-32 md:pt-40 max-w-6xl mx-auto px-6 md:px-12">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground animate-slow-fade-up">
          Archive
        </h1>
        <p className="font-serif text-lg font-light text-muted-foreground mt-6 animate-drift">
          An index of traces
        </p>
      </div>

      {/* Filters */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <ScrollReveal>
          <div className="mb-12">
            <p className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground/50 font-light mb-4">
              Themes
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setActiveTheme(null)}
                className={`text-xs tracking-[0.15em] font-light transition-all duration-500 pb-0.5 ${
                  !activeTheme ? 'text-foreground border-b border-foreground/30' : 'text-muted-foreground/50 hover:text-foreground'
                }`}
              >
                All
              </button>
              {themes.map(theme => (
                <button
                  key={theme}
                  onClick={() => setActiveTheme(activeTheme === theme ? null : theme)}
                  className={`text-xs tracking-[0.15em] font-light transition-all duration-500 pb-0.5 ${
                    activeTheme === theme ? 'text-foreground border-b border-foreground/30' : 'text-muted-foreground/50 hover:text-foreground'
                  }`}
                >
                  {theme}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground/50 font-light mb-4">
              Medium
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setActiveMedium(null)}
                className={`text-xs tracking-[0.15em] font-light transition-all duration-500 pb-0.5 ${
                  !activeMedium ? 'text-foreground border-b border-foreground/30' : 'text-muted-foreground/50 hover:text-foreground'
                }`}
              >
                All
              </button>
              {uniqueMediums.map(medium => (
                <button
                  key={medium}
                  onClick={() => setActiveMedium(activeMedium === medium ? null : medium)}
                  className={`text-xs tracking-[0.15em] font-light transition-all duration-500 pb-0.5 ${
                    activeMedium === medium ? 'text-foreground border-b border-foreground/30' : 'text-muted-foreground/50 hover:text-foreground'
                  }`}
                >
                  {medium}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Index list */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 pb-24 md:pb-32">
        <div className="space-y-0">
          {filteredWorks.map((work, i) => (
            <ScrollReveal key={work.slug} delay={i * 60}>
              <Link
                to={`/works/${work.slug}`}
                className="group flex items-baseline justify-between py-6 border-b border-border/20 hover:border-foreground/20 transition-all duration-700"
              >
                <div className="flex items-baseline gap-6 md:gap-12">
                  <span className="text-xs text-muted-foreground/40 font-light w-12 shrink-0">{work.year}</span>
                  <h3 className="font-serif text-lg md:text-xl font-light text-foreground group-hover:opacity-60 transition-opacity duration-500">
                    {work.title}
                  </h3>
                </div>
                <div className="hidden md:flex items-center gap-6">
                  <span className="text-[10px] tracking-[0.15em] text-muted-foreground/40 font-light">
                    {work.medium}
                  </span>
                  <div className="flex gap-2">
                    {work.themes.slice(0, 3).map(t => (
                      <span key={t} className="text-[9px] tracking-[0.2em] uppercase text-muted-foreground/30 font-light">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {filteredWorks.length === 0 && (
          <p className="font-serif text-lg text-muted-foreground/50 font-light text-center py-20">
            No works match the selected filters.
          </p>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default Archive;
