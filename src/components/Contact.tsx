import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-primary font-heading text-sm tracking-[0.3em] uppercase mb-3">Contact</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8">
          Let's <span className="text-gradient">Connect</span>
        </h2>
        <p className="text-secondary-foreground text-lg mb-12 max-w-2xl">
          I'm always open to discussing new projects, opportunities, or just having a conversation about technology.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            icon: Mail,
            label: "Email",
            value: "sarkardisha238@gmail.com",
            href: "mailto:sarkardisha238@gmail.com",
          },
          {
            icon: Phone,
            label: "Phone",
            value: "+91 9641729720",
            href: "tel:+919641729720",
          },
          {
            icon: MapPin,
            label: "Location",
            value: "Kolkata, West Bengal",
            href: "#",
          },
        ].map((item, i) => (
          <motion.a
            key={item.label}
            href={item.href}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="card-glass rounded-xl p-6 text-center hover:border-primary/30 transition-colors group"
          >
            <div className="w-12 h-12 rounded-full bg-secondary border border-border flex items-center justify-center mx-auto mb-4 group-hover:border-primary/40 transition-colors">
              <item.icon className="w-5 h-5 text-primary" />
            </div>
            <p className="font-heading font-semibold text-foreground text-sm">{item.label}</p>
            <p className="text-muted-foreground text-sm mt-1">{item.value}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
