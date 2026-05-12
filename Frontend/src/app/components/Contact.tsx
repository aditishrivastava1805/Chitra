import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useState } from "react";
import { Check, Mail, MapPin } from "lucide-react";

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
          <h2 className="text-3xl font-serif mb-4">Message Sent</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Thank you for reaching out. I will respond to your message within 1-2 business days.
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
        {/* Paisley-inspired patterns */}
        <svg className="absolute top-20 right-10 w-40 h-40" viewBox="0 0 100 100" fill="none">
          <path d="M50,10 Q70,30 70,50 Q70,70 50,90 Q40,80 40,50 Q40,30 50,10 Z" stroke="currentColor" strokeWidth="1" fill="none"/>
          <circle cx="50" cy="40" r="2" fill="currentColor"/>
          <circle cx="55" cy="55" r="1.5" fill="currentColor"/>
          <circle cx="45" cy="65" r="1.5" fill="currentColor"/>
        </svg>
        
        <svg className="absolute bottom-32 left-10 w-32 h-32" viewBox="0 0 100 100" fill="none">
          <path d="M20,50 Q30,30 50,30 Q70,30 80,50 Q70,70 50,70 Q30,70 20,50 Z" stroke="currentColor" strokeWidth="1" fill="none"/>
          <circle cx="50" cy="50" r="3" fill="currentColor"/>
          <path d="M35,50 L40,50 M60,50 L65,50" stroke="currentColor" strokeWidth="1"/>
        </svg>

        <svg className="absolute top-1/3 left-1/4 w-24 h-24" viewBox="0 0 100 100" fill="none">
          <path d="M50,20 L55,35 L70,40 L55,45 L50,60 L45,45 L30,40 L45,35 Z" stroke="currentColor" strokeWidth="1" fill="none"/>
          <circle cx="50" cy="40" r="2" fill="currentColor"/>
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
        className="max-w-5xl mx-auto px-8 py-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-10"
          >
            <div>
              <h1 className="text-4xl md:text-5xl mb-6">Get in Touch</h1>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                I'd love to hear from you. Whether you have questions about a 
                specific artwork, want to discuss a commission, or simply wish 
                to connect, feel free to reach out.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-muted flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <h3 className="text-sm tracking-widest uppercase text-muted-foreground mb-1">
                    Email
                  </h3>
                  <p className="text-base">chitrabyaditi18@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="border-t border-border/50 pt-8">
              <h3 className="text-sm tracking-widest uppercase text-muted-foreground mb-4">
                Response Time
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I typically respond to inquiries within 1-2 business days. 
                For urgent matters, please mention this in your message.
              </p>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
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

              <div>
                <label htmlFor="message" className="block text-sm mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={8}
                  placeholder="Share your thoughts, questions, or ideas..."
                  className="w-full px-4 py-3 bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-300 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-foreground text-background hover:bg-foreground/90 transition-colors duration-300 text-sm tracking-widest uppercase"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}