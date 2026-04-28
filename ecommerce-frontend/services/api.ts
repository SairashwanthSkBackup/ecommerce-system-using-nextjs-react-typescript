import axios from "axios";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

api.interceptors.request.use((config) => {
    if (typeof window !== "undefined") {
        // const token = localStorage.getItem("token");
        const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0dXNlcjFAZ21haWwuY29tIiwicm9sZSI6IlJPTEVfVVNFUiIsImlhdCI6MTc3NzM4NzQ0OSwiZXhwIjoxNzc3NDIzNDQ5fQ.3j3c-QyoaBDYtHPqPrHQFXHTm5sGVaTq1ZeVdjvV-b8";
        if (token) {
            // config.headers["Authorization"] = `Bearer ${token}`;
        }
    }
    return config;
});

export default api;