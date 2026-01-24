"use client";

import { motion } from "framer-motion";
import { Users, Star, Award, Globe } from "lucide-react";
import { stats } from "@/lib/data/testimonies";

const statsData = [
    { icon: Users, label: "Pelanggan Puas", value: stats.happyCustomers },
    { icon: Star, label: "Ulasan Bintang 5", value: stats.fiveStarReviews },
    { icon: Award, label: "Tahun Keunggulan", value: stats.yearsOfExcellence },
    { icon: Globe, label: "Negara Dilayani", value: stats.countriesServed },
];

export default function StatsSection() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {statsData.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="text-center"
                        >
                            <div className="w-16 h-16 mx-auto mb-4 bg-[var(--color-gold)]/10 rounded-full flex items-center justify-center">
                                <stat.icon className="w-8 h-8 text-[var(--color-gold)]" />
                            </div>
                            <h3
                                className="text-3xl md:text-4xl text-[var(--color-gold)] mb-2"
                                style={{ fontFamily: "var(--font-serif)" }}
                            >
                                {stat.value}
                            </h3>
                            <p className="text-[var(--color-muted)] text-sm">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
