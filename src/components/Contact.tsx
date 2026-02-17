import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, ArrowUpRight } from "lucide-react";

const Contact = () => {
  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: "sarkardisha238@gmail.com",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=sarkardisha238@gmail.com",
      external: false,
      colorClasses:
        "bg-pink-500/10 text-pink-500 group-hover:text-pink-600",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9641729720",
      href: "tel:+919641729720",
      external: false,
      colorClasses:
        "bg-purple-500/10 text-purple-500 group-hover:text-purple-600",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Disha Sarkar",
      href: "https://www.linkedin.com/in/disha-sarkar-623b66322",
      external: true,
      colorClasses:
        "bg-blue-500/10 text-blue-500 group-hover:text-blue-600",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kolkata, West Bengal",
      href: "https://maps.app.goo.gl/qkvg9wGHYGk19nTC8",
      external: true,
      colorClasses:
        "bg-emerald-500/10 text-emerald-500 group-hover:text-emerald-600",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-24 px-6 max-w-6xl mx-auto overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500/20 blur-3xl rounded-full" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full" />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <p className="text-pink-500 tracking-widest uppercase text-sm font-semibold mb-3">
          Contact
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Let’s <span className="text-gradient">Connect</span>
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          I’m always open to discussing new opportunities, collaborations,
          and exciting tech projects.
        </p>
      </motion.div>

      {/* Contact Cards */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.1 }}
        className="grid md:grid-cols-2 gap-6"
      >
        {contactItems.map((item, i) => {
          const Icon = item.icon;

          return (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : "_self"}
              rel={item.external ? "noopener noreferrer" : ""}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 
                         rounded-2xl p-6 hover:border-pink-500/40 
                         hover:shadow-[0_0_30px_rgba(236,72,153,0.2)]
                         transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.colorClasses}`}
                >
                  <Icon className="w-5 h-5" />
                </div>

                {item.external && (
                  <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-pink-500 transition" />
                )}
              </div>

              <p className="mt-6 text-sm text-gray-400 uppercase tracking-wide">
                {item.label}
              </p>
              <p className="text-lg font-semibold mt-1 text-white group-hover:text-pink-400 transition">
                {item.value}
              </p>
            </motion.a>
          );
        })}
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-20 text-center"
      >
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=sarkardisha238@gmail.com"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full
                     bg-gradient-to-r from-pink-500 to-purple-600
                     text-white font-semibold
                     hover:scale-105 transition-transform duration-300 shadow-lg"
        >
          Send Me an Email
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;
