"use client";

import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

export default function Vision() {
    return (
        <section className="py-24 bg-[var(--color-charcoal)]">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Vision */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative p-8 md:p-12 border-l-2 border-[var(--color-gold)]"
                    >
                        <div className="absolute -left-6 top-8 w-12 h-12 bg-[var(--color-charcoal)] flex items-center justify-center">
                            <Eye className="w-6 h-6 text-[var(--color-gold)]" />
                        </div>
                        <h3
                            className="text-3xl md:text-4xl mb-6"
                            style={{ fontFamily: "var(--font-serif)" }}
                        >
                            Visi Kami
                        </h3>
                        <p className="text-lg text-[var(--color-soft-white)] leading-relaxed mb-4">
                            “Menjadi brand yang dikenal karena kenyamanannya—sejuk dipakai, berkualitas baik, dan dapat dinikmati semua orang.”
                        </p>
                    </motion.div>

                    {/* Mission */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative p-8 md:p-12 border-l-2 border-[var(--color-gold)]"
                    >
                        <div className="absolute -left-6 top-8 w-12 h-12 bg-[var(--color-charcoal)] flex items-center justify-center">
                            <Target className="w-6 h-6 text-[var(--color-gold)]" />
                        </div>
                        <h3
                            className="text-3xl md:text-4xl mb-6"
                            style={{ fontFamily: "var(--font-serif)" }}
                        >
                            Misi Kami
                        </h3>
                        <p className="text-lg text-[var(--color-soft-white)] leading-relaxed mb-4">
                            1.	Menghadirkan produk piyama dan homewear dengan bahan sejuk dan nyaman dipakai sepanjang hari.
                        </p>
                        <p className="text-lg text-[var(--color-soft-white)] leading-relaxed mb-4">
                            2.	Menjaga kualitas terbaik sambil memastikan harga tetap terjangkau.
                        </p>
                        <p className="text-lg text-[var(--color-soft-white)] leading-relaxed mb-4">
                            3.	Mengembangkan variasi produk homewear untuk memenuhi kebutuhan aktivitas santai pelanggan.
                        </p>
                        <p className="text-lg text-[var(--color-soft-white)] leading-relaxed mb-4">
                            4.	Membangun pengalaman belanja yang mudah, ramah, dan menyenangkan, baik online maupun toko offline.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
