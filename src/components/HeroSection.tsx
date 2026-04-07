import { motion } from "framer-motion";
import typingGif from "@/assets/typing.gif";
import heroBg from "@/assets/hero-bg.jpg";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 pt-20">
        
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          <p className="font-mono text-primary text-sm mb-3">Hello, I'm</p>

          <h1 className="text-4xl md:text-6xl font-bold font-mono leading-tight mb-4">
            <span className="gradient-text">Sai Praneeth</span>
            <br />
            <span className="text-foreground">Arava</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-md mb-8">
            Information Technology graduate & aspiring full-stack developer fresher passionate about building applications and currently learning DevOps to enhance development and deployment skills.
          </p>

          <div className="flex gap-4 justify-center md:justify-start">
            <a href="mailto:saipraneetharava@gmail.com" className="p-3 rounded-lg glass hover:neon-border transition-all text-muted-foreground hover:text-primary">
              <Mail size={20} />
            </a>
            <a href="tel:+918247094128" className="p-3 rounded-lg glass hover:neon-border transition-all text-muted-foreground hover:text-primary">
              <Phone size={20} />
            </a>
            <a href="https://linkedin.com/in/saipraneetharava" target="_blank" rel="noreferrer" className="p-3 rounded-lg glass hover:neon-border transition-all text-muted-foreground hover:text-primary">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/Saipraneeth08" target="_blank" rel="noreferrer" className="p-3 rounded-lg glass hover:neon-border transition-all text-muted-foreground hover:text-primary">
              <Github size={20} />
            </a>
          </div>
        </motion.div>

        {/* GIF Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-shrink-0"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/40 via-neon-purple/30 to-neon-blue/20 blur-2xl animate-pulse-glow" />

            {/* GIF */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary/30">
              <img
                src={typingGif}
                alt="Typing animation"
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;