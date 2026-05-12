import { Link } from "react-router-dom";
import { motion } from "motion/react";

const menuItems = [
  { title: "Exhibition", path: "/exhibition", delay: 0.2 },
  { title: "About the Artist", path: "/about", delay: 0.4 },
  { title: "Commissions", path: "/commissions", delay: 0.6 },
  { title: "Contact", path: "/contact", delay: 0.8 },
];

export function Menu() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-8 py-20 relative overflow-hidden">
      {/* Decorative Henna-style Patterns */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.4]">
        {/* Top Left Corner */}
        <svg className="absolute top-0 left-0 w-64 h-64" viewBox="0 0 200 200" fill="none">
          <path d="M0,50 Q25,25 50,50 T100,50" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <circle cx="50" cy="50" r="3" fill="currentColor"/>
          <path d="M20,80 Q30,70 40,80 Q50,90 60,80" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <path d="M10,100 L30,100 M20,90 L20,110" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="45" cy="100" r="2" fill="currentColor"/>
          <circle cx="55" cy="100" r="2" fill="currentColor"/>
          <path d="M70,70 Q75,60 80,70 Q85,80 90,70" stroke="currentColor" strokeWidth="1" fill="none"/>
        </svg>
        
        {/* Top Right Corner */}
        <svg className="absolute top-0 right-0 w-64 h-64 rotate-90" viewBox="0 0 200 200" fill="none">
          <path d="M0,50 Q25,25 50,50 T100,50" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <circle cx="50" cy="50" r="3" fill="currentColor"/>
          <path d="M20,80 Q30,70 40,80 Q50,90 60,80" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <circle cx="35" cy="95" r="2" fill="currentColor"/>
        </svg>

        {/* Bottom Left Corner */}
        <svg className="absolute bottom-0 left-0 w-64 h-64 -rotate-90" viewBox="0 0 200 200" fill="none">
          <path d="M0,50 Q25,25 50,50 T100,50" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <circle cx="50" cy="50" r="3" fill="currentColor"/>
          <path d="M20,80 Q30,70 40,80 Q50,90 60,80" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        </svg>

        {/* Bottom Right Corner */}
        <svg className="absolute bottom-0 right-0 w-64 h-64 rotate-180" viewBox="0 0 200 200" fill="none">
          <path d="M0,50 Q25,25 50,50 T100,50" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <circle cx="50" cy="50" r="3" fill="currentColor"/>
          <path d="M20,80 Q30,70 40,80 Q50,90 60,80" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <circle cx="35" cy="95" r="2" fill="currentColor"/>
        </svg>
      </div>

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-20 relative"
      >
        <Link to="/" className="text-3xl font-serif font-light tracking-wider text-foreground">
          Chitra by Aditi
        </Link>
        {/* Small decorative element under logo */}
        <div className="mt-4 flex justify-center">
          <svg width="60" height="20" viewBox="0 0 60 20" fill="none">
            <circle cx="30" cy="10" r="2" fill="currentColor" opacity="0.9"/>
            <circle cx="20" cy="10" r="1.5" fill="currentColor" opacity="0.5"/>
            <circle cx="40" cy="10" r="1.5" fill="currentColor" opacity="0.5"/>
            <circle cx="10" cy="10" r="1" fill="currentColor" opacity="0.3"/>
            <circle cx="50" cy="10" r="1" fill="currentColor" opacity="0.3"/>
          </svg>
        </div>
      </motion.div>

      {/* Menu Items */}
      <nav className="flex flex-col items-center space-y-10 max-w-2xl">
        {menuItems.map((item) => (
          <motion.div
            key={item.path}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: item.delay, duration: 0.6 }}
            className="relative group"
          >
            <Link
              to={item.path}
              className="text-4xl md:text-5xl font-serif font-light text-foreground hover:text-foreground/70 transition-colors duration-500 tracking-wide"
            >
              {item.title}
              <span className="absolute bottom-0 left-0 w-0 h-px bg-foreground group-hover:w-full transition-all duration-700"></span>
            </Link>
          </motion.div>
        ))}
      </nav>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="mt-20 text-sm text-muted-foreground tracking-widest uppercase"
      >
        Navigate Your Experience
      </motion.p>
    </div>
  );
}