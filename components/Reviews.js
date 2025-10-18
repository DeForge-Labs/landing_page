"use client";

import Image from "next/image";
import Container from "./ui/container";
import { Badge } from "./ui/badge";
import { useState, useEffect } from "react";

export default function Reviews() {
  const allReviews = [
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
        "This is a gamechanger because it's opening up agent building possibility to non-technical people. Imagine how many corporates could benefit from this kind of flexibility. Kudos to the team!",
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
    {
      platform: "Product Hunt",
      title: "Jason",
      description:
        "Congratulations on launch! Deforge looks like a huge step forward for making AI agents accessible to everyone",
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
        "Congrats on the launch, Deforge. Love how you're making agent building accessible beyond devs. ",
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

  const [displayedReviews, setDisplayedReviews] = useState(
    allReviews.slice(0, 6)
  );
  const [fadingIndex, setFadingIndex] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      // Pick a random index to replace
      const randomIndex = Math.floor(Math.random() * 6);

      // Start fade out
      setFadingIndex(randomIndex);

      // After fade out completes, replace the review
      setTimeout(() => {
        setDisplayedReviews((prev) => {
          const newReviews = [...prev];

          // Get a random review that's not currently displayed
          const availableReviews = allReviews.filter(
            (review) => !prev.some((r) => r.title === review.title)
          );

          if (availableReviews.length > 0) {
            const randomReview =
              availableReviews[
                Math.floor(Math.random() * availableReviews.length)
              ];
            newReviews[randomIndex] = randomReview;
          }

          return newReviews;
        });

        // Start fade in
        setTimeout(() => {
          setFadingIndex(null);
        }, 50);
      }, 500); // Duration of fade out
    }, 5000); // Delay between changes (5 seconds)

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="use-cases" className="border-b border-dashed border-black/50">
      <Container className="!p-20 flex flex-col gap-16">
        <div className="text-center space-y-2">
          <Badge className="bg-secondary border border-black/50 text-black/50 px-3 py-1 rounded-xl">
            Reviews
          </Badge>
          <h2 className="text-2xl lg:text-4xl font-bold mt-2">
            What our users say
          </h2>
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
            We ranked #1 in Product Hunt, Check our feedback and reviews from
            users who built their AI agents with Deforge.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {displayedReviews.map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              className="relative min-h-[250px]"
              style={{
                opacity: fadingIndex === index ? 0 : 1,
                transition: "opacity 500ms ease-in-out",
              }}
            >
              <blockquote className="h-full">
                <div
                  aria-hidden="true"
                  className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 "
                ></div>
                <div className="rounded-lg shadow-md bg-secondary flex flex-col justify-between h-full gap-4 p-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground italic text-sm">
                      "{item.description}"
                    </p>
                  </div>

                  <div className="flex text-black items-center gap-2">
                    {item.platform === "Product Hunt" && (
                      <>
                        <Image
                          src="/testimonials/ProductHunt.svg"
                          alt="Product Hunt"
                          width={20}
                          height={20}
                        />
                        <h3 className="font-medium text-sm">Product Hunt</h3>
                      </>
                    )}

                    {item.platform === "Reddit" && (
                      <>
                        <Image
                          src="/testimonials/reddit.png"
                          alt="Reddit"
                          width={20}
                          height={20}
                        />
                        <h3 className="font-medium text-sm">Reddit</h3>
                      </>
                    )}

                    {item.platform === "Twitter" && (
                      <>
                        <Image
                          src="/testimonials/x-logo.png"
                          alt="Twitter"
                          width={20}
                          height={20}
                        />
                        <h3 className="font-medium text-sm">X/Twitter</h3>
                      </>
                    )}
                  </div>
                </div>
              </blockquote>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
