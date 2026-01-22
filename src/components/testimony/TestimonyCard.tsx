"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { Testimony } from "@/lib/data/testimonies";

interface TestimonyCardProps {
    testimony: Testimony;
    index?: number;
}

export default function TestimonyCard({ testimony, index = 0 }: TestimonyCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-[var(--color-charcoal)] p-8 relative group hover:border-[var(--color-gold)]/30 border border-white/5 transition-all duration-300"
        >
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-12 h-12 text-[var(--color-gold)]" />
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-6">
                {[...Array(testimony.rating)].map((_, i) => (
                    <Star
                        key={i}
                        className="w-4 h-4 fill-[var(--color-gold)] text-[var(--color-gold)]"
                    />
                ))}
            </div>

            {/* Content */}
            <p className="text-[var(--color-soft-white)] leading-relaxed mb-8 relative z-10">
                &ldquo;{testimony.content}&rdquo;
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[var(--color-gold)]/30">
                    <Image
                        src={testimony.avatar}
                        alt={testimony.name}
                        fill
                        className="object-cover"
                    />
                </div>
                <div>
                    <h4
                        className="font-medium text-[var(--color-soft-white)]"
                        style={{ fontFamily: "var(--font-serif)" }}
                    >
                        {testimony.name}
                    </h4>
                    <p className="text-sm text-[var(--color-gold)]">{testimony.role}</p>
                    <p className="text-xs text-[var(--color-muted)] mt-1">{testimony.date}</p>
                </div>
            </div>
        </motion.div>
    );
}
