import { InfiniteMovingCards2 } from "./ui/infinite-moving-cards-2";

export default function Reviews() {
  const reviews1 = [
    {
      platform: "Product Hunt",
      title: "Cruise Chen",
      description:
        "Love how Deforge makes building AI agents as easy as drag-and-drop—tbh, turning crazy ideas into actual tools without code is just genius. Huge props for this, fr!",
    },
    {
      platform: "Twitter",
      title: "Aarav",
      description:
        "It's beyond GPT. Custom RAG based agent built on data pipeline that scrapes info directly from business website so it's a whole flow rather than just GPT.",
    },
    {
      platform: "Product Hunt",
      title: "Hrvoje Pavlinović",
      description:
        "This is a gamechanger because it’s opening up agent building possibility to non-technical people. Imagine how many corporates could benefit from this kind of flexibility. Kudos to the team!",
    },
    {
      platform: "Reddit",
      title: "u/personal_body6789",
      description:
        "Hey, this is really cool! I've felt the same frustration with how complex a lot of these tools are. It seems like you have to be a developer to even get started.",
    },
    {
      platform: "Product Hunt",
      title: "Aniket Barun",
      description:
        "Hey this is really awesome and great. has really great potential. really revolutionary... keep it up❤️",
    },
    {
      platform: "Twitter",
      title: "Georgi",
      description:
        "I am not that curious about AI Agents, but Deforge is a game changer for me. I can finally build AI agents without any code.",
    },
  ];

  const reviews2 = [
    {
      platform: "Product Hunt",
      title: "Jason",
      description:
        "Congratulations on launch ！ Deforge looks like a huge step forward for making AI agents accessible to everyone",
    },
    {
      platform: "Reddit",
      title: "u/haraldpalma1",
      description:
        "Node based AI tools are so cool! Like Flora or Weavy for Images and Videos. It looks really good! Kudos! ",
    },
    {
      platform: "Product Hunt",
      title: "Musa Molla",
      description:
        "Congrats on the launch, Deforge. Love how you’re making agent building accessible beyond devs. ",
    },
    {
      platform: "Twitter",
      title: "Martinz.HL",
      description:
        "I have to say this is freaking amazing mate. Personally, It would be a game changer fr.",
    },

    {
      platform: "Product Hunt",
      title: "Precious Ekweson",
      description:
        "This is wild, Deforge is basically turning AI from a niche developer playground into a universal toolkit. ",
    },
    {
      platform: "Reddit",
      title: "u/That-Conference239",
      description:
        "it's really easy to use, but not 'stupid easy intuition', which is fine. but you have the potential to put A LOT of custom chatbot/taskbot/customer service wrappers out of work, or capture their business with what you have here. I'm blown away man! ",
    },
  ];

  const reviews3 = [
    {
      platform: "Product Hunt",
      title: "Ash Grover",
      description:
        "Congrats on the launch team! This is an amazing product. Reminds me a bit of n8n.",
    },
    {
      platform: "Reddit",
      title: "u/gifsslover",
      description: "I upvoted your product cuz it worth it. ",
    },
    {
      platform: "Product Hunt",
      title: "Dongnan",
      description:
        "Automate their social media content from a single prompt？ This sounds great!!",
    },
    {
      platform: "Twitter",
      title: "Lucad Liberato",
      description:
        "Deforge looks slick. I dig the approach of reducing complexity without dumbing things down.",
    },
    {
      platform: "Product Hunt",
      title: "Jhilik Kabir",
      description:
        "This looks neat! Building AI workflows is usually messy, so I really like how clean the interface feels.",
    },
    {
      platform: "Reddit",
      title: "u/ishq",
      description:
        "This sounds great, signed up and already implemented linkedin automation!",
    },
  ];

  return (
    <section id="use-cases" className="pt-16 md:pt-20">
      <div className="container space-y-4">
        <div className="text-center space-y-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            What our users say
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
            We ranked #1 in Product Hunt, Check our feedback and reviews from
            users who built their AI agents with Deforge.
          </p>
        </div>

        <div className="flex flex-col">
          <InfiniteMovingCards2
            items={reviews1}
            direction="right"
            speed="slow"
          />

          <InfiniteMovingCards2
            items={reviews2}
            direction="left"
            speed="slow"
            className="-mt-12"
          />

          <InfiniteMovingCards2
            items={reviews3}
            direction="right"
            speed="slow"
            className="-mt-12"
          />
        </div>
      </div>
    </section>
  );
}
