import { Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { CartItem, useCart } from "../context/CartContext";
import { DecorativePattern } from "./DecorativePattern";

export function Payment() {

const navigate = useNavigate();
const { cartItems, clearCart } = useCart();

const [fullName, setFullName] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
const [address, setAddress] = useState("");
const [city, setCity] = useState("");
const [state, setState] = useState("");
const [pincode, setPincode] = useState("");
const [error, setError] = useState<string | null>(null);

const total = cartItems.reduce(
(sum: number, item: { price: number }) => sum + item.price,
0
);

if (cartItems.length === 0) {
return ( <div className="relative min-h-screen"> <div className="absolute inset-0 bg-[#f8f6f3]" /> <DecorativePattern /> <div className="relative z-10 px-6 py-16"> <h2 className="text-xl">Your cart is empty</h2> </div> </div>
);
}

const handlePayment = async () => {


if (!fullName || !email || !phone || !address || !city || !state || !pincode) {
  setError("Please fill all shipping details.");
  return;
}

try {

  const options = {
    key: "rzp_test_SIm8bc7HcvKDfC",
    amount: total * 100,
    currency: "INR",
    name: "Chitra by Aditi",
    description: "Painting Purchase",

    handler: async function () {

      try {

        for (const item of cartItems) {

          await fetch(import.meta.env.VITE_API_URL + "/api/orders", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              paintingId: item.id,
              full_name: fullName,
              email,
              phone,
              address,
              city,
              state,
              pincode
            }),
          });

        }

        clearCart();
        navigate("/success");

      } catch (err) {
        console.error(err);
        setError("Order saving failed.");
      }

    },

    theme: { color: "#000000" },
  };

  const Razorpay = (window as any).Razorpay;
  const rzp = new Razorpay(options);
  rzp.open();

} catch (err) {
  console.error(err);
  setError("Payment failed.");
}

};

return (

<div className="min-h-screen bg-background">

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
        className="flex items-center gap-2 text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </button>

    </div>
  </header>

  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="max-w-6xl mx-auto px-8 py-16"
  >

    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

      {/* ORDER SUMMARY */}

      <div className="lg:col-span-2">

        <h2 className="text-2xl font-serif mb-8">Order Summary</h2>

        <div className="bg-card border border-border/50 p-6 space-y-6">

          {cartItems.map((item: CartItem) => (
            <div key={item.id} className="border-b pb-4">
              <h3 className="text-lg font-serif">{item.title}</h3>
              <p className="text-muted-foreground">
                ₹ {item.price.toLocaleString("en-IN")}
              </p>
            </div>
          ))}

          <div className="pt-4">
            <p className="text-xl font-serif">
              Total: ₹ {total.toLocaleString("en-IN")}
            </p>
          </div>

        </div>

      </div>

      {/* SHIPPING FORM */}

      <div className="lg:col-span-3">

        <h2 className="text-2xl font-serif mb-8">Shipping Information</h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <div className="space-y-4">

          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full border p-3"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-3"
          />

          <input
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border p-3"
          />

          <textarea
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full border p-3"
          />

          <div className="grid grid-cols-3 gap-4">

            <input
              type="text"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="border p-3"
            />

            <input
              type="text"
              placeholder="State"
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="border p-3"
            />

            <input
              type="text"
              placeholder="Pincode"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              className="border p-3"
            />

          </div>

          <button
            onClick={handlePayment}
            className="w-full px-8 py-4 bg-foreground text-background"
          >
            Pay ₹ {total.toLocaleString("en-IN")}
          </button>

        </div>

      </div>

    </div>

  </motion.div>

</div>

);
}
