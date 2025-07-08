const templateData = [
  {
    id: "2fae6c5e-b917-4564-8f8e-52e580c5256a",
    name: "Customer Support Bot",
    description:
      "An intelligent customer support assistant that can handle common inquiries, provide product information, and offer troubleshooting guidance using natural language processing.",
    content:
      "## What It Does:\n- Receives customer questions in natural language\n- Uses AI to understand context and intent\n- Provides helpful, consistent responses\n- Can handle multiple topics: billing, technical issues, product info\n- Maintains professional tone throughout conversations\n\n## Use Cases:\n- 24/7 customer support coverage\n- Handling repetitive inquiries\n- First-line support before escalating to humans\n- Reducing support ticket volume",
    tags: ["support", "Telegram", "easy"],
    category: "Customer Service",
    author: "Team Deforge",
    workflowId: "cc00971b-1040-415a-bba7-067a1ace36b4",
    createdAt: "2025-06-14T09:20:28.778Z",
    updatedAt: "2025-06-14T09:20:28.778Z",
    workflow: {
      id: "cc00971b-1040-415a-bba7-067a1ace36b4",
      name: "Customer Support Bot",
      createdAt: "2025-06-14T09:08:52.378Z",
      updatedAt: "2025-06-14T09:13:40.847Z",
      teamId: "8e91e769-a108-4905-88ca-b74a7e80cd57",
      version: 2,
      status: "TEST",
      _count: {
        nodes: 4,
        edges: 4,
      },
    },
  },
  {
    id: "682550de-265c-4837-8391-64041b6b1477",
    name: "Daily Price Alert Bot",
    description:
      "An automated cryptocurrency price monitoring system that tracks ETH/USDC exchange rates every 2 hours and provides detailed price alerts with trend analysis",
    content:
      "## Prerequisites: \n- Add Telegram API Key (Environment Variable) in the Send Telegram Message Node.\n- Add Chat ID to your personal chat or group chat in the Send Telegram Message Node.\n\n## Advanced Features (Optional Extensions):\n- Add multiple crypto pairs (BTC/USDC, ADA/USDC)\n- Include technical indicators (RSI, moving averages)\n- Add price target alerts for specific thresholds\n\n## What It Does:\n- Monitors ETH/USDC exchange rate every 2 hours automatically\n- Calculates price changes, trends, and volatility metrics\n- Provides intelligent alerts based on significant price movements\n- Tracks trading volume for market activity assessment\n- Delivers formatted briefings with actionable insights\n- Maintains consistent monitoring without manual intervention\n\n## Use Cases:\n- Personal cryptocurrency portfolio monitoring\n- Day trading decision support\n- Investment timing optimization\n- Market trend awareness for crypto investors\n- Automated alerts for significant price movements\n- Historical price tracking and analysis",
    tags: ["Cron", "Price", "medium"],
    category: "Alert",
    author: "Team Deforge",
    workflowId: "b426013e-865e-42bb-b452-88c9ff39b747",
    createdAt: "2025-06-14T10:27:31.438Z",
    updatedAt: "2025-06-14T10:48:09.475Z",
    workflow: {
      id: "b426013e-865e-42bb-b452-88c9ff39b747",
      name: "Daily Price Briefing Bot",
      createdAt: "2025-06-14T10:15:04.024Z",
      updatedAt: "2025-06-14T10:22:46.891Z",
      teamId: "8e91e769-a108-4905-88ca-b74a7e80cd57",
      version: 2,
      status: "TEST",
      _count: {
        nodes: 5,
        edges: 4,
      },
    },
  },
  {
    id: "6fbe056c-103b-4163-9dd8-85d9e8c94571",
    name: "LLM Comparison Tool",
    description:
      "A comprehensive tool that sends the same prompt to multiple AI models and compares their responses for quality, accuracy, and style differences.",
    content:
      "## What It Does:\n- Sends identical prompts to multiple AI models simultaneously\n- Collects and formats responses from different providers\n- Enables side-by-side comparison of AI capabilities\n- Helps identify which model performs best for specific tasks\n- Provides insights into AI model strengths and weaknesses\n\n## Use Cases:\n- AI model evaluation and selection\n- Content generation optimization\n- Research and development testing\n- Quality assurance for AI applications\n- Educational comparison of AI capabilities",
    tags: ["Comparison", "LLM", "medium"],
    category: "Misc",
    author: "Team Deforge",
    workflowId: "7449be9c-1a4e-4efa-8090-e26732701942",
    createdAt: "2025-06-14T09:45:28.718Z",
    updatedAt: "2025-06-14T09:45:28.718Z",
    workflow: {
      id: "7449be9c-1a4e-4efa-8090-e26732701942",
      name: "LLM Comparison Tool",
      createdAt: "2025-06-14T09:37:39.910Z",
      updatedAt: "2025-07-07T12:34:46.893Z",
      teamId: "8e91e769-a108-4905-88ca-b74a7e80cd57",
      version: 3,
      status: "TEST",
      _count: {
        nodes: 9,
        edges: 10,
      },
    },
  },
  {
    id: "9c592b15-fb9a-4e6d-9e3c-90501875ad3e",
    name: "Automated Report Generator",
    description:
      "An intelligent reporting system that automatically generates periodic business reports with KPIs, analytics, and trend analysis.",
    content:
      "## Prerequisites:\n- Add URL to your company's endpoint to fetch the KPI in the API CALL Node.\n\n## What It Does:\n- Automatically generates periodic business reports\n- Calculates KPIs and performance metrics\n- Analyzes trends and period-over-period changes\n- Combines data from multiple business systems\n- Provides executive-ready summaries and insights\n\n## Use Cases:\n- Weekly sales performance reports\n- Monthly marketing analytics\n- Quarterly financial summaries\n- Executive dashboard updates\n- Stakeholder communication",
    tags: ["Cron", "Report", "medium"],
    category: "Generator",
    author: "Team Deforge",
    workflowId: "22bf8d7b-2cd1-47da-82c1-3ad3e592b1d7",
    createdAt: "2025-06-14T10:46:52.350Z",
    updatedAt: "2025-06-14T10:46:52.350Z",
    workflow: {
      id: "22bf8d7b-2cd1-47da-82c1-3ad3e592b1d7",
      name: "Automated Report Generator",
      createdAt: "2025-06-14T10:37:06.186Z",
      updatedAt: "2025-06-14T14:27:38.492Z",
      teamId: "8e91e769-a108-4905-88ca-b74a7e80cd57",
      version: 7,
      status: "TEST",
      _count: {
        nodes: 8,
        edges: 7,
      },
    },
  },
  {
    id: "acf85e52-f357-48f3-a555-0123d13fb80d",
    name: "Meeting Booking Agent",
    description:
      "A comprehensive AI Agent with the integration of Cal.com and telegram. Users can ask for available booking slots and finally book a meet through telegram by just providing their name and email.",
    content:
      "Our Solution: Visual AI Agent Development\n\nDeforge changes everything with our **node-based visual interface**:\n\n### 🎨 Drag & Drop Simplicity\nBuild complex AI workflows by simply dragging and connecting nodes. No code required.\n\n### 🧠 Pre-built AI Components\nAccess dozens of ready-to-use components:\n- LLM integrations (GPT-4, Claude, Llama)\n- Memory systems\n- Decision trees\n- API connectors\n- Blockchain integrations\n\n### ⚡ One-Click Deployment\nDeploy your AI agents to production instantly with our cloud infrastructure.",
    tags: ["telegram", "Cal.com", "hard"],
    category: "Customer Service",
    author: "Team Deforge",
    workflowId: "663ec52e-9f8f-43f0-9169-87e058f6d23c",
    createdAt: "2025-06-12T17:33:11.670Z",
    updatedAt: "2025-06-14T10:48:22.666Z",
    workflow: {
      id: "663ec52e-9f8f-43f0-9169-87e058f6d23c",
      name: "Telegram Workflow",
      createdAt: "2025-05-26T18:30:30.123Z",
      updatedAt: "2025-06-18T12:44:14.679Z",
      teamId: "ab9564c0-204a-485f-9f80-bc2fa6831768",
      version: 23,
      status: "TEST",
      _count: {
        nodes: 24,
        edges: 33,
      },
    },
  },
  {
    id: "c0cfa60e-5d67-49e9-aa49-6a8dc4327ebb",
    name: "Dynamic Content Generator",
    description:
      "An intelligent content generation system that creates personalized content based on user preferences, brand guidelines, and knowledge base information",
    content:
      "## What It Does:\n- Generates personalized content based on multiple input parameters\n- Maintains brand consistency using knowledge base\n- Adapts tone and style for different audiences\n- Creates various content types (blogs, emails, social posts)\n- Incorporates SEO best practices and brand guidelines\n\n## Use Cases:\n- Marketing content creation\n- Personalized email campaigns\n- Social media post generation\n- Blog article writing\n- Product description creation",
    tags: ["Content", "Generator", "medium"],
    category: "Misc",
    author: "Team Deforge",
    workflowId: "e38cb78a-3ee5-45f7-945e-d26abd18bfdf",
    createdAt: "2025-06-14T10:07:48.571Z",
    updatedAt: "2025-06-14T10:07:48.571Z",
    workflow: {
      id: "e38cb78a-3ee5-45f7-945e-d26abd18bfdf",
      name: "Dynamic Content Generator",
      createdAt: "2025-06-14T09:56:25.082Z",
      updatedAt: "2025-06-14T10:08:26.793Z",
      teamId: "8e91e769-a108-4905-88ca-b74a7e80cd57",
      version: 3,
      status: "TEST",
      _count: {
        nodes: 7,
        edges: 6,
      },
    },
  },
  {
    id: "de55bb26-a7a3-4e0a-89ef-5912267858a7",
    name: "Weather Assistant",
    description:
      "A weather information assistant that fetches real-time weather data for any city and presents it in a user-friendly format.",
    content:
      "## Prerequisites:\n- Add OpenWeather API Key in the URL provided in the Text Input\n\n## What It Does:\n- Calls OpenWeatherMap API for real-time data\n- Extracts relevant weather information (temperature, conditions, humidity)\n- Formats data into human-readable sentences\n- Provides instant weather updates for any location\n\n## Use Cases:\n- Personal weather checking\n- Travel planning assistance\n- Daily briefings for teams\n- Weather-dependent decision making",
    tags: ["Assistant", "Weather", "easy"],
    category: "Assistance",
    author: "Team Deforge",
    workflowId: "e3f58100-a180-46c5-add2-0ad89e4b8ccc",
    createdAt: "2025-06-14T09:33:55.532Z",
    updatedAt: "2025-06-14T09:33:55.532Z",
    workflow: {
      id: "e3f58100-a180-46c5-add2-0ad89e4b8ccc",
      name: "Weather Assistant",
      createdAt: "2025-06-14T09:25:35.351Z",
      updatedAt: "2025-06-14T09:28:59.429Z",
      teamId: "8e91e769-a108-4905-88ca-b74a7e80cd57",
      version: 2,
      status: "TEST",
      _count: {
        nodes: 5,
        edges: 4,
      },
    },
  },
];

export default templateData;
