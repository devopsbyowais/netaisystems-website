/**
 * Genuine, inspectable work. Only projects that exist in this repository are
 * listed here. No client names, quotes, metrics or outcomes are included
 * because none are documented.
 */
export const workProjects = [
  {
    slug: 'zodagent',
    title: 'ZodAgent',
    category: 'Product · Business systems',
    type: 'Internal product',
    summary:
      'An AI-powered ERP system for managing and streamlining business operations from one central platform.',
    overview:
      'ZodAgent is an AI-powered ERP system developed by NetAISystems. It is built around a single, centralised platform for business operations, with an intelligent layer that helps teams work with the information and workflows the system holds.',
    objective:
      'Business information and day-to-day operations are often spread across separate tools. Records are duplicated, context is lost between systems, and routine work depends on people moving data by hand.',
    solution:
      'NetAISystems developed ZodAgent to bring business operations into one centralised system. The platform connects to existing tools and data, supports multi-step workflows, and gives teams a conversational way to reach the information they need.',
    features: [
      'Centralised platform for business operations',
      'Connections to existing tools, APIs and data',
      'Chat-based access to business information',
      'Support for multi-step business workflows',
      'Production deployment with monitoring',
      'Operational visibility across connected systems'
    ],
    technologies: [
      'Web application platform',
      'AI models',
      'Retrieval systems',
      'APIs and integrations',
      'Application monitoring'
    ],
    href: '/zodagent',
    linkLabel: 'Explore ZodAgent',
    note: 'ZodAgent is an internal NetAISystems product. Product screenshots are available on request.'
  },
  {
    slug: 'ai-automation-demo-suite',
    title: 'AI automation demo suite',
    category: 'Demo · Automation',
    type: 'Live demonstration',
    summary:
      'Working examples of the automation patterns we build: AI agents, retrieval-based assistants and multi-step workflows.',
    overview:
      'A collection of interactive demonstrations built by NetAISystems to show how automation behaves before a client commits to a build. Each demo focuses on a different pattern rather than a finished client deployment.',
    objective:
      'Automation is easier to evaluate when the behaviour can be tried directly. Written descriptions rarely answer the practical questions a business needs to ask about scope, escalation and control.',
    solution:
      'We built a set of working demonstrations covering conversational agents, retrieval-based knowledge access and workflow automation. Visitors can open the demos and see how each pattern responds.',
    features: [
      'Interactive AI agent demonstration',
      'Workflow automation examples',
      'Clear separation between demonstration and production work',
      'Direct access from the public website'
    ],
    technologies: ['React', 'Node.js', 'Language models', 'APIs and webhooks'],
    href: '/demo',
    linkLabel: 'Open the demo suite',
    note: 'These are demonstrations, not client deployments.'
  },
  {
    slug: 'rag-chatbot',
    title: 'RAG chatbot',
    category: 'Demo · Knowledge assistant',
    type: 'Live demonstration',
    summary:
      'A retrieval-augmented assistant that answers from approved business documentation rather than general model knowledge.',
    overview:
      'A live demonstration of the retrieval pattern NetAISystems uses for knowledge assistants. The assistant searches approved source material and uses the relevant passages to answer a question.',
    objective:
      'General-purpose chatbots cannot reliably answer questions about a specific business. Answers need to come from the documents, policies and product information the organisation actually uses.',
    solution:
      'The demonstration indexes a defined body of content and retrieves relevant passages when a question is asked. Responses are grounded in that material, which makes the behaviour easier to review and control.',
    features: [
      'Retrieval from a defined document set',
      'Context-aware responses',
      'A live interface that can be tried directly',
      'A pattern that can be extended with escalation rules'
    ],
    technologies: ['Retrieval systems', 'Language models', 'Vector search', 'Web application interface'],
    href: '/rag-chatbot-demo',
    linkLabel: 'Try the RAG demo',
    note: 'A public demonstration built and maintained by NetAISystems.'
  }
];

export const getWorkProject = (slug) =>
  workProjects.find((project) => project.slug === slug);
