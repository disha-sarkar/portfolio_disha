import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Weather Station using Arduino",
    tags: ["Arduino", "IoT", "Embedded Systems"],
    description:
      "A real-time weather monitoring system using Arduino with DHT11/DHT22 and BMP180 sensors. Displays temperature, humidity, and atmospheric pressure on LCD with alert mechanisms for extreme conditions.",
  },
  {
    title: "AI-based Fake Reviews Detection",
    tags: ["Python", "NLP", "TensorFlow", "scikit-learn"],
    description:
      "An NLP-based model to detect fake and genuine product reviews using text preprocessing, TF-IDF, and ML algorithms like Logistic Regression and LSTM for classification.",
  },
  {
    title: "Sentiment Analysis System",
    tags: ["Python", "NLP", "Machine Learning"],
    description:
      "A text-based sentiment analysis system classifying user inputs as Positive, Negative, or Neutral using tokenization, stopword removal, lemmatization, and ML model evaluation.",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-primary font-heading text-sm tracking-[0.3em] uppercase mb-3">Projects</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12">
          Featured <span className="text-gradient">Work</span>
        </h2>
      </motion.div>

      <div className="grid gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="card-glass rounded-xl p-8 group hover:border-primary/30 transition-colors duration-300"
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground group-hover:text-gradient transition-colors">
                {project.title}
              </h3>
              <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
            </div>
            <p className="text-secondary-foreground leading-relaxed mb-5">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-heading font-medium rounded-full bg-secondary text-primary border border-border"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
