import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "B.Tech — Information Technology",
    school: "Seshadri Rao Gudlavalleru Engineering College",
    year: "2021 – 2025",
    score: "CGPA: 7.79",
  },
  {
    degree: "12th Grade",
    school: "Sri Chaitanya Junior College, Gudivada",
    year: "2021",
    score: "66.5%",
  },
  {
    degree: "10th Grade",
    school: "Sri Chaitanya School, Nunna, Vijayawada",
    year: "2019",
    score: "87%",
  },
];

const certs = [
  "Java Full Stack Development – Kodnest Technologies",
  "NPTEL — Introduction to IoT (Elite Certificate)",
  "TCS iON National Qualifier Test (NQT) – Score: 65.10% (Apr 2025)",
];

const EducationSection = () => (
  <section id="education" className="section-padding bg-card/30">
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-mono text-3xl font-bold mb-2 gradient-text">
          Education
        </h2>
        <div className="w-16 h-1 bg-primary rounded mb-10" />

        {/* Timeline */}
        <div className="space-y-6 mb-14">
          {education.map((e, i) => (
            <motion.div
              key={e.degree}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-4"
            >
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/40">
                  <GraduationCap size={18} className="text-primary" />
                </div>
                {i < education.length - 1 && <div className="w-px flex-1 bg-border mt-2" />}
              </div>
              <div className="glass rounded-xl p-5 flex-1 hover:neon-border transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                  <h3 className="font-mono font-semibold text-foreground">{e.degree}</h3>
                  <span className="font-mono text-xs text-primary">{e.year}</span>
                </div>
                <p className="text-muted-foreground text-sm">{e.school}</p>
                <p className="text-primary font-mono text-sm mt-1">{e.score}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <h3 className="font-mono text-xl font-bold mb-6 text-foreground">
          <Award className="inline mr-2 text-primary" size={22} />
          Certifications
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          {certs.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass rounded-xl p-4 text-sm text-muted-foreground hover:neon-border transition-all"
            >
              {c}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default EducationSection;
