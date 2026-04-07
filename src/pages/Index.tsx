import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import { works } from '@/data/works';
import heroImage from '@/assets/hero-home.jpg';

const featuredWorks = works.filter(w => w.featured).slice(0, 4);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative h-screen flex items-end">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Ilaria Igliani — fragments of presence"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-background/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-16 md:pb-24 w-full">
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-light text-foreground leading-tight animate-slow-fade-up max-w-3xl">
            Fragments of presence.<br />
            <span className="text-muted-foreground">Rituals of memory.</span>
          </h1>
        </div>
      </section>

      {/* Statement */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 py-24 md:py-40">
        <ScrollReveal>
          <p className="font-serif text-xl md:text-2xl lg:text-3xl font-light leading-relaxed text-foreground/80">
            Between body and memory, presence and absence, Ilaria Igliani's works emerge as fragments
            of an inquiry into the human condition, fragility, and the visible as a vessel for the unseen.
          </p>
        </ScrollReveal>
      </section>

      {/* Three entries */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row items-start gap-12 md:gap-24">
            <Link to="/works" className="group">
              <span className="font-serif text-2xl md:text-3xl font-light text-foreground group-hover:opacity-60 transition-opacity duration-700">
                Works
              </span>
              <span className="block text-xs tracking-[0.2em] text-muted-foreground mt-2 font-light">
                An atlas of gestures
              </span>
            </Link>
            <Link to="/about" className="group">
              <span className="font-serif text-2xl md:text-3xl font-light text-foreground group-hover:opacity-60 transition-opacity duration-700">
                About
              </span>
              <span className="block text-xs tracking-[0.2em] text-muted-foreground mt-2 font-light">
                Practice & biography
              </span>
            </Link>
            <Link to="/archive" className="group">
              <span className="font-serif text-2xl md:text-3xl font-light text-foreground group-hover:opacity-60 transition-opacity duration-700">
                Enter the Archive
              </span>
              <span className="block text-xs tracking-[0.2em] text-muted-foreground mt-2 font-light">
                An index of traces
              </span>
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* Selected Works */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <ScrollReveal>
          <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground font-light mb-16">
            Selected Works
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {featuredWorks.map((work, i) => (
            <ScrollReveal key={work.slug} delay={i * 150}>
              <Link to={`/works/${work.slug}`} className="group block">
                <div className={`overflow-hidden ${work.orientation === 'vertical' ? 'aspect-[3/4]' : 'aspect-[4/3]'}`}>
                  <img
                    src={work.image}
                    alt={work.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-all duration-[2000ms] group-hover:scale-[1.02] group-hover:opacity-90"
                  />
                </div>
                <div className="mt-6 flex items-baseline justify-between">
                  <h3 className="font-serif text-lg md:text-xl font-light text-foreground">
                    {work.title}
                  </h3>
                  <span className="text-[10px] tracking-[0.2em] text-muted-foreground font-light">
                    {work.year}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground font-light mt-1 tracking-wide">
                  {work.medium}
                </p>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-20 text-center">
            <Link
              to="/works"
              className="text-xs tracking-[0.25em] uppercase text-muted-foreground hover:text-foreground transition-opacity duration-700 font-light border-b border-muted-foreground/30 pb-1"
            >
              View all works
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* Current */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 py-16 md:py-32">
        <ScrollReveal>
          <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground font-light mb-8">
            Current
          </p>
          <p className="font-serif text-lg md:text-xl font-light text-foreground/70 leading-relaxed">
            I explore what remains: traces, gestures, memory, presence.
          </p>
        </ScrollReveal>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
