import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="section-padding max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        {/* Section Tag */}
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.5em" }}
          whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
          transition={{ duration: 0.6 }}
          className="text-primary font-heading text-sm tracking-[0.3em] uppercase mb-3"
        >
          About Me
        </motion.p>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading text-3xl md:text-4xl font-bold mb-8 leading-snug"
        >
          Crafting digital experiences & intelligent systems,{" "}
          <span className="text-gradient relative">
            one impactful project at a time
          </span>
        </motion.h2>

        {/* Professional Content */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-secondary-foreground text-lg leading-relaxed max-w-3xl"
        >
          I am a passionate Computer Science Engineering student at Bangalore
          Technological Institute, specializing in Web Development and
          Artificial Intelligence. My journey revolves around building
          responsive web applications, designing intelligent systems, and
          transforming ideas into scalable digital solutions.
          <br /><br />
          With a strong foundation in programming and problem-solving, I aim to
          bridge creativity with technology — developing solutions that are not
          only functional but meaningful. I continuously explore emerging
          technologies, collaborate on innovative projects, and push myself to
          deliver impactful results in every endeavor.
        </motion.p>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {[
            { label: "Projects Completed", value: "3+" },
            { label: "Programming Languages", value: "3" },
            { label: "Technologies Explored", value: "10+" },
            { label: "Graduating Year", value: "2025" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{
                scale: 1.05,
                y: -5,
                transition: { duration: 0.3 },
              }}
              className="card-glass rounded-xl p-6 text-center transition-all duration-300"
            >
              <p className="text-3xl font-heading font-bold text-gradient">
                {stat.value}
              </p>
              <p className="text-muted-foreground text-sm mt-1">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
