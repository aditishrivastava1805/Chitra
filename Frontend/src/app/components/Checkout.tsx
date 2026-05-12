import { useNavigate } from "react-router-dom";

export function Checkout() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/payment");
  };

  return (
    <div className="max-w-3xl mx-auto p-10">
      <h1 className="text-3xl mb-8">Checkout</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <input placeholder="Full Name" required className="w-full border p-3" />
        <input placeholder="Email" required className="w-full border p-3" />
        <input placeholder="Phone" required className="w-full border p-3" />
        <input placeholder="Address" required className="w-full border p-3" />

        <button type="submit" className="px-6 py-3 bg-black text-white">
          Continue to Payment
        </button>
      </form>
    </div>
  );
}