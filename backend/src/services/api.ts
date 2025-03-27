import axios from "axios";
import { use } from "react";

/**
 * Crée une instance Axios avec une URL de base.
 * Adapte la baseURL pour pointer vers ton backend (port, chemin, etc.)
 */
const API = axios.create({
  baseURL: "http://localhost:5001/api/auth",
});

/**
 * Envoie une requête POST pour inscrire un nouvel utilisateur.
 * @param username - Le nom d'utilisateur
 * @param email - L'email de l'utilisateur
 * @param job - Le métier (optionnel)
 * @param birthDate - La date de naissance (optionnel)
 * @param password - Le mot de passe
 */
export const registerUser = (
  username: string,
  email: string,
  job: string,
  birthDate: string,
  password: string
) => {
  return API.post("/register", {
    username,
    email,
    job,
    birthDate,
    password,
  });
};

/**
 * Envoie une requête POST pour connecter un utilisateur.
 * @param email - L'email de l'utilisateur
 * @param password - Le mot de passe
 */
export const loginUser = (email: string, password: string) => {
  return API.post("/login", {
    email,
    password,
  });
};
