"use client";

import { useForm } from "react-hook-form";
import { login } from "@/services/authService";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const { register, handleSubmit } = useForm();
    const router = useRouter();

    const onSubmit = async (data: any) => {
        try {
            await login(data);
            router.push("/products");
        } catch (error) {
            alert("Login failed:" + error);
            alert("Login failed. Please check your credentials and try again.");
        }
    };

    return (
        <div className="flex h-screen justify-center items-center">
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
                <h2 className="text-2xl mb-4 text-center">Login</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Email</label>
                    <input
                        type="email"
                        {...register("email", { required: true })}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 mb-2">Password</label>
                    <input
                        type="password"
                        {...register("password", { required: true })}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
                >
                    Login
                </button>
            </form>
        </div>
    );
}