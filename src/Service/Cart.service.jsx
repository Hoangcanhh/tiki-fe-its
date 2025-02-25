import axios from "axios";

const API_URL = "https://localhost:5173/cart";



export const getCart = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const addToCart = async (item) => {
    const response = await axios.post(`${API_URL}/add`, item);
    return response.data;
};

export const removeFromCart = async (itemId) => {
    const response = await axios.delete(`${API_URL}/remove/${itemId}`);
    return response.data;
};

export const updateProductQuantity = async (id, quantity) => {
    const response = await axios.put(`${API_URL}/update/${id}`, { quantity });
    return response.data;
};

export const chooseProduct = async (productId, checked) => {
    const response = await axios.post(`${API_URL}/choose`, { productId, checked });
    return response.data;
};
