"use client";

import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { useState, FormEvent } from "react";

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [status, setStatus] = useState<FormStatus>("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Gagal mengirim pesan");
            }

            setStatus("success");
            setFormData({ name: "", email: "", subject: "", message: "" });

            // Reset to idle after 5 seconds
            setTimeout(() => setStatus("idle"), 5000);
        } catch (error) {
            setStatus("error");
            setErrorMessage(
                error instanceof Error ? error.message : "Terjadi kesalahan"
            );
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 md:p-12 border border-gray-200 shadow-sm"
        >
            <h3
                className="text-2xl md:text-3xl mb-8 text-gray-900"
                style={{ fontFamily: "var(--font-serif)" }}
            >
                Kirim Pesan
            </h3>

            {/* Success Message */}
            {status === "success" && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-green-50 border border-green-200 rounded-sm flex items-center gap-3"
                >
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <p className="text-green-700">
                        Pesan Anda berhasil dikirim! Kami akan segera menghubungi Anda.
                    </p>
                </motion.div>
            )}

            {/* Error Message */}
            {status === "error" && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-red-50 border border-red-200 rounded-sm flex items-center gap-3"
                >
                    <AlertCircle className="w-5 h-5 text-red-600" />
                    <p className="text-red-700">{errorMessage}</p>
                </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm text-gray-600 mb-2 uppercase tracking-wider"
                        >
                            Nama Anda
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            required
                            disabled={status === "loading"}
                            className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-[var(--color-gold)] focus:outline-none transition-colors disabled:opacity-50"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm text-gray-600 mb-2 uppercase tracking-wider"
                        >
                            Alamat Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            required
                            disabled={status === "loading"}
                            className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-[var(--color-gold)] focus:outline-none transition-colors disabled:opacity-50"
                        />
                    </div>
                </div>

                {/* Subject */}
                <div>
                    <label
                        htmlFor="subject"
                        className="block text-sm text-gray-600 mb-2 uppercase tracking-wider"
                    >
                        Subjek
                    </label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Bagaimana kami bisa membantu Anda?"
                        required
                        disabled={status === "loading"}
                        className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-[var(--color-gold)] focus:outline-none transition-colors disabled:opacity-50"
                    />
                </div>

                {/* Message */}
                <div>
                    <label
                        htmlFor="message"
                        className="block text-sm text-gray-600 mb-2 uppercase tracking-wider"
                    >
                        Pesan Anda
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Ceritakan lebih lanjut tentang pertanyaan Anda..."
                        required
                        disabled={status === "loading"}
                        className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-[var(--color-gold)] focus:outline-none transition-colors resize-none disabled:opacity-50"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={status === "loading"}
                    className="btn-primary w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {status === "loading" ? (
                        <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Mengirim...
                        </>
                    ) : (
                        <>
                            <Send className="w-4 h-4 mr-2" />
                            Kirim Pesan
                        </>
                    )}
                </button>
            </form>
        </motion.div>
    );
}
