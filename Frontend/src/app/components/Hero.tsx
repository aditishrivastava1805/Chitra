import { Link } from "react-router-dom";
import { motion } from "motion/react";

export function Hero() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden group"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <motion.img
           src="/images/ui/hero_bg.jpg"

          alt="Gallery Wall"
          className="w-full h-full object-cover transition-transform duration-[3000ms] ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50 transition-all duration-1000 group-hover:from-black/50 group-hover:via-black/40 group-hover:to-black/60"></div>
      </div>

      {/* Navigation Bar */}
      <motion.nav 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-12 py-8"
      >
        <Link to="/" className="text-white text-xl tracking-wider font-serif font-light hover:opacity-80 transition-opacity duration-300">
          Chitra by Aditi
        </Link>
        <Link 
          to="/menu" 
          className="text-white text-sm tracking-widest uppercase hover:opacity-70 transition-all duration-300 hover:tracking-[0.3em]"
        >
          Menu
        </Link>
      </motion.nav>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-8 max-w-4xl">
        <motion.h1 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-white mb-6 text-6xl md:text-7xl lg:text-8xl transition-all duration-700 group-hover:scale-105"
        >
          A Digital Art Museum
        </motion.h1>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="text-white/90 text-lg md:text-xl mb-12 font-light tracking-wide transition-opacity duration-700 group-hover:text-white"
        >
          Explore original paintings in a calm, curated space.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
        >
          <Link 
            to="/exhibition"
            className="inline-block px-12 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/30 hover:bg-white/20 hover:border-white/50 hover:scale-105 transition-all duration-500 text-sm tracking-widest uppercase"
          >
            Enter Exhibition
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}