import React from 'react';
import { motion } from 'framer-motion';
import { Check, ExternalLink, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const ZodAgentFeature = () => {
  const capabilities = [
    "Connects with your existing tools, APIs and data",
    "Keeps context across sessions and teams",
    "Chat-based access to your business operations",
    "Orchestrates complex, multi-step business workflows",
    "Runs in production with built-in monitoring"
  ];

  return (
    <section id="zodagent" className="py-24 relative bg-[#0a0e27] overflow-hidden">
      {/* Background ambient glow matching the AI aesthetic */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,212,255,0.08)_0%,transparent_60%)] pointer-events-none" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          {/* Main Elevated Card matching pricing aesthetics */}
          <div className="card-elevated bg-[#0f1535] relative overflow-hidden flex flex-col p-8 md:p-12 rounded-3xl border border-[#00d4ff]/30 shadow-[0_0_40px_-10px_rgba(0,212,255,0.15)]">
            
            {/* Top Badge */}
            <div className="flex items-center gap-2 mb-8">
              <div className="px-4 py-1.5 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/20 text-[#00d4ff] text-xs sm:text-sm font-bold tracking-widest uppercase flex items-center gap-2 w-fit shadow-[0_0_15px_rgba(0,212,255,0.2)]">
                <Sparkles className="w-4 h-4" />
                Featured Innovation
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Column: Titles, Description & CTAs */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-3 tracking-tight text-balance">
                    ZodAgent
                  </h2>
                  <h3 className="text-xl md:text-2xl font-semibold text-[#00d4ff] tracking-wide">
                    AI-Powered ERP System
                  </h3>
                </div>

                <p className="text-[#a0aec0] text-lg leading-relaxed max-w-[45ch]">
                  ZodAgent is an AI-powered ERP system designed to help businesses manage
                  and streamline their operations through an intelligent, centralized
                  business platform.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link
                    to="/zodagent"
                    className="inline-flex items-center justify-center gap-2 bg-[#00d4ff] text-[#0a0e27] px-6 py-3.5 rounded-xl font-bold hover:bg-[#00b8e6] hover:brightness-110 active:scale-[0.98] transition-all"
                  >
                    Explore ZodAgent
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <a
                    href="https://www.zodagent.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-transparent text-white border border-[#1a2847] hover:border-[#00d4ff]/50 hover:bg-[#1a2847]/40 px-6 py-3.5 rounded-xl font-medium transition-all group"
                  >
                    Visit Official Website
                    <ExternalLink className="w-5 h-5 text-[#a0aec0] group-hover:text-[#00d4ff] transition-colors" />
                  </a>
                </div>
              </div>

              {/* Right Column: Capabilities List */}
              <div className="bg-[#0a0e27] rounded-2xl p-6 md:p-8 border border-[#1a2847] shadow-inner relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00d4ff]/5 blur-[60px] rounded-full" />
                
                <h4 className="text-white text-xl font-bold mb-6 flex items-center gap-4">
                  What's Included
                  <span className="flex-1 h-px bg-gradient-to-r from-[#1a2847] to-transparent"></span>
                </h4>
                
                <ul className="space-y-5 relative z-10">
                  {capabilities.map((cap, i) => (
                    <li key={i} className="flex items-start gap-4 group">
                      <div className="mt-0.5 w-6 h-6 rounded bg-[#00d4ff]/10 flex items-center justify-center shrink-0 group-hover:bg-[#00d4ff]/20 transition-colors border border-[#00d4ff]/20">
                        <Check className="w-3.5 h-3.5 text-[#00d4ff]" strokeWidth={3} />
                      </div>
                      <span className="text-[#a0aec0] group-hover:text-white transition-colors leading-relaxed font-medium">
                        {cap}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Footer Label */}
            <div className="mt-12 pt-6 border-t border-[#1a2847] text-center w-full">
              <span className="text-sm font-semibold text-[#a0aec0]/70 uppercase tracking-widest">
                Presented by <span className="text-[#00d4ff]">NetAISystems</span>
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ZodAgentFeature;