// lib/api.js

const API_BASE = "https://helios-backend-nf3l.onrender.com";

// ===============================
// 🔐 TOKEN HANDLING
// ===============================
const getToken = () => {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("token");
};

const getUser = () => {
  if (typeof window === "undefined") return null;
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

// ===============================
// 🔁 BASE REQUEST FUNCTION
// ===============================
const request = async (endpoint, options = {}) => {
  const token = getToken();

  const res = await fetch(`${API_BASE}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
      ...(token && { Authorization: `Bearer ${token}` }),
    },
  });

  // Handle auth failure globally
  if (res.status === 401) {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login";
    return;
  }

  const data = await res.json();
  return data;
};

// ===============================
// 🔐 AUTH
// ===============================
export const signup = async ({ email, password, company_name }) => {
  const data = await request("/auth/signup", {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
      company_name,
      country: "NG",
    }),
  });

  if (data?.token) {
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.data.user));
  }

  return data;
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  window.location.href = "/login";
};

// ===============================
// 📊 DECISIONS
// ===============================

// 🔥 MAIN FEATURE
export const analyzeDecision = async ({
  fx_pair,
  amount,
  time_horizon_days,
}) => {
  return request("/decisions/analyze", {
    method: "POST",
    body: JSON.stringify({
      fx_pair,
      amount,
      time_horizon_days,
    }),
  });
};

// Get all user decisions
export const getUserDecisions = async () => {
  const user = getUser();
  if (!user) return null;

  return request(`/decisions/user/${user.id}`);
};

// Get single decision
export const getDecisionById = async (id) => {
  return request(`/decisions/${id}`);
};

// ===============================
// 📡 SIGNALS (PUBLIC)
// ===============================
export const getSignals = async (fx_pair) => {
  return request(`/signals?fx_pair=${fx_pair}`);
};

// ===============================
// 🧠 UTIL (OPTIONAL)
// ===============================

// Quick auth check
export const isAuthenticated = () => {
  return !!getToken();
};