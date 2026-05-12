import { Link, useLocation } from "react-router-dom";
import { Palette, User } from "lucide-react";
import { useEffect, useState } from "react";

export function Header() {
  const location = useLocation();
  const [isThemedPage, setIsThemedPage] = useState(false);

  useEffect(() => {
    // Check if we're on a painting detail page
    setIsThemedPage(location.pathname.startsWith('/painting/'));
  }, [location]);

  return (
    <header 
      className="border-b sticky top-0 z-50 transition-all duration-700"
      style={{
        backgroundColor: isThemedPage 
          ? 'var(--theme-bg, white)' 
          : 'white',
        borderBottomColor: isThemedPage 
          ? 'var(--theme-primary, #e5e7eb)' 
          : '#e5e7eb'
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-2 hover:opacity-80 transition-all duration-300"
        >
          <Palette 
            className="w-8 h-8 transition-colors duration-700" 
            style={{ 
              color: isThemedPage 
                ? 'var(--theme-primary, #1f2937)' 
                : '#1f2937' 
            }}
          />
          <span 
            className="text-2xl tracking-tight transition-colors duration-700"
            style={{ 
              color: isThemedPage 
                ? 'var(--theme-text, #1f2937)' 
                : '#1f2937' 
            }}
          >
            CHITRA BY ADITI
          </span>
        </Link>
        
        <nav className="flex items-center gap-8">
          <Link 
            to="/" 
            className="transition-colors duration-700 hover:opacity-80"
            style={{ 
              color: isThemedPage 
                ? 'var(--theme-text, #374151)' 
                : '#374151' 
            }}
          >
            Gallery
          </Link>
          <Link 
            to="/signup" 
            className="flex items-center gap-2 px-6 py-2 transition-all duration-700 hover:opacity-90"
            style={{
              backgroundColor: isThemedPage 
                ? 'var(--theme-primary, #1f2937)' 
                : '#1f2937',
              color: isThemedPage 
                ? 'var(--theme-bg, white)' 
                : 'white'
            }}
          >
            <User className="w-4 h-4" />
            Sign Up
          </Link>
        </nav>
      </div>
    </header>
  );
}