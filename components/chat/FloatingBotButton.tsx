"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingBotButton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.25 }}
      className="fixed bottom-5 left-5 z-[9999] md:bottom-6 md:left-6"
    >
      <Link
        href="https://ihaveallergy.com/?openChat=1"
        aria-label="פתיחת הבוט באתר הראשי"
        className="group flex h-14 w-14 items-center justify-center rounded-full border border-border/60 bg-primary text-primary-foreground shadow-xl transition-all duration-200 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-primary/30"
      >
        <MessageCircle className="h-6 w-6 transition-transform duration-200 group-hover:scale-110" />
      </Link>
    </motion.div>
  );
}
