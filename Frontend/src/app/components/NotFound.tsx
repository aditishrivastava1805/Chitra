import { Link } from "react-router-dom";
import { motion } from "motion/react";

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl"
      >
        <h1 className="text-6xl md:text-7xl mb-6">404</h1>
        <h2 className="text-2xl md:text-3xl mb-4 font-light">Page Not Found</h2>
        <p className="text-muted-foreground text-lg mb-12 font-light leading-relaxed">
          The artwork you're looking for seems to have been moved to another gallery.
        </p>
        <Link
          to="/"
          className="inline-block px-8 py-4 bg-foreground text-background hover:bg-foreground/90 transition-colors duration-300 text-sm tracking-widest uppercase"
        >
          Return Home
        </Link>
      </motion.div>
    </div>
  );
}