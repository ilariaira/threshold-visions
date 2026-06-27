import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import { useLocation} from 'react-router-dom';
import { useEffect } from 'react';

import { Mail, Instagram, MapPin } from 'lucide-react';

const Contact = () => {
   const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-32 md:pt-40 max-w-4xl mx-auto px-6 md:px-12 min-h-[80vh] flex flex-col justify-center">

        {/* TITLE */}
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground animate-slow-fade-up mb-20">
          Contact
        </h1>

        <div className="space-y-12">

          {/* EMAIL */}
          <ScrollReveal>
            <a
              href="mailto:ilariaigliani@gmail.com"
              className="flex items-center gap-4 group"
            >
              <Mail className="w-6 h-6 text-foreground/70 group-hover:text-foreground transition-colors" />
              <div>
                <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground/50 font-light mb-1">
                  Email
                </p>
                <p className="font-serif text-xl md:text-2xl font-light group-hover:opacity-60 transition-opacity">
                  ilariaigliani@gmail.com
                </p>
              </div>
            </a>
          </ScrollReveal>

          {/* INSTAGRAM */}
          <ScrollReveal delay={150}>
            <a
              href="https://instagram.com/ilariaigliani"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group"
            >
              <Instagram className="w-6 h-6 text-foreground/70 group-hover:text-foreground transition-colors" />
              <div>
                <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground/50 font-light mb-1">
                  Instagram
                </p>
                <p className="font-serif text-xl md:text-2xl font-light group-hover:opacity-60 transition-opacity">
                  @ilariaigliani
                </p>
              </div>
            </a>
          </ScrollReveal>

          {/* BASED IN */}
          <ScrollReveal delay={300}>
            <div className="flex items-center gap-4">
              <MapPin className="w-6 h-6 text-foreground/70" />
              <div>
                <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground/50 font-light mb-1">
                  Based in
                </p>
                <p className="font-serif text-xl md:text-2xl font-light">
                  Italy
                </p>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;