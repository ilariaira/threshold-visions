import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-border/40 mt-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-serif text-xl font-light mb-4 text-foreground">Ilaria Igliani</h3>
            <p className="text-xs tracking-[0.15em] text-muted-foreground font-light leading-relaxed">
              Multidisciplinary artist<br />
              Based in Italy
            </p>
          </div>
          <div>
            <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground font-light mb-4">Navigate</p>
            <div className="flex flex-col gap-3">
              {['Works', 'About', 'Exhibitions', 'Contact'].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className="text-xs tracking-[0.15em] text-muted-foreground hover:text-foreground transition-opacity duration-500 font-light"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground font-light mb-4">Connect</p>
            <div className="flex flex-col gap-3">
              <a href="mailto:studio@ilariaigliani.com" className="text-xs tracking-[0.15em] text-muted-foreground hover:text-foreground transition-opacity duration-500 font-light">
                ilariaigliani@gmail.com
              </a>
              <a href="https://instagram.com/ilariaigliani" target="_blank" rel="noopener noreferrer" className="text-xs tracking-[0.15em] text-muted-foreground hover:text-foreground transition-opacity duration-500 font-light">
                @ilariaigliani
              </a>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-border/20">
          <p className="text-[10px] tracking-[0.2em] text-muted-foreground/50 font-light">
            © {new Date().getFullYear()} Ilaria Igliani. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
