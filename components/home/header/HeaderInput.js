"use client";

import { ArrowUpRight } from "lucide-react";

import { Button } from "../../ui/button";
import { Textarea } from "../../ui/textarea";

const HeaderInput = ({ placeholder }) => {
  return (
    <div className="relative w-full sm:w-xl xl:w-2xl sm:min-w-[360px]">
      <Textarea
        placeholder={placeholder}
        style={{ resize: "none", fontSize: "14px" }}
        className="w-full border border-black/50 rounded-lg h-28 p-2"
      />

      <Button
        onClick={() => {}}
        className="absolute bottom-2 right-2 rounded-full p-3 shadow-none! before:shadow-none!"
      >
        <ArrowUpRight />
      </Button>
    </div>
  );
};

export default HeaderInput;
