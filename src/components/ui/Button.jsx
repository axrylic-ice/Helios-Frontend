export default function Button({ children }) {
  return (
    <button className="bg-gold text-black px-6 py-3 rounded-pill font-semibold hover:opacity-90 transition">
      {children}
    </button>
  );
}