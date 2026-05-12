
export interface Painting {
  id: string;
  title: string;
  artist: string;
  year: number;
  description: string;
  price: number;
  priceRange: string;
  imageUrl: string;
  medium: string;
  dimensions: string;
  theme: {
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
    backgroundColor: string;
    textColor: string;
    mood: string;
  };
}

export const paintings: Painting[] = [
  {
    id: "1",
    title: "Celestial Balance",
    artist: "Aditi Shrivastava",
    year: 2024,
    description: "Acrylic on canvas, this circular piece captures the harmony of opposites. Soft pink clouds cradle a delicate whale, symbolizing lightness and new beginnings. Opposite, a red-and-white koi drifts through a deep, star-speckled blue—calm, resilient, and timeless. The yin-yang flow gently weaves sky into sea, day into night, flight into swim. It's a quiet meditation on balance—where two different worlds don't clash, but complete each other.",
    price: 5000,
    priceRange: "₹5,000",
    imageUrl: "/images/paintings/p1_celestial_balance.png",
    medium: "Acrylic on canvas",
    dimensions: "18 inches (diameter)",
    theme: {
      primaryColor: "#8B6F47",
      secondaryColor: "#D4A574",
      accentColor: "#C9A961",
      backgroundColor: "#F5F1E8",
      textColor: "#3E2A1A",
      mood: "warm-classical"
    }
  },
  {
    id: "2",
    title: "Whispers Without Words",
    artist: "Aditi Shrivastava",
    year: 2024,
    description: "Sunflowers rise beneath their quiet closeness, petals glowing like unspoken promises. The artist paints them not in noise, but in stillness—in the tender space where two souls choose each other softly. It feels like a heart at peace brushing love in warm gold and gentle light.",
    price: 6000,
    priceRange: "₹6,000",
    imageUrl: "/images/paintings/p2_Whispers_Without_Words.png",
    medium: "Acrylic on canvas",
    dimensions: "14 × 18 inches",
    theme: {
      primaryColor: "#FF6B35",
      secondaryColor: "#004E89",
      accentColor: "#FFD23F",
      backgroundColor: "#F8F9FA",
      textColor: "#1A1A2E",
      mood: "vibrant-energetic"
    }
  },
  {
    id: "3",
    title: "Lunar Serenity",
    artist: "Aditi Shrivastava",
    year: 2024,
    description: "A dreamy portrait of a young woman crowned with moon phases, butterflies in her hair and red flowers in her hands. Set against a soft purple sky, it radiates serene, celestial beauty. She feels like a secret the sky keeps, half woman, half dream, glowing gently between earth and stars.",
    price: 10000,
    priceRange: "₹10,000",
    imageUrl: "/images/paintings/p3_Lunar_Serenity.png",
    medium: "Acrylic on canvas",
    dimensions: "35 × 40 inches",
    theme: {
      primaryColor: "#5A8F7B",
      secondaryColor: "#A4C3B2",
      accentColor: "#6B9080",
      backgroundColor: "#EAF4F4",
      textColor: "#2D4A3E",
      mood: "calm-natural"
    }
  },
  {
    id: "4",
    title: "Enchanted Glow",
    artist: "Aditi Shrivastava",
    year: 2024,
    description: "This painting captures a whimsical forest scene glowing under a deep green-blue night sky. In the foreground, red mushrooms with white speckles rise from lush grass, their bright caps adding a playful, fairy-tale charm. Behind them, soft golden hills rest quietly beneath a sky filled with floating, luminous green orbs that resemble magical fireflies or drifting lights. The overall mood feels dreamy and enchanted—like a hidden woodland where nature glows softly with mystery and wonder.",
    price: 1,
    priceRange: "₹1",
    imageUrl: "/images/paintings/p4_Enchanted_Glow.png",
    medium: "Acrylic on canvas",
    dimensions: "12 × 16 inches",
    theme: {
      primaryColor: "#2E3440",
      secondaryColor: "#D08770",
      accentColor: "#88C0D0",
      backgroundColor: "#ECEFF4",
      textColor: "#2E3440",
      mood: "modern-sophisticated"
    }
  },
  {
    id: "5",
    title: "Petals of Peace",
    artist: "Aditi Shrivastava",
    year: 2024,
    description: "A circular painting featuring delicate pink lilies in full bloom against a rich green background. Soft petals with gentle white highlights open gracefully, surrounded by fresh green leaves and tender buds. The simple composition and rounded frame give it a calm, elegant, and nature-inspired charm.",
    price: 4000,
    priceRange: "₹4,000",
    imageUrl: "/images/paintings/p5_Petals_of_Peace.png",
    medium: "Acrylic on canvas",
    dimensions: "14 inches (diameter)",
    theme: {
      primaryColor: "#8B1538",
      secondaryColor: "#DAA520",
      accentColor: "#2C5F2D",
      backgroundColor: "#FDF5E6",
      textColor: "#2B1810",
      mood: "rich-luxurious"
    }
  },
  {
    id: "6",
    title: "Golden Lotus",
    artist: "Aditi Shrivastava",
    year: 2024,
    description: "A circular 3D painting of blooming pink lotus flowers rising gracefully from tall green stems. The textured petals and layered leaves create depth, making the flowers appear almost lifelike against a rich blue background. Touches of gold leaf shimmer across the sky-like backdrop, adding elegance and contrast. The artwork blends serenity, dimension, and luxury in a harmonious composition.",
    price: 5000,
    priceRange: "₹5,000",
    imageUrl: "/images/paintings/p6_Golden_Lotus.png",
    medium: "Acrylic on canvas",
    dimensions: "18 inches (diameter)",
    theme: {
      primaryColor: "#FFB6D9",
      secondaryColor: "#FFF8DC",
      accentColor: "#98D8C8",
      backgroundColor: "#FFFBF5",
      textColor: "#4A4A4A",
      mood: "light-airy"
    }
  },
  {
    id: "7",
    title: "Soul of Vrindavan",
    artist: "Aditi Shrivastava",
    year: 2024,
    description: "This artwork captures Krishna and Radha in a moment of gentle closeness and divine connection. Krishna, adorned with a peacock feather, stands in serene strength, while Radha radiates grace and devotion beside him. The vibrant colors, floral details, and peacock symbolize their eternal love—pure, sacred, and timeless.",
    price: 5000,
    priceRange: "₹5,000",
    imageUrl: "/images/paintings/p7_Soul_of_Vrindavan.png",
    medium: "Acrylic on canvas",
    dimensions: "22 × 28 inches",
    theme: {
      primaryColor: "#1B2845",
      secondaryColor: "#274C77",
      accentColor: "#E7ECEF",
      backgroundColor: "#F4F6F9",
      textColor: "#1B2845",
      mood: "dark-mysterious"
    }
  },
  {
    id: "8",
    title: "Flute of Devotion",
    artist: "Aditi Shrivastava",
    year: 2024,
    description: "This serene painting depicts Krishna and Radha seated together by a tranquil riverside. Surrounded by blooming pink lotuses, gentle swans, and lush greenery, the scene radiates peace and devotion. Krishna, with his blue complexion and floral garland, sits lovingly beside Radha beneath a spreading tree. The calm waters, distant hills, and soft sky create a harmonious setting that reflects their eternal and divine love.",
    price: 6000,
    priceRange: "₹6,000",
    imageUrl: "/images/paintings/p8_Flute_of_Devotion.png",
    medium: "Acrylic on canvas",
    dimensions: "40 × 60 inches",
    theme: {
      primaryColor: "#E63946",
      secondaryColor: "#F1FAEE",
      accentColor: "#457B9D",
      backgroundColor: "#F8F9FA",
      textColor: "#1D3557",
      mood: "bold-urban"
    }
  },
  {
    id: "9",
    title: "Candles of Hope",
    artist: "Aditi Shrivastava",
    year: 2024,
    description: "This painting beautifully captures the spirit of Christmas through four glowing blue candles inspired by the Advent tradition. Each candle is adorned with a serene night scene of stars, pine trees, and a crescent moon, symbolizing hope and light. The soft purple background and golden accents enhance the warmth, reflecting the joy and peaceful anticipation of the holiday season.",
    price: 2000,
    priceRange: "₹2,000",
    imageUrl: "/images/paintings/p9_Candles_of_Hope.png",
    medium: "Acrylic on canvas",
    dimensions: "14 × 14 inches",
    theme: {
      primaryColor: "#A0522D",
      secondaryColor: "#DEB887",
      accentColor: "#8B0000",
      backgroundColor: "#FFF8DC",
      textColor: "#3E2723",
      mood: "warm-nostalgic"
    }
  },
  {
    id: "10",
    title: "Urban Muse",
    artist: "Aditi Shrivastava",
    year: 2024,
    description: "This stylish portrait features a young woman with long, flowing brown hair wearing a black bucket hat and a bold red top. The shirt carries a luxury-inspired logo, adding a modern fashion element to the composition. Set against a textured blue background with gold accents, the painting blends contemporary style with soft, expressive detailing. The overall mood feels confident, chic, and subtly glamorous.",
    price: 5000,
    priceRange: "₹5,000",
    imageUrl: "/images/paintings/p10_Urban_Muse.png",
    medium: "Acrylic on canvas",
    dimensions: "40 × 60 inches",
    theme: {
      primaryColor: "#4A90A4",
      secondaryColor: "#89B5C4",
      accentColor: "#FFFFFF",
      backgroundColor: "#EDF5F7",
      textColor: "#2C5F6F",
      mood: "tranquil-flowing"
    }
  },
  {
    id: "11",
    title: "Electric Daydream",
    artist: "Aditi Shrivastava",
    year: 2024,
    description: "The artwork blends modern pop aesthetics with soft, expressive detailing. The bold colors and stylized features give the painting a fresh, contemporary, and slightly whimsical mood.",
    price: 2000,
    priceRange: "₹2,000",
    imageUrl: "/images/paintings/p11_Electric_Daydream.png",
    medium: "Acrylic on canvas",
    dimensions: "14 × 14 inches",
    theme: {
      primaryColor: "#6B6E70",
      secondaryColor: "#A7A9AC",
      accentColor: "#C29F6A",
      backgroundColor: "#F2F2F2",
      textColor: "#3A3A3A",
      mood: "reflective-subtle"
    }
  },
  {
    id: "12",
    title: "Ek Dant: The Eternal Blessing",
    artist: "Aditi Shrivastava",
    year: 2024,
    description: "This striking painting presents a stylized half-portrait of Lord Ganesha, rendered in bold, vibrant colors. The golden-yellow face contrasts beautifully with the deep blue background adorned with leafy patterns. Intricate red and white decorative motifs embellish the crown and ear, highlighting traditional artistry. The single expressive eye and gracefully curved trunk create a sense of calm strength and divine presence, blending spirituality with modern artistic flair.",
    price: 3500,
    priceRange: "₹3,500",
    imageUrl: "/images/paintings/p12_Ek_Dant_The_Eternal_Blessing.png",
    medium: "Acrylic on canvas",
    dimensions: "18 × 24 inches",
    theme: {
      primaryColor: "#FF006E",
      secondaryColor: "#FFBE0B",
      accentColor: "#3A86FF",
      backgroundColor: "#FFFFFF",
      textColor: "#212529",
      mood: "joyful-exuberant"
    }
  }
];