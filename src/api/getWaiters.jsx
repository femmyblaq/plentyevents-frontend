import api from "./axios";

export const getWaiters = async (filters = {}) => {
  try {
    const response = await api.get(`/waiters`, {
      params: filters, // attaches ?expertise=...&attitudeRating=...
    });
    return response.data;
  } catch (error) {
    console.error(error.response?.data || error.message);
    throw error;
  }
};