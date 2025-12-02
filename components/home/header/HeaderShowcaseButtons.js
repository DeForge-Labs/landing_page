import Image from "next/image";

import { Button } from "../../ui/button";

const items = [
  {
    title: "Customer Support Agent",
    icon: "/icons/Chat.png",
    desc: "Spin up your own bot that can answer your customers about your product",
  },

  {
    title: "Automated Job Search",
    icon: "/icons/Suitcase.png",
    desc: "Search for jobs based on your required job role and export them to an excel sheet",
  },

  {
    title: "Agent Library",
    icon: "/icons/Folder.png",
    desc: "Use pre-built agents to get started and deploy simply by filling a form",
  },
];

const HeaderShowcaseButtons = () => {
  return (
    <div className="flex w-full sm:w-xl xl:w-2xl sm:min-w-[360px] flex-col sm:flex-row items-start sm:items-stretch gap-3">
      {items.map((item) => (
        <Button
          key={item.title}
          variant="secondary"
          className="flex-1 rounded-sm text-[10px] w-full text-xs flex-col items-start justify-start whitespace-normal p-2 px-3 shadow-md"
        >
          <div className="bg-background rounded-md shadow-sm">
            <Image src={item.icon} alt={item.title} width={32} height={32} />
          </div>

          <p>{item.title}</p>

          <span className="text-[10px] text-black/50 text-start -mt-1">
            {item.desc}
          </span>
        </Button>
      ))}
    </div>
  );
};

export default HeaderShowcaseButtons;
