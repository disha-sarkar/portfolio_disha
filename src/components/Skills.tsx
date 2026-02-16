import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["C (with DSA)", "Python", "HTML", "CSS"],
  },
  {
    title: "Frameworks & Tools",
    skills: ["Flutter", "Firebase", "Android Studio", "Git/GitHub"],
  },
  {
    title: "AI/ML & Data",
    skills: ["TensorFlow", "scikit-learn", "NLTK", "MySQL"],
  },
  {
    title: "Dev Tools",
    skills: ["VS Code", "Jupyter Notebook", "Google Colab"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-primary font-heading text-sm tracking-[0.3em] uppercase mb-3">Skills</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12">
          Technical <span className="text-gradient">Toolkit</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {skillCategories.map((category, i) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="card-glass rounded-xl p-6"
          >
            <h3 className="font-heading text-lg font-semibold text-primary mb-4">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 text-sm font-body rounded-lg bg-secondary text-secondary-foreground border border-border hover:border-primary/40 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Soft Skills */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-6 card-glass rounded-xl p-6"
      >
        <h3 className="font-heading text-lg font-semibold text-primary mb-4">Soft Skills</h3>
        <div className="flex flex-wrap gap-3">
          {["Team Leadership", "Problem Solving", "Communication", "Project Management"].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 text-sm font-body rounded-lg bg-secondary text-secondary-foreground border border-border"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
