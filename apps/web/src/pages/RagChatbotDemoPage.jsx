import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button.jsx';

const RagChatbotDemoPage = () => {
  return (
    <>
      <Helmet>
        <title>RAG Chatbot Demo | NetAISystems</title>
        <meta 
          name="description" 
          content="Experience the power of a RAG Chatbot. Discover how NetAISystems retrieves, refines, and delivers accurate AI responses using your private business data." 
        />
      </Helmet>

      <div className="w-full">
        
        {/* HERO SECTION */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden min-h-[80vh] flex items-center">
          {/* Background Ambient Glows */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[hsl(var(--primary))]/15 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute inset-0 bg-pattern-dots opacity-30 pointer-events-none" />

          <div className="section-container relative z-10 flex flex-col items-center text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(var(--primary))]/10 border border-[hsl(var(--primary))]/30 mb-8"
            >
              <Sparkles className="w-4 h-4 text-[hsl(var(--primary))]" />
              <span className="text-sm font-bold uppercase tracking-widest text-[hsl(var(--primary))]">
                AI-Powered RAG Chatbot Demo
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[clamp(2rem,9vw,2.25rem)] md:text-6xl lg:text-7xl font-extrabold max-w-4xl mb-6"
            >
              Experience the Power of a <br className="hidden md:block" />
              <span className="text-gradient-cyan">RAG Chatbot</span>
            </motion.h1>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl font-medium text-white max-w-3xl mb-6"
            >
              Transform your business knowledge into intelligent, real-time conversations powered by Retrieval-Augmented Generation.
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-[hsl(var(--muted-foreground))] max-w-3xl mx-auto leading-relaxed mb-6"
            >
              Discover how NetAISystems' AI-powered RAG Chatbot retrieves, refines, and delivers accurate responses using your private business data. Eliminate hallucinations, automate customer interactions, and empower your organization with secure, context-aware AI solutions.
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-lg text-[hsl(var(--muted-foreground))] max-w-3xl mx-auto leading-relaxed mb-10"
            >
              Our RAG technology combines the latest in large language models with your proprietary knowledge base, ensuring every response is grounded in your business context. See firsthand how intelligent automation can reduce support costs, improve customer satisfaction, and scale your operations effortlessly.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button asChild size="lg" className="btn-primary rounded-full px-8 py-6 text-base font-semibold group">
                <Link to="/start-project">
                  Request Automations Demo
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

      </div>
    </>
  );
};

export default RagChatbotDemoPage;