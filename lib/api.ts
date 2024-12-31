"use server"
import axios from "axios";

// Use process.env to access environment variables
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL, // Corrected to use NEXT_PUBLIC_ prefix
  timeout: 50000,
});

export async function getProducts() {
  return await axiosInstance.get(`/products`)

}

export async function getProduct(id:string) {
  return await axiosInstance.get(`/products/${id}`)

}

