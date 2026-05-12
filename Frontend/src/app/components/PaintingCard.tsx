import { Link } from "react-router-dom";
import { Painting } from "../data/paintings";
import { motion } from "motion/react";

interface PaintingCardProps {
  painting: Painting;
}

export function PaintingCard({ painting }: PaintingCardProps) {
  return (
    <Link to={`/painting/${painting.id}`}>
      <motion.article 
        className="group cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Image Container - Museum style with white border/mat */}
        <div className="bg-white p-8 shadow-sm hover:shadow-xl transition-shadow duration-300">
          <div className="aspect-[4/3] overflow-hidden bg-gray-100">
            <img
              src={painting.imageUrl}
              alt={painting.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Painting Information */}
        <div className="mt-6 space-y-2">
          <h3 className="text-2xl tracking-tight text-gray-900 group-hover:text-gray-600 transition-colors">
            {painting.title}
          </h3>
          <p className="text-gray-600">
            {painting.artist}, {painting.year}
          </p>
          <p className="text-gray-500 text-sm">
            {painting.medium} • {painting.dimensions}
          </p>
          <p className="text-gray-900 pt-2">
            {painting.priceRange}
          </p>
        </div>
      </motion.article>
    </Link>
  );
}