import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import { works } from '@/data/works';

const Works = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-32 md:pt-40 max-w-7xl mx-auto px-6 md:px-12">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground animate-slow-fade-up">
          Works
        </h1>
        <p className="font-serif text-lg md:text-xl font-light text-muted-foreground mt-6 max-w-2xl animate-drift">
          An archive of gestures, traces, and suspensions.
        </p>
      </div>

      {/* Editorial masonry */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32">
        <div className="space-y-20 md:space-y-32">
          {works.map((work, i) => {
            const isEven = i % 2 === 0;
            return (
              <ScrollReveal key={work.slug} delay={100}>
                <Link
                  to={`/works/${work.slug}`}
                  className="group block"
                >
                  <div className={`grid grid-cols-1 ${work.orientation === 'horizontal' ? 'md:grid-cols-1' : 'md:grid-cols-12'} gap-8 md:gap-16 items-end`}>
                    {work.orientation === 'horizontal' ? (
                      <>
                        <div className="overflow-hidden aspect-[16/9]">
                          <img
                            src={work.image}
                            alt={work.title}
                            loading="lazy"
                            className="w-full h-full object-cover transition-all duration-[2000ms] group-hover:scale-[1.02]"
                          />
                        </div>
                        <div className="max-w-xl mt-4">
                          <h2 className="font-serif text-2xl md:text-3xl font-light text-foreground">
                            {work.title}
                          </h2>
                          <div className="flex items-center gap-4 mt-3">
                            <span className="text-[10px] tracking-[0.2em] text-muted-foreground font-light">{work.year}</span>
                            <span className="text-[10px] tracking-[0.15em] text-muted-foreground/60 font-light">{work.medium}</span>
                          </div>
                          <p className="font-serif text-sm font-light text-foreground/60 mt-4 leading-relaxed">
                            {work.description}
                          </p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className={`${isEven ? 'md:col-span-7' : 'md:col-span-7 md:col-start-6'} overflow-hidden aspect-[3/4]`}>
                          <img
                            src={work.image}
                            alt={work.title}
                            loading="lazy"
                            className="w-full h-full object-cover transition-all duration-[2000ms] group-hover:scale-[1.02]"
                          />
                        </div>
                        <div className={`${isEven ? 'md:col-span-4 md:col-start-9' : 'md:col-span-4 md:col-start-1 md:row-start-1'}`}>
                          <h2 className="font-serif text-2xl md:text-3xl font-light text-foreground">
                            {work.title}
                          </h2>
                          <div className="flex items-center gap-4 mt-3">
                            <span className="text-[10px] tracking-[0.2em] text-muted-foreground font-light">{work.year}</span>
                            <span className="text-[10px] tracking-[0.15em] text-muted-foreground/60 font-light">{work.medium}</span>
                          </div>
                          <p className="font-serif text-sm font-light text-foreground/60 mt-6 leading-relaxed">
                            {work.description}
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Works;
