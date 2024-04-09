import axios from "axios";
import { Product } from "./Product";

const api = axios.create({
  baseURL: "http://localhost:5000/products",
});

export const getProducts = async () => {
  try {
    const { data } = await api.get<Product[]>("");
    const products: Product[] = await Promise.all(data);
    return products;
  } catch (error) {
    console.error(error);
    return;
  }
};
