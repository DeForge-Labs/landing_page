import Image from "next/image";

import { Badge } from "../../ui/badge";
import Container from "../../ui/container";

import TemplateCard from "./TemplateCard";

const TEMPLATES = [
  {
    icon: <Image src="/icons/chat3.png" alt="Logo" width={60} height={60} />,
    embedded: true,
    title: "AI Customer Support Agent",
    description:
      "A smart chatbot for your website that answers customer questions instantly.",
    className: "block md:hidden",
  },

  {
    icon: (
      <Image
        src="/icons/chat3.png"
        alt="Logo"
        width={200}
        height={200}
        className="absolute bottom-5 right-5 w-30 h-30"
      />
    ),
    title: "AI Customer Support Agent",
    description:
      "A smart chatbot for your website that answers customer questions instantly. It uses your own documents (FAQs, product guides) as a knowledge base to provide accurate, context-aware responses, reducing the load on your support team.",
    className: "row-span-2 md:block hidden",
  },

  {
    icon: <Image src="/icons/job.png" alt="Logo" width={60} height={60} />,
    embedded: true,
    title: "Automated Job Search Alerter",
    description:
      "Runs on a schedule to search for new job postings based on your criteria (keywords, country, minimum salary).",
  },

  {
    icon: <Image src="/icons/news.png" alt="Logo" width={60} height={60} />,
    embedded: true,
    title: "Automated Daily News Tweeter",
    description:
      "Automatically fetches the latest news on a topic once a day, writes a compelling AI-generated tweet, and posts it to Twitter.",
  },

  {
    icon: <Image src="/icons/calender.png" alt="Logo" width={60} height={60} />,
    embedded: true,
    title: "Telegram Meeting Scheduler Bot",
    description:
      "Allows users to find and see available meeting slots directly within Telegram.",
  },

  {
    icon: (
      <Image
        src="/icons/ai.png"
        alt="Logo"
        width={200}
        height={200}
        className="absolute bottom-5 right-5 w-30 h-30"
      />
    ),
    title: "Agent Gallery",
    description:
      "Browse what other users have built using our platform — customer support agents, job search tools, and more.",
    className: "row-span-2 md:block hidden",
  },

  {
    icon: <Image src="/icons/mail.png" alt="Logo" width={60} height={60} />,
    embedded: true,
    title: "Gmail Summarizer to Telegram",
    description:
      "Triggers when you receive an email, summarizes it using AI, and sends the summary to Telegram.",
  },

  {
    icon: <Image src="/icons/book.png" alt="Logo" width={60} height={60} />,
    embedded: true,
    title: "AI Tutor",
    description:
      "An AI Tutor Agent that adapts to your learning level and can use book references for explanations.",
  },

  {
    icon: <Image src="/icons/ai.png" alt="Logo" width={60} height={60} />,
    embedded: true,
    title: "Agent Gallery",
    description: "Explore our gallery of AI agents created by the community.",
    className: "block md:hidden",
  },
];

const Template = () => {
  return (
    <section className="text-black border-b border-black/50 border-dashed">
      <Container className="flex flex-col py-12 lg:py-20 px-4! sm:px-20! gap-16">
        <div className="text-center space-y-2">
          <Badge className="bg-secondary border border-black/50 text-black/50 px-3 py-1 rounded-xl">
            Templates
          </Badge>

          <h2 className="text-2xl lg:text-4xl font-bold mt-2">
            Deploy AI Agents using Forms
          </h2>

          <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
            Use our pre-built templates to get started with AI agents and deploy
            them with a single click. Just fill in the form and you're ready to
            go. No coding required.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {TEMPLATES.map((item, idx) => (
            <TemplateCard key={idx} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Template;
