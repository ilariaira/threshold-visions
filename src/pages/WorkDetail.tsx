import { useParams, Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import { works } from '@/data/works';

const WorkDetail = () => {
  const { slug } = useParams();
  const work = works.find(w => w.slug === slug);
  const currentIndex = works.findIndex(w => w.slug === slug);
  const prevWork = currentIndex > 0 ? works[currentIndex - 1] : null;
  const nextWork = currentIndex < works.length - 1 ? works[currentIndex + 1] : null;

  if (!work) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Navigation />
        <p className="font-serif text-xl text-muted-foreground">Work not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero image */}
      <section className="relative h-[70vh] md:h-[85vh]">
        <img
          src={work.image}
          alt={work.title}
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
      </section>

      {/* Title block */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="animate-slow-fade-up">
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-light text-foreground">
            {work.title}
          </h1>
          <div className="flex items-center gap-6 mt-6">
            <span className="text-xs tracking-[0.2em] text-muted-foreground font-light">{work.year}</span>
            <span className="text-xs tracking-[0.15em] text-muted-foreground/60 font-light">{work.medium}</span>
          </div>
        </div>
      </section>

      {/* Poetic text */}
      <section className="max-w-3xl mx-auto px-6 md:px-12 pb-16">
        <ScrollReveal>
          <p className="font-serif text-xl md:text-2xl font-light text-foreground/70 leading-relaxed italic">
            {work.description}
          </p>
        </ScrollReveal>
      </section>

      {/* Extended description */}
      <section className="max-w-3xl mx-auto px-6 md:px-12 pb-24 md:pb-32">
        <ScrollReveal delay={200}>
          <p className="text-sm font-light text-foreground/60 leading-[1.9] tracking-wide">
            {work.longDescription}
          </p>
        </ScrollReveal>
      </section>

      {/* Themes */}
      <section className="max-w-3xl mx-auto px-6 md:px-12 pb-16">
        <ScrollReveal>
          <div className="flex flex-wrap gap-4">
            {work.themes.map(theme => (
              <span key={theme} className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground/50 font-light">
                {theme}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* Navigation between works */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 py-16 md:py-24 border-t border-border/30">
        <div className="flex justify-between items-center">
          {prevWork ? (
            <Link to={`/works/${prevWork.slug}`} className="group">
              <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground/50 font-light">Previous</span>
              <p className="font-serif text-lg font-light text-foreground group-hover:opacity-60 transition-opacity duration-500 mt-1">
                {prevWork.title}
              </p>
            </Link>
          ) : <div />}
          {nextWork ? (
            <Link to={`/works/${nextWork.slug}`} className="group text-right">
              <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground/50 font-light">Next</span>
              <p className="font-serif text-lg font-light text-foreground group-hover:opacity-60 transition-opacity duration-500 mt-1">
                {nextWork.title}
              </p>
            </Link>
          ) : <div />}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WorkDetail;
