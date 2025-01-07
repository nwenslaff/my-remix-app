import { QuoteLineGroupType } from "~/types";
import QuoteLine from "./QuoteLine";

export default function QuoteLineGroup({
  quoteLineGroup = {} as QuoteLineGroupType,
}) {
  return (
    <div key={quoteLineGroup.sortOrder}>
      <div>Group Name: {quoteLineGroup.groupName}</div>
      <div>Group Order: {quoteLineGroup.sortOrder}</div>
      {quoteLineGroup.quoteLines.map((quoteLine) => {
        return <QuoteLine quoteLine={quoteLine} />;
      })}
    </div>
  );
}
