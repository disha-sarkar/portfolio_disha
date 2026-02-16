import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="section-padding max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-primary font-heading text-sm tracking-[0.3em] uppercase mb-3">About Me</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8">
          Building the future, <span className="text-gradient">one project at a time</span>
        </h2>
        <p className="text-secondary-foreground text-lg leading-relaxed max-w-3xl">
          I'm a motivated Computer Science Engineering student at Bangalore Technological Institute with a strong interest in programming, web development, and AI/ML technologies. I'm constantly seeking opportunities to enhance my technical skills, gain hands-on industry exposure, and contribute to innovative software solutions.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {[
            { label: "Projects", value: "3+" },
            { label: "Languages", value: "3" },
            { label: "Technologies", value: "10+" },
            { label: "Graduating", value: "2025" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-glass rounded-xl p-6 text-center"
            >
              <p className="text-3xl font-heading font-bold text-gradient">{stat.value}</p>
              <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
