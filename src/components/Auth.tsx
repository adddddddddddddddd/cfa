// Exemple dans src/components/Auth.tsx
"use client";

import { useState } from "react";
import { loginUser } from "../services/api"; // Votre fonction API pour la connexion
import { useAuth } from "../context/AuthContext";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useAuth();

  const handleLogin = async () => {
    try {
      const response = await loginUser(email, password);
      const token = response.data.token;
      localStorage.setItem("token", token);
      // Optionnel : appeler fetchUserData ici pour mettre à jour immédiatement
      const userData = await fetchUserData(token);
      setUser(userData);
      alert("Connexion réussie !");
    } catch (error) {
      alert("Erreur lors de la connexion");
    }
  };

  return (
    <div>
      {/* Formulaire de connexion */}
      <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Mot de passe" />
      <button onClick={handleLogin}>Se connecter</button>
    </div>
  );
}

// Vous pouvez réutiliser la fonction fetchUserData depuis AuthContext ou la définir ici.
async function fetchUserData(token: string) {
  try {
    const res = await fetch("http://localhost:5001/api/auth/me", {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) return null;
    return await res.json();
  } catch (error) {
    console.error("Erreur fetchUserData", error);
    return null;
  }
}
