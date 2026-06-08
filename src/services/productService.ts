import { api } from "./api";

export const productService = {
  async findAll() {
    const response = await api.get("/products");

    return response.data;
  },

  async findById(id: string) {
    const response = await api.get(`/products/${id}`);

    return response.data;
  },
};