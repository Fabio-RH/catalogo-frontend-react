import { api } from "./api";

export const productService = {
  async findAll() {
    const response = await api.get("/produto");

    return response.data;
  },

  async findById(id: string) {
    const response = await api.get(`/produto/${id}`);

    return response.data;
  },
};