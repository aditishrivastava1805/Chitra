import { Link } from "react-router-dom";
import { motion } from "motion/react";

export function About() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Decorative Pattern Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.3]">
        {/* Floral mandala patterns */}
        <svg className="absolute top-10 right-20 w-48 h-48" viewBox="0 0 120 120" fill="none">
          <circle cx="60" cy="60" r="40" stroke="currentColor" strokeWidth="1" fill="none"/>
          <circle cx="60" cy="60" r="30" stroke="currentColor" strokeWidth="1" fill="none"/>
          <circle cx="60" cy="60" r="20" stroke="currentColor" strokeWidth="1" fill="none"/>
          <path d="M60,20 L60,100 M20,60 L100,60" stroke="currentColor" strokeWidth="1"/>
          <path d="M35,35 L85,85 M85,35 L35,85" stroke="currentColor" strokeWidth="0.5"/>
          <circle cx="60" cy="20" r="3" fill="currentColor"/>
          <circle cx="60" cy="100" r="3" fill="currentColor"/>
          <circle cx="20" cy="60" r="3" fill="currentColor"/>
          <circle cx="100" cy="60" r="3" fill="currentColor"/>
        </svg>

        <svg className="absolute bottom-20 left-10 w-40 h-40" viewBox="0 0 120 120" fill="none">
          <path d="M60,30 Q70,45 60,60 Q50,45 60,30 Z" stroke="currentColor" strokeWidth="1" fill="none"/>
          <path d="M60,30 Q75,40 90,40 Q75,50 60,60" stroke="currentColor" strokeWidth="1" fill="none"/>
          <path d="M60,60 Q70,75 60,90 Q50,75 60,60 Z" stroke="currentColor" strokeWidth="1" fill="none"/>
          <path d="M60,60 Q45,70 30,70 Q45,60 60,60" stroke="currentColor" strokeWidth="1" fill="none"/>
          <circle cx="60" cy="60" r="3" fill="currentColor"/>
        </svg>

        <svg className="absolute top-1/2 left-1/3 w-32 h-32" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="1" fill="none"/>
          <circle cx="50" cy="25" r="5" stroke="currentColor" strokeWidth="0.5" fill="none"/>
          <circle cx="50" cy="75" r="5" stroke="currentColor" strokeWidth="0.5" fill="none"/>
          <circle cx="25" cy="50" r="5" stroke="currentColor" strokeWidth="0.5" fill="none"/>
          <circle cx="75" cy="50" r="5" stroke="currentColor" strokeWidth="0.5" fill="none"/>
        </svg>
      </div>

      {/* Header */}
      <header className="border-b border-border/50">
        <div className="max-w-7xl mx-auto px-8 py-8 flex items-center justify-between">
          <Link to="/menu" className="text-2xl font-serif font-light tracking-wider text-foreground">
            Chitra by Aditi
          </Link>
          <Link to="/menu" className="text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-300">
            Menu
          </Link>
        </div>
      </header>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-8 py-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Portrait */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-6"
          >
            <div className="aspect-[3/4] overflow-hidden bg-card shadow-md">
              <img
                src={"/images/artist/aditi_shrivastava.png"}
                alt="Aditi - Artist"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-serif">Aditi Shrivastava</h3>
              <p className="text-sm text-muted-foreground">Artist & Engineer</p>
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-10"
          >
            <div>
              <h1 className="text-4xl md:text-5xl mb-8">About the Artist</h1>
            </div>

            {/* Artist Statement */}
            <div>
              <h2 className="text-sm tracking-widest uppercase text-muted-foreground mb-4">
                About the Artist
              </h2>
              <div className="space-y-4 text-base leading-relaxed">
                <p>
                  I'm Aditi Shrivastava — an engineer by profession and a self-taught artist by passion.
                </p>
                <p>
                  My journey with art began in high school, where colors slowly became my language of expression. 
                  While engineering shaped my analytical mind, painting nurtured my creative soul. Over time, 
                  art became more than a hobby — it became a way to explore depth, emotion, and meaning beyond words.
                </p>
                <p>
                  I primarily work with acrylics, constantly experimenting with themes ranging from spirituality 
                  and culture to feminine energy, nature, and contemporary expression. I don't limit myself to 
                  one style — I love exploring, learning, and evolving with every canvas.
                </p>
                <p>
                  Through my work, I hope viewers don't just see a painting — I hope they feel its depth, 
                  understand its motive, and connect with the story it carries.
                </p>
                <p>
                  This space is my way of sharing that journey with everyone who finds beauty in art.
                </p>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="pt-8 border-t border-border/50">
              <Link
                to="/contact"
                className="inline-block px-8 py-4 bg-foreground text-background hover:bg-foreground/90 transition-colors duration-300 text-sm tracking-widest uppercase"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}