import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Info } from "lucide-react";

export function PaintingDetail() {
  const { id } = useParams();
  const [painting, setPainting] = useState<any>(null);

  // Fetch painting from backend
  useEffect(() => {
fetch(`${import.meta.env.VITE_API_URL}/api/paintings/${id}`) //API URL
      .then((res) => res.json())
      .then((data) => setPainting(data))
      .catch((err) => console.error("Error fetching painting:", err));
  }, [id]);

  // Apply theme from database
  useEffect(() => {
    if (!painting) return;

    document.documentElement.style.setProperty(
      "--theme-primary",
      painting.primary_color || "#5a4633"
    );
    document.documentElement.style.setProperty(
      "--theme-secondary",
      painting.secondary_color || "#c8b6a6"
    );
    document.documentElement.style.setProperty(
      "--theme-accent",
      painting.accent_color || "#d4a373"
    );
    document.documentElement.style.setProperty(
      "--theme-bg",
      painting.background_color || "#f5f3f0"
    );
    document.documentElement.style.setProperty(
      "--theme-text",
      painting.text_color || "#3e3e3e"
    );

    return () => {
      document.documentElement.style.removeProperty("--theme-primary");
      document.documentElement.style.removeProperty("--theme-secondary");
      document.documentElement.style.removeProperty("--theme-accent");
      document.documentElement.style.removeProperty("--theme-bg");
      document.documentElement.style.removeProperty("--theme-text");
    };
  }, [painting]);

  if (!painting) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl mb-4">Loading...</h2>
          <Link to="/" className="text-gray-600 hover:text-gray-900">
            Return to gallery
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen transition-colors duration-700"
      style={{ backgroundColor: painting.background_color || "#f5f3f0" }}
    >
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 transition-all duration-300 hover:gap-3"
          style={{ color: painting.text_color || "#3e3e3e", opacity: 0.7 }}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Gallery
        </Link>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Image */}
          <div
            className="p-12 shadow-lg"
            style={{
              backgroundColor: "white",
              borderLeft: `6px solid ${painting.accent_color || "#d4a373"}`,
            }}
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={`/images/paintings/${getImageName(painting.title)}`}
                alt={painting.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Info */}
          <div className="space-y-8">

            <div>
              <h1
                className="text-4xl mb-4"
                style={{ color: painting.primary_color || "#5a4633" }}
              >
                {painting.title}
              </h1>

              <p
                className="text-xl mb-2"
                style={{ color: painting.text_color || "#3e3e3e" }}
              >
                Aditi Shrivastava
              </p>

              <p style={{ color: painting.text_color || "#3e3e3e", opacity: 0.6 }}>
                {painting.year || "2024"}
              </p>
            </div>

            {/* Description */}
            <div style={{ borderTop: `1px solid ${painting.primary_color}40` }}>
              <h2
                className="text-xl mt-6 mb-4"
                style={{ color: painting.primary_color }}
              >
                Description
              </h2>
              <p style={{ color: painting.text_color, opacity: 0.8 }}>
                {painting.description}
              </p>
            </div>

            {/* Details */}
            <div style={{ borderTop: `1px solid ${painting.primary_color}40` }}>
              <h2
                className="text-xl mt-6 mb-4"
                style={{ color: painting.primary_color }}
              >
                Details
              </h2>
              <div className="space-y-2">
                <p>Medium: {painting.medium}</p>
                <p>Dimensions: {painting.dimensions}</p>
                <p>Year: {painting.year}</p>
              </div>
            </div>

            {/* Price */}
            <div style={{ borderTop: `1px solid ${painting.primary_color}40` }}>
              <div
                className="p-8 mt-6"
                style={{ backgroundColor: painting.primary_color }}
              >
                <p className="text-white opacity-80 text-sm uppercase">
                  Price
                </p>
                <p className="text-3xl text-white mb-6">
                  ₹ {painting.price}
                </p>

                <button
                  className="w-full py-4 transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundColor: painting.accent_color,
                    color: painting.text_color,
                  }}
                  disabled={painting.is_sold}
                >
                  {painting.is_sold ? "Sold Out" : "Buy Now"}
                </button>
              </div>

              <div
                className="mt-4 flex items-start gap-2 text-sm"
                style={{ color: painting.text_color, opacity: 0.7 }}
              >
                <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <p>
                  All purchases include a certificate of authenticity.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

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
