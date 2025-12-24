"use client";

import { ArrowUp } from "lucide-react";

import { Button } from "../../ui/button";
import { Textarea } from "../../ui/textarea";
import { useState } from "react";
import { useRouter } from "next/navigation";

const HeaderInput = ({ placeholder }) => {
  const [value, setValue] = useState("");
  const router = useRouter();

  return (
    <div className="relative w-full sm:w-xl xl:w-2xl sm:min-w-[360px]">
      <Textarea
        placeholder={placeholder}
        style={{ resize: "none", fontSize: "14px" }}
        className="w-full border border-black/50 rounded-lg h-28 p-2"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <Button
        disabled={!value}
        onClick={() =>
          router.push(`https://app.deforge.io/dashboard?prompt=${value}`)
        }
        className="absolute bottom-2 right-2 rounded-lg p-2 shadow-none! before:shadow-none!"
      >
        <ArrowUp />
      </Button>
    </div>
  );
};

export default HeaderInput;
