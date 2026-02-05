import Image from "next/image";

const HeaderTitle = ({ clockAnimate, shockAnimate }) => {
  return (
    <h1 className="text-2xl sm:text-5xl font-bold tracking-tighter max-w-3xl flex flex-col items-center">
      <span className="flex items-center">
        Build and{" "}
        <Image
          alt=""
          aria-hidden="true"
          width={60}
          height={60}
          src="/icons/shock.png"
          className="-mr-3 sm:-mr-1 -ml-2 sm:ml-0 scale-75 sm:scale-100 transition-transform duration-300"
          style={{
            transform: shockAnimate ? "translateY(-5px)" : "translateY(0)",
          }}
        />{" "}
        Deploy
      </span>

      <span className="flex items-center -mt-6 sm:-mt-1">
        AI Agents in{" "}
        <Image
          alt=""
          aria-hidden="true"
          width={60}
          height={60}
          src="/icons/stopwatch.png"
          className="-mr-3 sm:-mr-1 -ml-2 sm:ml-1 scale-75 sm:scale-100 transition-transform duration-300"
          style={{
            transform: clockAnimate ? "rotate(15deg)" : "rotate(0deg)",
          }}
        />
        minutes
      </span>
    </h1>
  );
};

export default HeaderTitle;
