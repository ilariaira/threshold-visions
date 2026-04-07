import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-32 md:pt-40 max-w-4xl mx-auto px-6 md:px-12 min-h-[70vh] flex flex-col justify-center">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground animate-slow-fade-up">
          Contact
        </h1>

        <div className="mt-20 space-y-16">
          <ScrollReveal>
            <div>
              <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground/50 font-light mb-4">
                Email
              </p>
              <a
                href="mailto:studio@ilariaigliani.com"
                className="font-serif text-xl md:text-2xl font-light text-foreground hover:opacity-60 transition-opacity duration-500"
              >
                studio@ilariaigliani.com
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div>
              <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground/50 font-light mb-4">
                Instagram
              </p>
              <a
                href="https://instagram.com/ilariaigliani"
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif text-xl md:text-2xl font-light text-foreground hover:opacity-60 transition-opacity duration-500"
              >
                @ilariaigliani
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div>
              <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground/50 font-light mb-4">
                Based in
              </p>
              <p className="font-serif text-xl md:text-2xl font-light text-foreground">
                Italy
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div>
              <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground/50 font-light mb-4">
                Portfolio
              </p>
              <p className="text-sm font-light text-muted-foreground tracking-wide">
                Available upon request
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
