import { Bot, Code2, Cloud, Database, Boxes, Palette } from 'lucide-react';

/**
 * The six NetAISystems service divisions.
 * Single source of truth for the services index, detail pages and navigation.
 *
 * Copy follows the approved division brief. `summary` is the homepage line,
 * `navDescription` is the one-sentence navigation line, and the remaining
 * fields drive the dedicated service pages.
 */
export const serviceDivisions = [
  {
    slug: 'ai-automation',
    number: '01',
    icon: Bot,
    title: 'AI Automation & Agentic Engineering',
    shortTitle: 'AI Automation',
    navDescription:
      'Intelligent systems and automated workflows that handle real business operations.',
    summary:
      'Make everyday business operations smarter with intelligent AI systems and automated workflows.',
    heroHeading: 'Make Your Business Work Smarter with AI.',
    intro: [
      'Businesses spend valuable time managing repetitive tasks, responding to enquiries, moving information between applications, and handling routine processes.',
      'NetAISystems develops AI-powered systems and automated workflows that help businesses streamline these activities and improve the way their teams work.'
    ],
    offerings: [
      {
        name: 'AI Agent Development',
        description:
          'We develop AI agents designed to perform defined tasks, interact with business tools, retrieve relevant information, and assist with specific workflows.'
      },
      {
        name: 'Agentic AI Systems',
        description:
          'We build systems where AI can coordinate multiple steps towards a defined objective, using approved tools and business rules.'
      },
      {
        name: 'Multi-Agent Systems',
        description:
          'We design coordinated AI workflows in which specialised agents handle different responsibilities within a larger process.'
      },
      {
        name: 'RAG Chatbots and Knowledge Assistants',
        description:
          'We develop assistants that retrieve information from approved company documents, knowledge bases, and business data to provide context-aware responses.'
      },
      {
        name: 'AI Voice Agents',
        description:
          'We build voice-based systems that can handle defined customer interactions, collect information, answer supported questions, and assist with appointment workflows.'
      },
      {
        name: 'Workflow Automation',
        description:
          'We connect business applications and automate repetitive processes using workflow tools and custom integrations.'
      },
      {
        name: 'CRM and Sales Automation',
        description:
          'We automate lead capture, customer data updates, follow-ups, notifications, and related sales operations.'
      },
      {
        name: 'Custom AI Automation',
        description:
          'We develop tailored Python and Node.js solutions for business-specific requirements.'
      }
    ],
    problems: [
      'Repetitive administrative work.',
      'Slow enquiry responses.',
      'Disconnected applications.',
      'Manual data entry.',
      'Inconsistent follow-ups.',
      'Repetitive customer support tasks.',
      'Time-consuming internal processes.'
    ],
    deliverables: [
      'AI assistants.',
      'Workflow automations.',
      'Application integrations.',
      'Lead management workflows.',
      'Knowledge-based chat systems.',
      'Voice-based business workflows.',
      'Custom automation applications.'
    ],
    technologies: [
      {
        name: 'Python',
        purpose: 'Custom automation services, data processing and AI integrations.'
      },
      {
        name: 'Node.js',
        purpose: 'Workflow services, API connections and application logic.'
      },
      {
        name: 'n8n',
        purpose: 'Visual workflow automation across the tools a business already uses.'
      },
      {
        name: 'APIs and webhooks',
        purpose: 'Connect existing applications so information moves between them.'
      },
      {
        name: 'Databases',
        purpose: 'Store and retrieve the business data an automation depends on.'
      },
      {
        name: 'Language models',
        purpose: 'Interpret requests, generate responses and coordinate defined tasks.'
      },
      {
        name: 'Retrieval systems',
        purpose: 'Ground answers in approved company documents and knowledge bases.'
      }
    ],
    ctaTitle: "Let's Automate Your Workflow.",
    faqs: [
      {
        q: 'Can the AI use our own business information?',
        a: 'Yes. Retrieval-based systems are built on approved company documents, product information and policies, so responses are grounded in your material rather than general model knowledge.'
      },
      {
        q: 'What happens when an automated process is unsure?',
        a: 'Escalation rules are defined during planning. Cases outside the approved scope are handed to a person with the context already captured.'
      },
      {
        q: 'Do we need to replace the tools we already use?',
        a: 'No. Automation is designed to work with existing systems through their APIs, webhooks or supported integrations.'
      }
    ]
  },
  {
    slug: 'web-development',
    number: '02',
    icon: Code2,
    title: 'Web & Software Development',
    shortTitle: 'Software Development',
    navDescription:
      'Websites, web applications and custom software built around your business.',
    summary:
      'Build professional websites, powerful applications, and custom digital products designed around your business.',
    heroHeading: 'Digital Products Built Around Your Business.',
    intro: [
      'A professional digital presence and reliable software can transform how a business attracts customers, delivers services, and manages operations.',
      'NetAISystems designs and develops websites, web applications, and custom software based on business goals and real user requirements.'
    ],
    offerings: [
      {
        name: 'Business Website Development',
        description:
          "Professional websites that communicate a company's services, establish its online presence, and make it easy for visitors to contact the business."
      },
      {
        name: 'Corporate Website Development',
        description:
          'Structured corporate websites for organizations that need professional communication, service presentation, and scalable content.'
      },
      {
        name: 'Custom Web Applications',
        description:
          'Interactive applications built to handle business processes, customer interactions, and specialised workflows.'
      },
      {
        name: 'Full-Stack Development',
        description:
          'Development across frontend interfaces, backend services, APIs, databases, and application logic.'
      },
      {
        name: 'SaaS Development',
        description:
          'Development of software products delivered through web-based platforms, with appropriate user access and business functionality.'
      },
      {
        name: 'Ecommerce Development',
        description:
          'Online stores with product presentation, shopping workflows, and relevant payment and order integrations.'
      },
      {
        name: 'Custom Software Development',
        description:
          'Software designed around specific organizational requirements rather than forcing a business into an unsuitable existing system.'
      },
      {
        name: 'Dashboards and Admin Panels',
        description:
          'Interfaces that help teams manage information, review activity, and perform administrative tasks.'
      },
      {
        name: 'API Development and Integrations',
        description:
          'Systems that communicate with third-party services and internal applications.'
      },
      {
        name: 'Website Maintenance and Redesign',
        description:
          'Improvements to existing websites, including content updates, interface refinement, functionality, and maintenance.'
      }
    ],
    problems: [
      'Outdated websites.',
      'Poor online presentation.',
      'Manual business processes.',
      'Disconnected software.',
      'Lack of custom functionality.',
      'Inefficient internal dashboards.',
      'Need for a new SaaS product.'
    ],
    deliverables: [
      'Business and corporate websites.',
      'Custom web applications.',
      'SaaS product builds.',
      'Ecommerce storefronts.',
      'Dashboards and admin panels.',
      'APIs and integrations.',
      'Redesigned or maintained websites.'
    ],
    technologies: [
      { name: 'React.js', purpose: 'Interactive interfaces and web application front ends.' },
      { name: 'Node.js', purpose: 'Server-side application logic and services.' },
      { name: 'Express.js', purpose: 'Backend services and API endpoints.' },
      { name: 'JavaScript', purpose: 'Frontend behaviour and shared application logic.' },
      { name: 'Python', purpose: 'Data processing and supporting service-side tasks.' },
      { name: 'MongoDB', purpose: 'Flexible data storage for application content.' },
      { name: 'PostgreSQL', purpose: 'Structured relational data and reporting.' }
    ],
    ctaTitle: "Let's Build Your Digital Product.",
    faqs: [
      {
        q: 'Can you work with our existing website?',
        a: 'Yes. We can extend, rebuild or redesign an existing site, and we preserve useful content, URLs and search structure wherever possible.'
      },
      {
        q: 'Who owns the finished software?',
        a: 'You do. Work is delivered in your repositories with documentation so your team or another partner can maintain it.'
      },
      {
        q: 'How do you decide which technology to use?',
        a: 'Technology is selected during planning based on the requirement, existing systems, expected load and the skills of the team who will maintain the result.'
      }
    ]
  },
  {
    slug: 'devops-cloud',
    number: '03',
    icon: Cloud,
    title: 'DevOps & Cloud Engineering',
    shortTitle: 'DevOps & Cloud',
    navDescription:
      'Cloud infrastructure, deployment pipelines and operational reliability.',
    summary:
      'Deploy, manage, and scale applications with reliable cloud infrastructure and modern DevOps practices.',
    heroHeading: 'Build, Deploy and Scale with Confidence.',
    intro: [
      'Applications need more than good code. They require reliable infrastructure, efficient deployment processes, and ongoing operational management.',
      'NetAISystems helps businesses establish and improve their cloud infrastructure and DevOps workflows so their applications can be deployed and maintained more efficiently.'
    ],
    offerings: [
      {
        name: 'AWS Cloud Infrastructure',
        description:
          'Configuration and deployment of cloud environments based on application requirements.'
      },
      {
        name: 'Cloud Migration',
        description:
          'Moving applications and workloads to suitable cloud environments through a planned migration process.'
      },
      {
        name: 'Docker Containerization',
        description:
          'Packaging applications and their dependencies into containers to improve consistency between environments.'
      },
      {
        name: 'Kubernetes Orchestration',
        description:
          "Managing containerized applications through orchestration where the project's scale and requirements justify it."
      },
      {
        name: 'CI/CD Pipeline Development',
        description:
          'Automating build, testing, and deployment workflows to reduce manual release work.'
      },
      {
        name: 'GitHub Actions Automation',
        description:
          'Creating repository-based workflows for testing, building, and deployment.'
      },
      {
        name: 'Linux Server Administration',
        description:
          'Server setup, configuration, maintenance, troubleshooting, and operational support.'
      },
      {
        name: 'Application Deployment',
        description:
          'Configuring development, staging, and production environments for application delivery.'
      },
      {
        name: 'Infrastructure Monitoring',
        description:
          'Implementing monitoring and operational visibility appropriate to the infrastructure.'
      },
      {
        name: 'DevOps Consulting',
        description:
          'Reviewing existing development and deployment practices and recommending practical improvements.'
      }
    ],
    problems: [
      'Manual deployments.',
      'Unreliable release processes.',
      'Poor infrastructure organization.',
      'Difficult environment configuration.',
      'Cloud migration requirements.',
      'Limited monitoring.',
      'Infrastructure maintenance challenges.'
    ],
    deliverables: [
      'Development, staging and production environments.',
      'Containerised applications.',
      'Automated build and deployment pipelines.',
      'Cloud migration plans and cutovers.',
      'Monitoring and alerting.',
      'Linux server administration.',
      'Documented infrastructure configuration.'
    ],
    technologies: [
      { name: 'AWS', purpose: 'Cloud hosting, storage, networking and access control.' },
      { name: 'Docker', purpose: 'Consistent application packaging across environments.' },
      { name: 'Kubernetes', purpose: 'Orchestration for containerised applications that need to scale.' },
      { name: 'Linux', purpose: 'Server operation, configuration and administration.' },
      { name: 'GitHub Actions', purpose: 'Repository-based testing, building and deployment workflows.' },
      { name: 'CI/CD tools', purpose: 'Repeatable release pipelines with fewer manual steps.' },
      { name: 'Monitoring tools', purpose: 'Visibility into uptime, performance and operational issues.' }
    ],
    ctaTitle: 'Improve Your Infrastructure.',
    faqs: [
      {
        q: 'Do you work with infrastructure that is already running?',
        a: 'Yes. We review the current setup first, then improve it in controlled stages rather than replacing everything at once.'
      },
      {
        q: 'When is Kubernetes appropriate?',
        a: 'When an application has multiple services, needs to scale automatically or requires orchestration across environments. Smaller projects are usually better served by simpler container deployment.'
      },
      {
        q: 'Can you support the environment after launch?',
        a: 'Yes. Support arrangements can cover monitoring, patching, incident response and incremental improvements.'
      }
    ]
  },
  {
    slug: 'crm-erp',
    number: '04',
    icon: Database,
    title: 'CRM, ERP & Business Systems',
    shortTitle: 'CRM & ERP',
    navDescription:
      'Connected systems for customers, operations, reporting and internal workflows.',
    summary:
      'Bring customers, employees, processes, and business operations together through connected management systems.',
    heroHeading: 'Bring Your Business Operations Together.',
    intro: [
      'As businesses grow, customer records, employee information, sales, inventory, and daily operations can become scattered across disconnected tools.',
      'NetAISystems develops and integrates business management systems that help organizations bring important processes and information together.'
    ],
    offerings: [
      {
        name: 'Custom CRM Development',
        description:
          'Systems designed to manage customer records, leads, interactions, and sales activities.'
      },
      {
        name: 'ERP Development',
        description:
          'Business management platforms that connect relevant operational processes within a centralized system.'
      },
      {
        name: 'Business Management Systems',
        description:
          'Custom platforms that organize company workflows, information, and internal responsibilities.'
      },
      {
        name: 'Inventory Management Systems',
        description:
          'Solutions for tracking stock information, inventory activity, and relevant operational records.'
      },
      {
        name: 'HR Management Systems',
        description:
          'Applications for organizing employee information and defined human resource workflows.'
      },
      {
        name: 'Customer Management Systems',
        description:
          'Tools for maintaining customer records and managing business interactions.'
      },
      {
        name: 'Sales Management Systems',
        description:
          'Systems for organizing opportunities, sales activities, and reporting.'
      },
      {
        name: 'Business Dashboards',
        description:
          'Interfaces that present important business information in an organized and understandable way.'
      },
      {
        name: 'Workflow Management',
        description:
          'Systems that organize tasks, approvals, and business processes.'
      },
      {
        name: 'Business Software Integration',
        description:
          'Connecting existing tools and systems to reduce disconnected workflows.'
      }
    ],
    problems: [
      'Scattered business information.',
      'Manual record keeping.',
      'Disconnected departments.',
      'Poor operational visibility.',
      'Repetitive administrative tasks.',
      'Lack of centralized reporting.',
      'Need for customized business software.'
    ],
    deliverables: [
      'Custom CRM platforms.',
      'ERP and business management systems.',
      'Inventory, HR and sales management systems.',
      'Business dashboards.',
      'Workflow and approval processes.',
      'Integrations between existing tools.',
      'Role-based access for internal teams.'
    ],
    technologies: [
      { name: 'React', purpose: 'Business system interfaces used by internal teams.' },
      { name: 'Node.js', purpose: 'Application logic, workflows and API connections.' },
      { name: 'PostgreSQL', purpose: 'Structured records for customers, operations and reporting.' },
      { name: 'REST APIs', purpose: 'Data exchange between business systems and existing tools.' },
      {
        name: 'Authentication and permissions',
        purpose: 'Control which teams and roles can see or change each record.'
      }
    ],
    relatedProduct: {
      label: 'Featured product',
      name: 'ZodAgent',
      subtitle: 'AI-Powered ERP System',
      description:
        'ZodAgent is an AI-powered ERP system developed by NetAISystems to help businesses manage and streamline their operations through an intelligent, centralized platform.',
      href: '/zodagent'
    },
    ctaTitle: "Let's Organize Your Business Systems.",
    faqs: [
      {
        q: 'Can the system connect to software we already use?',
        a: 'Where an existing system exposes an API or a supported data export, we connect to it instead of duplicating information.'
      },
      {
        q: 'Do we have to replace everything at once?',
        a: 'No. Most engagements begin with the process causing the most difficulty, then expand once the foundation is working.'
      },
      {
        q: 'Can different teams see different information?',
        a: 'Yes. Roles and permissions are defined during planning so each team has access to the records it needs.'
      }
    ]
  },
  {
    slug: 'cgi-3d',
    number: '05',
    icon: Boxes,
    title: 'CGI, 3D Animation & VFX',
    shortTitle: 'CGI & 3D',
    navDescription:
      'Product visuals, 3D animation and visual effects for brands and campaigns.',
    summary:
      'Create compelling visual experiences through 3D, CGI, animation, and professional visual production.',
    heroHeading: 'Bring Ideas to Life Through Digital Visuals.',
    intro: [
      'Strong visual content helps brands communicate products, concepts, and experiences more effectively.',
      'NetAISystems offers creative production capabilities covering 3D, CGI, animation, and visual effects for business and digital projects.'
    ],
    offerings: [
      {
        name: '3D Modeling',
        description:
          'Creating three-dimensional digital models of products, objects, and environments.'
      },
      {
        name: '3D Animation',
        description:
          'Animating digital objects and scenes to communicate concepts, demonstrate products, or tell visual stories.'
      },
      {
        name: 'CGI Production',
        description:
          'Creating computer-generated imagery for commercial, promotional, and visual communication purposes.'
      },
      {
        name: 'Visual Effects',
        description:
          'Integrating digital effects and visual enhancements into video and creative productions.'
      },
      {
        name: 'Motion Graphics',
        description:
          'Developing animated graphic elements for presentations, advertisements, and digital content.'
      },
      {
        name: 'Product Visualization',
        description:
          'Creating visual representations of products for marketing and presentation.'
      },
      {
        name: 'Product Rendering',
        description:
          'Producing detailed rendered images of products and objects.'
      },
      {
        name: 'Architectural Visualization',
        description:
          'Creating visual representations of architectural spaces and designs.'
      },
      {
        name: 'Promotional Animation',
        description:
          'Developing animated promotional content for brands and products.'
      }
    ],
    problems: [
      'Products that cannot be photographed in every required configuration.',
      'Launch material needed before physical samples are available.',
      'Spaces that need to be presented before they are built.',
      'Complex products that are difficult to explain with photography alone.',
      'Visual assets that look inconsistent across campaigns and channels.'
    ],
    deliverables: [
      '3D product models.',
      'Product renders and visualisation stills.',
      'Animated product sequences.',
      'CGI assets for campaigns.',
      'Motion graphics for digital content.',
      'Architectural visuals.',
      'Visual effects for video production.'
    ],
    useCases: [
      'Product demonstrations.',
      'Marketing campaigns.',
      'Product presentation.',
      'Architectural concepts.',
      'Promotional videos.',
      'Digital advertising.'
    ],
    ctaTitle: "Let's Create Something Visual.",
    faqs: [
      {
        q: 'What do you need to begin production?',
        a: 'Reference material, product specifications or CAD files where available, intended usage, and a clear sense of the visual direction.'
      },
      {
        q: 'Can the visuals match our brand?',
        a: 'Yes. Existing brand guidelines, previous assets and references are used so the output stays consistent with how the brand is presented elsewhere.'
      },
      {
        q: 'Can you work from an unfinished product?',
        a: 'Where enough specification exists, visuals can be produced before a physical sample is ready. The level of detail is agreed before production starts.'
      }
    ]
  },
  {
    slug: 'ui-ux-design',
    number: '06',
    icon: Palette,
    title: 'UI/UX & Creative Design',
    shortTitle: 'UI/UX Design',
    navDescription:
      'Interfaces, prototypes and visual identities that make products easier to use.',
    summary:
      'Design intuitive digital experiences and consistent visual identities that connect businesses with their audiences.',
    heroHeading: 'Design Experiences People Enjoy Using.',
    intro: [
      'A digital product should not only work properly; it should also be understandable, consistent, and easy to use.',
      'NetAISystems creates user-focused digital interfaces and creative assets that help businesses communicate clearly and deliver better digital experiences.'
    ],
    offerings: [
      {
        name: 'UI/UX Design',
        description:
          'Designing digital experiences around user needs, navigation, usability, and clear interaction patterns.'
      },
      {
        name: 'Website UI Design',
        description:
          'Designing structured website interfaces that communicate information and guide visitors.'
      },
      {
        name: 'Web Application Design',
        description:
          'Designing application interfaces for complex workflows and interactive functionality.'
      },
      {
        name: 'Mobile Application UI Design',
        description:
          'Creating interfaces adapted to mobile screens and user interaction.'
      },
      {
        name: 'Dashboard Design',
        description:
          'Developing organized interfaces for analytics, administration, and business operations.'
      },
      {
        name: 'SaaS Product Interface Design',
        description:
          'Designing consistent product interfaces for software platforms.'
      },
      {
        name: 'Wireframing and Prototyping',
        description:
          'Planning interface structure and developing prototypes to explore user journeys before implementation.'
      },
      {
        name: 'Brand Identity and Logo Design',
        description:
          'Developing visual identity elements that help businesses establish a consistent brand presentation.'
      },
      {
        name: 'Graphic Design',
        description:
          'Creating visual communication materials for business and marketing purposes.'
      },
      {
        name: 'Presentation Design',
        description:
          'Designing professional presentations for business communication and product demonstrations.'
      }
    ],
    problems: [
      'Interfaces where important actions are difficult to find.',
      'Inconsistent screens added feature by feature.',
      'Brand material that varies across website, documents and social media.',
      'Workflows that require unnecessary steps or explanation.',
      'Designs that are difficult for developers to implement accurately.'
    ],
    deliverables: [
      'Interface designs for web and mobile.',
      'Clickable prototypes.',
      'Wireframes and user flows.',
      'Design systems and reusable components.',
      'Brand identity and logo assets.',
      'Marketing and graphic design material.',
      'Presentation decks.'
    ],
    designPrinciples: [
      'Clear navigation.',
      'Consistent visual hierarchy.',
      'Accessible interactions.',
      'Readable typography.',
      'User-focused structure.',
      'Consistent design systems.'
    ],
    ctaTitle: "Let's Design Your Next Experience.",
    faqs: [
      {
        q: 'Do you provide designs that developers can build from?',
        a: 'Yes. Deliverables include component states, spacing rules and interaction notes so implementation is unambiguous.'
      },
      {
        q: 'Can you work within our existing brand?',
        a: 'Yes. Existing guidelines are extended where they are solid, and changes are proposed only where they solve a real usability or consistency problem.'
      },
      {
        q: 'Do you test designs before development?',
        a: 'When the scope allows, prototypes are reviewed with representative users before build begins.'
      }
    ]
  }
];

export const getServiceDivision = (slug) =>
  serviceDivisions.find((division) => division.slug === slug);

export const getRelatedDivisions = (slug) =>
  serviceDivisions.filter((division) => division.slug !== slug);
