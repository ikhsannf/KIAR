"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";
import { testimonies } from "@/lib/data/testimonies";

export default function TestimonialsPreview() {
    const previewTestimonies = testimonies.slice(0, 3);

    return (
        <section className="py-24 bg-[var(--color-primary)]">
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
                        Testimoni
                    </span>
                    <h2
                        className="text-4xl md:text-5xl mb-4"
                        style={{ fontFamily: "var(--font-serif)" }}
                    >
                        Apa Kata Pelanggan Kami
                    </h2>
                    <p className="text-[var(--color-muted)] max-w-xl mx-auto">
                        Dengarkan dari mereka yang telah merasakan perbedaan KIAR.
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {previewTestimonies.map((testimony, index) => (
                        <motion.div
                            key={testimony.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-glass p-8 rounded-sm card-hover"
                        >
                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimony.rating)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className="w-4 h-4 fill-[var(--color-gold)] text-[var(--color-gold)]"
                                    />
                                ))}
                            </div>

                            {/* Content */}
                            <p className="text-[var(--color-soft-white)] mb-6 leading-relaxed">
                                &ldquo;{testimony.content}&rdquo;
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-4">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                                    <Image
                                        src={testimony.avatar}
                                        alt={testimony.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-medium text-[var(--color-soft-white)]">
                                        {testimony.name}
                                    </h4>
                                    <p className="text-sm text-[var(--color-muted)]">
                                        {testimony.role}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
