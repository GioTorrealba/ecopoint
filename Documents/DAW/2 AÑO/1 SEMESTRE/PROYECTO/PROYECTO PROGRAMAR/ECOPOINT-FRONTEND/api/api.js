const API_URL = "http://localhost:5000"; // el puerto de tu backend

export const login = async (email, password) => {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });
  return res.json();
};

export const getEcopoints = async (token) => {
  const res = await fetch(`${API_URL}/ecopoints`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return res.json();
};
