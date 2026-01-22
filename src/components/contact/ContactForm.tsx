"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function ContactForm() {
    return (
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[var(--color-charcoal)] p-8 md:p-12 border border-white/5"
        >
            <h3
                className="text-2xl md:text-3xl mb-8"
                style={{ fontFamily: "var(--font-serif)" }}
            >
                Kirim Pesan
            </h3>

            <form className="space-y-6">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm text-[var(--color-muted)] mb-2 uppercase tracking-wider"
                        >
                            Nama Anda
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="John Doe"
                            className="w-full bg-[var(--color-graphite)] border border-white/10 px-4 py-3 text-[var(--color-soft-white)] placeholder:text-[var(--color-muted)] focus:border-[var(--color-gold)] focus:outline-none transition-colors"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm text-[var(--color-muted)] mb-2 uppercase tracking-wider"
                        >
                            Alamat Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="john@example.com"
                            className="w-full bg-[var(--color-graphite)] border border-white/10 px-4 py-3 text-[var(--color-soft-white)] placeholder:text-[var(--color-muted)] focus:border-[var(--color-gold)] focus:outline-none transition-colors"
                        />
                    </div>
                </div>

                {/* Subject */}
                <div>
                    <label
                        htmlFor="subject"
                        className="block text-sm text-[var(--color-muted)] mb-2 uppercase tracking-wider"
                    >
                        Subjek
                    </label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="Bagaimana kami bisa membantu Anda?"
                        className="w-full bg-[var(--color-graphite)] border border-white/10 px-4 py-3 text-[var(--color-soft-white)] placeholder:text-[var(--color-muted)] focus:border-[var(--color-gold)] focus:outline-none transition-colors"
                    />
                </div>

                {/* Message */}
                <div>
                    <label
                        htmlFor="message"
                        className="block text-sm text-[var(--color-muted)] mb-2 uppercase tracking-wider"
                    >
                        Pesan Anda
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={6}
                        placeholder="Ceritakan lebih lanjut tentang pertanyaan Anda..."
                        className="w-full bg-[var(--color-graphite)] border border-white/10 px-4 py-3 text-[var(--color-soft-white)] placeholder:text-[var(--color-muted)] focus:border-[var(--color-gold)] focus:outline-none transition-colors resize-none"
                    />
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn-primary w-full md:w-auto">
                    <Send className="w-4 h-4 mr-2" />
                    Kirim Pesan
                </button>
            </form>
        </motion.div>
    );
}
