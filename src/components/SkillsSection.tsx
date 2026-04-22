import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "Python"],
  },
  {
    title: "Frontend",
    skills: ["HTML", "CSS"],
  },
  {
    title: "Databases",
    skills: ["MySQL"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Eclipse"],
  },
];

const SkillsSection = () => (
  <section id="skills" className="section-padding bg-card/30">
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-mono text-3xl font-bold mb-2 gradient-text">
          Skills
        </h2>
        <div className="w-16 h-1 bg-primary rounded mb-10" />

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-xl p-6 hover:neon-border transition-all"
            >
              <h3 className="font-mono text-primary text-sm mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground font-mono text-xs border border-border hover:border-primary/50 transition-colors"
                  >
                    {skill}
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

export default SkillsSection;
