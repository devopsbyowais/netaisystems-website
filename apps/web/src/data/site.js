/**
 * Central site configuration: navigation, contact details, shared copy and
 * industry content. Contact details mirror the verified company information.
 */

export const contact = {
  email: 'info@netaisystems.com',
  phone: '+1(770)7104500',
  location: 'Atlanta, Georgia',
  hours: [
    { label: 'Mon–Fri', value: '9:00 AM – 5:00 PM' },
    { label: 'Saturday', value: 'Closed' },
    { label: 'Sunday', value: 'Closed' }
  ],
  socials: [
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'Instagram', href: 'https://instagram.com' }
  ]
};

export const positioning = {
  statement:
    'One Technology Partner. From Intelligent Automation to Complete Digital Solutions.',
  description:
    'NetAISystems helps businesses transform ideas into practical digital solutions. We combine intelligent automation, software engineering, cloud infrastructure, business systems, and creative technology to help organizations build, improve, and scale.'
};

export const primaryNav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'Work', href: '/work' },
  { label: 'Products', href: '/products' }
];

export const companyLinks = [
  { label: 'About', href: '/about' },
  { label: 'Industries', href: '/industries' },
  { label: 'Work', href: '/work' },
  { label: 'Contact', href: '/start-project' }
];

export const workProcess = [
  {
    step: '01',
    title: 'Discover',
    description:
      'We learn about your business, understand your challenges, identify your requirements, and clarify what success should look like.'
  },
  {
    step: '02',
    title: 'Plan',
    description:
      'We define the project scope, choose the appropriate technology, establish priorities, and prepare an implementation roadmap.'
  },
  {
    step: '03',
    title: 'Build',
    description:
      'We design, develop, integrate, and test the solution through a structured development process.'
  },
  {
    step: '04',
    title: 'Launch & Support',
    description:
      'We deploy the solution, verify its operation, and provide agreed maintenance and support.'
  }
];

export const companyPrinciples = [
  {
    title: 'Connected Expertise',
    description:
      'Multiple technology capabilities working together towards one business objective.'
  },
  {
    title: 'Built Around Your Needs',
    description:
      'Solutions designed around actual business requirements rather than unnecessary complexity.'
  },
  {
    title: 'Practical Delivery',
    description:
      'A structured approach from understanding the problem to building and implementing the solution.'
  }
];

export const differentiators = [
  {
    title: 'Multiple Capabilities, One Direction',
    description:
      'Software, automation, infrastructure, and design can work together under one coordinated project.'
  },
  {
    title: 'Solutions Around Real Requirements',
    description:
      'We begin with the problem and select technology that fits the actual need.'
  },
  {
    title: 'Structured Development',
    description:
      'Projects follow defined stages, clear communication, and reviewable deliverables.'
  },
  {
    title: 'Built to Evolve',
    description:
      'We aim to develop solutions that can be maintained, improved, and expanded as requirements change.'
  }
];

export const industries = [
  {
    slug: 'saas-technology',
    name: 'Technology & SaaS',
    summary:
      'Software products, cloud infrastructure, automation, integrations, and scalable applications.',
    challenges: [
      'Product roadmaps that outpace the engineering capacity available to deliver them.',
      'Integrations between the product and the tools customers already use.',
      'Infrastructure that must stay reliable as usage grows.'
    ],
    solutions: [
      'Full-stack product development and API integrations.',
      'Cloud environments, deployment pipelines and monitoring.',
      'AI features and workflow automation built into the product.'
    ],
    divisions: ['web-development', 'devops-cloud', 'ai-automation']
  },
  {
    slug: 'professional-services',
    name: 'Professional Services',
    summary:
      'Business websites, customer management systems, lead handling, workflow automation, and digital operations.',
    challenges: [
      'Enquiries arriving through several channels without a consistent follow-up process.',
      'Client and project information held in documents or spreadsheets.',
      'Websites that present the firm well but do not support the work behind them.'
    ],
    solutions: [
      'Professional websites with a clear enquiry path.',
      'CRM and workflow systems for leads, clients and delivery.',
      'Automation for follow-ups, reminders and internal handoffs.'
    ],
    divisions: ['web-development', 'crm-erp', 'ai-automation']
  },
  {
    slug: 'real-estate',
    name: 'Real Estate',
    summary:
      'Property websites, enquiry management, customer follow-ups, and business management systems.',
    challenges: [
      'High enquiry volume that is difficult to qualify and follow up consistently.',
      'Property information spread across listings, documents and internal tools.',
      'Slow responses to prospective buyers or tenants.'
    ],
    solutions: [
      'Property-focused websites with structured listing content.',
      'Enquiry management and automated follow-up workflows.',
      'Internal systems for clients, properties and communication history.'
    ],
    divisions: ['web-development', 'crm-erp', 'ai-automation', 'ui-ux-design']
  },
  {
    slug: 'healthcare',
    name: 'Healthcare & Clinics',
    summary:
      'Digital presence, appointment workflows, patient communication, and operational systems, with appropriate privacy safeguards.',
    challenges: [
      'Appointment and enquiry handling that relies on phone calls and manual notes.',
      'Administrative work that takes time away from patient-facing activity.',
      'Digital systems that need careful access and privacy controls.'
    ],
    solutions: [
      'Clear, accessible websites with appointment enquiry flows.',
      'Operational systems with role-based access and defined workflows.',
      'Automation for reminders, communication and internal administration.'
    ],
    divisions: ['web-development', 'crm-erp', 'ui-ux-design']
  },
  {
    slug: 'construction-home-services',
    name: 'Construction & Home Services',
    summary:
      'Business websites, quotation enquiries, customer communication, scheduling, and internal workflows.',
    challenges: [
      'Quotation requests that arrive with incomplete information.',
      'Scheduling and job details spread across calls, messages and paper.',
      'Customers left without clear updates during a project.'
    ],
    solutions: [
      'Service websites with structured quotation enquiry forms.',
      'Job, customer and scheduling systems for internal teams.',
      'Automated confirmations, reminders and status updates.'
    ],
    divisions: ['web-development', 'crm-erp', 'ai-automation']
  },
  {
    slug: 'ecommerce-retail',
    name: 'Ecommerce & Retail',
    summary:
      'Ecommerce development, order workflows, customer support, inventory systems, and integrations.',
    challenges: [
      'Storefronts that do not reflect how customers actually browse and buy.',
      'Orders, stock and customer questions managed across separate systems.',
      'Manual processes behind the checkout that slow fulfilment.'
    ],
    solutions: [
      'Ecommerce experiences with clear product presentation and checkout flows.',
      'Order, inventory and support workflows connected to the store.',
      'Integrations that keep sales and operational data aligned.'
    ],
    divisions: ['web-development', 'crm-erp', 'ui-ux-design', 'devops-cloud']
  },
  {
    slug: 'recruitment-staffing',
    name: 'Recruitment & Staffing',
    summary:
      'Candidate management, recruitment workflows, applicant tracking, and communication automation.',
    challenges: [
      'Candidate records scattered across inboxes and spreadsheets.',
      'Repetitive screening, scheduling and status communication.',
      'Limited visibility across multiple open roles.'
    ],
    solutions: [
      'Candidate and vacancy management systems.',
      'Workflows for screening, shortlisting and interview coordination.',
      'Automated communication for candidates and hiring teams.'
    ],
    divisions: ['crm-erp', 'ai-automation', 'web-development']
  }
];
