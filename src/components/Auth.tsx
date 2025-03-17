// filepath: /Users/comechayrigues/Desktop/Scolarité Centrale Supélec/2A/Cours/Pôle Projet EPW/CFA React/cfa/src/components/Auth.tsx
"use client";

import { useState } from "react";
import { registerUser, loginUser } from "../services/api";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const response = await registerUser(email, password);
      alert(response.data.message);
    } catch (error) {
      alert('Erreur lors de l\'inscription');
    }
  };

  const handleLogin = async () => {
    try {
      const response = await loginUser(email, password);
      localStorage.setItem("token", response.data.token);
      alert("Connexion réussie !");
    } catch (error) {
      alert('Erreur lors de la connexion');
    }
  };

  return (
    <div className="p-6 bg-gray-100 rounded shadow">
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Mot de passe" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister}>S'inscrire</button>
      <button onClick={handleLogin}>Se connecter</button>
    </div>
  );
}