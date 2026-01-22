"use client";

import { motion } from "framer-motion";
import TestimonyCard from "./TestimonyCard";
import { testimonies } from "@/lib/data/testimonies";
import { MessageSquarePlus } from "lucide-react";

export default function TestimonyGrid() {
    return (
        <section className="py-16 bg-[var(--color-primary)]">
            <div className="container">
                {/* Testimonies Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonies.map((testimony, index) => (
                        <TestimonyCard key={testimony.id} testimony={testimony} index={index} />
                    ))}
                </div>

                {/* Share Story CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-16 text-center"
                >
                    <div className="bg-[var(--color-charcoal)] p-12 border border-white/5 max-w-2xl mx-auto">
                        <div className="w-16 h-16 mx-auto mb-6 bg-[var(--color-gold)]/10 rounded-full flex items-center justify-center">
                            <MessageSquarePlus className="w-8 h-8 text-[var(--color-gold)]" />
                        </div>
                        <h3
                            className="text-2xl md:text-3xl mb-4"
                            style={{ fontFamily: "var(--font-serif)" }}
                        >
                            Bagikan Pengalaman KIAR Anda
                        </h3>
                        <p className="text-[var(--color-muted)] mb-8 max-w-md mx-auto">
                            Kami sangat ingin mendengar dari Anda. Bagikan cerita Anda dan jadilah bagian dari komunitas KIAR.
                        </p>
                        <button className="btn-primary">
                            Kirim Cerita Anda
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
