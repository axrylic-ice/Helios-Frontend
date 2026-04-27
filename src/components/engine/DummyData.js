const lstmDetails = {
  weight: "High (0.85)",
  mechanism: "Long Short-Term Memory (LSTM) is a deep learning architecture that processes sequences of parallel market data. Unlike standard models, it remembers patterns over time, identifying recurring 'volatility clusters' where the Naira historically devalues against the Dollar.",
  signalEffect: "Translates complex price movements into a 72-hour forecast. If this signal is 'Bullish,' it means historical patterns suggest the Naira will hold its ground; if 'Bearish,' the model has detected a sequence that usually leads to a price spike."
};

const marketPulseDetails = {
  weight: "Medium (0.60)",
  mechanism: "This engine scrapes and analyzes real-time headers from CBN press releases, Bloomberg, and local financial news. Using Natural Language Processing (NLP), it quantifies the 'mood' of the market—detecting fear, optimism, or uncertainty before they reflect in the price.",
  signalEffect: "Acts as an early-warning system. In plain English: it tells you if the 'vibe' of the market is panicky. A high 'Fear Index' here often precedes a liquidity crunch, even if the current exchange rate hasn't moved yet."
};

const polyBayseDetails = {
  weight: "Critical (0.92)",
  mechanism: "The Poly-Bayesian model uses advanced probability theory to weigh multiple 'what-if' scenarios simultaneously. It combines hard economic data (Poly) with historical prior knowledge (Bayesian) to calculate the exact likelihood of a market regime shift.",
  signalEffect: "This is your 'Confidence Score' generator. It tells you exactly how sure the system is about its advice. In plain English: it moves the 'ACT' button. If it says 90%, the math is overwhelming; if it's 50%, the market is currently too random to bet on."
};

export { lstmDetails, marketPulseDetails, polyBayseDetails };