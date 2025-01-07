import { QuoteLineType } from "~/types";

export default function QuoteLine({ quoteLine = {} as QuoteLineType }) {
  return (
    <div>
      <div>Quote Line Sort Order: {quoteLine.sortOrder}</div>
    </div>
  );
}
