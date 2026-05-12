// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { motion } from "motion/react";

// export function Exhibition() {
//   const [paintings, setPaintings] = useState<any[]>([]);

//   useEffect(() => {
//     const fetchPaintings = async () => {
//       try {
//         const res = await fetch("http://localhost:5000/api/paintings");
//         const data = await res.json();

//         // ✅ Ensure we always set an array
//         if (Array.isArray(data)) {
//           setPaintings(data);
//         } else {
//           console.error("Unexpected API response:", data);
//           setPaintings([]);
//         }
//       } catch (err) {
//         console.error("Error fetching paintings:", err);
//         setPaintings([]);
//       }
//     };

//     fetchPaintings();
//   }, []);

//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//       <div className="relative h-[60vh] w-full overflow-hidden">
//         <motion.img
//           initial={{ scale: 1.1, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 1.5 }}
//           src={"/images/ui/hero_exhibitionpage.png"}
//           alt="Gallery Exhibition Space"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-background"></div>

//         <header className="absolute top-0 left-0 right-0 z-20">
//           <div className="max-w-7xl mx-auto px-8 py-8 flex items-center justify-between">
//             <Link
//               to="/menu"
//               className="text-2xl font-serif font-light tracking-wider text-brown drop-shadow-lg"
//             >
//               Chitra by Aditi
//             </Link>
//             <Link
//               to="/menu"
//               className="text-sm tracking-widest uppercase text-brown/90 hover:text-white transition-colors duration-300 drop-shadow-lg"
//             >
//               Menu
//             </Link>
//           </div>
//         </header>

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5, duration: 0.8 }}
//           className="absolute bottom-0 left-0 right-0 z-10 text-center pb-16 px-8"
//         >
//           <h1 className="text-5xl md:text-6xl mb-4 text-brown drop-shadow-2xl">
//             Exhibition Hall
//           </h1>
//           <p className="text-brown/90 text-lg font-light drop-shadow-lg">
//             A curated collection of contemporary artworks
//           </p>
//         </motion.div>
//       </div>

//       {/* Gallery Grid */}
//       <div className="relative bg-gradient-to-b from-background via-[#faf9f7] to-[#f5f3f0]">
//         <div className="relative max-w-7xl mx-auto px-8 py-20">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
//             {paintings.map((painting, index) => (
//               <PaintingCard
//                 key={painting.id}
//                 painting={painting}
//                 index={index}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function PaintingCard({
//   painting,
//   index,
// }: {
//   painting: any;
//   index: number;
// }) {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 40 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: index * 0.1, duration: 0.8 }}
//     >
//       <Link
//         to={`/painting/${painting.id}`}
//         className="block group"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         <div className="relative overflow-hidden bg-card shadow-sm mb-6 aspect-[3/4]">
//           <motion.img
//             src={`/images/paintings/${getImageName(painting.title)}`}
//             alt={painting.title}
//             className="w-full h-full object-cover"
//             animate={{ scale: isHovered ? 1.05 : 1 }}
//             transition={{ duration: 0.7, ease: "easeOut" }}
//           />

//           {/* ✅ Support both sold and is_sold */}
//           {(painting.sold || painting.is_sold) && (
//             <div className="absolute top-4 right-4 bg-red-600 text-white text-xs px-3 py-1 tracking-widest">
//               SOLD
//             </div>
//           )}

//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: isHovered ? 1 : 0 }}
//             transition={{ duration: 0.5 }}
//             className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center p-8 text-center"
//           >
//             <motion.p
//               initial={{ y: 10, opacity: 0 }}
//               animate={{
//                 y: isHovered ? 0 : 10,
//                 opacity: isHovered ? 1 : 0,
//               }}
//               transition={{ delay: 0.1, duration: 0.4 }}
//               className="text-white/90 text-sm font-light leading-relaxed mb-4 line-clamp-4"
//             >
//               {painting.description}
//             </motion.p>

//             <motion.p
//               initial={{ y: 10, opacity: 0 }}
//               animate={{
//                 y: isHovered ? 0 : 10,
//                 opacity: isHovered ? 1 : 0,
//               }}
//               transition={{ delay: 0.2, duration: 0.4 }}
//               className="text-white/70 text-sm tracking-wider"
//             >
//               ₹ {painting.price}
//             </motion.p>
//           </motion.div>
//         </div>

//         <div className="space-y-1">
//           <h3 className="text-xl font-serif font-normal group-hover:text-muted-foreground transition-colors duration-300">
//             {painting.title}
//           </h3>
//           <p className="text-sm text-muted-foreground">
//             Aditi Shrivastava
//           </p>
//           <p className="text-sm text-muted-foreground">
//             {painting.medium}
//           </p>
//         </div>
//       </Link>
//     </motion.div>
//   );
// }

