import Quote from "@/types/quote";
import { QuoteIcon } from "lucide-react";

export function Blockquote({ quote, author }: Quote) {
  return (
    <div className="flex flex-col gap-1 border-l-4 border-primary px-1 lg:px-2">
      <QuoteIcon className="size-4 text-primary" />
      <blockquote className="font-code font-light">{quote}</blockquote>
      <span className="text-muted-foreground">— {author}</span>
    </div>
  );
}
