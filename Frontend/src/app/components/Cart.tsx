import { useCart, CartItem } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { DecorativePattern } from "./DecorativePattern";

export function Cart() {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  const total = cartItems.reduce(
    (sum: number, item: CartItem) => sum + item.price,
    0
  );

  return (
    <div className="relative min-h-screen bg-[#f8f6f3] overflow-hidden">

      {/* Background Pattern */}
      <DecorativePattern />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">

        <h1 className="text-3xl md:text-4xl font-serif mb-12">
          Your Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-lg mb-6">Your cart is empty.</p>
            <button
              onClick={() => navigate("/exhibition")}
              className="px-8 py-3 bg-black text-white uppercase tracking-widest"
            >
              Browse Artworks
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* LEFT SIDE — CART ITEMS */}
            <div className="lg:col-span-2 space-y-8">

              {cartItems.map((item: CartItem) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row gap-6 bg-white p-6 shadow-sm"
                >
                  {/* Image */}
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full sm:w-40 h-40 object-cover"
                  />

                  {/* Info */}
                  <div className="flex-1 flex flex-col justify-between">

                    <div>
                      <h3 className="text-xl font-serif">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-muted-foreground">
                        ₹ {item.price.toLocaleString("en-IN")}
                      </p>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="mt-4 text-sm text-red-500 hover:underline"
                    >
                      Remove
                    </button>

                  </div>
                </div>
              ))}

            </div>

            {/* RIGHT SIDE — ORDER SUMMARY */}
            <div className="bg-white p-8 shadow-md h-fit">

              <h2 className="text-2xl font-serif mb-8">
                Order Summary
              </h2>

              <div className="flex justify-between mb-4">
                <span>Subtotal</span>
                <span>
                  ₹ {total.toLocaleString("en-IN")}
                </span>
              </div>

              <div className="border-t pt-4 flex justify-between text-lg font-semibold">
                <span>Total</span>
                <span>
                  ₹ {total.toLocaleString("en-IN")}
                </span>
              </div>

              <button
                onClick={() => navigate("/payment")}
                className="mt-8 w-full py-4 bg-black text-white uppercase tracking-widest hover:bg-gray-800 transition"
              >
                Proceed to Checkout
              </button>

              <button
                onClick={clearCart}
                className="mt-4 w-full py-3 border border-black uppercase tracking-widest hover:bg-gray-100 transition"
              >
                Clear Cart
              </button>

            </div>

          </div>
        )}

      </div>
    </div>
  );
}