// function getImageName(title: string) {
//   const map: Record<string, string> = {
//     "Celestial Balance": "p1_celestial_balance.png",
//     "Whispers Without Words": "p2_Whispers_Without_Words.png",
//     "Lunar Serenity": "p3_Lunar_Serenity.png",
//     "Enchanted Glow": "p4_Enchanted_Glow.png",
//     "Petals of Peace": "p5_Petals_of_Peace.png",
//     "Golden Lotus": "p6_Golden_Lotus.png",
//     "Soul of Vrindavan": "p7_Soul_of_Vrindavan.png",
//     "Flute of Devotion": "p8_Flute_of_Devotion.png",
//     "Candles of Hope": "p9_Candles_of_Hope.png",
//     "Urban Muse": "p10_Urban_Muse.png",
//     "Electric Daydream": "p11_Electric_Daydream.png",
//     "Ek Dant: The Eternal Blessing":
//       "p12_Ek_Dant_The_Eternal_Blessing.png",
//   };

//   return map[title] || "p1_celestial_balance.png";
// }
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

interface Painting {
  id: string;
  title: string;
  description: string;
  price: number;
  medium: string;
  is_sold: boolean;
}

export function Exhibition() {
  const [paintings, setPaintings] = useState<Painting[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPaintings = async () => {
      try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/paintings`); //API URL
        const data = await res.json();

        if (Array.isArray(data)) {
          setPaintings(data);
        } else {
          console.error("Unexpected response:", data);
        }
      } catch (err) {
        console.error("Error fetching paintings:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPaintings();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading paintings...
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          src={"/images/ui/hero_exhibitionpage.png"}
          alt="Gallery Exhibition Space"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-background"></div>

        <header className="absolute top-0 left-0 right-0 z-20">
          <div className="max-w-7xl mx-auto px-8 py-8 flex items-center justify-between">
            <Link
              to="/menu"
              className="text-2xl font-serif font-light tracking-wider text-brown drop-shadow-lg"
            >
              Chitra by Aditi
            </Link>
            <Link
              to="/menu"
              className="text-sm tracking-widest uppercase text-brown/90 hover:text-white transition-colors duration-300 drop-shadow-lg"
            >
              Menu
            </Link>
          </div>
        </header>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute bottom-0 left-0 right-0 z-10 text-center pb-16 px-8"
        >
          <h1 className="text-5xl md:text-6xl mb-4 text-brown drop-shadow-2xl">
            Exhibition Hall
          </h1>
          <p className="text-brown/90 text-lg font-light drop-shadow-lg">
            A curated collection of contemporary artworks
          </p>
        </motion.div>
      </div>

      {/* Gallery Grid */}
      <div className="relative bg-gradient-to-b from-background via-[#faf9f7] to-[#f5f3f0]">
        <div className="relative max-w-7xl mx-auto px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {paintings.map((painting, index) => (
              <PaintingCard
                key={painting.id}
                painting={painting}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function PaintingCard({
  painting,
  index,
}: {
  painting: Painting;
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
    >
      <Link
        to={`/painting/${painting.id}`}
        className="block group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden bg-card shadow-sm mb-6 aspect-[3/4]">
          <motion.img
            src={`/images/paintings/${getImageName(painting.title)}`}
            alt={painting.title}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          />

          {painting.is_sold && (
            <div className="absolute top-4 right-4 bg-red-600 text-white text-xs px-3 py-1 tracking-widest">
              SOLD
            </div>
          )}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center p-8 text-center"
          >
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{
                y: isHovered ? 0 : 10,
                opacity: isHovered ? 1 : 0,
              }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="text-white/90 text-sm font-light leading-relaxed mb-4 line-clamp-4"
            >
              {painting.description}
            </motion.p>

            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{
                y: isHovered ? 0 : 10,
                opacity: isHovered ? 1 : 0,
              }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="text-white/70 text-sm tracking-wider"
            >
              ₹ {painting.price}
            </motion.p>
          </motion.div>
        </div>

        <div className="space-y-1">
          <h3 className="text-xl font-serif font-normal group-hover:text-muted-foreground transition-colors duration-300">
            {painting.title}
          </h3>
          <p className="text-sm text-muted-foreground">
            Aditi Shrivastava
          </p>
          <p className="text-sm text-muted-foreground">
            {painting.medium}
          </p>
        </div>
      </Link>
    </motion.div>
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