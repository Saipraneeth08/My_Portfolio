import { motion } from "framer-motion";
import { Code2, Database, Coffee } from "lucide-react";

const highlights = [
  { icon: Code2, label: "Full-Stack Dev" },
  { icon: Database, label: "Database Design" },
  { icon: Coffee, label: "Java Development" },
];

const AboutSection = () => (
  <section id="about" className="section-padding">
    <div className="max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Heading */}
        <h2 className="font-mono text-3xl font-bold mb-2 gradient-text">
          About Me
        </h2>

        {/* Underline */}
        <div className="w-16 h-1 bg-primary rounded mb-8 mx-auto" />

        {/* Description */}
        <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Information Technology graduate (2025) and Java developer fresher with solid OOP and problem-solving skills. Focused on building efficient, scalable applications and contributing effectively to software development teams.        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
          {highlights.map((h) => (
            <div
              key={h.label}
              className="glass rounded-xl p-6 text-center hover:neon-border transition-all w-full max-w-xs"
            >
              <h.icon className="mx-auto mb-3 text-primary" size={32} />
              <span className="font-mono text-sm text-foreground">
                {h.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
