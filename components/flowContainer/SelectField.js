"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SelectField({ field, currentValue }) {
  return (
    <div key={field.name} className="mb-2 relative">
      <div className="text-xs font-medium mb-1 capitalize ">{field.name}</div>
      <div className="flex items-center relative">
        <Select
          value={currentValue || field.value}
          onValueChange={(value) => {}}
        >
          <SelectTrigger className=" border border-black/50 rounded-sm">
            <SelectValue placeholder={field.value} className="text-[12px]" />
          </SelectTrigger>
          <SelectContent className="text-[12px] border border-black/50 rounded-sm bg-background">
            {field.options?.map((option) => (
              <SelectItem
                key={option}
                value={option}
                className="hover:bg-black/5 rounded-sm text-[12px]"
              >
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
