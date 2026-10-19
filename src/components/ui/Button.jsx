export default function Button({ children }) {
  return children === "Start for free" ? (
    <a href="/signup" className="bg-gold text-black px-6 py-3 rounded-pill font-semibold hover:opacity-90 transition" role="button">
      {children}
    </a>
  ) : (
    <button className="bg-gold text-black px-6 py-3 rounded-pill font-semibold hover:opacity-90 transition">
      {children}
    </button>
  );
}