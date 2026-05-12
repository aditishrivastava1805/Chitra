import { paintings } from "../data/paintings";
import { PaintingCard } from "./PaintingCard";

export function Gallery() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-20 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl tracking-tight mb-6 text-gray-900">
            Curated Collection
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Discover exceptional works from contemporary masters and emerging talents. 
            Each piece is carefully selected for its artistic merit and investment potential.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {paintings.map((painting) => (
            <PaintingCard key={painting.id} painting={painting} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-600">
          <p>© 2026 Galerie. All artworks are original and authenticated.</p>
        </div>
      </footer>
    </div>
  );
}
