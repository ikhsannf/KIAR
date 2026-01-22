"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CallToAction() {
    return (
        <section className="relative py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-fixed"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1920&q=80')`,
                    }}
                />
                <div className="absolute inset-0 bg-black/80" />
            </div>

            {/* Content */}
            <div className="container relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <span className="text-[var(--color-gold)] text-sm uppercase tracking-[0.3em] mb-4 block">
                        Akses Eksklusif
                    </span>
                    <h2
                        className="text-4xl md:text-5xl lg:text-6xl mb-6"
                        style={{ fontFamily: "var(--font-serif)" }}
                    >
                        Tingkatkan
                        <span className="text-gradient-gold block mt-2">Lemari Pakaianmu</span>
                    </h2>
                    <p className="text-lg text-[var(--color-soft-white)] mb-10 leading-relaxed">
                        Bergabunglah dengan komunitas KIAR dan temukan dunia fashion premium.
                        Jadilah yang pertama tahu tentang koleksi baru, penawaran eksklusif, dan inspirasi gaya.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="btn-primary group">
                            Hubungi Kami
                            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                        <Link href="/products" className="btn-secondary">
                            Lihat Koleksi
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Decorative lines */}
            <div className="absolute top-0 left-0 w-px h-32 bg-gradient-to-b from-transparent via-[var(--color-gold)]/50 to-transparent" />
            <div className="absolute bottom-0 right-0 w-px h-32 bg-gradient-to-t from-transparent via-[var(--color-gold)]/50 to-transparent" />
        </section>
    );
}
