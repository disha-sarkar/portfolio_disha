import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import dishaProfile from "@/assets/disha-profile.png";

const WaveText = ({ text, className }) => {
  return (
    <motion.div
      className={`cursor-pointer inline-block ${className}`}
      initial="initial"
      whileHover="hover"
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={{
            initial: { y: 0 },
            hover: {
              y: [0, -20, 0],
              transition: {
                duration: 0.4,
                delay: index * 0.05,
              },
            },
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
};

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="relative z-10 section-padding max-w-5xl mx-auto"
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mb-10">
          
          {/* TEXT SECTION */}
          <div className="text-center md:text-left space-y-6">

            <WaveText
              text="Hello, I'm"
              className="text-primary font-heading text-sm tracking-[0.3em] uppercase"
            />

            <motion.h1
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold"
            >
              <WaveText text="Disha " className="" />
              <span className="text-gradient">
                <WaveText text="Sarkar" className="" />
              </span>
            </motion.h1>

            <WaveText
              text="Computer Science Engineering student passionate about web development, AI/ML, and building innovative software solutions."
              className="text-muted-foreground text-lg md:text-xl max-w-2xl font-body leading-relaxed"
            />
          </div>

          {/* PROFILE IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            whileHover={{ rotate: 3, scale: 1.05 }}
            className="relative shrink-0 group"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-3 rounded-full border-2 border-dashed border-primary/20"
            />

            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary/25 via-transparent to-primary/15 blur-sm group-hover:from-primary/35 group-hover:to-primary/25 transition-all duration-700" />

            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-primary/40 shadow-[0_0_50px_hsl(var(--primary)/0.15),0_0_100px_hsl(var(--primary)/0.08)]">
              <img
                src={dishaProfile}
                alt="Disha Sarkar"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
            </div>

            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute bottom-2 right-2 md:bottom-4 md:right-4 w-3 h-3 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary)/0.6)]"
            />
          </motion.div>
        </div>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-heading font-semibold text-sm tracking-wide hover:scale-105 transition-transform duration-300"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-8 py-3 rounded-lg border border-border text-foreground font-heading font-semibold text-sm tracking-wide hover:border-primary/50 hover:scale-105 transition-all duration-300"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
