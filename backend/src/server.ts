import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/auth";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Connexion MongoDB
mongoose
  .connect(process.env.MONGO_URI!)
  .then(() => console.log("🟢 MongoDB connecté"))
  .catch((err) => console.error("🔴 Erreur MongoDB", err));

// Définir la route racine (optionnel)
app.get("/", (req, res) => {
  res.send("Serveur backend Express en ligne !");
});

// Routes d'authentification
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`🚀 Serveur sur http://localhost:${PORT}`));
