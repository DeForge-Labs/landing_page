export const templates = [
  {
    id: 1,
    name: "AI Customer Support Agent",
    description:
      "A smart chatbot for your website that answers customer questions instantly. It uses your own documents (FAQs, product guides) as a knowledge base to provide accurate, context-aware responses, reducing the load on your support team.",
    category: "Customer Support",
    tags: ["chatbot", "support", "RAG", "knowledge base", "AI"],
    nodes: [
      "Chat Bot Trigger",
      "Knowledge Base",
      "Google Chat",
      "Send Chat Bot Response",
    ],
  },
  {
    id: 2,
    name: "Automated Daily News Tweeter",
    description:
      "This template automatically fetches the latest news on a specific topic once a day, uses an AI to write a compelling tweet about it, and posts it to your Twitter account. Keep your audience engaged with fresh content without any manual effort.",
    category: "Social Media Automation",
    tags: ["twitter", "automation", "news", "content creation", "cron"],
    nodes: ["Cron Trigger", "AI Web Search", "OpenAI Chat", "Tweet Post"],
    link: "https://d4g.app/Cn4sDf",
  },
  {
    id: 3,
    name: "Telegram Meeting Scheduler Bot",
    description:
      "Allows users to find and see available meeting slots directly within Telegram. The bot interacts with the user to understand their request and fetches available times from your Cal.com schedule, making booking appointments seamless.",
    category: "Productivity",
    tags: ["telegram", "bot", "scheduling", "cal.com", "assistant"],
    nodes: [
      "Telegram Trigger",
      "Get Cal.com Schedule",
      "JSON to Text",
      "OpenAI Chat",
      "Book Cal.com Meeting",
      "Send Telegram Message",
    ],
    link: "https://d4g.app/VZRPU1",
  },
  {
    id: 4,
    name: "Gmail Summarizer to Telegram",
    description:
      "Triggers whenever you receive a new email in Gmail. It then uses an AI to summarize the email's content and sends the summary to you via a Telegram message for a quick overview on the go.",
    category: "Personal Productivity",
    tags: ["email", "gmail", "telegram", "automation", "summarization", "AI"],
    nodes: ["Gmail Trigger", "OpenAI Chat", "Send Telegram Message"],
    link: "https://d4g.app/T1mtFS",
  },
  {
    id: 5,
    name: "Generative AI Media Studio",
    description:
      "A simple workflow for creative content generation. You provide a text prompt via Telegram, and the agent generates both a unique AI image using Google Imagen and a short AI music clip using Google Lyria, sending them back to you.",
    category: "Content Creation",
    tags: ["GenAI", "images", "music", "AI", "google", "telegram", "creative"],
    nodes: [
      "Telegram Trigger",
      "Imagen AI Images",
      "Lyria AI Music",
      "Send Telegram Media Message",
    ],
    link: "https://d4g.app/aqFLTE",
  },
  {
    id: 6,
    name: "Content Repurposing for LinkedIn",
    description:
      "This agent takes a link to a web article or blog post, ingests its content, and then leverages an AI to write a professional LinkedIn post summarizing the key points, complete with relevant hashtags.",
    category: "Social Media & Marketing",
    tags: ["linkedin", "content creation", "marketing", "automation", "AI"],
    nodes: [
      "Chat Bot Trigger",
      "Knowledge Base",
      "Google Chat",
      "LinkedIN Post",
    ],
    link: "https://d4g.app/bP0gQ4",
  },
  {
    id: 7,
    name: "Automated Job Search Alerter",
    description:
      "Runs on a schedule to search for new job postings based on your criteria (keywords, country, minimum salary). It then formats the list of jobs and sends it to you via Telegram, so you never miss an opportunity.",
    category: "Career & Job Search",
    tags: ["jobs", "search", "automation", "career", "telegram"],
    nodes: [
      "Cron Trigger",
      "Jobs Search",
      "JSON to Text",
      "Google Chat",
      "Send Telegram Message",
    ],
    link: "https://d4g.app/GSGTWq",
  },
  {
    id: 8,
    name: "Weather API Bot",
    description:
      "A simple agent that runs on a schedule, calls an external weather API for a specific location, extracts the relevant temperature and conditions, and sends you a formatted daily weather update.",
    category: "Utilities",
    tags: ["api", "weather", "cron", "json", "utility"],
    nodes: [
      "Cron Trigger",
      "API Call",
      "Extract JSON",
      "Text Join",
      "Send Telegram Node",
    ],
  },
  {
    id: 9,
    name: "Text-to-Audiobook Narrator",
    description:
      "Convert any piece of text into a high-quality audio narration. Simply paste your text, and this agent will use Eleven Labs' Text-to-Speech service to generate an audio file and send it to you.",
    category: "Audio & Content Creation",
    tags: ["audio", "tts", "narration", "elevenlabs", "text to speech"],
    nodes: [
      "Telegram Trigger",
      "Text to Speech",
      "Send Telegram Media Message",
    ],
  },
];

export const categories = Array.from(new Set(templates.map((t) => t.category)));
export const allTags = Array.from(new Set(templates.flatMap((t) => t.tags)));
