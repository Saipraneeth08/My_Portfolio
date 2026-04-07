import { motion } from "framer-motion";
import { ExternalLink, Lock, Utensils } from "lucide-react";

const projects = [
  {
    icon: Lock,
    title: "Cryptography & Steganography",
    tech: ["Python", "Flask", "AES-256", "OpenCV", "PIL"],
    description:
      "Secure web app to embed encrypted and compressed data within images using AES-256 encryption, zlib compression, and steganographic techniques with virus scanning integration.",
    link: "https://github.com/Saipraneeth08/Cryptography-and-Steganography-for-Securing-Data-in-Images",
  },
  {
    icon: Utensils,
    title: "Menu Planning & Cost Estimation",
    tech: ["Web Development"],
    description:
      "Web-based solution to minimize event food waste through smart menu planning, cost estimation, and data-driven purchasing strategies for caterers.",
    link: null,
  },
];

const ProjectsSection = () => (
  <section id="projects" className="section-padding">
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-mono text-3xl font-bold mb-2 gradient-text">
          Projects
        </h2>
        <div className="w-16 h-1 bg-primary rounded mb-10" />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass rounded-xl p-6 group hover:neon-border transition-all flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <p.icon className="text-primary" size={28} />
                {p.link && (
                  <a href={p.link} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
              <h3 className="font-mono text-lg font-semibold text-foreground mb-3">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs font-mono px-2 py-1 rounded bg-primary/10 text-primary">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default ProjectsSection;
