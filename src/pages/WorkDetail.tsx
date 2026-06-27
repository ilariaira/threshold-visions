import { useParams, Link , useLocation} from 'react-router-dom';
import { useEffect, useState } from 'react';
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

  const images = work?.images?.length ? work.images : work ? [work.image] : [];

  const [currentImage, setCurrentImage] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  // 🎬 autoplay cinematic
  useEffect(() => {
    if (!work || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImage(prev =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [images.length, work]);

  if (!work) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Navigation />
        <p className="font-serif text-xl text-muted-foreground">
          Work not found.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* HERO */}
      <section className="relative h-[70vh] md:h-[85vh] overflow-hidden">
        <img
          src={work.image}
          alt={work.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
      </section>

      {/* TITLE */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="animate-slow-fade-up">
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-light text-foreground">
            {work.title}
          </h1>

          <div className="flex items-center gap-6 mt-6">
            <span className="text-xs tracking-[0.2em] text-muted-foreground font-light">
              {work.year}
            </span>
            <span className="text-xs tracking-[0.15em] text-muted-foreground/60 font-light">
              {work.medium}
            </span>
          </div>
        </div>
      </section>

      {/* DESCRIPTION */}
      <section className="max-w-3xl mx-auto px-6 md:px-12 pb-16">
        <ScrollReveal>
          <p className="font-serif text-xl md:text-2xl font-light text-foreground/70 leading-relaxed italic hyphens-auto">
            {work.description}
          </p>
        </ScrollReveal>
      </section>

      {/* LONG DESCRIPTION */}
<section className="max-w-3xl mx-auto px-6 md:px-12 pb-24 md:pb-32">
  <ScrollReveal delay={200}>
    <p className="whitespace-pre-line text-justify text-foreground/70 leading-relaxed tracking-[0.01em] hyphens-auto">
      {work.longDescription.split("[[strike:").map((part, i) => {
        if (!part.includes("]]")) return part;

        const [strikeText, rest] = part.split("]]");

        return (
          <span key={i}>
            <span className="line-through opacity-60">
              {strikeText}
            </span>
            {rest}
          </span>
        );
      })}
    </p>
  </ScrollReveal>
</section>

      {/* 🎬 CAROUSEL */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 pb-20">
        <div className="relative">

          {/* MAIN IMAGE */}
          <div
            className="h-[60vh] md:h-[70vh] overflow-hidden cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <img
              src={images[currentImage]}
              alt={`${work.title} view`}
              className="w-full h-full object-contain transition-opacity duration-[2000ms]"
            />
          </div>

          {/* INFO */}
          <div className="flex justify-between items-center mt-4">
         

            <span className="text-[10px] text-muted-foreground">
              {currentImage + 1} / {images.length}
            </span>
          </div>

          {/* THUMBNAILS */}
          {images.length > 1 && (
            <div className="flex gap-3 mt-6 overflow-x-auto">
              {images.map((img, i) => (
                <button
                  key={img}
                  onClick={() => setCurrentImage(i)}
                  className={`h-16 w-24 flex-shrink-0 overflow-hidden border transition ${
                    i === currentImage
                      ? 'border-foreground'
                      : 'border-transparent opacity-40 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img}
                    className="w-full h-full object-contain"
                    alt={`thumb ${i + 1}`}
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

 

     

      {/* NAVIGATION */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 py-16 md:py-24 border-t border-border/30">
        <div className="flex justify-between items-center">
          {prevWork ? (
            <Link to={`/works/${prevWork.slug}`} className="group">
              <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground/50 font-light">
                Previous
              </span>
              <p className="font-serif text-lg font-light text-foreground group-hover:opacity-60 transition-opacity duration-500 mt-1">
                {prevWork.title}
              </p>
            </Link>
          ) : (
            <div />
          )}

          {nextWork ? (
            <Link to={`/works/${nextWork.slug}`} className="group text-right">
              <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground/50 font-light">
                Next
              </span>
              <p className="font-serif text-lg font-light text-foreground group-hover:opacity-60 transition-opacity duration-500 mt-1">
                {nextWork.title}
              </p>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </section>

      {/* 🖥️ MODAL FULLSCREEN */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">

          {/* CLOSE */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 text-white text-3xl"
          >
            ✕
          </button>

          {/* PREV */}
          <button
            onClick={() =>
              setCurrentImage(prev =>
                prev === 0 ? images.length - 1 : prev - 1
              )
            }
            className="absolute left-6 text-white text-4xl"
          >
            ‹
          </button>

          {/* NEXT */}
          <button
            onClick={() =>
              setCurrentImage(prev =>
                prev === images.length - 1 ? 0 : prev + 1
              )
            }
            className="absolute right-6 text-white text-4xl"
          >
            ›
          </button>

          {/* IMAGE */}
          <img
            src={images[currentImage]}
            className="max-w-[90vw] max-h-[90vh] object-contain"
            alt=""
          />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default WorkDetail;