// src/services/api.ts
import axios from "axios";
import { PassThrough } from "stream";

const API = axios.create({
  baseURL: "http://localhost:5001/api/auth",
});

export const registerUser = (
  username: string,
  email: string,
  password: string,
  job: string,
  dateOfBirth: string
) =>
  API.post("/register", {
    username,
    email,
    password,
    job,
    dateOfBirth
  });

export const loginUser = (
  email: string,
  password: string,

) =>
  API.post("/login", {
    email,
    password
  });