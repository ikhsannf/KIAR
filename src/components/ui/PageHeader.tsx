"use client";

import { motion } from "framer-motion";

interface PageHeaderProps {
    label: string;
    title: string;
    description?: string;
}

export default function PageHeader({ label, title, description }: PageHeaderProps) {
    return (
        <section className="pt-32 pb-16 bg-[var(--color-primary)]">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <span className="text-[var(--color-gold)] text-sm uppercase tracking-[0.3em] mb-4 block">
                        {label}
                    </span>
                    <h1
                        className="text-4xl md:text-5xl lg:text-6xl mb-6"
                        style={{ fontFamily: "var(--font-serif)" }}
                    >
                        {title}
                    </h1>
                    {description && (
                        <p className="text-lg text-[var(--color-muted)] leading-relaxed">
                            {description}
                        </p>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
