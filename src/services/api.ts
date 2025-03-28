import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5001/api/auth" });

export const registerUser = (email: string, password: string) =>
    API.post("/register", { email, password });
    
  export const loginUser = (email: string, password: string) =>
    API.post("/login", { email, password });