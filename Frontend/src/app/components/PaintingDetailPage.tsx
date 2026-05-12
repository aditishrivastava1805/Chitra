import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { useCart } from "../context/CartContext";
import { DecorativePattern } from "./DecorativePattern";

export function PaintingDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart(); //  use cart
  const [painting, setPainting] = useState<any>(null);

  // Fetch from backend
  useEffect(() => {
fetch(`${import.meta.env.VITE_API_URL}/api/paintings/${id}`) //API URL
      .then((res) => res.json())
      .then((data) => setPainting(data))
      .catch((err) => console.error("Error fetching painting:", err));
  }, [id]);

  if (!painting) {
    return (
<div className="relative min-h-screen">

  <div className="absolute inset-0 bg-background" />

  <DecorativePattern />

  <div className="relative z-10">

  </div>
          <DecorativePattern />

         <div className="relative z-10">
           </div>        <div className="text-center">
          <h2 className="text-2xl mb-4">Loading...</h2>
          <Link
            to="/exhibition"
            className="text-muted-foreground hover:text-foreground"
          >
            Return to Exhibition
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (painting.is_sold) return;

   addToCart({
  id: painting.id,
  title: painting.title,
  price: painting.price,
  imageUrl: `/images/paintings/${getImageName(painting.title)}`
});

    navigate("/cart"); // ✅ Go to cart
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-border/50">
        <div className="max-w-7xl mx-auto px-8 py-8 flex items-center justify-between">
          <Link
            to="/menu"
            className="text-2xl font-serif font-light tracking-wider text-foreground"
          >
            Chitra by Aditi
          </Link>
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
        </div>
      </header>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-8 py-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Image */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="sticky top-8"
          >
            <div className="bg-card shadow-md p-8">
              <img
                src={`/images/paintings/${getImageName(painting.title)}`}
                alt={painting.title}
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-10"
          >
            <div className="border-b border-border/50 pb-8">
              <h1 className="text-4xl md:text-5xl mb-4">
                {painting.title}
              </h1>
              <p className="text-lg text-muted-foreground mb-2">
                Aditi Shrivastava
              </p>
              <p className="text-sm text-muted-foreground">
                {painting.year}
              </p>
            </div>

            <div>
              <h3 className="text-sm tracking-widest uppercase text-muted-foreground mb-4">
                About This Work
              </h3>
              <p className="text-base leading-relaxed">
                {painting.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm tracking-widest uppercase text-muted-foreground mb-2">
                  Medium
                </h4>
                <p className="text-base">{painting.medium}</p>
              </div>
              <div>
                <h4 className="text-sm tracking-widest uppercase text-muted-foreground mb-2">
                  Dimensions
                </h4>
                <p className="text-base">{painting.dimensions}</p>
              </div>
            </div>

            {/* Price Section */}
            <div className="border-t border-border/50 pt-8">
              <h4 className="text-sm tracking-widest uppercase text-muted-foreground mb-2">
                Price
              </h4>

              <p className="text-2xl">
                ₹ {painting.price.toLocaleString("en-IN")}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <button
                  onClick={handleAddToCart}
                  disabled={painting.is_sold}
                  className={`flex-1 px-8 py-4 text-sm tracking-widest uppercase transition-colors duration-300 ${
                    painting.is_sold
                      ? "bg-gray-400 cursor-not-allowed text-white"
                      : "bg-foreground text-background hover:bg-foreground/90"
                  }`}
                >
                  {painting.is_sold ? "Sold Out" : "Add to Cart"}
                </button>

                <Link
                  to="/commissions"
                  className="flex-1 px-8 py-4 border border-border text-center hover:bg-muted transition-colors duration-300 text-sm tracking-widest uppercase"
                >
                  Request Commission
                </Link>
              </div>
            </div>

          </motion.div>
        </div>
      </motion.div>
    </div>
  );
function getImageName(title: string) {
  const map: Record<string, string> = {
    "Celestial Balance": "p1_celestial_balance.png",
    "Whispers Without Words": "p2_Whispers_Without_Words.png",
    "Lunar Serenity": "p3_Lunar_Serenity.png",
    "Enchanted Glow": "p4_Enchanted_Glow.png",
    "Petals of Peace": "p5_Petals_of_Peace.png",
    "Golden Lotus": "p6_Golden_Lotus.png",
    "Soul of Vrindavan": "p7_Soul_of_Vrindavan.png",
    "Flute of Devotion": "p8_Flute_of_Devotion.png",
    "Candles of Hope": "p9_Candles_of_Hope.png",
    "Urban Muse": "p10_Urban_Muse.png",
    "Electric Daydream": "p11_Electric_Daydream.png",
    "Ek Dant: The Eternal Blessing":
      "p12_Ek_Dant_The_Eternal_Blessing.png",
  };

  return map[title] || "p1_celestial_balance.png";
}
}