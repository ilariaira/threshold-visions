import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import portraitImage from '@/assets/ilaria.jpg';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-32 md:pt-40 max-w-6xl mx-auto px-6 md:px-12 min-h-[80vh] flex flex-col justify-center">

        {/* TITLE COME PRIMA */}
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground animate-slow-fade-up mb-20">
          Contact
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 w-full">

          {/* IMAGE LEFT */}
          <div className="md:col-span-5">
            <ScrollReveal>
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={portraitImage}
                  alt="Portrait"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* CONTENT RIGHT */}
          <div className="md:col-span-7 flex flex-col justify-center">

            <div className="space-y-10">

              <ScrollReveal>
                <div>
                  <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground/50 font-light mb-2">
                    Email
                  </p>
                  <a
                    href="mailto:studio@ilariaigliani.com"
                    className="font-serif text-xl md:text-2xl font-light text-foreground hover:opacity-60 transition-opacity"
                  >
                    ilariaigliani@gmail.com
                  </a>
                </div>
              </ScrollReveal>


              <ScrollReveal delay={200}>
                <div>
                  <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground/50 font-light mb-2">
                    Instagram
                  </p>
                  <a
                    href="https://instagram.com/ilariaigliani"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-serif text-xl md:text-2xl font-light text-foreground hover:opacity-60 transition-opacity"
                  >
                    @ilariaigliani
                  </a>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div>
                  <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground/50 font-light mb-2">
                    Based in
                  </p>
                  <p className="font-serif text-xl md:text-2xl font-light text-foreground">
                    Italy
                  </p>
                </div>
              </ScrollReveal>

            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;