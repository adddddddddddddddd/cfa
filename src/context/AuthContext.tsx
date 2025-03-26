// src/context/AuthContext.tsx
"use client"; // si tu es en mode App Router Next.js

import { createContext, useContext, useState, useEffect } from "react";

export interface User {
  email: string;
  pseudo: string;
  // Ajoute d'autres propriétés si besoin (par exemple name, roles, etc.)
}

interface AuthContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  // Exemple : récupérer le token dans le localStorage et appeler une API pour obtenir les infos
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // Appel à ton API backend pour récupérer les données utilisateur
      fetchUserData(token).then(setUser);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

async function fetchUserData(token: string): Promise<User | null> {
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
