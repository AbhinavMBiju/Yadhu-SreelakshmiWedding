import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import bgImage from "../../images/yadhu8.jpeg";

export function HeroSection() {
  const scrollToDetails = () => {
    document.getElementById("details")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      id="hero"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <motion.img
          src={bgImage}
          alt="Emma and James"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      </div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/30 rounded-full"
          initial={{
            x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : Math.random() * 1000,
            y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : Math.random() * 1000,
          }}
          animate={{
            y: typeof window !== 'undefined' ? [null, Math.random() * window.innerHeight] : [null, Math.random() * 1000],
            x: typeof window !== 'undefined' ? [null, Math.random() * window.innerWidth] : [null, Math.random() * 1000],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="space-y-8"
        >
          {/* Names */}
          <div className="space-y-4">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="text-7xl md:text-8xl lg:text-9xl text-white"
              style={{ fontFamily: "'Great Vibes', cursive" }}
            >
               Yadhu & Sreelakshmi
            </motion.h1>
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="text-xl md:text-2xl text-white/90 tracking-wide"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Two hearts, one beautiful journey begins…
          </motion.p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 cursor-pointer"
          onClick={scrollToDetails}
          aria-label="Scroll to details"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-8 h-8 text-white/70" />
          </motion.div>
        </motion.button>
      </div>
    </motion.section>
  );
}