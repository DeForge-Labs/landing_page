export default function ScrollingText() {
  return (
    <div className="relative w-full overflow-hidden bg-dark h-[3.4rem] mb-14">
      <div className="absolute top-0.5 left-0 w-max text-5xl font-bold uppercase text-background transform -translate-y-1/2 animate-scroll1">
        <span className="whitespace-nowrap">
          Deploy ✦ Deploy ✦ Deploy ✦ Deploy ✦ Deploy ✦ Deploy ✦ Deploy ✦ Deploy
          ✦ Deploy ✦ Deploy ✦ Deploy ✦ Deploy ✦ Deploy ✦ Deploy ✦ Deploy ✦{" "}
        </span>
        <span className="whitespace-nowrap">
          Deploy ✦ Deploy ✦ Deploy ✦ Deploy ✦ Deploy ✦ Deploy ✦ Deploy ✦ Deploy
          ✦ Deploy ✦ Deploy ✦ Deploy ✦ Deploy ✦ Deploy ✦ Deploy ✦ Deploy ✦{" "}
        </span>
      </div>
    </div>
  );
}
