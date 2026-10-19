  const className = "bg-gold text-black px-6 py-3 rounded-pill font-semibold hover:opacity-90 transition";
  return href ? (
    <a href={href} className={className} role="button">
      {children}
    </a>
  ) : (
    <button className={className}>
      {children}
    </button>
  );