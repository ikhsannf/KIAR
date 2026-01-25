"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function StoryPreview() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="aspect-[4/5] relative overflow-hidden">
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{
                                    backgroundImage: `url('/images/content/image1.jpeg')`,
                                }}
                            />
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -bottom-6 -right-6 w-48 h-48 border border-[var(--color-gold)]/30 -z-10" />
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="text-[var(--color-gold)] text-sm uppercase tracking-[0.3em] mb-4 block">
                            Cerita Kami
                        </span>

                        <p className="text-[var(--color-dark-gray)] leading-relaxed mb-6">
                            Kiar adalah brand yang lahir dari komitmen pada kualitas, kerapian, dan kenyamanan.
                            Setiap produk dibuat melalui proses yang teliti, dari pemilihan bahan hingga sentuhan akhir, agar siap menemani momen penting dalam keseharian.
                        </p>
                        <p className="text-[var(--color-muted)] leading-relaxed mb-8">
                            Kami percaya bahwa kesederhanaan yang dikerjakan dengan sungguh-sungguh akan selalu terasa bernilai.
                        </p>
                        <Link href="/about" className="btn-secondary group inline-flex">
                            Pelajari Lebih Lanjut
                            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
