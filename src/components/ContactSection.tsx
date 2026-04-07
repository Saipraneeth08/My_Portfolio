import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";

const contacts = [
  { icon: Mail, label: "saipraneetharava@gmail.com", href: "mailto:saipraneetharava@gmail.com" },
  { icon: Phone, label: "+91 8247094128", href: "tel:+918247094128" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/saipraneetharava" },
  { icon: Github, label: "GitHub", href: "https://github.com/Saipraneeth08" },
];

const ContactSection = () => (
  <section id="contact" className="section-padding">
    <div className="max-w-3xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-mono text-3xl font-bold mb-2 gradient-text">
          Contact
        </h2>
        <div className="w-16 h-1 bg-primary rounded mb-6 mx-auto" />
        <p className="text-muted-foreground mb-10">
          I'm open to opportunities and collaborations. Feel free to reach out!
        </p>

        <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto">
          {contacts.map((c) => {
            const Wrapper = c.href ? "a" : "div";
            return (
              <Wrapper
                key={c.label}
                {...(c.href ? { href: c.href, target: c.href.startsWith("http") ? "_blank" : undefined, rel: "noreferrer" } : {})}
                className="glass rounded-xl p-4 flex items-center gap-3 hover:neon-border transition-all cursor-pointer"
              >
                <c.icon size={20} className="text-primary flex-shrink-0" />
                <span className="text-sm text-foreground truncate">{c.label}</span>
              </Wrapper>
            );
          })}
        </div>
      </motion.div>
    </div>
  </section>
);

export default ContactSection;
