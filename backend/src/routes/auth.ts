import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User";
import express, { Request, Response } from "express";

const router = express.Router();

// Inscription
router.post("/register", async (req, res) => {
  try {
    const { username, email, job, birthDate, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    

    // Assurez-vous que le modèle User inclut bien ces champs.
    // Pour la date de naissance, on convertit en objet Date.
    const user = new User({ 
      username, 
      email, 
      job, 
      birthDate: new Date(birthDate), 
      password: hashedPassword 
    });
    
    await user.save();

    console.log("Utilisateur créé !");
    res.status(201).json({ message: "Utilisateur créé !" });
  } catch (error) {
    console.error("Erreur lors de la création de l'utilisateur:", error);
    res.status(500).json({ message: "Erreur lors de la création de l'utilisateur" });
  }
});

// Connexion
const loginHandler: express.RequestHandler = async (req, res): Promise<void> => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      res.status(400).json({ message: "Identifiants incorrects" });
      return;
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET!, { expiresIn: "1h" });
    res.json({ token });
  } catch (error) {
    console.error("Erreur lors de la connexion:", error);
    res.status(500).json({ message: "Erreur lors de la connexion" });
  }
};

router.post("/login", loginHandler);

export default router;