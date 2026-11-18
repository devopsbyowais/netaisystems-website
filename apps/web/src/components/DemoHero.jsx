import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DemoHero = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
    }
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center pt-28 pb-20 overflow-hidden bg-transparent">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-[hsl(var(--primary))]/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-[hsl(var(--secondary))]/10 rounded-full blur-[100px]" />
        {/* Subtle geometric grid pattern overlay */}
        <div className="absolute inset-0 bg-pattern-grid opacity-30 mix-blend-overlay" />
      </div>

      <div className="section-container relative z-10">
        <div className="flex justify-center">
          {/* Content: Centered Full Width */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center text-center max-w-3xl"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(var(--primary))]/10 border border-[hsl(var(--primary))]/20 mb-8">
              <Sparkles className="w-4 h-4 text-[hsl(var(--primary))]" />
              <span className="text-sm font-bold uppercase tracking-widest text-[hsl(var(--primary))]">
                Unified AI Automation Demos
              </span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-[clamp(2rem,9vw,2.25rem)] md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6"
            >
              Experience Personalized AI in <br className="hidden md:block" />
              <span className="text-gradient-cyan">
                Action
              </span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-[hsl(var(--muted-foreground))] leading-relaxed mb-4 max-w-2xl"
            >
              Explore how NetAISystems transforms businesses with intelligent automation. Click below to interact with real-world AI demos designed to enhance efficiency, accuracy, and scalability.
            </motion.p>
            
            <motion.p 
              variants={itemVariants}
              className="text-base text-[hsl(var(--muted-foreground))]/80 leading-relaxed mb-10 max-w-xl"
            >
              From RAG Chatbots to AI agents and workflow automation, discover powerful solutions tailored to modern enterprises.
            </motion.p>
            
            <motion.div variants={itemVariants} className="w-full sm:w-auto">
              <button 
                onClick={() => navigate('/rag-chatbot-demo')}
                className="btn-primary group relative w-full overflow-hidden sm:w-auto"
              >
                {/* Button highlight effect */}
                <div className="pointer-events-none absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" aria-hidden="true" />
                <span className="relative z-10">Experience Automations</span>
                <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DemoHero;