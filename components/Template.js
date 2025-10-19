import Image from "next/image";
import TemplateCard from "./TemplateCard";
import { Badge } from "./ui/badge";
import Container from "./ui/container";

export default function Template() {
  return (
    <section className="text-black border-b border-black/50 border-dashed">
      <Container className="flex gap-10 flex-col py-12 lg:py-20 !px-4 sm:!px-20 gap-16">
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
          <TemplateCard
            icon={
              <Image src="/icons/chat3.png" alt="Logo" width={60} height={60} />
            }
            embedded
            title="AI Customer Support Agent"
            description="A smart chatbot for your website that answers customer questions instantly."
            className={"block md:hidden"}
          />
          <TemplateCard
            icon={
              <Image
                src="/icons/chat3.png"
                alt="Logo"
                width={200}
                height={200}
                className="absolute bottom-5 right-5 w-30 h-30"
              />
            }
            title="AI Customer Support Agent"
            description="A smart chatbot for your website that answers customer questions instantly. It uses your own documents (FAQs, product guides) as a knowledge base to provide accurate, context-aware responses, reducing the load on your support team."
            className={"row-span-2 md:block hidden"}
          />
          <TemplateCard
            icon={
              <Image src="/icons/job.png" alt="Logo" width={60} height={60} />
            }
            embedded
            title="Automated Job Search Alerter"
            description="Runs on a schedule to search for new job postings based on your criteria (keywords, country, minimum salary)."
          />
          <TemplateCard
            icon={
              <Image src="/icons/news.png" alt="Logo" width={60} height={60} />
            }
            embedded
            title="Automated Daily News Tweeter"
            description="This template automatically fetches the latest news on a specific topic once a day, uses an AI to write a compelling tweet about it, and posts it to your Twitter account."
          />
          <TemplateCard
            icon={
              <Image
                src="/icons/calender.png"
                alt="Logo"
                width={60}
                height={60}
              />
            }
            embedded
            title="Telegram Meeting Scheduler Bot"
            description="Allows users to find and see available meeting slots directly within Telegram. "
          />
          <TemplateCard
            icon={
              <Image
                src="/icons/ai.png"
                alt="Logo"
                width={200}
                height={200}
                className="absolute bottom-5 right-5 w-30 h-30"
              />
            }
            title="Agent Gallery"
            description="Head over to our Agent Gallery to see what other users have built with our platform. From customer support to job search alerts, we've got you covered."
            className={"row-span-2 md:block hidden"}
          />
          <TemplateCard
            icon={
              <Image src="/icons/mail.png" alt="Logo" width={60} height={60} />
            }
            embedded
            title="Gmail Summarizer to Telegram"
            description="Triggers whenever you receive a new email in Gmail. It then uses an AI to summarize the email's content and sends the summary to you"
          />
          <TemplateCard
            icon={
              <Image src="/icons/book.png" alt="Logo" width={60} height={60} />
            }
            embedded
            title="AI Tutor"
            description="An AI Tutor Agent that can guide users to learn a specific topic from a particular knowledge level, with the option to take custom references from books."
          />
          <TemplateCard
            icon={
              <Image src="/icons/ai.png" alt="Logo" width={60} height={60} />
            }
            embedded
            title="Agent Gallery"
            description="Head over to our Agent Gallery to see what other users have built with our platform."
            className={"block md:hidden"}
          />
        </div>
      </Container>
    </section>
  );
}
