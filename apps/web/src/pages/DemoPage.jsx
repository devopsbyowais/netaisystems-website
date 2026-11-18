import React from 'react';
import { Helmet } from 'react-helmet';
import DemoHero from '@/components/DemoHero.jsx';

function DemoPage() {
  return (
    <>
      <Helmet>
        <title>AI Automation Demos | NetAISystems</title>
        <meta 
          name="description" 
          content="Experience AI in action. Explore how NetAISystems transforms businesses with intelligent automation, RAG chatbots, and real-world AI agent demos." 
        />
      </Helmet>
      
      <div className="w-full bg-transparent">
        <DemoHero />
      </div>
    </>
  );
}

export default DemoPage;