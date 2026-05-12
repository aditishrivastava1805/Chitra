import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useState } from "react";
import { Check } from "lucide-react";

export function Commissions() {

  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    size: "",
    description: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await fetch(`${import.meta.env.VITE_API_URL}/api/commissions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-8">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-md"
        >
          <div className="mb-6 flex justify-center">
            <div className="w-16 h-16 bg-foreground rounded-full flex items-center justify-center">
              <Check className="w-8 h-8 text-background" />
            </div>
          </div>
          <h2 className="text-3xl font-serif mb-4">Request Received</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Thank you for your commission inquiry. I will review your request and respond within 2-3 business days.
          </p>
          <Link
            to="/menu"
            className="inline-block px-8 py-3 bg-foreground text-background hover:bg-foreground/90 transition-colors duration-300 text-sm tracking-widest uppercase"
          >
            Return to Menu
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Decorative Pattern Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.3]">
        {/* Artistic brush stroke patterns */}
        <svg className="absolute top-16 left-16 w-56 h-56" viewBox="0 0 150 150" fill="none">
          <path d="M20,75 Q40,20 75,30 Q110,40 130,75 Q110,110 75,120 Q40,130 20,75 Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <circle cx="75" cy="75" r="35" stroke="currentColor" strokeWidth="1" fill="none"/>
          <circle cx="75" cy="50" r="4" fill="currentColor"/>
          <circle cx="75" cy="100" r="4" fill="currentColor"/>
          <circle cx="50" cy="75" r="4" fill="currentColor"/>
          <circle cx="100" cy="75" r="4" fill="currentColor"/>
          <path d="M60,60 L90,90 M90,60 L60,90" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
        </svg>

        <svg className="absolute bottom-24 right-16 w-48 h-48" viewBox="0 0 120 120" fill="none">
          <path d="M60,10 L70,40 L100,50 L70,60 L60,90 L50,60 L20,50 L50,40 Z" stroke="currentColor" strokeWidth="1" fill="none"/>
          <circle cx="60" cy="50" r="15" stroke="currentColor" strokeWidth="1" fill="none"/>
          <circle cx="60" cy="50" r="3" fill="currentColor"/>
        </svg>

        <svg className="absolute top-1/3 right-1/3 w-36 h-36" viewBox="0 0 100 100" fill="none">
          <path d="M30,50 Q40,30 60,40 Q80,50 70,70 Q50,80 40,60 Q30,50 30,50 Z" stroke="currentColor" strokeWidth="1" fill="none"/>
          <circle cx="50" cy="50" r="2" fill="currentColor"/>
          <path d="M50,35 L50,65 M35,50 L65,50" stroke="currentColor" strokeWidth="0.5"/>
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
        className="max-w-4xl mx-auto px-8 py-16"
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl mb-6">Commission a Painting</h1>
          <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
            I accept a limited number of commissions each year. Share your vision, 
            and let's create something meaningful together.
          </p>
        </motion.div>

        <motion.form
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          onSubmit={handleSubmit}
          className="space-y-8"
        >
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-300"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-300"
              />
            </div>
          </div>

          {/* Commission Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="subject" className="block text-sm mb-2">
                Subject Matter
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-300"
              >
                <option value="">Select a subject</option>
                <option value="portrait">Portrait</option>
                <option value="landscape">Landscape</option>
                <option value="abstract">Abstract</option>
                <option value="still-life">Still Life</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="size" className="block text-sm mb-2">
                Preferred Size
              </label>
              <select
                id="size"
                name="size"
                value={formData.size}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-300"
              >
                <option value="">Select a size</option>
                <option value="small">Small (18×24 inches)</option>
                <option value="medium">Medium (30×40 inches)</option>
                <option value="large">Large (48×60 inches)</option>
                <option value="custom">Custom Size</option>
              </select>
            </div>
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm mb-2">
              Describe Your Vision
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows={8}
              placeholder="Tell me about your ideas, inspiration, color preferences, mood, and any specific elements you'd like included..."
              className="w-full px-4 py-3 bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-300 resize-none"
            />
          </div>

          {/* Information Box */}
          <div className="bg-muted border border-border/50 p-6 space-y-2">
            <h3 className="text-sm tracking-widest uppercase text-muted-foreground mb-3">
              Commission Process
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Initial consultation and concept development: 1-2 weeks</li>
              <li>• Painting creation: 4-8 weeks depending on size and complexity</li>
              <li>• 50% deposit required to begin, balance due upon completion</li>
              <li>• Pricing starts at ₹2,000 for small works</li>
            </ul>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-8 py-4 bg-foreground text-background hover:bg-foreground/90 transition-colors duration-300 text-sm tracking-widest uppercase"
          >
            Submit Commission Request
          </button>
        </motion.form>
      </motion.div>
    </div>
  );
  }