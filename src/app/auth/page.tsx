"use client";

import { useState } from "react";
import { registerUser, loginUser } from "../../services/api";
import { useRouter } from "next/navigation";

export default function Auth() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [job, setJob] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isLogin) {
        const response = await loginUser(email, password);
        if (response.data.token) {
          localStorage.setItem("token", response.data.token);
          alert("Connexion réussie !");
          router.push("/");
        } else {
          alert("Échec de la connexion. Veuillez vérifier vos identifiants.");
        }
      } else {
        const response = await registerUser(username, email, job, birthDate, password);
        alert(response.data.message || "Inscription réussie !");
        // Redirection vers la page d'accueil après une inscription réussie
        router.push("/");
      }
    } catch (error: any) {
      console.error(error);
      alert("Une erreur est survenue lors de l'opération.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded shadow">
        <h2 className="text-2xl font-bold text-center mb-6">
          {isLogin ? "Connexion" : "Inscription"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Nom d'utilisateur
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Métier
                </label>
                <select
                  value={job}
                  onChange={(e) => setJob(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 bg-white"
                >
                  <option value="">Sélectionnez votre métier</option>
                  <option value="Climate Consultant">Climate Consultant</option>
                  <option value="Architect">Architect</option>
                  <option value="Building/Civil Engineer">Building/Civil Engineer</option>
                  <option value="Facade Engineer">Facade Engineer</option>
                  <option value="Structural Engineer">Structural Engineer</option>
                  <option value="Member of a Technical Design Office">Member of a Technical Design Office</option>
                  <option value="Environmental Designer">Environmental Designer</option>
                  <option value="Academic/Student">Academic/Student</option>
                  <option value="Urban Planner">Urban Planner</option>
                  <option value="Project Owner">Project Owner</option>
                  <option value="Government Official (e.g., Sustainable Development Agency)">
                    Government Official (e.g., Sustainable Development Agency)
                  </option>
                  <option value="Autre">Autre…</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Date de naissance
                </label>
                <input
                  type="date"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                />
              </div>
            </>
          )}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Mot de passe
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-md mt-4"
          >
            {isLogin ? "Se connecter" : "S'inscrire"}
          </button>
        </form>
        <div className="mt-4 text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-600 hover:underline"
          >
            {isLogin
              ? "Pas de compte ? Inscrivez-vous"
              : "Vous avez déjà un compte ? Connectez-vous"}
          </button>
        </div>
      </div>
    </div>
  );
}
