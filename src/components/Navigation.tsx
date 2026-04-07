import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { path: '/works', label: 'Works' },
  { path: '/about', label: 'About' },
  { path: '/exhibitions', label: 'Exhibitions' },
  { path: '/archive', label: 'Archive' },
  { path: '/contact', label: 'Contact' },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
        <Link
          to="/"
          className="font-serif text-xl md:text-2xl font-light tracking-wide text-foreground hover:opacity-70 transition-opacity duration-500"
        >
          Ilaria Igliani
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-xs tracking-[0.2em] uppercase font-sans font-light transition-opacity duration-500 ${
                location.pathname === item.path
                  ? 'text-foreground opacity-100'
                  : 'text-muted-foreground hover:text-foreground opacity-60 hover:opacity-100'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground p-2"
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col gap-1.5">
            <span className={`block h-px bg-foreground transition-all duration-500 ${isOpen ? 'rotate-45 translate-y-[3.5px]' : ''}`} />
            <span className={`block h-px bg-foreground transition-all duration-500 ${isOpen ? '-rotate-45 -translate-y-[3.5px]' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-background/98 backdrop-blur-md z-40 animate-slow-fade-in">
          <div className="flex flex-col items-center justify-center h-full gap-10">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="font-serif text-2xl font-light text-foreground hover:opacity-60 transition-opacity duration-500"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
