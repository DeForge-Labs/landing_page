import Image from "next/image";

import { Button } from "../../ui/button";
import Link from "next/link";

const items = [
  {
    title: "Customer Support Agent",
    icon: "/icons/Chat.png",
    desc: "Spin up your own bot that can answer your customers about your product",
    link: "https://d4g.app/qOgIxz",
  },

  {
    title: "Automated Job Search",
    icon: "/icons/Suitcase.png",
    desc: "Search for jobs based on your required job role and export them to an excel sheet",
    link: "https://d4g.app/meb3iZ",
  },

  {
    title: "Agent Library",
    icon: "/icons/Folder.png",
    desc: "Use pre-built agents to get started and deploy simply by filling a form",
    link: "https://app.deforge.io/templates",
  },
];

const HeaderShowcaseButtons = () => {
  return (
    <div className="flex w-full sm:w-xl xl:w-2xl sm:min-w-[360px] flex-col sm:flex-row items-start sm:items-stretch gap-3">
      {items.map((item) => (
        <Link
          href={item.link}
          key={item.title}
          target="_blank"
          className="flex-1 w-full"
        >
          <Button
            variant="secondary"
            className="rounded-sm text-[10px] w-full text-xs flex-col items-start justify-start whitespace-normal p-2 px-3 shadow-md h-full"
          >
            <div className="bg-background rounded-md shadow-sm">
              <Image src={item.icon} alt={item.title} width={32} height={32} />
            </div>

            <p>{item.title}</p>

            <span className="text-[10px] text-black/50 text-start -mt-1">
              {item.desc}
            </span>
          </Button>
        </Link>
      ))}
    </div>
  );
};

export default HeaderShowcaseButtons;
