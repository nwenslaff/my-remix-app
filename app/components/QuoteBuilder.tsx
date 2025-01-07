import { ChangeEvent, MouseEvent, useState } from "react";
import QuoteLineGroups from "./QuoteLineGroups";
import { QuoteLineGroupType } from "~/types";

export default function QuoteBuilder() {
  const [newGroupName, setNewGroupName] = useState("");
  const [quoteLineGroups, setQuoteLineGroups] = useState(
    [] as QuoteLineGroupType[]
  );

  const handleGroupNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewGroupName(event.target.value);
  };

  const handleAddGroup = (event: MouseEvent) => {
    setQuoteLineGroups([
      ...quoteLineGroups,
      {
        groupName: newGroupName,
        sortOrder: quoteLineGroups.length,
        quoteLines: [],
      },
    ]);
    setNewGroupName("");
  };

  return (
    <div>
      <QuoteLineGroups quoteLineGroups={quoteLineGroups} />

      <input
        onChange={handleGroupNameChange}
        placeholder="New Group Name"
        value={newGroupName}
      ></input>
      <button onClick={handleAddGroup} disabled={!newGroupName}>
        Add
      </button>
    </div>
  );
}
