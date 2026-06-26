import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import { exhibitions, awards } from '@/data/works';
import portraitImage from '@/assets/ilaria.jpg';

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
                className="w-full h-full object-cover object-right"
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



            <ScrollReveal delay={200}>
              <div className="mb-16">
                
            <p className="text-sm font-light text-foreground/60 leading-[1.9] tracking-wide whitespace-pre-line">
  Ilaria Igliani (1991) is an Italian artist. She studied in Italy, France and Germany, graduating from the Akademie der Bildenden Künste in Munich under the guidance of Julian Rosefeldt.<br/>
  <br/>

  Fascinated by the exploration of the deeper self and the human psyche, her artistic research moves through ancient materials such as ceramic and plaster, expanding into installation, photography and video.<br/><br/>
  Her works take shape from fragments of reality patiently collected: whispered stories, forgotten gestures, suspended emotions. Each creation is a poetic act that investigates the human condition with delicacy and depth. The everyday is transfigured, becoming ritual and experience.<br/><br/>
  Through a practice that intertwines introspection and observation, her art reflects the ephemeral nature of existence, seeking the universal within the most intimate detail.<br/><br/>
  She has received several recognitions for her work, and her pieces have been exhibited in various contexts across Europe.
</p>
              </div>
            </ScrollReveal>

  
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
