"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { MdArrowForward } from "react-icons/md";
import { ZOMATO_URL } from "@/constants/site";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: i === 0 ? 0.3 : 0.6,
        ease: "easeOut" as const,
      },
    }),
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image - Blurred Directly for Depth of Field */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Matka/Hyderabadi.jpg"
          alt="Authentic Hyderabadi Matka Biryani"
          fill
          className="object-cover scale-110 blur-xs"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/45 to-black/25" />
      </div>

      {/* Hero Content - Clean & Direct */}
      <div className="container mx-auto px-6 md:px-12 relative z-20 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto"
        >
          {/* Badge */}
          <motion.div custom={0} variants={fadeUp} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 border border-white/20 text-xs md:text-sm font-semibold text-accent uppercase tracking-wider backdrop-blur-sm">
              👑 Authentic Dum Cooking · Sector 41 Noida
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            custom={1}
            variants={fadeUp}
            className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight leading-[1.1] mb-6 text-white drop-shadow-xl"
          >
            The Art of
            <br />
            <span className="text-accent italic font-serif drop-shadow-md">Authentic Biryani</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            custom={2}
            variants={fadeUp}
            className="mt-6 text-lg md:text-xl text-white/95 max-w-xl mx-auto leading-relaxed mb-10 font-medium drop-shadow-md"
          >
            Experience authentic Matka Dum Biryani in Noida. Slow-cooked with premium spices in dough-sealed clay handis, delivering royal flavours directly to you.
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={3}
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href={ZOMATO_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="accent" className="shadow-2xl">
                Order Now on Zomato
                <MdArrowForward className="w-5 h-5 ml-1" />
              </Button>
            </Link>
            <Link href="#menu">
              <Button variant="glass" className="border-white/30 text-white hover:bg-white/20">
                Explore Our Menu
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}




