"use client";

import { motion } from "framer-motion";
import { Gem, Leaf, Heart, Sparkles } from "lucide-react";

const values = [
    {
        icon: Gem,
        title: "Nyaman Sepanjang Hari",
        description:
            "Dirancang untuk memberi rasa tenang dan nyaman di setiap momen istirahatmu.",
    },
    {
        icon: Sparkles,
        title: "Sederhana dan Elegan",
        description:
            "Desain minimalis yang timeless, mudah dipakai, dan selalu relevan.",
    },
    {
        icon: Leaf,
        title: "Kualitas Terpercaya",
        description:
            "Bahan pilihan dengan proses yang rapi dan bertanggung jawab.",
    },
    {
        icon: Heart,
        title: "Detail yang Diperhatikan",
        description:
            "Setiap potongan dibuat dengan penuh ketelitian.",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
    },
};

export default function Values() {
    return (
        <section className="py-24 bg-white">
            <div className="container">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-[var(--color-gold)] text-sm uppercase tracking-[0.3em] mb-4 block">
                        Apa Yang Kami Perjuangkan
                    </span>
                    <h2
                        className="text-4xl md:text-5xl text-gray-900"
                        style={{ fontFamily: "var(--font-serif)" }}
                    >
                        Nilai-Nilai Kami
                    </h2>
                </motion.div>

                {/* Values Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {values.map((value) => (
                        <motion.div
                            key={value.title}
                            variants={itemVariants}
                            className="bg-white p-8 md:p-10 border border-gray-100 shadow-sm hover:border-[var(--color-gold)]/50 transition-colors duration-300"
                        >
                            <div className="w-14 h-14 bg-[var(--color-gold)]/10 rounded-sm flex items-center justify-center mb-6">
                                <value.icon className="w-7 h-7 text-[var(--color-gold)]" />
                            </div>
                            <h3
                                className="text-2xl mb-4 text-gray-900"
                                style={{ fontFamily: "var(--font-serif)" }}
                            >
                                {value.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {value.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
