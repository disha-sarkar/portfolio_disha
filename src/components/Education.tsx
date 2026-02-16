import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    program: "B.Tech (CSE)",
    institute: "Bangalore Technological Institute",
    year: "2025",
    score: "CGPA: 7.5 (till 2nd sem)",
  },
  {
    program: "12th (PUC)",
    institute: "Jaguli Netaji Vidhyapith (H.S)",
    year: "2023",
    score: "65%",
  },
  {
    program: "10th (SSLC)",
    institute: "Jaguli Netaji Vidhyapith (H.S)",
    year: "2021",
    score: "89.45%",
  },
];

const Education = () => {
  return (
    <section id="education" className="section-padding max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-primary font-heading text-sm tracking-[0.3em] uppercase mb-3">Education</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12">
          Academic <span className="text-gradient">Journey</span>
        </h2>
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block" />

        <div className="space-y-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.program}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative flex gap-6"
            >
              {/* Timeline dot */}
              <div className="hidden md:flex items-start pt-6">
                <div className="w-12 h-12 rounded-full bg-secondary border border-primary/30 flex items-center justify-center z-10">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
              </div>

              <div className="flex-1 card-glass rounded-xl p-6">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="font-heading text-lg font-semibold text-foreground">{edu.program}</h3>
                  <span className="text-primary font-heading text-sm font-semibold">{edu.year}</span>
                </div>
                <p className="text-secondary-foreground text-sm">{edu.institute}</p>
                <p className="text-muted-foreground text-sm mt-1">{edu.score}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
