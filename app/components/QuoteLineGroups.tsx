import { QuoteLineGroupType } from "~/types";
import QuoteLineGroup from "./QuoteLineGroup";

export default function QuoteLineGroups({
  quoteLineGroups = [] as QuoteLineGroupType[],
}) {
  return (
    <div>
      {quoteLineGroups.map((quoteLineGroup) => {
        return (
          <QuoteLineGroup
            key={quoteLineGroup.sortOrder}
            quoteLineGroup={quoteLineGroup}
          />
        );
      })}
    </div>
  );
}
